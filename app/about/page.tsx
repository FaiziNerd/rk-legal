import type { Metadata } from "next";
import Image from "next/image";
import { Star, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CaseReviewForm } from "@/components/forms/CaseReviewForm";
import { site, formattedAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Romero Kucerkova Law — Your Local Victorville Firm",
  description:
    "Formerly Guardian Injury Law. Romero Kucerkova Law is a local Victorville firm handling personal injury, lemon law and workers' comp across the High Desert. Meet attorney Ludmila Kucerkova Romero.",
};

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name}, ${formattedAddress}`,
)}`;

// The rename facts, shown as a small definition table.
const renameFacts = [
  { label: "Formerly", value: "Guardian Injury Law" },
  { label: "Legal name", value: site.entity },
  { label: "Also known as", value: site.legalName },
];

const promises = [
  {
    title: "Your first review is free",
    body: "Tell us what happened and we look at it at no cost. You don't have to sign anything to ask a question.",
  },
  {
    title: "No win, no fee",
    body: "In injury cases you pay no attorney fees unless we win. In lemon law cases, the manufacturer generally pays the attorney fees. In workers' comp, fees are set by the appeals board, not by us.",
  },
  {
    title: "We call you back",
    body: "Send the form or leave a message, and someone from our team calls you back to talk it through. No automated runaround.",
  },
  {
    title: "English and Armenian",
    body: "Our staff speak English and Armenian, so you and your family can ask questions in the language that feels easiest.",
  },
  {
    title: "One team, start to finish",
    body: "The same people take your first call, gather your records and stay with your case to the end. You always know who to call.",
  },
];

const clientReviews = [
  {
    quote:
      "Everything was clearly explained and they kept me informed throughout the entire process, which gave me peace of mind and confidence proceeding forward.",
    name: "Katie S.",
    note: "Google review",
  },
  {
    quote:
      "My parents who speak little to no English were extremely thankful and happy to work with Lucy who's fluent in Armenian.",
    name: "Argam A.",
    note: "Google review",
  },
  {
    quote:
      "They explained everything clearly, stayed on top of communication, and made a stressful situation much easier to deal with.",
    name: "Chris S.",
    note: "Google review",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-tint">
        <Container className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="t-display max-w-xl">
              About Romero Kucerkova Law, your local firm in Victorville
            </h1>
            <p className="t-body-l mt-5 max-w-xl text-body">
              Formerly Guardian Injury Law. Injury, lemon law and workers&apos;
              comp help from the same local team. No win, no fee: you pay nothing
              unless we win.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={site.phoneHref}>
                <Phone className="size-4" aria-hidden />
                Call {site.phone}
              </Button>
              <Button href="/contact" variant="secondary">
                Start your free review
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
            src="/images/about-hero.jpg"
            alt="Joshua trees in the High Desert near Victorville"
            width={898}
            height={798}
            priority
            className="h-auto w-full rounded-card object-cover"
          />
        </Container>
      </section>

      {/* Same team. Same office. A new name. */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <h2 className="t-h2">Same team. Same office. A new name.</h2>
            <p className="t-body-l mt-4 text-body">
              Here&apos;s what changed, and what didn&apos;t.
            </p>
          </div>
          <div>
            <p className="t-body-l text-body">
              For years, people in the High Desert knew us as Guardian Injury Law.
              Today the firm carries the name of its attorney, Ludmila Kucerkova
              Romero. You may also see us as RK Legal Corp, the name on our website
              and email.
            </p>
            <p className="t-body-l mt-4 text-body">
              Nothing else about how we work has changed. The same local team
              answers the phone, from the same office in Victorville. If you
              already work with us, you don&apos;t need to do anything. Call the
              same number with any question.
            </p>
            <dl className="mt-8 divide-y divide-divider border-t border-divider">
              {renameFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[8rem_1fr] gap-4 py-4"
                >
                  <dt className="t-body text-muted">{fact.label}</dt>
                  <dd className="t-body text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Meet your attorney */}
      <Section tone="tint">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <p className="t-category text-brand uppercase">Meet your attorney</p>
            <h2 className="t-h2 mt-3">Ludmila Kucerkova Romero</h2>
            <p className="t-body-l mt-2 font-semibold text-brand">
              Attorney, licensed in California
            </p>
            <div className="mt-6 border-t border-divider pt-6">
              {/* TODO: confirm State Bar number and add it here */}
              <p className="t-small text-muted">
                Licensed by the State Bar of California
              </p>
              <p className="t-small mt-1 text-muted">
                Practice areas: personal injury, lemon law, workers&apos; comp
              </p>
            </div>
          </div>
          <div>
            <p className="t-body-l text-body">
              Ludmila Kucerkova Romero is the attorney at Romero Kucerkova Law. She
              represents people across the High Desert who have been hurt in a
              crash or at work, or who are stuck with a car that keeps breaking
              down.
            </p>
            <p className="t-body-l mt-4 text-body">
              Because the firm has one attorney, the lawyer who reviews your case
              is the lawyer who works on it. You will know who is handling your
              case, and you can reach her team with any question.
            </p>
            {/* TODO: confirm the specific manufacturers/cases before naming them */}
            <p className="t-body-l mt-4 text-body">
              Her background is in plaintiff-side consumer warranty litigation.
            </p>
          </div>
        </div>
      </Section>

      {/* Pull quote */}
      <Section>
        <div className="grid items-center gap-8 rounded-card bg-tint px-6 py-12 md:grid-cols-[1fr_auto] md:px-12 md:py-14">
          <blockquote>
            <p className="t-h3 text-ink">
              “Everyone on their team is knowledgeable and supportive through the
              entire process.”
            </p>
            <footer className="t-small mt-3 text-muted">
              Aaron N., Google review
            </footer>
          </blockquote>
          <Button href="/contact" variant="secondary">
            Start your free review
          </Button>
        </div>
      </Section>

      {/* How we work with you */}
      <Section>
        <h2 className="t-h2">How we work with you</h2>
        <p className="t-body-l mt-3 text-body">
          Five things you can count on, from your first call to the end of your
          case.
        </p>
        <dl className="mt-10 divide-y divide-divider border-t border-divider">
          {promises.map((p) => (
            <div
              key={p.title}
              className="grid gap-2 py-6 md:grid-cols-[0.9fr_1.1fr] md:gap-14"
            >
              <dt className="t-question">{p.title}</dt>
              <dd className="t-body-l text-body">{p.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Visit our Victorville office */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Extracted from the design PNG — swap for the client's original when available */}
          <Image
            src="/images/about-office.jpg"
            alt="The Romero Kucerkova Law office in Victorville"
            width={1097}
            height={993}
            className="h-auto w-full rounded-card object-cover"
          />
          <div>
            <h2 className="t-h2">Visit our Victorville office</h2>
            <p className="t-body-l mt-4 text-body">
              We&apos;re a local firm, and our office is here in the High Desert.
              Call before you come in so the right person is there to meet you.
            </p>
            <dl className="mt-8 divide-y divide-divider border-t border-divider">
              <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
                <dt className="t-body text-muted">Address</dt>
                <dd className="t-body text-ink">
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
                <dt className="t-body text-muted">Phone</dt>
                <dd className="t-body">
                  <a href={site.phoneHref} className="text-brand">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
                <dt className="t-body text-muted">Hours</dt>
                {/* TODO: confirm office hours with the firm */}
                <dd className="t-body text-ink">Call ahead to confirm</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
                <dt className="t-body text-muted">We speak</dt>
                <dd className="t-body text-ink">{site.languages}</dd>
              </div>
            </dl>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="t-link mt-6 inline-block font-medium text-brand"
            >
              Get directions in Google Maps
            </a>
          </div>
        </div>
      </Section>

      {/* What our clients say */}
      <Section tone="tint">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="t-h2">What our clients say</h2>
            <p className="t-body-l mt-3 text-body">
              Rated {site.rating.score} across {site.rating.count} Google reviews.
              A few of them, in their own words.
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

      {/* Case review */}
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
