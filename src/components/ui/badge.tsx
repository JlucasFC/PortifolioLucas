import * as React from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

const badgeVariants: Record<BadgeVariant, string> = {
  default:
    "border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80",
  secondary:
    "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80",
  destructive:
    "border-transparent bg-red-600 text-white hover:bg-red-600/80",
  outline: "text-foreground",
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
