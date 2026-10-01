"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface XpButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary";
}

/** A Windows XP "Luna" style button: beveled face, subtle gradient, and a
 * clearly visible focus ring for keyboard navigation. */
export const XpButton = React.forwardRef<HTMLButtonElement, XpButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "xp-btn xp-focusable",
          variant === "primary" && "xp-btn-primary",
          "disabled:cursor-not-allowed disabled:opacity-60",
          className,
        )}
        {...props}
      />
    );
  },
);
XpButton.displayName = "XpButton";
