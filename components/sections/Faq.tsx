"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-divider border-t border-divider">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="t-question">{item.q}</span>
              {isOpen ? (
                <Minus className="size-5 shrink-0 text-ink" aria-hidden />
              ) : (
                <Plus className="size-5 shrink-0 text-ink" aria-hidden />
              )}
            </button>
            <div className={cn("overflow-hidden pr-10", isOpen ? "pb-6" : "hidden")}>
              <p className="t-body text-body">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
