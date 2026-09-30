import { Container } from "@/components/ui/Container";

/** Simple page intro band. Placeholder until final page designs (PNGs) land. */
export function PageIntro({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-tint">
      <Container className="py-16 md:py-24">
        {eyebrow && (
          <p className="t-category mb-3 text-brand uppercase">{eyebrow}</p>
        )}
        <h1 className="t-display max-w-4xl">{title}</h1>
        {subtitle && <p className="t-body-l mt-5 max-w-2xl text-body">{subtitle}</p>}
      </Container>
    </div>
  );
}
