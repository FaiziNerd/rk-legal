import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { site, practiceAreas } from "@/lib/site";

/**
 * Home — placeholder scaffold built on the RK design system.
 * Will be rebuilt section-by-section against the Home PNG (desktop + mobile).
 */
export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-tint">
        <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-btn border border-chip bg-white px-3 py-1.5">
              <span className="inline-flex gap-0.5 text-star">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden />
                ))}
              </span>
              <span className="t-small-medium text-ink">
                {site.rating.score} on {site.rating.source}
              </span>
            </div>
            <h1 className="t-display">Personal injury &amp; lemon law firm</h1>
            <p className="t-body-l mt-5 max-w-xl text-body">
              You pay nothing unless we win. Tell us what happened and we&apos;ll
              call you back — it&apos;s free to talk it through.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Request my free review
              </Button>
              <Button href={site.phoneHref} size="lg" variant="secondary">
                Call {site.phone}
              </Button>
            </div>
          </div>
          <div className="rounded-card bg-white p-8 shadow-sm">
            <p className="t-fine-print">
              Placeholder — the hero form / photo will be built from the Home
              design once the PNG export is provided.
            </p>
          </div>
        </Container>
      </div>

      {/* Practice areas */}
      <Section>
        <h2 className="t-h2">How we help</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {practiceAreas.map((area) => (
            <a
              key={area.href}
              href={area.href}
              className="rounded-card border border-divider bg-white p-6 transition-colors hover:border-brand"
            >
              <h3 className="t-card-title">{area.label}</h3>
              <p className="t-body mt-2 text-body">
                Learn how we handle {area.label.toLowerCase()} cases.
              </p>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
