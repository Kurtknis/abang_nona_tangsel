import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "emerald" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-jakarta uppercase tracking-wider",
        variant === "default" && "bg-neutral-light text-neutral-dark",
        variant === "gold" && "bg-gold-500/10 text-gold-600",
        variant === "emerald" && "bg-emerald-950/10 text-emerald-950",
        variant === "outline" && "border border-emerald-950/20 text-emerald-950",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
