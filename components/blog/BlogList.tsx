"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories, type Post } from "@/lib/posts";

const filters = ["All posts", ...categories] as const;

export function BlogList({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All posts");

  const featured = posts.find((p) => p.featured);
  const showFeatured = active === "All posts" && featured;

  const grid = posts.filter((p) => {
    if (active !== "All posts" && p.category !== active) return false;
    if (showFeatured && p.slug === featured.slug) return false;
    return true;
  });

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2.5">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={cn(
              "t-button rounded-btn border px-4 py-2.5 transition-colors",
              active === f
                ? "border-brand bg-brand text-white"
                : "border-chip bg-white text-ink hover:border-ink",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Featured post */}
      {showFeatured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mt-10 grid overflow-hidden rounded-card bg-tint lg:grid-cols-2"
        >
          <Image
            src={featured.image}
            alt=""
            width={1612}
            height={990}
            className="h-full w-full object-cover"
          />
          <div className="flex flex-col justify-center p-8 md:p-10">
            <span className="t-category text-brand">{featured.category}</span>
            <h2 className="t-h2 mt-3 group-hover:text-brand">{featured.title}</h2>
            <p className="t-body-l mt-4 text-body">{featured.excerpt}</p>
            <p className="t-small mt-5 text-muted">
              {featured.date} &nbsp;·&nbsp; {featured.readTime}
            </p>
            <span className="t-link mt-5 inline-flex items-center gap-1.5 font-medium text-brand">
              Read the checklist
              <ArrowRight className="size-4" aria-hidden />
            </span>
          </div>
        </Link>
      )}

      {/* Latest posts */}
      <h2 className="t-h2 mt-16">
        {active === "All posts" ? "Latest posts" : active}
      </h2>
      {grid.length === 0 ? (
        <p className="t-body mt-6 text-body">No posts in this category yet.</p>
      ) : (
        <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col"
            >
              <Image
                src={post.image}
                alt=""
                width={847}
                height={490}
                className="h-auto w-full rounded-card object-cover"
              />
              <span className="t-category mt-5 text-brand">{post.category}</span>
              <h3 className="t-card-title mt-2 group-hover:text-brand">
                {post.title}
              </h3>
              <p className="t-body mt-2 text-body">{post.excerpt}</p>
              <p className="t-small mt-4 text-muted">
                {post.date} &nbsp;·&nbsp; {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
