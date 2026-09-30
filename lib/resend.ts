import { Resend } from "resend";
import { optionalEnv, requireEnv } from "./env";

let client: Resend | null = null;

/** Lazily construct the Resend client so builds without a key don't crash. */
export function getResend(): Resend {
  if (!client) {
    client = new Resend(requireEnv("RESEND_API_KEY"));
  }
  return client;
}

/**
 * Sender/recipient config.
 * EMAIL_FROM must be a verified Resend domain in production. Until the firm's
 * domain is verified, Resend's shared onboarding sender works for testing.
 */
export function emailConfig() {
  return {
    from: optionalEnv("EMAIL_FROM") ?? "Romero Kucerkova Law <onboarding@resend.dev>",
    firmInbox: optionalEnv("EMAIL_TO_FIRM"),
  };
}
