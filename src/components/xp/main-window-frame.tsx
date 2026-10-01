"use client";

import React from "react";
import { XpWindow } from "./xp-window";
import { useWindowManager } from "./window-manager-context";
import { cn } from "@/lib/utils";

interface MainWindowFrameProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

/**
 * Wraps every "browsable" page (home, a domain, an article, search results,
 * favorites, guides) in the main XP window chrome, wired to the shared
 * window-manager state. This is the one window that must always stay
 * reachable: minimizing it replaces the window with a small clickable
 * desktop icon (never removes access to it entirely).
 */
export function MainWindowFrame({ title, icon, children, className, bodyClassName }: MainWindowFrameProps) {
  const { mainWindowState, toggleMainMaximize, minimizeMain, openMain } = useWindowManager();

  if (mainWindowState === "minimized") {
    return (
      <div className="flex min-h-[320px] flex-1 items-start justify-start p-4">
        <button
          type="button"
          onClick={openMain}
          className="xp-focusable flex flex-col items-center gap-1.5 rounded p-2 text-center hover:bg-white/10"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded border border-xp-border bg-white shadow-[var(--xp-shadow)]">
            {icon}
          </span>
          <span className="max-w-[96px] text-xs font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            {title}
          </span>
        </button>
      </div>
    );
  }

  return (
    <XpWindow
      title={title}
      icon={icon}
      maximized={mainWindowState === "maximized"}
      minimizable
      maximizable
      closable
      onMinimize={minimizeMain}
      onToggleMaximize={toggleMainMaximize}
      className={cn("xp-main-window-height flex-1", className)}
      bodyClassName={cn("xp-main-window-body min-h-0 overflow-y-auto", bodyClassName)}
    >
      {children}
    </XpWindow>
  );
}
