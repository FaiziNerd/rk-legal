import { site, formattedAddress } from "./site";
import type { ContactInput, ReferralInput } from "./validation";

const wrap = (inner: string) => `
  <div style="font-family:Figtree,Arial,sans-serif;color:#3B4A43;line-height:1.6;max-width:560px;margin:0 auto;padding:24px">
    <div style="font-weight:700;letter-spacing:3px;color:#1E2B25;font-size:18px;text-transform:uppercase">${site.name}</div>
    <div style="color:#55635C;font-size:13px;margin-bottom:24px">${site.legalName}</div>
    ${inner}
    <hr style="border:none;border-top:1px solid #DCE3DE;margin:28px 0" />
    <div style="color:#6B7872;font-size:12px">
      ${site.name} · ${formattedAddress}<br/>
      ${site.phone} · ${site.email}<br/>
      No result is guaranteed. This message is not legal advice and does not create an attorney-client relationship.
    </div>
  </div>`;

/** Confirmation email sent to the person who submitted the form (if email given). */
export function clientConfirmationEmail(data: ContactInput) {
  const html = wrap(`
    <h1 style="color:#1E2B25;font-size:22px;margin:0 0 12px">Thanks, ${escapeHtml(data.name)} — we got your request</h1>
    <p style="margin:0 0 16px">A member of our team will call you back at <strong>${escapeHtml(
      data.phone,
    )}</strong>. Your case review is free, and there's no pressure to sign anything.</p>
    <p style="margin:0 0 16px">If it's urgent, you can reach us directly at
      <a href="${site.phoneHref}" style="color:#2F6B4E">${site.phone}</a>.</p>
    <p style="margin:0;color:#55635C">We speak ${site.languages}.</p>
  `);
  return {
    subject: "We received your free case review request",
    html,
    text: `Thanks, ${data.name} — we got your request. We'll call you back at ${data.phone}. Free case review, no pressure. Call us at ${site.phone}.`,
  };
}

/** Notification email sent to the firm inbox. */
export function firmNotificationEmail(data: ContactInput) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email || "—"],
    ["What happened", data.whatHappened ?? "—"],
    ...(data.carType ? ([["Car type", data.carType]] as [string, string][]) : []),
    ["When", data.whenHappened ?? "—"],
    ["Message", data.message || "—"],
  ];
  const table = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#55635C;vertical-align:top;white-space:nowrap">${k}</td><td style="padding:6px 0;color:#1E2B25">${escapeHtml(
          v,
        )}</td></tr>`,
    )
    .join("");
  const html = wrap(`
    <h1 style="color:#1E2B25;font-size:22px;margin:0 0 12px">New case review request</h1>
    <table style="border-collapse:collapse;font-size:15px">${table}</table>
  `);
  return {
    subject: `New case review: ${data.name}`,
    html,
    text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
    replyTo: data.email || undefined,
  };
}

/** Notification email for a referral request sent to the firm inbox. */
export function referralNotificationEmail(data: ReferralInput) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Needs help with", data.needHelp ?? "—"],
    ["Message", data.message || "—"],
  ];
  const table = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#55635C;vertical-align:top;white-space:nowrap">${k}</td><td style="padding:6px 0;color:#1E2B25">${escapeHtml(
          v,
        )}</td></tr>`,
    )
    .join("");
  const html = wrap(`
    <h1 style="color:#1E2B25;font-size:22px;margin:0 0 12px">New referral request</h1>
    <table style="border-collapse:collapse;font-size:15px">${table}</table>
  `);
  return {
    subject: `New referral request: ${data.name}`,
    html,
    text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
  };
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br/>");
}
