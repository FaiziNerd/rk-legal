import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { FinalCta } from "@/components/sections/FinalCta";
import { BlogList } from "@/components/blog/BlogList";
import { getAllPosts } from "@/lib/contentful";
import { site } from "@/lib/site";

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

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}
