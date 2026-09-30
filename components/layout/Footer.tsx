import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site, footerNav } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-divider bg-tint">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:py-16">
        {/* Brand + contact */}
        <div>
          <p className="t-wordmark text-ink">{site.name}</p>
          <p className="t-wordmark-sub mt-1">{site.legalName}</p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-ink hover:text-brand"
            >
              <Phone className="size-4" aria-hidden />
              <span className="t-phone-l">{site.phone}</span>
            </a>
            <p className="t-small inline-flex items-start gap-2 text-muted">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
              {site.address.line1}
            </p>
          </div>
        </div>

        {/* Practice areas */}
        <nav aria-label="Practice areas">
          <p className="t-category text-muted uppercase">Practice areas</p>
          <ul className="mt-4 flex flex-col gap-3">
            {footerNav.practice.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="t-link text-body hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Firm */}
        <nav aria-label="Firm">
          <p className="t-category text-muted uppercase">Firm</p>
          <ul className="mt-4 flex flex-col gap-3">
            {footerNav.firm.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="t-link text-body hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className="border-t border-divider">
        <Container className="flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between">
          <p className="t-fine-print">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="t-fine-print max-w-2xl">
            No result is guaranteed. Prior results do not guarantee a similar
            outcome. This website is for general information and is not legal
            advice.
          </p>
        </Container>
      </div>
    </footer>
  );
}
