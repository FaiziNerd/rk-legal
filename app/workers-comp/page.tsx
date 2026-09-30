import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Workers' Comp",
  description:
    "Hurt on the job? Romero Kucerkova Law helps California workers pursue the benefits they are owed.",
};

export default function WorkersCompPage() {
  return (
    <>
      <PageIntro
        eyebrow="Practice area"
        title="Workers' comp"
        subtitle="Injured at work? We help you get the medical care and benefits you're entitled to."
      />
      <Section>
        <p className="t-body max-w-2xl text-body">
          Page content will be built from the Workers&apos; Comp design (PNG)
          using the RK design system.
        </p>
      </Section>
    </>
  );
}
