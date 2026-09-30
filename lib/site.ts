/**
 * Central site configuration — firm details and navigation.
 * Values confirmed against the Figma design system; update copy as needed.
 */

export const site = {
  name: "Romero Kucerkova Law",
  legalName: "RK Legal Corp",
  shortName: "RK Legal",
  phone: "(760) 338-9712",
  phoneHref: "tel:+17603389712",
  email: "hello@rklegal.com", // TODO: confirm real inbox
  address: {
    line1: "16888 Nisqualli Rd., Suite 200-13",
    // TODO: confirm city/state/zip from client
  },
  rating: {
    score: "5.0",
    source: "Google",
  },
  url: "https://rklegal.com", // TODO: confirm production domain
} as const;

/** Practice areas — used in nav dropdown and footer. */
export const practiceAreas = [
  { label: "Personal Injury", href: "/personal-injury" },
  { label: "Lemon Law", href: "/lemon-law" },
  { label: "Workers' Comp", href: "/workers-comp" },
] as const;

/** Primary top-level navigation. */
export const primaryNav = [
  { label: "Personal Injury", href: "/personal-injury" },
  { label: "Lemon Law", href: "/lemon-law" },
  { label: "Workers' Comp", href: "/workers-comp" },
  { label: "About", href: "/about" },
  { label: "Referral Partners", href: "/referral-partners" },
  { label: "Blog", href: "/blog" },
] as const;

/** Footer link groups. */
export const footerNav = {
  practice: practiceAreas,
  firm: [
    { label: "About", href: "/about" },
    { label: "Referral Partners", href: "/referral-partners" },
    { label: "Blog", href: "/blog" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
