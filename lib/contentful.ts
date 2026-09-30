/**
 * Contentful integration for the blog.
 *
 * These async data functions are what the blog pages call. When Contentful is
 * configured (CONTENTFUL_SPACE_ID + CONTENTFUL_DELIVERY_TOKEN present) they
 * return live entries mapped to the shared `Post` shape; otherwise they fall
 * back to the sample data in `lib/posts.ts`, so the site always renders.
 *
 * Expected content model — content type id `blogPost` with fields:
 *   title (Short text), slug (Short text, unique), category (Short text),
 *   excerpt (Long text), deck (Long text, optional), publishDate (Date),
 *   readTime (Short text, optional), heroImage (Media – one asset),
 *   body (Rich text), featured (Boolean, optional),
 *   seoDescription (Long text, optional)
 */

import {
  createClient,
  type EntryFieldTypes,
  type EntrySkeletonType,
} from "contentful";
import type { Document } from "@contentful/rich-text-types";
import {
  categories,
  posts as samplePosts,
  type Category,
  type Post,
} from "./posts";

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_DELIVERY_TOKEN;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";

export function isContentfulConfigured(): boolean {
  return Boolean(SPACE && TOKEN);
}

let cachedClient: ReturnType<typeof createClient> | null = null;
function getClient() {
  if (!cachedClient) {
    cachedClient = createClient({
      space: SPACE!,
      accessToken: TOKEN!,
      environment: ENVIRONMENT,
    });
  }
  return cachedClient;
}

/** The shape mapEntry reads (the resolved/linked field values). */
type BlogPostFields = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  deck?: string;
  publishDate: string;
  readTime?: string;
  heroImage?: {
    fields?: { file?: { url?: string }; description?: string; title?: string };
  };
  body?: Document;
  featured?: boolean;
  seoDescription?: string;
};

/** The Contentful content-type skeleton, for typed queries. */
type BlogPostSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    category: EntryFieldTypes.Symbol;
    excerpt: EntryFieldTypes.Text;
    deck: EntryFieldTypes.Text;
    publishDate: EntryFieldTypes.Date;
    readTime: EntryFieldTypes.Symbol;
    heroImage: EntryFieldTypes.AssetLink;
    body: EntryFieldTypes.RichText;
    featured: EntryFieldTypes.Boolean;
    seoDescription: EntryFieldTypes.Text;
  },
  "blogPost"
>;

const dateFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

function formatDate(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? iso : dateFmt.format(d);
}

/** Rough reading time from a rich-text document (~200 wpm). */
function estimateReadTime(doc?: Document): string {
  if (!doc) return "3 min read";
  let words = 0;
  const walk = (node: unknown) => {
    if (!node || typeof node !== "object") return;
    const n = node as { nodeType?: string; value?: string; content?: unknown[] };
    if (n.nodeType === "text" && typeof n.value === "string") {
      words += n.value.trim().split(/\s+/).filter(Boolean).length;
    }
    if (Array.isArray(n.content)) n.content.forEach(walk);
  };
  walk(doc);
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function normalizeCategory(value: string): Category {
  const match = categories.find(
    (c) => c.toLowerCase() === value?.toLowerCase(),
  );
  return match ?? "Firm news";
}

function imageUrl(hero: BlogPostFields["heroImage"]): string {
  const url = hero?.fields?.file?.url;
  if (!url) return "/images/blog-24-hours.jpg"; // safe placeholder
  return url.startsWith("//") ? `https:${url}` : url;
}

function mapEntry(fields: BlogPostFields): Post {
  return {
    slug: fields.slug,
    category: normalizeCategory(fields.category),
    title: fields.title,
    excerpt: fields.excerpt ?? "",
    deck: fields.deck,
    date: formatDate(fields.publishDate),
    readTime: fields.readTime?.trim() || estimateReadTime(fields.body),
    image: imageUrl(fields.heroImage),
    featured: Boolean(fields.featured),
    bodyRichText: fields.body,
  };
}

/** All posts, newest first. Falls back to sample data on any failure. */
export async function getAllPosts(): Promise<Post[]> {
  if (!isContentfulConfigured()) return samplePosts;
  try {
    const res = await getClient().getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      order: ["-fields.publishDate"],
      limit: 200,
    });
    const mapped = res.items
      .map((item) => mapEntry(item.fields as unknown as BlogPostFields))
      .filter((p) => p.slug && p.title);
    return mapped.length ? mapped : samplePosts;
  } catch (err) {
    console.error("[contentful] getAllPosts failed, using sample data:", err);
    return samplePosts;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  if (!isContentfulConfigured()) {
    return samplePosts.find((p) => p.slug === slug);
  }
  try {
    const res = await getClient().getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
    });
    const item = res.items[0];
    return item
      ? mapEntry(item.fields as unknown as BlogPostFields)
      : samplePosts.find((p) => p.slug === slug);
  } catch (err) {
    console.error("[contentful] getPostBySlug failed, using sample data:", err);
    return samplePosts.find((p) => p.slug === slug);
  }
}

/** Other posts to show under an article, newest first, excluding the current one. */
export async function getRelatedPosts(slug: string, limit = 5): Promise<Post[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.slug !== slug).slice(0, limit);
}
