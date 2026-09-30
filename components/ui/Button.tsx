import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-semibold transition-colors disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary:
    "bg-white text-ink border border-chip hover:border-ink hover:bg-tint",
  ghost: "bg-transparent text-brand hover:bg-tint",
};

const sizes: Record<Size, string> = {
  md: "t-button h-11 px-5",
  lg: "t-button-l h-13 px-6",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ComponentProps<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.ComponentProps<typeof Link>, keyof CommonProps | "href"> & {
    href: string;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    base,
    variants[props.variant ?? "primary"],
    sizes[props.size ?? "md"],
    props.className,
  );

  if ("href" in props && props.href !== undefined) {
    const { variant, size, className, children, href, ...rest } = props;
    void variant;
    void size;
    void className;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant, size, className, children, ...rest } = props;
  void variant;
  void size;
  void className;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
