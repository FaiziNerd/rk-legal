import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, Star, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CaseReviewForm } from "@/components/forms/CaseReviewForm";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { RichText } from "@/components/blog/RichText";
import { type Block } from "@/lib/posts";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/contentful";
import { site } from "@/lib/site";
import { GoogleG } from "@/components/ui/GoogleG";

export const revalidate = 300;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.deck ?? post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.slug);
  const keepReading = related.slice(0, 2);
  const moreLinks = related.slice(2, 5);

  return (
    <>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          {/* Article */}
          <article>
            <nav className="t-small text-muted" aria-label="Breadcrumb">
              <Link href="/blog" className="text-brand">
                Blog
              </Link>{" "}
              / {post.category}
            </nav>
            <h1 className="t-display mt-4">{post.title}</h1>
            {post.deck && (
              <p className="t-body-l mt-5 text-body">{post.deck}</p>
            )}
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
              <span className="t-small-medium text-brand">{post.category}</span>
              <Divider />
              <span className="t-small">{post.date}</span>
              <Divider />
              <span className="t-small">{post.readTime}</span>
              <Divider />
              <span className="t-small">Written by our team</span>
            </div>

            <Image
              src={post.image}
              alt=""
              width={1612}
              height={990}
              priority
              className="mt-8 h-auto w-full rounded-card object-cover"
            />

            <div className="mt-10 max-w-2xl">
              {post.bodyRichText ? (
                <RichText document={post.bodyRichText} />
              ) : post.body ? (
                post.body.map((block, i) => <BlockView key={i} block={block} />)
              ) : (
                <>
                  <p className="t-body-l text-body">{post.excerpt}</p>
                  <BlockView
                    block={{
                      t: "cta",
                      title: "Have a question about your situation?",
                      text: "Tell us what happened and we'll call you back. The review is free, and you pay nothing unless we win.",
                    }}
                  />
                </>
              )}

              <p className="t-fine-print mt-10 border-t border-divider pt-6">
                This article is general information, not legal advice. Every
                situation is different. If you have questions about your own case,
                call us at{" "}
                <a href={site.phoneHref} className="text-brand">
                  {site.phone}
                </a>
                .
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-card bg-tint p-8">
              <h2 className="t-h3">Free case review</h2>
              <p className="t-body mt-3 text-body">
                Hurt in a crash? Tell us what happened and we&apos;ll call you
                back. No win, no fee. You pay nothing unless we win.
              </p>
              <Button href={site.phoneHref} className="mt-5 w-full">
                <Phone className="size-4" aria-hidden />
                Call {site.phone}
              </Button>
              <p className="t-small mt-5 text-muted">
                Or leave your number and we&apos;ll call you back. We speak{" "}
                {site.languages}.
              </p>
              <div className="mt-5">
                <CaseReviewForm compact />
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-3 rounded-btn border border-chip bg-white px-4 py-2.5">
              <GoogleG className="size-5" />
              <span className="t-rating text-ink">{site.rating.score}</span>
              <span className="flex gap-0.5 text-star">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden />
                ))}
              </span>
              <span className="t-small text-muted">
                {site.rating.count} Google reviews
              </span>
            </div>

            <figure className="mt-6 rounded-card bg-tint p-6">
              <div className="flex gap-0.5 text-star">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="t-body mt-3 text-body">
                “They explained everything clearly, stayed on top of
                communication, and made a stressful situation much easier to deal
                with.”
              </blockquote>
              <figcaption className="mt-3">
                <p className="t-small-medium text-ink">Chris S.</p>
                <p className="t-small text-muted">Google review</p>
              </figcaption>
            </figure>
          </aside>
        </div>
      </Section>

      {/* Keep reading */}
      <Section tone="surface" className="pt-0">
        <h2 className="t-h2">Keep reading</h2>
        <p className="t-body-l mt-3 text-body">
          More plain answers about injuries, lemon cars and workers&apos; comp in
          California.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr_0.9fr]">
          {keepReading.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col"
            >
              <Image
                src={p.image}
                alt=""
                width={847}
                height={490}
                className="h-auto w-full rounded-card object-cover"
              />
              <span className="t-category mt-5 text-brand">{p.category}</span>
              <h3 className="t-card-title mt-2 group-hover:text-brand">
                {p.title}
              </h3>
              <p className="t-small mt-4 text-muted">
                {p.date} &nbsp;·&nbsp; {p.readTime}
              </p>
            </Link>
          ))}

          <div className="h-fit rounded-card bg-tint p-8">
            <h3 className="t-question">More from the blog</h3>
            <ul className="mt-4 space-y-4">
              {moreLinks.map((p) => (
                <li key={p.slug}>
                  <span className="t-category text-muted">{p.category}</span>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="t-small-medium mt-1 block text-brand hover:underline"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href="/blog" variant="secondary" className="mt-6">
              See all posts
            </Button>
          </div>
        </div>
      </Section>

      {/* Newsletter */}
      <Section>
        <NewsletterBand />
      </Section>
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "h2":
      return <h2 className="t-h3 mt-10">{block.text}</h2>;
    case "p":
      return <p className="t-body-l mt-5 text-body">{block.text}</p>;
    case "ol":
      return (
        <ol className="mt-5 space-y-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="t-body-l font-semibold text-brand">{i + 1}.</span>
              <p className="t-body-l text-body">
                {item.lead && (
                  <span className="font-semibold text-ink">{item.lead} </span>
                )}
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand"
                aria-hidden
              />
              <p className="t-body-l text-body">{item}</p>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="mt-8 rounded-card bg-tint p-6">
          <h3 className="t-question">{block.title}</h3>
          <p className="t-body mt-2 text-body">{block.text}</p>
          <Button href={site.phoneHref} variant="secondary" className="mt-4">
            <Phone className="size-4" aria-hidden />
            Call {site.phone}
          </Button>
        </div>
      );
    case "cta":
      return (
        <div className="mt-8 rounded-card bg-tint p-6">
          <h3 className="t-question">{block.title}</h3>
          <p className="t-body mt-2 text-body">{block.text}</p>
          <Button href="/contact" className="mt-4">
            Request my free review
          </Button>
        </div>
      );
  }
}

function Divider() {
  return <span className="text-divider" aria-hidden>|</span>;
}