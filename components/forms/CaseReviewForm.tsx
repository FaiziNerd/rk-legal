"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { OptionChip } from "@/components/ui/OptionChip";
import { Label, Input, Textarea, FieldError } from "@/components/ui/Field";
import { WHAT_HAPPENED, WHEN_HAPPENED, CAR_TYPE } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

export function CaseReviewForm({
  showEmail = false,
  defaultWhatHappened = null,
  whenLabel = "When did it happen?",
  showCarType = false,
  compact = false,
}: {
  /** Show an email field so the client also receives a confirmation email. */
  showEmail?: boolean;
  /** Pre-select a "What happened?" chip (e.g. "Lemon car" on the lemon-law page). */
  defaultWhatHappened?: (typeof WHAT_HAPPENED)[number] | null;
  /** Label for the timing step (lemon law asks "When did the problems start?"). */
  whenLabel?: string;
  /** Show the "What kind of car?" step (lemon law only). */
  showCarType?: boolean;
  /** Name + phone only, for tight sidebars (blog post). */
  compact?: boolean;
}) {
  const [whatHappened, setWhatHappened] = useState<string | null>(
    defaultWhatHappened,
  );
  const [carType, setCarType] = useState<string | null>(null);
  const [whenHappened, setWhenHappened] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      whatHappened: whatHappened ?? undefined,
      carType: carType ?? undefined,
      whenHappened: whenHappened ?? undefined,
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
      company: String(fd.get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
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
      setWhatHappened(defaultWhatHappened);
      setCarType(null);
      setWhenHappened(null);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-divider bg-tint p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-brand" aria-hidden />
        <h3 className="t-h3 mt-4">Thanks — we&apos;ll call you back</h3>
        <p className="t-body mt-2 text-body">
          Your request is in. A member of our team will reach out shortly. It&apos;s
          free, with no pressure to sign anything.
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

      {!compact && (
        <fieldset>
          <legend className="t-label mb-2 block text-ink">What happened?</legend>
          <div className="flex flex-wrap gap-2.5">
            {WHAT_HAPPENED.map((option) => (
              <OptionChip
                key={option}
                selected={whatHappened === option}
                onClick={() =>
                  setWhatHappened((v) => (v === option ? null : option))
                }
              >
                {option}
              </OptionChip>
            ))}
          </div>
        </fieldset>
      )}

      {!compact && showCarType && (
        <fieldset>
          <legend className="t-label mb-2 block text-ink">
            What kind of car?
          </legend>
          <div className="flex flex-wrap gap-2.5">
            {CAR_TYPE.map((option) => (
              <OptionChip
                key={option}
                selected={carType === option}
                onClick={() => setCarType((v) => (v === option ? null : option))}
              >
                {option}
              </OptionChip>
            ))}
          </div>
        </fieldset>
      )}

      {!compact && (
        <fieldset>
          <legend className="t-label mb-2 block text-ink">{whenLabel}</legend>
          <div className="flex flex-wrap gap-2.5">
            {WHEN_HAPPENED.map((option) => (
              <OptionChip
                key={option}
                selected={whenHappened === option}
                onClick={() =>
                  setWhenHappened((v) => (v === option ? null : option))
                }
              >
                {option}
              </OptionChip>
            ))}
          </div>
        </fieldset>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" placeholder="Maria Lopez" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(760) 555-0142"
            required
            autoComplete="tel"
          />
        </div>
      </div>

      {showEmail && (
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="maria@example.com"
            autoComplete="email"
          />
        </div>
      )}

      {!compact && (
        <div>
          <Label htmlFor="message">Anything else? (optional)</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Rear-ended on the I-15 last Tuesday. Their insurance keeps calling me."
          />
        </div>
      )}

      <div>
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request my free review"}
        </Button>
        <FieldError>{status === "error" ? error : null}</FieldError>
        <p className="t-fine-print mt-3 max-w-lg">
          By sending this, you agree we can call or text you about your case.
          Message and data rates may apply. This form doesn&apos;t make us your
          lawyers yet.
        </p>
      </div>
    </form>
  );
}
