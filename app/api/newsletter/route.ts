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

    // Welcome / confirmation to the subscriber.
    await resend.emails.send({
      from,
      to: email,
      subject: "You're subscribed to RK Legal updates",
      text: `Thanks for subscribing to ${site.name}. You'll get short, plain-language updates on California injury, lemon law and workers' comp. Unsubscribe anytime.`,
    });

    // Optional internal notification.
    if (firmInbox) {
      await resend.emails.send({
        from,
        to: firmInbox,
        subject: "New newsletter subscriber",
        text: `New subscriber: ${email}`,
      });
    }

    // TODO (Phase 4): also persist the subscriber (Resend Audience or Contentful).
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }
}
