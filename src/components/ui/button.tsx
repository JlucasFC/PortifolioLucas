import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-[rgb(var(--portfolio-accent))] text-black hover:bg-[rgb(var(--portfolio-accent))/85]",
  destructive: "bg-red-600 text-white hover:bg-red-500",
  outline:
    "border border-[rgb(var(--portfolio-border))] bg-black/25 text-[rgb(var(--portfolio-fg))] hover:bg-black/40",
  secondary:
    "bg-[rgb(var(--portfolio-surface))] text-[rgb(var(--portfolio-fg))] hover:bg-[rgb(var(--portfolio-surface))/85]",
  ghost: "text-[rgb(var(--portfolio-fg))] hover:bg-black/30",
  link: "text-[rgb(var(--portfolio-accent))] underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[rgb(var(--portfolio-accent))] disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
