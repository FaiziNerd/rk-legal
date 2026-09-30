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

export const metadata: Metadata = {
  title: "Workers' Comp Help in Victorville & the High Desert",
  description:
    "Hurt on the job or had your claim denied? Romero Kucerkova Law helps you get medical care and wage benefits. The review is free and, in workers' comp, fees are set by the state appeals board.",
};

const benefits = [
  {
    title: "Medical care",
    body: "Doctor visits, tests, surgery, physical therapy and prescriptions for your work injury, paid for by your employer's insurance.",
  },
  {
    title: "Temporary disability pay",
    body: "If your doctor says you can't work while you heal, you get payments to replace part of the wages you're missing.",
  },
  {
    title: "Permanent disability",
    body: "If the injury leaves lasting limits on what your body can do, you may be owed payments based on how it affects your work.",
  },
  {
    title: "Job retraining",
    body: "If you can't go back to your old job, you may qualify for a voucher to pay for retraining or new skills.",
  },
];

const denialReasons = [
  "The insurer says the injury didn't happen at work",
  "You reported it late, or a form was missing",
  "Treatment your doctor asked for was denied or delayed",
  "Your disability checks stopped or keep coming late",
];

const costPoints = [
  {
    title: "The review is free",
    body: "Call or send the form. We'll look at what happened and tell you where you stand, at no charge.",
  },
  {
    title: "The fee is set by the WCAB",
    body: "In workers' comp, attorney fees are set and approved by the Workers' Compensation Appeals Board, not by us.",
  },
  {
    title: "No pressure to sign",
    body: "If we can help, we'll explain how it works. If we can't, we'll tell you that too.",
  },
];

const steps = [
  {
    n: "1",
    title: "Tell us what happened",
    body: "Call, or answer a few quick questions in the form. Tell us how you got hurt and about any letters from the insurer.",
  },
  {
    n: "2",
    title: "We review it free",
    body: "We look at your claim, your medical care and any denial, then tell you honestly where you stand.",
  },
  {
    n: "3",
    title: "We handle the rest",
    body: "We deal with the insurer, the paperwork and any hearings, and keep you updated in English or Armenian.",
  },
];

const clientReviews = [
  {
    quote:
      "Their team was responsive … I ended up with great treatment and a more than fair settlement. Thank you.",
    name: "Raul H.",
    note: "Google review",
  },
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
];

const faqItems: FaqItem[] = [
  {
    q: "How long do I have to report a work injury?",
    a: "Tell your employer as soon as you can, in writing if possible. In California you generally have 30 days to report it, and waiting longer can put your benefits at risk.",
  },
  {
    q: "My claim was denied. Is it too late to do anything?",
    a: "Not necessarily. A denial can often be challenged, but there are deadlines, so call soon. Tell us what the denial letter says and we'll look at it with you for free.",
  },
  {
    q: "Can I see my own doctor?",
    a: "Sometimes. It depends on whether you named a doctor before you got hurt and on your employer's medical network. We can check for you.",
  },
  {
    q: "Will I get paid while I can't work?",
    a: "Often, yes. If your doctor says you can't work, or can only work limited hours, you may qualify for temporary disability payments, which are usually about two thirds of your regular pay, up to a limit set by the state.",
  },
  {
    q: "Can my employer fire me for filing a claim?",
    a: "Generally no. California Labor Code section 132a protects you from being punished for filing. Call us and we'll look at what happened.",
  },
  {
    q: "How much does it cost to talk to you?",
    a: "Talking to us is free. If we take your case, the fee is set and approved by the Workers' Compensation Appeals Board, not by us.",
  },
];

export default function WorkersCompPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-tint">
        <Container className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="t-display max-w-xl">
              Workers&apos; comp help in Victorville and the High Desert
            </h1>
            <p className="t-body-l mt-5 max-w-xl text-body">
              Hurt on the job, or was your claim denied? Your review is free, and
              your fee is set by the state appeals board, not by us.
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
            src="/images/wc-hero.jpg"
            alt="A hard hat, work gloves and tape measure on a workbench"
            width={587}
            height={377}
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
              <CaseReviewForm defaultWhatHappened="Hurt at work" />
            </div>
          </div>
        </div>
      </Section>

      {/* What workers' comp covers */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Extracted from the design PNG — swap for the client's original when available */}
          <Image
            src="/images/wc-recovery.jpg"
            alt="A calm, sunlit recovery room"
            width={626}
            height={795}
            className="h-auto w-full rounded-card object-cover"
          />
          <div>
            <h2 className="t-h2">What workers&apos; comp covers</h2>
            <p className="t-body-l mt-4 text-body">
              If you got hurt doing your job in California, these are the benefits
              a claim is meant to pay for.
            </p>
            <dl className="mt-8 divide-y divide-divider border-t border-divider">
              {benefits.map((b) => (
                <div key={b.title} className="py-5">
                  <dt className="t-question">{b.title}</dt>
                  <dd className="t-body mt-1 text-body">{b.body}</dd>
                </div>
              ))}
            </dl>
            <p className="t-fine-print mt-4">
              This is general information. Every claim is different, so ask us
              about yours.
            </p>
          </div>
        </div>
      </Section>

      {/* Claim denied or delayed? */}
      <Section>
        <div className="grid items-center gap-10 rounded-card bg-tint p-8 md:p-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="t-h2">Claim denied or delayed?</h2>
            <p className="t-body-l mt-4 text-body">
              A denial letter is not always the final word. Claims get denied or
              stalled for reasons that can often be challenged, like these:
            </p>
            <ul className="mt-6 space-y-3">
              {denialReasons.map((reason) => (
                <li key={reason} className="flex gap-3">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                    aria-hidden
                  />
                  <span className="t-body text-body">{reason}</span>
                </li>
              ))}
            </ul>
            <p className="t-body mt-6 text-body">
              Got a denial letter? Call us or use the form and tell us what it
              says. We&apos;ll explain your options in plain words, free.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={site.phoneHref}>Call {site.phone}</Button>
              <Button href="/contact" variant="secondary">
                Start your free review
              </Button>
            </div>
          </div>
          {/* Extracted from the design PNG — swap for the client's original when available */}
          <Image
            src="/images/wc-denial.jpg"
            alt="A denial letter and glasses on a table"
            width={578}
            height={408}
            className="h-auto w-full rounded-card object-cover"
          />
        </div>
      </Section>

      {/* Can I get fired for filing a claim? */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <h2 className="t-h2">Can I get fired for filing a claim?</h2>
          <div>
            <p className="t-body text-body">
              In California, it&apos;s generally against the law for an employer to
              fire you, demote you or treat you worse because you filed a
              workers&apos; comp claim or said you were going to. This protection
              comes from California Labor Code section 132a.
            </p>
            <p className="t-body mt-4 text-body">
              That doesn&apos;t mean every job loss after an injury is illegal. The
              timing, the reason your employer gives and the records both sides
              keep all matter.
            </p>
            <p className="t-body mt-4 text-body">
              If you were let go, had your hours cut or felt pressured not to file
              after you got hurt, write down what happened and when, keep any
              texts or emails, and call us. We&apos;ll tell you what we see.
            </p>
            <p className="t-fine-print mt-4">
              General information only, not legal advice for your situation.
            </p>
          </div>
        </div>
      </Section>

      {/* What it costs to talk to us */}
      <Section tone="tint">
        <h2 className="t-h2">What it costs to talk to us</h2>
        <p className="t-body-l mt-3 text-body">
          Nothing. And if we take your case, we don&apos;t set our own fee.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {costPoints.map((point) => (
            <div key={point.title} className="border-t-2 border-brand pt-6">
              <h3 className="t-question">{point.title}</h3>
              <p className="t-body mt-2 text-body">{point.body}</p>
            </div>
          ))}
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

      {/* What clients say */}
      <Section tone="tint">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="t-h2">What clients say</h2>
            <p className="t-body-l mt-3 text-body">
              Real words from real Google reviews.
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
            <figure key={r.name} className="flex flex-col rounded-card bg-white p-6">
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

      {/* Workers' comp questions */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <h2 className="t-h2">Workers&apos; comp questions</h2>
            <p className="t-body-l mt-4 text-body">
              Straight answers to what people ask us most. Don&apos;t see yours?{" "}
              <a href={site.phoneHref} className="font-semibold text-brand">
                Call and ask.
              </a>
            </p>
          </div>
          <Faq items={faqItems} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <FinalCta
          heading="Hurt at work? Let's talk it through."
          subtext="Tell us what happened. The review is free, and in workers' comp your fee is set by the appeals board, not by us."
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
