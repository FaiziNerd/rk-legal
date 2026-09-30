import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Subscribe to the Romero Kucerkova Law newsletter for practical legal tips and firm updates.",
};

export default function NewsletterPage() {
  return (
    <>
      <PageIntro
        title="Stay in the loop"
        subtitle="Practical tips and updates from the firm. No spam — unsubscribe anytime."
      />
      <Section>
        <p className="t-body max-w-2xl text-body">
          The newsletter signup (Resend-powered capture + welcome email) will be
          built here in Phase 4, matching the Newsletter design.
        </p>
      </Section>
    </>
  );
}
