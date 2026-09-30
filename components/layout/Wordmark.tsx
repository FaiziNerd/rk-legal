import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/** RK wordmark lockup. Swap for the client's logo asset when provided. */
export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex flex-col leading-none", className)}
      aria-label={`${site.name} — home`}
    >
      <span className={size === "sm" ? "t-wordmark-sub" : "t-wordmark"}>
        {size === "sm" ? site.name : site.name}
      </span>
      <span className="t-wordmark-sub mt-1">{site.legalName}</span>
    </Link>
  );
}
