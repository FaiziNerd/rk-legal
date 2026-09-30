import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Lemon Law",
  description:
    "Stuck with a defective vehicle? Romero Kucerkova Law helps California consumers with lemon law claims.",
};

export default function LemonLawPage() {
  return (
    <>
      <PageIntro
        eyebrow="Practice area"
        title="Lemon law"
        subtitle="Stuck with a vehicle that keeps breaking down? You may be owed a refund or replacement."
      />
      <Section>
        <p className="t-body max-w-2xl text-body">
          Page content will be built from the Lemon Law design (PNG) using the RK
          design system.
        </p>
      </Section>
    </>
  );
}
