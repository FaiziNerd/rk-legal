import { cn } from "@/lib/utils";

/** Selectable pill used for the "What happened / When" choices. */
export function OptionChip({
  selected,
  className,
  children,
  ...props
}: React.ComponentProps<"button"> & { selected?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn(
        "t-button rounded-btn border px-4 py-2.5 transition-colors",
        selected
          ? "border-brand bg-brand text-white"
          : "border-chip bg-white text-ink hover:border-ink",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
