import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free case review from Romero Kucerkova Law. Tell us what happened and we'll call you back.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Free case review"
        subtitle="Tell us what happened. It's free, and there's no obligation."
      />
      <Section>
        <p className="t-body max-w-2xl text-body">
          The contact form (Resend-powered: client confirmation + firm
          notification) will be built here in Phase 4, matching the Contact
          design.
        </p>
      </Section>
    </>
  );
}
