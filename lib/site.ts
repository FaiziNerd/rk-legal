/**
 * Central site configuration — firm details and navigation.
 * Values confirmed against the Figma "10 · Home" design.
 */

export const site = {
  name: "Romero Kucerkova Law",
  legalName: "RK Legal Corp",
  entity: "Romero Kucerkova Law Corp, APC",
  responsibleAttorney: "Ludmila Kucerkova Romero",
  phone: "(760) 338-9712",
  phoneHref: "tel:+17603389712",
  email: "hello@rklegalcorp.com",
  emailHref: "mailto:hello@rklegalcorp.com",
  address: {
    line1: "16888 Nisqualli Rd., Suite 200-13",
    city: "Victorville",
    state: "CA",
    zip: "92395",
  },
  languages: "English and Armenian",
  rating: {
    score: "5.0",
    count: 49,
    source: "Google",
  },
  url: "https://rklegal.com", // TODO: confirm production domain
} as const;

/** Practice areas — used across nav, cards and footer. */
export const practiceAreas = [
  {
    label: "Personal injury",
    href: "/personal-injury",
    blurb:
      "Hurt in a car, truck or rideshare crash, a fall or a dog bite? We handle the insurance company while you focus on getting better.",
    cta: "About personal injury cases",
  },
  {
    label: "Lemon law",
    href: "/lemon-law",
    blurb:
      "Car keeps going back to the shop for the same problem? You may be owed a refund or a new car. If you win, the manufacturer pays our fees.",
    cta: "About lemon law cases",
  },
  {
    label: "Workers' comp",
    href: "/workers-comp",
    blurb:
      "Hurt on the job, or had your claim denied? We help you get medical care and wage benefits. Fees are set by the state appeals board.",
    cta: "About workers' comp cases",
  },
] as const;

/** Primary top-level navigation (matches the Home header). */
export const primaryNav = [
  { label: "Personal injury", href: "/personal-injury" },
  { label: "Lemon law", href: "/lemon-law" },
  { label: "Workers' comp", href: "/workers-comp" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Referral partners", href: "/referral-partners" },
] as const;

/** Footer link groups. */
export const footerNav = {
  practice: practiceAreas.map((p) => ({ label: p.label, href: p.href })),
  firm: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Referral partners", href: "/referral-partners" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

/** One-line formatted office address. */
export const formattedAddress = `${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
