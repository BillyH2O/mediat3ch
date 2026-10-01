"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShareButtonProps {
  title: string;
  url?: string;
  className?: string;
}

/** Uses the native Web Share API when available (mobile browsers mostly),
 * and falls back to copying the link to the clipboard otherwise. */
export function ShareButton({ title, url, className }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const shareUrl = url ?? window.location.href;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url: shareUrl });
        return;
      } catch {
        // User cancelled the native share sheet - not an error.
        return;
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable - nothing more we can do in this prototype.
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className={cn("xp-btn xp-focusable flex items-center gap-1.5", className)}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Share2 className="h-3.5 w-3.5" />}
      <span>{copied ? "Lien copié" : "Partager"}</span>
    </button>
  );
}
