"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site, primaryNav } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-surface/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Wordmark />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "t-nav text-body transition-colors hover:text-brand",
                isActive(item.href) && "text-brand",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="t-nav inline-flex items-center gap-2 text-ink hover:text-brand"
          >
            <Phone className="size-4" aria-hidden />
            {site.phone}
          </a>
          <Button href="/contact" size="md">
            Free case review
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-btn text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-divider bg-surface lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "t-nav rounded-btn px-2 py-3 text-body hover:bg-tint",
                  isActive(item.href) && "text-brand",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-divider pt-4">
              <a
                href={site.phoneHref}
                className="t-phone-l inline-flex items-center gap-2 text-ink"
              >
                <Phone className="size-5" aria-hidden />
                {site.phone}
              </a>
              <Button href="/contact" size="lg" onClick={() => setOpen(false)}>
                Free case review
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
