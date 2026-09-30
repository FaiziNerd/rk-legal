import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * RK wordmark lockup: geometric mark + firm name.
 * The mark is a placeholder approximating the Figma logo — swap for the
 * client's real logo asset when provided.
 */
export function Wordmark({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "white";
}) {
  const text = tone === "white" ? "text-white" : "text-ink";
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={`${site.name} — home`}
    >
      <LogoMark className={cn("size-9 shrink-0", text)} />
      <span className="flex flex-col leading-none">
        <span className={cn("t-wordmark uppercase", text)}>{site.name}</span>
        <span className="t-wordmark-sub mt-1">{site.legalName}</span>
      </span>
    </Link>
  );
}

function LogoMark({ className }: { className?: string }) {
  // Two interlocking rounded bars — stand-in for the RK scales mark.
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="9" width="14" height="18" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <rect x="20" y="9" width="14" height="18" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <line x1="9" y1="9" x2="9" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="27" y1="9" x2="27" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
