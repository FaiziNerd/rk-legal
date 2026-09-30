"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { OptionChip } from "@/components/ui/OptionChip";
import { Label, Input, FieldError } from "@/components/ui/Field";
import { REFERRAL_TOPICS } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

export function ReferralForm() {
  const [needHelp, setNeedHelp] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      needHelp: needHelp ?? undefined,
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
      company: String(fd.get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }
      setStatus("success");
      form.reset();
      setNeedHelp(null);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-divider bg-tint p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-brand" aria-hidden />
        <h3 className="t-h3 mt-4">Thanks — we&apos;ll be in touch</h3>
        <p className="t-body mt-2 text-body">
          We&apos;ll call you back with the name of a firm we trust. The referral
          is free, and there&apos;s no obligation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <fieldset>
        <legend className="t-label mb-2 block text-ink">
          What do you need help with?
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {REFERRAL_TOPICS.map((option) => (
            <OptionChip
              key={option}
              selected={needHelp === option}
              onClick={() => setNeedHelp((v) => (v === option ? null : option))}
            >
              {option}
            </OptionChip>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="ref-name">Your name</Label>
          <Input
            id="ref-name"
            name="name"
            placeholder="Maria Lopez"
            required
            autoComplete="name"
          />
        </div>
        <div>
          <Label htmlFor="ref-phone">Phone number</Label>
          <Input
            id="ref-phone"
            name="phone"
            type="tel"
            placeholder="(760) 555-0142"
            required
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="ref-email">Email</Label>
        <Input
          id="ref-email"
          name="email"
          type="email"
          placeholder="maria@example.com"
          required
          autoComplete="email"
        />
      </div>

      <div>
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request a referral"}
        </Button>
        <FieldError>{status === "error" ? error : null}</FieldError>
        <p className="t-fine-print mt-3 max-w-lg">
          By sending this, you agree we can call or text you about your referral.
          Message and data rates may apply. Sending this form doesn&apos;t make us
          your lawyers.
        </p>
      </div>
    </form>
  );
}
