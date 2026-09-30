"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

type Review = {
  name: string;
  when: string;
  quote: string;
  tag?: string;
};

// Mirrors the Google reviews shown in the design. Could later be pulled live.
const reviews: Review[] = [
  {
    name: "Giovanni J.",
    when: "a year ago",
    quote:
      "Many other lawyers rejected my case, but they didn't. On the contrary, they accepted it and fought strategically for me. They resolved my car accident case without me having to lift a finger and secured me a very good compensation.",
    tag: "Car accident",
  },
  {
    name: "Connor H.",
    when: "a year ago",
    quote:
      "The team took the time to explain every step of the process in plain language, so we always felt informed and confident about what was happening. They made a very difficult time much easier for our family.",
  },
  {
    name: "Ani S.",
    when: "5 months ago",
    quote:
      "Their team was professional, responsive, and kept me informed throughout the entire process. What really stood out was how much they genuinely cared and made a stressful situation feel manageable.",
  },
  {
    name: "Raul H.",
    when: "3 years ago",
    quote:
      "Their team was responsive … I ended up with great treatment and a more than fair settlement. Thank you.",
    tag: "Personal injury",
  },
];

export function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="t-h2">What our clients say on Google</h2>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <GoogleG className="size-8" />
          <span className="t-phone-l text-ink">{site.rating.score}</span>
          <span className="flex gap-0.5 text-star">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" aria-hidden />
            ))}
          </span>
          <span className="t-small text-muted">
            Based on {site.rating.count} Google reviews
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.google.com/search?q=Romero+Kucerkova+Law+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="t-link font-medium text-brand underline"
          >
            Read all reviews on Google
          </a>
          <div className="flex gap-2">
            <CarouselButton label="Previous reviews" onClick={() => scrollBy(-1)}>
              <ChevronLeft className="size-5" />
            </CarouselButton>
            <CarouselButton label="More reviews" onClick={() => scrollBy(1)}>
              <ChevronRight className="size-5" />
            </CarouselButton>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-8 flex snap-x gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r) => (
          <article
            key={r.name}
            className="w-80 shrink-0 snap-start rounded-card bg-tint p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand text-white t-small-medium">
                {r.name.charAt(0)}
              </span>
              <div>
                <p className="t-small-medium text-ink">{r.name}</p>
                <p className="t-small text-muted">{r.when}</p>
              </div>
              <GoogleG className="ml-auto size-5" />
            </div>
            <div className="mt-3 flex gap-0.5 text-star">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" aria-hidden />
              ))}
            </div>
            <p className="t-body mt-3 text-body">{r.quote}</p>
            {r.tag && (
              <span className="t-category mt-4 inline-block rounded-btn border border-chip px-3 py-1 text-muted">
                {r.tag}
              </span>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "flex size-11 items-center justify-center rounded-full border border-chip text-ink transition-colors hover:border-ink",
      )}
    >
      {children}
    </button>
  );
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}
