import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-btn border border-input bg-white px-4 py-3 t-input text-ink placeholder:text-placeholder focus-visible:border-brand focus-visible:outline-none";

export function Label({
  className,
  children,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label className={cn("t-label mb-2 block text-ink", className)} {...props}>
      {children}
    </label>
  );
}

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(fieldBase, "aria-invalid:border-error", className)}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(fieldBase, "min-h-28 resize-y aria-invalid:border-error", className)}
      {...props}
    />
  );
}

export function FieldError({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return <p className="t-small mt-1.5 text-error">{children}</p>;
}
