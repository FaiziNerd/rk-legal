"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Field";

type Status = "idle" | "submitting" | "success" | "error";

/** Compact email-capture form used on the Newsletter page card. */
export function NewsletterForm() {
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

  if (status === "success") {
    return (
      <p className="t-body-l font-semibold text-brand">
        You&apos;re subscribed — check your inbox to confirm.
      </p>
    );
  }

  return (
    <>
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3 sm:flex-row">
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
          className="sm:flex-1"
        />
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "…" : "Subscribe"}
        </Button>
      </form>
      {status === "error" && <p className="t-small mt-2 text-error">{error}</p>}
    </>
  );
}
