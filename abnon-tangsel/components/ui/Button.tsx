"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-jakarta font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-950 text-white hover:bg-emerald-900 hover:shadow-elevated hover:-translate-y-0.5 focus:ring-emerald-950",
        secondary:
          "border-2 border-emerald-950 text-emerald-950 hover:bg-emerald-950 hover:text-white focus:ring-emerald-950",
        gold: "bg-gold-500 text-white hover:bg-gold-600 hover:shadow-elevated hover:-translate-y-0.5 focus:ring-gold-500",
        ghost:
          "text-emerald-950 hover:bg-emerald-950/5 focus:ring-emerald-950",
        link: "text-emerald-950 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "px-8 py-4 text-base",
        sm: "px-6 py-3 text-sm",
        lg: "px-10 py-5 text-lg",
        icon: "h-10 w-10 p-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
