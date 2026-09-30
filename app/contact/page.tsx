import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CaseReviewForm } from "@/components/forms/CaseReviewForm";
import { Faq, type FaqItem } from "@/components/sections/Faq";
import { site, formattedAddress } from "@/lib/site";
import { GoogleG } from "@/components/ui/GoogleG";

export const metadata: Metadata = {
  title: "Contact Romero Kucerkova Law — Free Case Review",
  description:
    "Contact Romero Kucerkova Law in Victorville for a free case review. Call (760) 338-9712 or send a few quick details. No win, no fee — you pay nothing unless we win. English and Armenian.",
};

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name}, ${formattedAddress}`,
)}`;

const steps = [
  {
    n: "1",
    title: "Tell us what happened",
    body: "Call us, or answer a few quick questions in the form above. It takes about a minute.",
  },
  {
    n: "2",
    title: "We review it free",
    body: "We call you back, hear the details and tell you plainly whether we think you have a case. There's no cost and nothing to sign.",
  },
  {
    n: "3",
    title: "We handle the rest",
    body: "If we take your case, we deal with the insurance company or manufacturer, the paperwork and the deadlines, so you can focus on getting better.",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Does the case review cost anything?",
    a: "No. The review is free, and asking doesn't commit you to anything. For personal injury you pay no attorney fees unless we win your case.",
  },
  {
    q: "What happens after I send the form?",
    a: "Someone from our team calls you back, usually the same or next business day. We'll ask a few questions and tell you honestly whether we can help.",
  },
  {
    q: "What should I have ready?",
    a: "Just the basics of what happened. If you have photos, a police report, repair orders or a denial letter, they help — but you don't need anything to ask.",
  },
  {
    q: "Can I talk to someone in Armenian?",
    a: "Yes. Our staff speak English and Armenian and can guide you and your family through every step.",
  },
  {
    q: "Is what I send kept private?",
    a: "Yes. What you share with us stays confidential. Sending the form doesn't make us your lawyers, and we won't share your information.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Free case review */}
      <Section>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="t-display">Free case review</h1>
            <p className="t-body-l mt-4 max-w-2xl text-body">
              Unsure if you have a case? Answer a few quick questions and
              we&apos;ll call you back. No win, no fee: you pay nothing unless we
              win your case.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
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
            <p className="t-small text-muted">We speak {site.languages}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
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
            <CaseReviewForm />
          </div>
        </div>
      </Section>

      {/* Our office in Victorville */}
      <Section tone="tint">
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
            <h2 className="t-h2">Our office in Victorville</h2>
            <p className="t-body-l mt-4 text-body">
              Prefer to talk in person? Call ahead and we&apos;ll set a time to
              meet. If it&apos;s hard for you to get here, a phone call works just
              as well.
            </p>
            <dl className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <dt className="t-label text-ink">Address</dt>
                <dd className="t-body mt-2 text-body">
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </dd>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-link mt-4 inline-block font-medium text-brand"
                >
                  Get directions
                </a>
              </div>
              <div>
                <dt className="t-label text-ink">Hours</dt>
                {/* TODO: confirm office hours with the firm */}
                <dd className="t-body mt-2 text-body">Call ahead to confirm</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      {/* What happens after you reach out */}
      <Section>
        <h2 className="t-h2">What happens after you reach out</h2>
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

      {/* Questions about the free review */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <h2 className="t-h2">Questions about the free review</h2>
            <p className="t-body-l mt-4 text-body">
              Anything else on your mind? Call{" "}
              <a href={site.phoneHref} className="font-semibold text-brand">
                {site.phone}
              </a>{" "}
              and ask.
            </p>
          </div>
          <Faq items={faqItems} />
        </div>
      </Section>
    </>
  );
}