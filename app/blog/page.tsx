import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides and updates on personal injury, lemon law, and workers' compensation from Romero Kucerkova Law.",
};

// Rebuild the cached list on this interval once Contentful is wired (Phase 3).
export const revalidate = 300;

export default function BlogIndexPage() {
  return (
    <>
      <PageIntro
        eyebrow="Resources"
        title="Blog"
        subtitle="Practical guides on your rights after an accident, a lemon vehicle, or a workplace injury."
      />
      <Section>
        <p className="t-body max-w-2xl text-body">
          The post grid + category filters will be wired to Contentful in Phase 3.
        </p>
      </Section>
    </>
  );
}
