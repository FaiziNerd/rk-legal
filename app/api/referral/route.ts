import { NextResponse } from "next/server";
import { referralSchema } from "@/lib/validation";
import { getResend, emailConfig } from "@/lib/resend";
import {
  referralNotificationEmail,
  referralConfirmationEmail,
} from "@/lib/emails";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = referralSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again.", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot: silently succeed for bots without sending anything.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const { from, firmInbox } = emailConfig();

  try {
    const resend = getResend();

    // Notify the firm (to an address we control).
    if (firmInbox) {
      const mail = referralNotificationEmail(data);
      await resend.emails.send({
        from,
        to: firmInbox,
        subject: mail.subject,
        html: mail.html,
        text: mail.text,
      });
    }

    // Confirmation to the client — best effort (needs a verified domain to
    // reach arbitrary addresses; must not fail the request).
    try {
      const clientMail = referralConfirmationEmail(data);
      await resend.emails.send({
        from,
        to: data.email,
        subject: clientMail.subject,
        html: clientMail.html,
        text: clientMail.text,
      });
    } catch (confirmErr) {
      console.warn("[referral] client confirmation skipped:", confirmErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[referral] email send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your request. Please call us instead." },
      { status: 502 },
    );
  }
}
