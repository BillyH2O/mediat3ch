import React from "react";
import { cn } from "@/lib/utils";

/** The XP "desktop" backdrop: Bliss-style wallpaper behind every public
 * TECH.EXE page, plus the base Tahoma / light-scheme styles for `.xp-*`. */
export function XpWallpaper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("xp-desktop xp-wallpaper", className)}>
      <div className="xp-wallpaper-bg" aria-hidden />
      <div className="xp-wallpaper-inner">{children}</div>
    </div>
  );
}
