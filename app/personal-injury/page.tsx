import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Personal Injury",
  description:
    "Injured in a crash or accident? Romero Kucerkova Law handles personal injury claims across California. You pay nothing unless we win.",
};

export default function PersonalInjuryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Practice area"
        title="Personal injury"
        subtitle="Hurt in a crash? We handle the insurance companies so you can focus on getting better."
      />
      <Section>
        <p className="t-body max-w-2xl text-body">
          Page content will be built from the Personal Injury design (PNG) using
          the RK design system.
        </p>
      </Section>
    </>
  );
}
