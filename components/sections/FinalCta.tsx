import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function FinalCta({
  heading = "Unsure if you have a case?",
  subtext = "Tell us what happened. The review is free, and you pay nothing unless we win.",
}: {
  heading?: string;
  subtext?: string;
}) {
  return (
    <div className="rounded-card bg-tint px-6 py-12 md:px-12 md:py-14">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="t-h2">{heading}</h2>
          <p className="t-body-l mt-3 max-w-xl text-body">{subtext}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={site.phoneHref} size="lg">
            <Phone className="size-4" aria-hidden />
            Call {site.phone}
          </Button>
          <Button href="/contact" size="lg" variant="secondary">
            Start your free review
          </Button>
        </div>
      </div>
    </div>
  );
}
