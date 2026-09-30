import { cn } from "@/lib/utils";

/** Constrains content to the RK content width with responsive page gutters. */
export function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("container-rk", className)} {...props}>
      {children}
    </div>
  );
}
