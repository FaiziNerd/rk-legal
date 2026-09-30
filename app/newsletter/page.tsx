import type { Metadata } from "next";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { FinalCta } from "@/components/sections/FinalCta";
import { site } from "@/lib/site";
import { GoogleG } from "@/components/ui/GoogleG";

export const metadata: Metadata = {
  title: "Newsletter — Plain-Language Updates on Your Rights",
  description:
    "Short, plain-language emails from Romero Kucerkova Law about your rights after a crash, a car that won't stay fixed, or an injury at work. Unsubscribe any time.",
};

// Sample archive mirroring the design. Replace with the firm's real issues
// (or wire to Contentful) when the archive is available.
const issues = [
  {
    month: "September 2026",
    posts: [
      {
        date: "Sep 17, 2026",
        title: "What to say when the other driver's insurer calls",
        blurb:
          "You don't have to give a recorded statement. What to write down first.",
      },
      {
        date: "Sep 3, 2026",
        title: "Your car is back in the shop again. Now what?",
        blurb:
          "How to keep your repair orders so every visit counts toward a California lemon law claim.",
      },
    ],
  },
  {
    month: "August 2026",
    posts: [
      {
        date: "Aug 20, 2026",
        title: "Your workers' comp claim was denied. Here's what that letter means",
        blurb:
          "A denial isn't the final word. How to read the letter and the steps to challenge it.",
      },
      {
        date: "Aug 6, 2026",
        title: "Hurt in an Uber or Lyft: whose insurance pays?",
        blurb:
          "Coverage depends on what the driver's app was doing at the time of the crash.",
      },
    ],
  },
  {
    month: "July 2026",
    posts: [
      {
        date: "Jul 23, 2026",
        title: "Who pays the lawyer in a lemon law case",
        blurb:
          "Under Civil Code 1794(d), the manufacturer pays a winning buyer's attorney fees.",
      },
      {
        date: "Jul 9, 2026",
        title: "Heat illness at work can be a workplace injury",
        blurb: "Working outside in High Desert heat? What to report, and when.",
      },
    ],
  },
  {
    month: "June 2026",
    posts: [
      {
        date: "Jun 25, 2026",
        title: "The first hour after a crash",
        blurb:
          "Photos, witness names, a police report and a doctor visit. A glovebox checklist.",
      },
      {
        date: "Jun 11, 2026",
        title: "Dog bites in California: the basics",
        blurb:
          "Why dog bite cases work differently here, and what to do first if you or your child was bitten.",
      },
    ],
  },
];

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface">
        <Container className="grid items-start gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="t-display">Newsletter</h1>
            <p className="t-body-l mt-5 max-w-xl text-body">
              Short, plain-language emails from our Victorville office about your
              rights after a crash, a car that won&apos;t stay fixed, or an injury
              at work.
            </p>

            <div className="mt-8 rounded-card bg-tint p-8">
              <h2 className="t-h3">Get the next issue by email</h2>
              <p className="t-body mt-3 text-body">
                Each issue answers one real question about injury, lemon law or
                workers&apos; comp, plus one practical tip.
              </p>
              <div className="mt-6">
                <NewsletterForm />
              </div>
              <p className="t-fine-print mt-3">
                Unsubscribe any time. The newsletter is general information, not
                legal advice.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <p className="t-body max-w-sm text-body">
                Hurt or stuck with a lemon right now? You don&apos;t need to wait
                for the next issue. No win, no fee.
              </p>
              <Button href="/contact" variant="secondary">
                Free case review
              </Button>
            </div>
          </div>

          {/* Extracted from the design PNG — swap for the client's original when available */}
          <div className="relative">
            <Image
              src="/images/newsletter-mailbox.jpg"
              alt="A mailbox outside a Spanish-style High Desert home"
              width={1350}
              height={965}
              priority
              className="h-auto w-full rounded-card object-cover"
            />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-3 rounded-btn bg-white px-4 py-2.5 shadow-sm">
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
        </Container>
      </section>

      {/* Past issues */}
      <Section>
        <h2 className="t-h2">Past issues</h2>
        <p className="t-body-l mt-3 text-body">
          Every issue we&apos;ve sent, newest first. You can read any of them
          without signing up.
        </p>
        <div className="mt-10 border-t border-divider">
          {issues.map((group) => (
            <div
              key={group.month}
              className="grid gap-x-10 gap-y-2 border-b border-divider py-8 md:grid-cols-[12rem_1fr]"
            >
              <h3 className="t-h3">{group.month}</h3>
              <ul className="divide-y divide-divider">
                {group.posts.map((post) => (
                  <li
                    key={post.title}
                    className="grid gap-x-8 gap-y-1 py-5 first:pt-0 last:pb-0 sm:grid-cols-[7rem_1fr_auto] sm:items-start"
                  >
                    <span className="t-small text-muted">{post.date}</span>
                    <div>
                      <h4 className="t-question">{post.title}</h4>
                      <p className="t-body mt-1 text-body">{post.blurb}</p>
                    </div>
                    {/* TODO: link to the real issue when the archive is wired up */}
                    <a
                      href="#"
                      className="t-link inline-flex items-center gap-1.5 font-medium text-brand sm:justify-self-end"
                    >
                      Read issue
                      <ArrowRight className="size-4" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <FinalCta />
      </Section>
    </>
  );
}