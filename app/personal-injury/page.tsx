import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CaseReviewForm } from "@/components/forms/CaseReviewForm";
import { Faq, type FaqItem } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { site } from "@/lib/site";
import { GoogleG } from "@/components/ui/GoogleG";

export const metadata: Metadata = {
  title: "Personal Injury Lawyer in Victorville & Southern California",
  description:
    "Hurt in a crash? Romero Kucerkova Law handles car, truck, motorcycle, rideshare, pedestrian and other injury claims across Southern California. No win, no fee — you pay nothing unless we win.",
};

// Cases we handle — two-column list.
const cases = [
  {
    title: "Car accidents",
    body: "Rear-end, T-bone and freeway crashes, including hit and run and uninsured drivers.",
  },
  {
    title: "Motorcycle accidents",
    body: "Riders often get blamed unfairly. We push back when the other driver caused it.",
  },
  {
    title: "Truck accidents",
    body: "Crashes with big rigs and delivery vans, where a company's insurer gets involved fast.",
  },
  {
    title: "Uber and Lyft accidents",
    body: "Passenger, driver, or hit by one. Rideshare insurance has its own rules.",
  },
  {
    title: "Pedestrian accidents",
    body: "Hit in a crosswalk, a parking lot, or while walking along the road.",
  },
  {
    title: "Bicycle accidents",
    body: "Hit by a turning driver, an opening car door, or a driver who never saw you.",
  },
  {
    title: "Dog bites",
    body: "Bites and attacks from a neighbor's dog or a dog in a public place.",
  },
  {
    title: "Slip and fall",
    body: "Injuries from wet floors, broken steps or poor lighting at a store or property.",
  },
  {
    title: "Workplace injuries",
    body: "Hurt on the job. We look at workers' comp and any claim against someone else at fault.",
  },
  {
    title: "Wrongful death",
    body: "When your family loses someone because of another person's carelessness.",
  },
];

// Insurance comparison — "What they do" vs "What we do instead".
const insurerTactics = [
  {
    label: "Pressure to settle fast",
    they: "They call within days and offer a quick check, often before you know how badly you are hurt.",
    we: "We make sure your treatment and costs are known before anyone talks numbers.",
  },
  {
    label: "Lowball first offers",
    they: "The first offer is often low, made in the hope that you will take it and move on.",
    we: "We add up medical bills, lost wages and pain and suffering, then negotiate from the full picture.",
  },
  {
    label: "Recorded statements",
    they: "They ask to record your account of the crash, then use small details to question your claim.",
    we: "We take the calls with the other driver's insurer, so you don't have to give them a statement on your own.",
  },
  {
    label: "Delaying",
    they: "They slow down replies and ask for the same papers again, hoping you give up.",
    we: "We keep the claim moving, track every deadline and follow up until there is an answer.",
  },
];

// After-an-accident checklist.
const afterAccident = [
  {
    title: "Check on everyone and call 911",
    body: "Get medical help for anyone who is hurt, and ask the officer for a police report number.",
  },
  {
    title: "Take photos before the cars move",
    body: "Photograph both cars, the road, any injuries, and the other driver's license and insurance card.",
  },
  {
    title: "Get names and phone numbers",
    body: "Swap information with the other driver and ask anyone who saw the crash for their number.",
  },
  {
    title: "See a doctor, even if you feel fine",
    body: "Some injuries show up days later. A medical record from the start protects your claim.",
  },
  {
    title: "Be careful with the insurance company",
    body: "Report the crash to your own insurer, but don't give the other driver's insurer a recorded statement or accept an offer yet.",
  },
  {
    title: "Call us for a free review",
    body: "We'll tell you whether you have a case and what to do next. It costs nothing to ask.",
  },
];

const steps = [
  {
    n: "1",
    title: "Tell us what happened",
    body: "Call us, or answer a few quick questions in the form above.",
  },
  {
    n: "2",
    title: "We review it for free",
    body: "We look at the crash, your injuries and the insurance involved, then tell you plainly whether you have a case.",
  },
  {
    n: "3",
    title: "We handle the rest",
    body: "We deal with the insurance companies and push for a fair settlement while you focus on getting better. You pay nothing unless we win.",
  },
];

const clientReviews = [
  {
    quote:
      "Many other lawyers rejected my case, but they didn't. On the contrary, they accepted it and fought strategically for me. They resolved my car accident case without me having to lift a finger and secured me a very good compensation.",
    name: "Giovanni J.",
    note: "Google review · Translated by Google",
  },
  {
    quote:
      "They explained everything clearly, stayed on top of communication, and made a stressful situation much easier to deal with.",
    name: "Chris S.",
    note: "Google review",
  },
  {
    quote:
      "Their team was responsive … I ended up with great treatment and a more than fair settlement. Thank you.",
    name: "Raul H.",
    note: "Google review",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "How much does it cost to hire you?",
    a: "Nothing up front. The case review is free, and you pay no attorney fees unless we obtain a recovery for you. You may still be responsible for certain costs, and we explain them before you sign anything.",
  },
  {
    q: "How long will my case take?",
    a: "It depends on your injuries and how the insurer responds. Straightforward claims can settle in a few months; serious cases take longer. We keep things moving and tell you what to expect at each step.",
  },
  {
    q: "How do I know if I have a case?",
    a: "The easiest way is to ask. Tell us what happened and we'll review the details for free and let you know honestly whether we think we can help.",
  },
  {
    q: "What is my case worth?",
    a: "It depends on your medical bills, lost wages, and how the injury affects your life. We add all of it up before talking numbers so any offer reflects the full picture, not just the first bill.",
  },
  {
    q: "I already talked to the insurance company. Is that a problem?",
    a: "Usually not. Many people talk to an adjuster before they call a lawyer. Tell us what you said and whether you signed anything, and we'll take over the calls from here.",
  },
  {
    q: "Will I have to go to court?",
    a: "Most cases settle without a trial. If going to court is the best way to get you a fair result, we'll prepare for it and guide you through every step.",
  },
];

export default function PersonalInjuryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-tint">
        <Container className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="t-display max-w-xl">
              Personal injury lawyer in Victorville and Southern California
            </h1>
            <p className="t-body-l mt-5 max-w-lg text-body">
              Hurt in a crash? No win, no fee. You pay nothing unless we win.
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
          {/* Extracted from the design PNG — swap for the client's original when available */}
          <Image
            src="/images/pi-hero.jpg"
            alt="A car parked outside a Victorville home"
            width={956}
            height={657}
            priority
            className="h-auto w-full rounded-card object-cover"
          />
        </Container>
      </section>

      {/* Case review — contact card + form */}
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
              <CaseReviewForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Cases we handle */}
      <Section tone="tint">
        <h2 className="t-h2">Cases we handle</h2>
        <p className="t-body-l mt-3 max-w-2xl text-body">
          If you were hurt because someone else was careless, we can help you
          find out what your claim is worth. These are the cases we see most.
        </p>
        <dl className="mt-10 grid gap-x-14 sm:grid-cols-2">
          {cases.map((c) => (
            <div key={c.title} className="border-t border-divider py-6">
              <dt className="t-card-title">{c.title}</dt>
              <dd className="t-body mt-2 text-body">{c.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* What insurance companies do after a crash */}
      <Section>
        <div className="rounded-card bg-tint p-8 md:p-12">
          <h2 className="t-h2">What insurance companies do after a crash</h2>
          <p className="t-body-l mt-4 max-w-3xl text-body">
            The adjuster who calls you works for the insurance company. Their job
            is to close your claim for as little as possible. Here is what to
            expect, and what we do about it.
          </p>
          <div className="mt-8 border-t border-divider">
            <div className="hidden gap-8 py-4 md:grid md:grid-cols-[1fr_1.3fr_1.3fr]">
              <span />
              <span className="t-category text-brand uppercase">What they do</span>
              <span className="t-category text-brand uppercase">
                What we do instead
              </span>
            </div>
            <dl className="divide-y divide-divider border-t border-divider">
              {insurerTactics.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-2 py-6 md:grid-cols-[1fr_1.3fr_1.3fr] md:gap-8"
                >
                  <dt className="t-card-title">{row.label}</dt>
                  <dd className="t-body text-body">
                    <span className="t-category mb-1 block text-muted uppercase md:hidden">
                      What they do
                    </span>
                    {row.they}
                  </dd>
                  <dd className="t-body text-body">
                    <span className="t-category mb-1 block text-brand uppercase md:hidden">
                      What we do instead
                    </span>
                    {row.we}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* What to do after an accident */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="t-h2">What to do after an accident</h2>
            <p className="t-body-l mt-4 max-w-md text-body">
              Keep this list on your phone. What you do in the first few days can
              make a real difference to your claim.
            </p>
            {/* Extracted from the design PNG — swap for the client's original when available */}
            <Image
              src="/images/pi-after-accident.jpg"
              alt="Photographing bumper damage with a phone after a crash"
              width={1112}
              height={794}
              className="mt-8 h-auto w-full rounded-card object-cover"
            />
          </div>
          <ol className="divide-y divide-divider border-t border-divider">
            {afterAccident.map((item, i) => (
              <li key={item.title} className="grid grid-cols-[auto_1fr] gap-4 py-6">
                <span className="t-question text-brand" aria-hidden>
                  {i + 1}
                </span>
                <div>
                  <h3 className="t-question">{item.title}</h3>
                  <p className="t-body mt-1 text-body">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* How it works */}
      <Section tone="tint">
        <h2 className="t-h2">How it works</h2>
        <p className="t-body-l mt-3 text-body">
          No cost to ask, and no pressure to sign anything.
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

      {/* What clients say */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="t-h2">What clients say</h2>
            <p className="t-body-l mt-3 text-body">
              Real reviews from people we helped after a crash.
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

      {/* Common questions */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <h2 className="t-h2">Common questions</h2>
            <p className="t-body-l mt-4 text-body">
              Still unsure? Call{" "}
              <a href={site.phoneHref} className="font-semibold text-brand">
                {site.phone}
              </a>{" "}
              and ask us anything. The call is free.
            </p>
          </div>
          <Faq items={faqItems} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <FinalCta
          heading="Hurt in a crash? Talk to us today."
          subtext="The review is free, and you pay nothing unless we win."
        />
      </Section>
    </>
  );
}