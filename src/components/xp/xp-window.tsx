"use client";

import React from "react";
import { Minus, Square, Copy, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type XpWindowState = "normal" | "maximized" | "minimized";

interface XpWindowProps {
  id?: string;
  title: string;
  icon?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  titleBarClassName?: string;
  active?: boolean;
  maximized?: boolean;
  minimizable?: boolean;
  maximizable?: boolean;
  closable?: boolean;
  onMinimize?: () => void;
  onToggleMaximize?: () => void;
  onClose?: () => void;
  /** Extra controls rendered in the title bar, before the system buttons
   * (e.g. a "Replier" toggle for the Domains window). */
  titleBarExtra?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * A Windows XP "Luna" chrome window: blue gradient title bar with square
 * system buttons and a white reading surface underneath. Purely
 * presentational - window state (normal/maximized/minimized) is owned by
 * the caller (see `window-manager-context.tsx`), this component only
 * renders the chrome and fires the corresponding callbacks.
 */
export function XpWindow({
  id,
  title,
  icon,
  className,
  bodyClassName,
  titleBarClassName,
  active = true,
  maximized = false,
  minimizable = false,
  maximizable = false,
  closable = false,
  onMinimize,
  onToggleMaximize,
  onClose,
  titleBarExtra,
  children,
}: XpWindowProps) {
  return (
    <section
      id={id}
      aria-label={title}
      className={cn("xp-window flex flex-col", className)}
    >
      <div
        className={cn(
          "xp-titlebar",
          !active && "xp-titlebar-inactive",
          titleBarClassName,
        )}
      >
        {icon && <span className="flex h-4 w-4 items-center justify-center">{icon}</span>}
        <h2 className="min-w-0 flex-1 truncate text-[13px]">{title}</h2>
        {titleBarExtra}
        <div className="flex items-center gap-1">
          {minimizable && (
            <button
              type="button"
              aria-label="Réduire la fenêtre"
              onClick={onMinimize}
              className="xp-titlebar-btn xp-focusable"
            >
              <Minus className="h-3 w-3" strokeWidth={3} />
            </button>
          )}
          {maximizable && (
            <button
              type="button"
              aria-label={maximized ? "Restaurer la fenêtre" : "Agrandir la fenêtre"}
              onClick={onToggleMaximize}
              className="xp-titlebar-btn xp-focusable"
            >
              {maximized ? (
                <Copy className="h-3 w-3" strokeWidth={3} />
              ) : (
                <Square className="h-3 w-3" strokeWidth={3} />
              )}
            </button>
          )}
          {closable && (
            <button
              type="button"
              aria-label="Fermer la fenêtre"
              onClick={onClose}
              className="xp-titlebar-btn xp-titlebar-btn-close xp-focusable"
            >
              <X className="h-3 w-3" strokeWidth={3} />
            </button>
          )}
        </div>
      </div>
      <div className={cn("xp-window-body flex-1", bodyClassName)}>{children}</div>
    </section>
  );
}
