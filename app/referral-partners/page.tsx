import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Referral Partners",
  description:
    "Refer a client to Romero Kucerkova Law. We work closely with referring attorneys and honor referral relationships.",
};

export default function ReferralPartnersPage() {
  return (
    <>
      <PageIntro
        eyebrow="For attorneys"
        title="Referral partners"
        subtitle="Refer a client with confidence. We keep you informed and honor every referral relationship."
      />
      <Section>
        <p className="t-body max-w-2xl text-body">
          Page content will be built from the Referral Partners design (PNG) using
          the RK design system.
        </p>
      </Section>
    </>
  );
}
