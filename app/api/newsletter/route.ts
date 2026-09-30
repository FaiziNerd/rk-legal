import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation";
import { getResend, emailConfig } from "@/lib/resend";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = newsletterSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please enter a valid email." },
      { status: 422 },
    );
  }

  const { email, company } = parsed.data;
  if (company) return NextResponse.json({ ok: true }); // honeypot

  const { from, firmInbox } = emailConfig();

  try {
    const resend = getResend();

    // Notify the firm first — this is the capture that matters, and it goes to
    // an address we control (works even with Resend's shared test sender).
    if (firmInbox) {
      await resend.emails.send({
        from,
        to: firmInbox,
        subject: "New newsletter subscriber",
        text: `New subscriber: ${email}`,
      });
    }

    // Welcome email to the subscriber — best effort. Sending to an arbitrary
    // address requires a verified domain; until then this will fail, and that
    // must not fail the signup. Once EMAIL_FROM is a verified domain, it works.
    try {
      await resend.emails.send({
        from,
        to: email,
        subject: "You're subscribed to RK Legal updates",
        text: `Thanks for subscribing to ${site.name}. You'll get short, plain-language updates on California injury, lemon law and workers' comp. Unsubscribe anytime.`,
      });
    } catch (welcomeErr) {
      console.warn("[newsletter] welcome email skipped:", welcomeErr);
    }

    // TODO: also persist the subscriber (Resend Audience or Contentful).
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }
}
