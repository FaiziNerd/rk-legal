import Link from "next/link";
import { Star, Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CaseReviewForm } from "@/components/forms/CaseReviewForm";
import { Reviews } from "@/components/sections/Reviews";
import { Faq, type FaqItem } from "@/components/sections/Faq";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { FinalCta } from "@/components/sections/FinalCta";
import { site, practiceAreas } from "@/lib/site";

const trustPoints = [
  `${site.rating.score} on Google from ${site.rating.count} reviews`,
  "No fee unless we win",
  "Free case review",
  "English and Armenian",
];

const steps = [
  {
    n: "1",
    title: "Tell us what happened",
    body: "Call us, or answer a few quick questions in the form. You don't need any paperwork.",
  },
  {
    n: "2",
    title: "We review it for free",
    body: "We look at the details and tell you plainly if you have a case. No cost, no pressure to sign.",
  },
  {
    n: "3",
    title: "We handle the rest",
    body: "If we take your case, we deal with the insurance company or the manufacturer and keep you updated.",
  },
];

const lemonOutcomes = [
  { title: "A refund", body: "The manufacturer buys the car back." },
  { title: "A replacement", body: "You get a new car of the same kind." },
  { title: "A cash settlement", body: "You keep the car and are paid for the trouble." },
];

const informedPoints = [
  {
    title: "A local office in Victorville",
    body: `Meet us in person at ${site.address.line1}.`,
  },
  {
    title: "We speak English and Armenian",
    body: "Our staff can walk you and your family through every step in the language you prefer.",
  },
  {
    title: "Free review, no fee unless we win",
    body: "Asking about your case costs nothing. On injury cases, you pay no attorney fees unless we win.",
  },
  {
    title: "We call you back",
    body: "Leave a message or send the form, and someone from our team will call you back.",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "How much does it cost to talk to you about my case?",
    a: "Nothing. The case review is free, and there's no pressure to sign anything. We'll tell you plainly whether we think we can help.",
  },
  {
    q: "Do I pay anything if we lose?",
    a: "On personal injury cases you pay no attorney fees unless we win. You may still be responsible for certain costs — we'll explain everything up front.",
  },
  {
    q: "How do I know if I have a case?",
    a: "The easiest way is to ask. Tell us what happened and we'll review the details for free and let you know honestly.",
  },
  {
    q: "Is there a deadline to file?",
    a: "Yes — legal claims have deadlines, and they can be shorter than you think. It's best to call as soon as you can so you don't lose your rights.",
  },
  {
    q: "Can I talk to someone in Armenian?",
    a: "Yes. Our staff speaks English and Armenian and can guide you and your family through every step.",
  },
];

// Featured posts mirror the design; the Home preview will read from Contentful in Phase 3.
const featuredPosts = [
  {
    category: "Personal injury",
    title: "What to do in the first 24 hours after a car accident in California",
    date: "September 18, 2026",
    read: "7 min read",
    href: "/blog",
  },
  {
    category: "Lemon law",
    title: "Is my car a lemon? The 30-day rule explained",
    date: "September 15, 2026",
    read: "6 min read",
    href: "/blog",
  },
  {
    category: "Workers' comp",
    title: "Workers' comp claim denied? Here is what happens next",
    date: "September 9, 2026",
    read: "5 min read",
    href: "/blog",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-tint">
        <Container className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="t-display max-w-xl">
              Personal injury &amp; lemon law firm in Southern California
            </h1>
            <p className="t-body-l mt-5 max-w-lg text-body">
              Hurt in an accident or stuck with a lemon car? You pay nothing
              unless we win.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-btn border border-chip bg-white px-4 py-2.5">
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
          {/* TODO: replace with the client's hero photograph */}
          <div
            className="aspect-[4/3] w-full rounded-card bg-gradient-to-br from-[#e9efe6] via-[#f3f6f1] to-[#dfe8df]"
            role="img"
            aria-label="Romero Kucerkova Law office"
          />
        </Container>
      </section>

      {/* Trust bar */}
      <div className="border-b border-divider">
        <Container className="grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-2.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <Check className="size-4" aria-hidden />
              </span>
              <span className="t-small text-body">{point}</span>
            </div>
          ))}
        </Container>
      </div>

      {/* Case review */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Talk it through card */}
          <div className="h-fit rounded-card bg-tint p-8">
            <h2 className="t-h3">Rather talk it through?</h2>
            <p className="t-body mt-3 text-body">
              Call us and tell us what happened. It&apos;s free, and there&apos;s
              no pressure to sign anything.
            </p>
            <a
              href={site.phoneHref}
              className="t-phone-l mt-6 block text-brand"
            >
              {site.phone}
            </a>
            <a href={site.emailHref} className="t-body mt-1 block text-body">
              {site.email}
            </a>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="t-category text-muted uppercase">Office</dt>
                <dd className="t-body mt-1 text-body">
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </dd>
              </div>
              <div>
                <dt className="t-category text-muted uppercase">We speak</dt>
                <dd className="t-body mt-1 text-body">{site.languages}</dd>
              </div>
            </dl>
            <blockquote className="mt-6 border-t border-divider pt-6">
              <p className="t-body-italic text-body">
                “They have Armenian speakers who were able to communicate with my
                mother-in-law and guide us every step of the way when the
                insurance companies were taking advantage of us.”
              </p>
              <footer className="t-small mt-3 text-muted">
                John M., client review
              </footer>
            </blockquote>
          </div>

          {/* Form */}
          <div>
            <h2 className="t-h2-form">Free case review</h2>
            <p className="t-body-l mt-3 text-body">
              Unsure if you have a case? Answer a few quick questions and
              we&apos;ll call you back.
            </p>
            <div className="mt-8">
              <CaseReviewForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Practice areas */}
      <Section tone="tint">
        <h2 className="t-h2">Get help with your injury or lemon car</h2>
        <p className="t-body-l mt-3 max-w-2xl text-body">
          Injury, lemon law and workers&apos; comp cases, from our office in
          Victorville. Asking is free.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {practiceAreas.map((area) => (
            <div
              key={area.href}
              className="flex flex-col rounded-card bg-white p-7"
            >
              <h3 className="t-card-title">{area.label}</h3>
              <p className="t-body mt-3 flex-1 text-body">{area.blurb}</p>
              <Link
                href={area.href}
                className="t-link mt-5 inline-flex items-center gap-1.5 font-medium text-brand"
              >
                {area.cta}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Three steps */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="t-h2">Getting help takes three steps</h2>
            <p className="t-body-l mt-3 text-body">
              It starts with a phone call or a short form, and it costs nothing.
            </p>
          </div>
          <Button href="/contact" variant="secondary">
            Start your free review
          </Button>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n} className="border-t border-divider pt-6">
              <div className="t-h2 text-brand">{step.n}</div>
              <h3 className="t-question mt-3">{step.title}</h3>
              <p className="t-body mt-2 text-body">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Lemon law value */}
      <Section>
        <div className="grid items-start gap-10 rounded-card bg-tint p-8 md:p-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="t-h2">Win your lemon law case, and the manufacturer pays our fees</h2>
            <p className="t-body mt-5 text-body">
              Under California Civil Code section 1794(d), if you win, the
              manufacturer is generally required to pay your attorney fees. You get
              help without paying us out of pocket.
            </p>
            <p className="t-body mt-4 text-body">
              Your car may qualify if it went back to the shop again and again for
              the same problem while under warranty.
            </p>
            <Button href="/lemon-law" variant="secondary" className="mt-6">
              See if your car qualifies
            </Button>
          </div>
          <div className="rounded-card bg-white p-8">
            <h3 className="t-question">What a lemon law case can get you</h3>
            <dl className="mt-4 divide-y divide-divider">
              {lemonOutcomes.map((o) => (
                <div key={o.title} className="py-4 first:pt-0 last:pb-0">
                  <dt className="t-small-medium text-ink">{o.title}</dt>
                  <dd className="t-body mt-1 text-body">{o.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Keeps you informed */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <h2 className="t-h2">A local firm that keeps you informed</h2>
            <p className="t-body-l mt-4 text-body">
              Here&apos;s what you can count on from the first call.
            </p>
            <a href={site.phoneHref} className="t-body mt-6 block font-semibold text-brand">
              Call {site.phone}
            </a>
            <p className="t-small mt-1 text-muted">
              Or send the form and we&apos;ll call you back.
            </p>
          </div>
          <dl className="divide-y divide-divider border-t border-divider">
            {informedPoints.map((point) => (
              <div key={point.title} className="grid gap-2 py-6 sm:grid-cols-2 sm:gap-8">
                <dt className="t-question">{point.title}</dt>
                <dd className="t-body text-body">{point.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Reviews */}
      <Section tone="tint">
        <Reviews />
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <h2 className="t-h2">Common questions</h2>
            <p className="t-body-l mt-4 text-body">
              Don&apos;t see yours? Call us at{" "}
              <a href={site.phoneHref} className="font-semibold text-brand">
                {site.phone}
              </a>{" "}
              and ask. There&apos;s no charge.
            </p>
          </div>
          <Faq items={faqItems} />
        </div>
      </Section>

      {/* From the blog */}
      <Section tone="tint">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="t-h2">From the blog</h2>
            <p className="t-body-l mt-3 text-body">
              Plain answers to the questions we hear most, written by our team.
            </p>
          </div>
          <Link href="/blog" className="t-link font-medium text-brand underline">
            See all posts
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group flex flex-col overflow-hidden rounded-card bg-white"
            >
              {/* TODO: replace with the post's hero image from Contentful */}
              <div className="aspect-[16/10] bg-gradient-to-br from-[#e9efe6] to-[#dfe8df]" />
              <div className="flex flex-1 flex-col p-6">
                <span className="t-category text-brand">{post.category}</span>
                <h3 className="t-card-title mt-2 group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="t-small mt-auto pt-4 text-muted">
                  {post.date} &nbsp;·&nbsp; {post.read}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section>
        <NewsletterBand />
      </Section>

      {/* Referral line */}
      <div className="border-t border-divider">
        <Container className="flex flex-wrap items-center gap-x-2 gap-y-1 py-6">
          <p className="t-body text-body">
            Need help with something else? We can point you to firms we trust for
            cases outside injury, lemon law and workers&apos; comp.
          </p>
          <Link href="/referral-partners" className="t-body font-medium text-brand">
            See our referral partners
          </Link>
        </Container>
      </div>

      {/* Final CTA */}
      <Section>
        <FinalCta />
      </Section>
    </>
  );
}
