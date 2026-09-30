import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Romero Kucerkova Law — a personal injury and consumer law firm serving California with care and results.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our firm"
        title="About Romero Kucerkova Law"
        subtitle="Personal attention, honest advice, and results — for every client."
      />
      <Section>
        <p className="t-body max-w-2xl text-body">
          Page content will be built from the About design (PNG) using the RK
          design system.
        </p>
      </Section>
    </>
  );
}
