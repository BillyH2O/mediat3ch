"use client";

import { useState } from "react";
import Link from "next/link";
import { CircleAlert, CircleCheck, Loader2 } from "lucide-react";
import { useNewsletterSignup } from "@/hooks/use-newsletter-signup";
import { XpNavIcon } from "./xp-nav-icon";
import { XpWindow } from "./xp-window";

/** Compact newsletter signup docked bottom-right (above social window). */
export function NewsletterDockWindow() {
  const [email, setEmail] = useState("");
  const { status, errorMessage, subscribe } = useNewsletterSignup();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    subscribe(email.trim());
  }

  return (
    <XpWindow
      title="Newsletter"
      icon={<XpNavIcon section="newsletter" imgClassName="h-3.5 w-3.5" />}
      bodyClassName="xp-dock-window-body"
      className="xp-dock-window"
      minimizable
      maximizable
      closable
    >
      <div className="flex flex-col gap-2 p-1">
        <p className="text-[12px] leading-snug text-[var(--xp-text-muted)]">
          L&apos;essentiel tech chaque semaine.{" "}
          <Link href="/newsletter" className="xp-link text-[11px] font-semibold underline">
            Détails
          </Link>
        </p>
        {status === "success" ? (
          <p className="flex items-center gap-1.5 text-[12px] font-semibold text-emerald-800">
            <CircleCheck className="h-3.5 w-3.5 shrink-0" />
            Merci !
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
            <label htmlFor="newsletter-dock-email" className="sr-only">
              Adresse e-mail
            </label>
            <input
              id="newsletter-dock-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vous@exemple.com"
              className="xp-input w-full text-[12px]"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="xp-btn xp-btn-primary xp-focusable w-full text-[12px]"
            >
              {status === "loading" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : "S'inscrire"}
            </button>
            {(status === "error" || status === "not-configured") && (
              <p className="flex items-start gap-1 text-[11px] text-red-700">
                <CircleAlert className="mt-0.5 h-3 w-3 shrink-0" />
                {errorMessage}
              </p>
            )}
          </form>
        )}
      </div>
    </XpWindow>
  );
}
