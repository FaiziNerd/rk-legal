import type { Metadata } from "next";
import { Star, Check, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CaseReviewForm } from "@/components/forms/CaseReviewForm";
import { Faq, type FaqItem } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "California Lemon Law Help — Refund, Replacement or Cash",
  description:
    "Car keeps breaking under warranty? Under California's lemon law, if you win the manufacturer pays our fees — so you pay nothing. Get a refund, a replacement, or cash. Free case review.",
};

// "Is your car a lemon?" qualifying signs.
const lemonSigns = [
  {
    title: "Still under the manufacturer's warranty",
    body: "The problems started while the factory warranty covered the car. New, used, and leased cars can all count.",
  },
  {
    title: "The same problem keeps coming back",
    body: "The dealer has tried to fix the same issue more than once, and it still isn't right.",
  },
  {
    title: "A safety defect",
    body: "Brakes, steering, airbags, stalling, or anything else that makes the car unsafe to drive.",
  },
  {
    title: "30 or more days in the shop",
    body: "Add up every repair visit. The days don't have to be in a row.",
  },
];

// What you can get — three possible outcomes.
const outcomes = [
  {
    title: "A refund",
    tag: "Also called a buyback",
    body: "The manufacturer buys the car back. You get back what you paid, including your down payment and monthly payments, and your loan or lease is paid off. A small amount may be taken off for the miles you drove before the first repair.",
  },
  {
    title: "A replacement",
    tag: "A new car of the same kind",
    body: "The manufacturer gives you a new vehicle that is substantially the same as yours, and covers related costs such as sales tax and registration fees.",
  },
  {
    title: "Cash, and keep the car",
    tag: "Often called cash and keep",
    body: "If you would rather keep driving it, the manufacturer may pay you money for the trouble and the value the car has lost. The car stays yours.",
  },
];

const noCostPoints = [
  "Nothing to pay upfront",
  "No hourly bills",
  "No fee unless we win",
];

const steps = [
  {
    n: "1",
    title: "Tell us about your car",
    body: "Call, or answer a few quick questions in the form. Have your repair orders handy if you can.",
  },
  {
    n: "2",
    title: "We review it free",
    body: "We look at your repair history and warranty, then tell you plainly whether you have a case. No cost, no pressure.",
  },
  {
    n: "3",
    title: "We handle the manufacturer",
    body: "We deal with the manufacturer and its lawyers for you. If you win, the manufacturer pays our fees.",
  },
];

const makes = [
  "Tesla",
  "Ford",
  "GM",
  "Toyota",
  "Mercedes-Benz",
  "Jeep",
  "Hyundai",
  "Kia",
  "Nissan",
  "BMW",
];

const clientReviews = [
  {
    quote:
      "They explained everything clearly, stayed on top of communication, and made a stressful situation much easier to deal with.",
    name: "Chris S.",
    note: "Google review",
  },
  {
    quote:
      "Everything was clearly explained and they kept me informed throughout the entire process, which gave me peace of mind and confidence proceeding forward.",
    name: "Katie S.",
    note: "Google review",
  },
  {
    quote:
      "Everyone on their team is knowledgeable and supportive through the entire process.",
    name: "Aaron N.",
    note: "Google review",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "How much does a lemon law case cost me?",
    a: "Nothing out of your pocket. Under California Civil Code section 1794(d), if you win, the manufacturer pays your attorney fees and costs.",
  },
  {
    q: "Does my used car qualify?",
    a: "Often, yes. What matters is whether the problems started while the car was under the manufacturer's warranty. Used and certified pre-owned cars with warranty coverage can qualify.",
  },
  {
    q: "My car is leased. Can I still make a claim?",
    a: "Yes. Leased vehicles are covered by California's lemon law the same way purchased cars are, as long as the problems began under warranty.",
  },
  {
    q: "Should I keep making my car payments?",
    a: "Yes. Keep making your payments and keep the car insured while your claim is open. Stopping can hurt your credit and your case. We'll tell you if anything changes.",
  },
  {
    q: "What paperwork should I have?",
    a: "Your repair orders and invoices, the purchase or lease contract, and the warranty booklet are the most useful. If you can't find them all, bring what you have — we can request the rest.",
  },
  {
    q: "Is there a deadline to file?",
    a: "Yes, and it can be shorter than you think. It's best to call as soon as you notice a pattern of repairs so you don't lose your rights.",
  },
];

export default function LemonLawPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-tint">
        {/* TODO: replace with the client's hero photograph (car + lemon tree) */}
        <div
          className="absolute inset-0 bg-gradient-to-bl from-[#f6f0d8] via-[#f3f6f1] to-[#dfe8df]"
          aria-hidden
        />
        <Container className="relative py-16 md:py-24 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="t-display">California lemon law help</h1>
            <p className="t-body-l mt-5 max-w-xl text-body">
              If you win, the manufacturer pays our fees, so you pay nothing. Get
              a refund, a replacement, or cash for a car that keeps breaking.
            </p>
            <div className="mt-7 inline-flex items-center gap-3 rounded-btn border border-chip bg-white px-4 py-2.5">
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

      {/* Case review — contact card + lemon-law form */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="h-fit rounded-card bg-tint p-8">
            <h2 className="t-h3">Rather talk it through?</h2>
            <p className="t-body mt-3 text-body">
              Call us and tell us what happened. It&apos;s free, and there&apos;s
              no pressure to sign anything.
            </p>
            <a href={site.phoneHref} className="t-phone-l mt-6 block text-brand">
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

          <div>
            <h2 className="t-h2-form">Free case review</h2>
            <p className="t-body-l mt-3 text-body">
              Unsure if you have a case? Answer a few quick questions and
              we&apos;ll call you back.
            </p>
            <div className="mt-8">
              <CaseReviewForm
                defaultWhatHappened="Lemon car"
                showCarType
                whenLabel="When did the problems start?"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Is your car a lemon? */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            {/* TODO: replace with the client's photo (car in the shop) */}
            <div
              className="aspect-[4/3] w-full rounded-card bg-gradient-to-br from-[#e9efe6] via-[#f3f6f1] to-[#dfe8df]"
              role="img"
              aria-label="A car being repaired in a shop"
            />
            <p className="t-fine-print mt-2">
              Photo: Shixart1985, Wikimedia Commons, CC BY 2.0
            </p>
          </div>
          <div>
            <h2 className="t-h2">Is your car a lemon?</h2>
            <p className="t-body-l mt-4 text-body">
              Your car may qualify if the problems started under the
              manufacturer&apos;s warranty and any of these sound familiar.
            </p>
            <dl className="mt-8 divide-y divide-divider border-t border-divider">
              {lemonSigns.map((sign) => (
                <div key={sign.title} className="flex gap-4 py-5">
                  <CheckCircle2
                    className="mt-0.5 size-6 shrink-0 text-brand"
                    aria-hidden
                  />
                  <div>
                    <dt className="t-question">{sign.title}</dt>
                    <dd className="t-body mt-1 text-body">{sign.body}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="t-body text-body">Not sure? Ask us, it&apos;s free.</span>
              <Button href="/contact" variant="secondary">
                Start your free review
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* What you can get */}
      <Section tone="tint">
        <h2 className="t-h2">What you can get</h2>
        <p className="t-body-l mt-3 max-w-2xl text-body">
          California&apos;s lemon law gives you three possible outcomes.
          We&apos;ll tell you which one fits your car.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {outcomes.map((o) => (
            <div key={o.title} className="rounded-card bg-white p-7">
              <h3 className="t-card-title">{o.title}</h3>
              <p className="t-category mt-1 text-brand">{o.tag}</p>
              <p className="t-body mt-4 text-body">{o.body}</p>
            </div>
          ))}
        </div>
        <p className="t-fine-print mt-6">
          Every case is different, and no result is guaranteed. We&apos;ll explain
          your options before you decide anything.
        </p>
      </Section>

      {/* Why it costs you nothing */}
      <Section>
        <div className="grid items-start gap-10 rounded-card bg-tint p-8 md:p-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="t-h2">Why it costs you nothing</h2>
            <p className="t-body-l mt-4 font-semibold text-brand">
              If you win, the manufacturer pays our fees, so you pay nothing.
            </p>
            <Button href="/contact" variant="secondary" className="mt-6">
              Start your free review
            </Button>
          </div>
          <div>
            <p className="t-body text-body">
              California&apos;s lemon law, the Song-Beverly Consumer Warranty Act,
              was written to protect buyers. If you win, the law makes the
              manufacturer pay your attorney fees and costs. That rule is in Civil
              Code section 1794(d).
            </p>
            <p className="t-body mt-4 text-body">
              So you can stand up to a car company without paying a lawyer out of
              your own pocket.
            </p>
            <ul className="mt-6 space-y-3">
              {noCostPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="size-4" aria-hidden />
                  </span>
                  <span className="t-body-l font-semibold text-ink">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <h2 className="t-h2">How it works</h2>
        <p className="t-body-l mt-3 text-body">
          Three steps, and the first one costs nothing.
        </p>
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

      {/* Any make or model */}
      <Section tone="tint">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <h2 className="t-h3">Any make or model can qualify</h2>
          <p className="t-body max-w-md text-body md:text-right">
            What matters is the warranty, not the brand. Common makes include:
          </p>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-divider pt-8">
          {makes.map((make) => (
            <li key={make} className="t-h3 text-ink">
              {make}
            </li>
          ))}
        </ul>
      </Section>

      {/* What our clients say */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="t-h2">What our clients say</h2>
            <p className="t-body-l mt-3 text-body">
              Real reviews from our Google listing.
            </p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-btn border border-chip bg-white px-4 py-2.5">
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
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {clientReviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-card bg-tint p-6">
              <div className="flex gap-0.5 text-star">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="t-body mt-3 flex-1 text-body">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-4">
                <p className="t-small-medium text-ink">{r.name}</p>
                <p className="t-small text-muted">{r.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Lemon law questions */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <h2 className="t-h2">Lemon law questions</h2>
            <p className="t-body-l mt-4 text-body">
              Straight answers to what people ask us most. Have a different
              question?{" "}
              <a href={site.phoneHref} className="font-semibold text-brand">
                Call us
              </a>
              , it&apos;s free.
            </p>
          </div>
          <Faq items={faqItems} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <FinalCta
          heading="Tired of taking your car back to the dealer?"
          subtext="Tell us what's going on. The review is free, and if you win, the manufacturer pays our fees."
        />
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
