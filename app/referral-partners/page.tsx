import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ReferralForm } from "@/components/forms/ReferralForm";
import { FinalCta } from "@/components/sections/FinalCta";
import { site } from "@/lib/site";
import { GoogleG } from "@/components/ui/GoogleG";

export const metadata: Metadata = {
  title: "Referral Partners — Firms We Trust for Other Legal Needs",
  description:
    "Romero Kucerkova Law focuses on personal injury, lemon law and workers' comp. For other legal needs, we can connect you with firms we trust — at no cost to you.",
};

const referralAreas = [
  {
    title: "Immigration",
    body: "Visas, green cards, citizenship and help with immigration court.",
  },
  {
    title: "Employment",
    body: "Unpaid wages, wrongful firing, discrimination and harassment at work.",
  },
  {
    title: "DUI",
    body: "Driving under the influence arrests, DMV hearings and license suspensions.",
  },
  {
    title: "Criminal defense",
    body: "Misdemeanor and felony charges, from the first court date through trial.",
  },
  {
    title: "Divorce",
    body: "Ending a marriage, dividing property and debts, and spousal support.",
  },
  {
    title: "Family law",
    body: "Child custody, visitation, child support and adoption.",
  },
  {
    title: "Business",
    body: "Starting a company, contracts, partnerships and business disputes.",
  },
  {
    title: "Litigation",
    body: "Civil lawsuits and disputes that don't involve an injury or a lemon car.",
  },
  {
    title: "Estate planning, wills and trusts",
    body: "Wills, living trusts, powers of attorney and probate.",
  },
];

const steps = [
  {
    n: "1",
    title: "Tell us what you need",
    body: "Use the short form above or call us. A sentence or two about your situation is enough.",
  },
  {
    n: "2",
    title: "We suggest a firm we trust",
    body: "We'll share the name and contact details of a firm that handles your kind of case.",
  },
  {
    n: "3",
    title: "You decide",
    body: "You choose whether to reach out. The referral is free, and there's no obligation.",
  },
];

const referCaseMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Case referral to Romero Kucerkova Law",
)}`;

export default function ReferralPartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-tint">
        <Container className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="t-display max-w-xl">Referrals for other legal needs</h1>
            <p className="t-body-l mt-5 max-w-xl text-body">
              We focus on personal injury, lemon law and workers&apos; comp. For
              other legal needs, we can connect you with firms we trust.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#ask">Ask for a referral</Button>
              <Button href="/contact" variant="secondary">
                Free case review
              </Button>
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
          </div>
          {/* Extracted from the design PNG — swap for the client's original when available */}
          <Image
            src="/images/referral-hero.jpg"
            alt="A sunlit desk by a window looking out over palms and mountains"
            width={1300}
            height={700}
            priority
            className="h-auto w-full rounded-card object-cover"
          />
        </Container>
      </section>

      {/* Where we can point you */}
      <Section>
        <h2 className="t-h2">Where we can point you</h2>
        <p className="t-body-l mt-3 max-w-2xl text-body">
          Tell us what you need and we&apos;ll connect you with a firm that
          handles it, at no cost to you.
        </p>
        <dl className="mt-10 grid gap-x-14 sm:grid-cols-2 lg:grid-cols-3">
          {referralAreas.map((area) => (
            <div key={area.title} className="border-t border-divider py-6">
              <dt className="t-card-title">{area.title}</dt>
              <dd className="t-body mt-2 text-body">{area.body}</dd>
            </div>
          ))}
        </dl>
        <p className="t-body mt-8 text-body">
          Not sure which one fits?{" "}
          <a href="#ask" className="font-semibold text-brand">
            Ask us
          </a>{" "}
          and we&apos;ll point you in the right direction.
        </p>
      </Section>

      {/* Ask for a referral */}
      <Section id="ask" tone="tint">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="h-fit rounded-card bg-white p-8">
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
            <h2 className="t-h2-form">Ask for a referral</h2>
            <p className="t-body-l mt-3 text-body">
              Tell us what kind of help you need and how to reach you. We&apos;ll
              call you back with the name of a firm we trust.
            </p>
            <div className="mt-8">
              <ReferralForm />
            </div>
            <div className="mt-8 rounded-card bg-white p-6">
              <h3 className="t-question">Referrals are free to you</h3>
              <p className="t-body mt-2 text-body">
                You never pay us for a referral. If there&apos;s any fee
                arrangement between our firm and the firm we refer you to,
                we&apos;ll tell you about it in writing.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How a referral works */}
      <Section>
        <h2 className="t-h2">How a referral works</h2>
        <p className="t-body-l mt-3 text-body">
          It takes a minute, and you&apos;re never obligated to hire anyone.
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

      {/* For lawyers */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Extracted from the design PNG — swap for the client's original when available */}
          <Image
            src="/images/referral-refer.jpg"
            alt="Handing a case file across a desk"
            width={1296}
            height={935}
            className="h-auto w-full rounded-card object-cover"
          />
          <div>
            <h2 className="t-h2">
              Are you a lawyer with an injury or lemon law case?
            </h2>
            <p className="t-body-l mt-4 text-body">
              If a client comes to you with a personal injury, lemon law or
              workers&apos; comp matter, we&apos;d welcome the referral. We&apos;ll
              treat your client with care and keep you in the loop.
            </p>
            <p className="t-body mt-4 text-body">
              Call{" "}
              <a href={site.phoneHref} className="font-semibold text-brand">
                {site.phone}
              </a>{" "}
              or email{" "}
              <a href={site.emailHref} className="font-semibold text-brand">
                {site.email}
              </a>
              .
            </p>
            <Button href={referCaseMailto} variant="secondary" className="mt-6">
              Refer a case
            </Button>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <FinalCta
          heading="Hurt, or stuck with a lemon car?"
          subtext="That's the work we do. The case review is free, and you pay nothing unless we win."
        />
      </Section>
    </>
  );
}