"use client";

import { useState } from "react";
import {
  NAV_SECTION_LUCIDE_FALLBACKS,
  type NavSectionKey,
  navSectionIconSrc,
} from "./nav-icons";
import { cn } from "@/lib/utils";

interface XpNavIconProps {
  section: NavSectionKey;
  className?: string;
  imgClassName?: string;
}

/** Navbar / shortcut icon: PNG from `/public/icon/` when available, else Lucide. */
export function XpNavIcon({ section, className, imgClassName }: XpNavIconProps) {
  const primary = navSectionIconSrc(section);
  const [useLucide, setUseLucide] = useState(primary === null);
  const Fallback = NAV_SECTION_LUCIDE_FALLBACKS[section];

  if (useLucide || !primary) {
    return (
      <Fallback
        className={cn("shrink-0", imgClassName, className)}
        size={22}
        strokeWidth={2}
        aria-hidden
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static XP icons in /public/icon
    <img
      src={primary}
      alt=""
      suppressHydrationWarning
      className={cn("xp-nav-icon shrink-0", imgClassName, className)}
      onError={() => setUseLucide(true)}
    />
  );
}
