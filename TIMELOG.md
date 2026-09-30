# RK Legal Website — Time Log

Running log of hours spent, per the client's request. Newest entries at top.

| Date | Phase | Work | Hours |
|------|-------|------|-------|
| 2026-09-30 | Phase 4 (Contentful + email) | Integrated Contentful for the blog (delivery client, rich-text renderer, async data functions with sample-data fallback); adapted to the space's existing blogPost model; provisioned the space (fixed slug, removed junk drafts, uploaded images, seeded + published 6 posts) so 7 posts are live from Contentful; set EMAIL_TO_FIRM and verified the contact form delivers leads end-to-end | 1.5 |
| 2026-09-30 | Phase 3 (remaining pages) | Built Workers' Comp, About, Referral Partners, Contact, Newsletter, Blog and Blog Post from the client's PNG exports; extracted real photos from the PNGs and wired them via next/image (no cropping); added the referral form (route + email), newsletter form, compact case-review variant, and a sample blog data model (Contentful-ready); production build green (22 routes) | 3.5 |
| 2026-09-30 | Phase 3 (Personal Injury) | Set up PNG-crop workflow (Python/PIL) to read client design exports cheaply; built full Personal Injury page from design: hero, contact card + case-review form, "Cases we handle" list, insurer-tactics comparison table, after-accident checklist, how-it-works steps, client reviews, FAQ, final CTA; verified responsive desktop + mobile | 1.0 |
| 2026-09-30 | Phase 2 (Home) | Captured full Home design (desktop) via Chrome/Figma; built complete Home page: hero, trust bar, case-review form, practice cards, 3 steps, lemon-law value band, "keeps you informed", Google reviews carousel, FAQ accordion, blog preview, newsletter band, referral line, final CTA; reusable form/section components; Resend contact + newsletter API routes + email templates; updated Header/Footer/site config with real firm data | 2.5 |
| 2026-09-30 | Phase 0–1 | Next.js 16 + TS + Tailwind v4 scaffold; RK design tokens (colors, type ramp, radius, spacing) wired into theme; base UI (Container, Section, Button); Header w/ mobile menu, Footer, Wordmark; all 10 routes stubbed; contact/newsletter validation + env scaffolding; green build + lint | 1.5 |
| 2026-09-30 | Setup | Figma design-system extraction (tokens, type ramp), requirements review, project plan | 0.5 |

## Notes
- Design source: Figma View-seat MCP is rate-limited, so page pixels come from client PNG
  exports (or the client's Chrome session). Page frames = nodes `38:2`–`38:12`; Foundations = `41:2`.
- Stack: Next.js 16 (App Router, TS), Tailwind v4 (RK tokens), Contentful (blog), Resend (email).
- Resend API key received and stored in `.env.local` (gitignored).
