"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Field";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterBand({
  heading = "Know your rights, in plain language",
  subtext = "Short updates on California injury, lemon law and workers' comp. Unsubscribe anytime.",
}: {
  heading?: string;
  subtext?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(fd.get("email") ?? ""),
          company: String(fd.get("company") ?? ""),
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="rounded-card bg-tint px-6 py-10 md:px-12 md:py-14">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="t-h2">{heading}</h2>
          <p className="t-body-l mt-3 text-body">{subtext}</p>
        </div>
        {status === "success" ? (
          <p className="t-body-l text-brand md:justify-self-end">
            You&apos;re subscribed — check your inbox to confirm.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="flex w-full flex-col gap-3 sm:flex-row md:justify-end"
          >
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <Input
              name="email"
              type="email"
              required
              placeholder="Your email address"
              aria-label="Your email address"
              className="sm:max-w-xs"
            />
            <Button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "…" : "Subscribe"}
            </Button>
          </form>
        )}
      </div>
      {status === "error" && <p className="t-small mt-3 text-error">{error}</p>}
    </div>
  );
}
