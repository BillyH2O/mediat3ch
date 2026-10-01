"use client";

import type { ReactNode } from "react";
import { XpWindow } from "./xp-window";
import { cn } from "@/lib/utils";

interface SectionWindowProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

/** Secondary XP window on a page (À la une, listes d'articles, etc.). */
export function SectionWindow({ title, icon, children, className, bodyClassName }: SectionWindowProps) {
  return (
    <XpWindow
      title={title}
      icon={icon}
      className={cn("xp-section-window w-full", className)}
      bodyClassName={cn("xp-section-window-body min-h-0", bodyClassName)}
      minimizable
      maximizable
      closable
    >
      {children}
    </XpWindow>
  );
}
