import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { FinalCta } from "@/components/sections/FinalCta";
import { BlogList } from "@/components/blog/BlogList";
import { getAllPosts } from "@/lib/contentful";
import { site } from "@/lib/site";
import { GoogleG } from "@/components/ui/GoogleG";

export const metadata: Metadata = {
  title: "Blog — Plain Answers on Injury, Lemon Law & Workers' Comp",
  description:
    "Plain answers about injuries, lemon cars and workers' comp in California, written by the team at Romero Kucerkova Law in Victorville.",
};

// Rebuild the cached list on this interval once Contentful is wired.
export const revalidate = 300;

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  return (
    <>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            <h1 className="t-display">Blog</h1>
            <p className="t-body-l mt-5 max-w-xl text-body">
              Plain answers about injuries, lemon cars and workers&apos; comp in
              California. Written by our team in Victorville for people who want to
              know where they stand.
            </p>
          </div>
          <div className="h-fit rounded-card bg-tint p-8">
            <h2 className="t-h3">Reading because something happened?</h2>
            <p className="t-body mt-3 text-body">
              Tell us about it. The review is free, and you pay nothing unless we
              win.
            </p>
            <Button href="/contact" variant="secondary" className="mt-6">
              Start your free review
            </Button>
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
          </div>
        </div>

        <div className="mt-12">
          <BlogList posts={posts} />
        </div>
      </Section>

      <Section tone="surface" className="pt-0">
        <NewsletterBand />
      </Section>

      <Section>
        <FinalCta />
      </Section>
    </>
  );
}