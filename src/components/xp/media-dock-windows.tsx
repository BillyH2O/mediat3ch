"use client";

import { usePathname } from "next/navigation";
import { NewsletterDockWindow } from "./newsletter-dock-window";

const HIDE_NEWSLETTER_DOCK = ["/newsletter"];

/** Fixed bottom-right newsletter window (desktop). */
export function MediaDockWindows() {
  const pathname = usePathname();
  if (HIDE_NEWSLETTER_DOCK.includes(pathname)) {
    return null;
  }

  return (
    <aside className="xp-media-dock-bottom hidden xl:flex" aria-label="Newsletter">
      <NewsletterDockWindow />
    </aside>
  );
}
