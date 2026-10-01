"use client";

import React from "react";
import { cn } from "@/lib/utils";

type XpInputProps = React.InputHTMLAttributes<HTMLInputElement>;

/** Windows XP style text input: inset border, sharp corners, orange
 * dashed focus ring matching the rest of the `.xp-*` chrome. */
export const XpInput = React.forwardRef<HTMLInputElement, XpInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn("xp-input focus:outline-none", className)}
        {...props}
      />
    );
  },
);
XpInput.displayName = "XpInput";
