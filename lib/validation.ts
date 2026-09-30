import { z } from "zod";

/** Contact form — validated on both client and server. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30),
  matter: z
    .enum(["personal-injury", "lemon-law", "workers-comp", "other"])
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little about what happened.")
    .max(4000),
  // Honeypot — must stay empty. Bots tend to fill every field.
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Newsletter signup. */
export const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email."),
  company: z.string().max(0).optional(), // honeypot
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
