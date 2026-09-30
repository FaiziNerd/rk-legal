import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { getResend, emailConfig } from "@/lib/resend";
import { clientConfirmationEmail, firmNotificationEmail } from "@/lib/emails";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
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

    // 1) Notify the firm (only if an inbox is configured).
    if (firmInbox) {
      const firmMail = firmNotificationEmail(data);
      await resend.emails.send({
        from,
        to: firmInbox,
        subject: firmMail.subject,
        html: firmMail.html,
        text: firmMail.text,
        replyTo: firmMail.replyTo,
      });
    }

    // 2) Confirmation to the client (only when they gave an email). Best effort:
    //    sending to an arbitrary address needs a verified domain, and a failure
    //    here must never lose the lead the firm was already notified about.
    if (data.email) {
      try {
        const clientMail = clientConfirmationEmail(data);
        await resend.emails.send({
          from,
          to: data.email,
          subject: clientMail.subject,
          html: clientMail.html,
          text: clientMail.text,
        });
      } catch (confirmErr) {
        console.warn("[contact] client confirmation skipped:", confirmErr);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] email send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your request. Please call us instead." },
      { status: 502 },
    );
  }
}
