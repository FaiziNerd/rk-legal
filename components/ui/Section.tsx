import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = React.ComponentProps<"section"> & {
  /** Background band. */
  tone?: "surface" | "tint" | "brand";
  /** Wrap children in the standard content Container. Default true. */
  contained?: boolean;
};

const toneClass: Record<NonNullable<SectionProps["tone"]>, string> = {
  surface: "bg-surface",
  tint: "bg-tint",
  brand: "bg-brand text-white",
};

/** A full-width vertical band with consistent spacing. */
export function Section({
  tone = "surface",
  contained = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-14 md:py-20", toneClass[tone], className)}
      {...props}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
