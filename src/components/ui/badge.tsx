import * as React from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

const badgeVariants: Record<BadgeVariant, string> = {
  default:
    "border-transparent bg-[rgb(var(--portfolio-accent))/20] text-[rgb(var(--portfolio-accent))] hover:bg-[rgb(var(--portfolio-accent))/30]",
  secondary:
    "border-transparent bg-[rgb(var(--portfolio-surface))] text-[rgb(var(--portfolio-fg))] hover:bg-[rgb(var(--portfolio-surface))/80]",
  destructive:
    "border-transparent bg-red-600 text-white hover:bg-red-600/80",
  outline: "border-[rgb(var(--portfolio-border))] text-[rgb(var(--portfolio-fg))]",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
