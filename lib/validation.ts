import { z } from "zod";

export const WHAT_HAPPENED = [
  "Car accident",
  "Motorcycle",
  "Truck",
  "Uber or Lyft",
  "Hurt at work",
  "Pedestrian",
  "Dog bite",
  "Slip and fall",
  "Lemon car",
  "Something else",
] as const;

export const WHEN_HAPPENED = [
  "This week",
  "This month",
  "This year",
  "Over a year ago",
] as const;

/** Vehicle type — only asked on the lemon-law case-review form. */
export const CAR_TYPE = ["New", "Used under warranty", "Leased"] as const;

/**
 * Case-review / contact form.
 * Mirrors the Figma form: what happened, when, name, phone, optional message.
 * Email is optional on the quick form; when provided we also send the client a
 * confirmation. The Contact page collects it so clients get that confirmation.
 */
export const contactSchema = z.object({
  whatHappened: z.enum(WHAT_HAPPENED).optional(),
  whenHappened: z.enum(WHEN_HAPPENED).optional(),
  carType: z.enum(CAR_TYPE).optional(),
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(30),
  email: z.string().trim().email("Please enter a valid email."),
  message: z.string().trim().max(4000).optional(),
  // Honeypot — must stay empty.
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Newsletter signup. */
export const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email."),
  company: z.string().max(0).optional(), // honeypot
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

/** Referral request — areas outside the firm's own practice. */
export const REFERRAL_TOPICS = [
  "Immigration",
  "Employment",
  "DUI",
  "Criminal defense",
  "Divorce",
  "Family law",
  "Business",
  "Litigation",
  "Estate planning, wills and trusts",
  "Something else",
] as const;

/**
 * Referral form on the Referral partners page.
 * Mirrors the Figma form: what you need help with, name, phone.
 */
export const referralSchema = z.object({
  needHelp: z.enum(REFERRAL_TOPICS).optional(),
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(30),
  email: z.string().trim().email("Please enter a valid email."),
  message: z.string().trim().max(4000).optional(),
  // Honeypot — must stay empty.
  company: z.string().max(0).optional(),
});

export type ReferralInput = z.infer<typeof referralSchema>;
