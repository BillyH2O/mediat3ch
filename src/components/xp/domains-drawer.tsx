"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ExplorerFolderPane } from "./explorer-folder-pane";

interface DomainsDrawerProps {
  open: boolean;
  onClose: () => void;
}

/** Mobile fullscreen sidebar — `ExplorerFolderPane` only (no XP window chrome). */
export function DomainsDrawer({ open, onClose }: DomainsDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a.xp-focusable");
    firstLink?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      id="xp-mobile-explorer"
      className="xp-mobile-explorer-shell"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
    >
      <div ref={panelRef} className="xp-mobile-explorer-pane xp-explorer-window-body">
        <ExplorerFolderPane onNavigate={onClose} showSocialLinks />
      </div>
    </div>,
    document.body,
  );
}
