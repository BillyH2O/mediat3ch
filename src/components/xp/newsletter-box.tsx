"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Loader2, CircleCheck, CircleAlert } from "lucide-react";
import { useNewsletterSignup } from "@/hooks/use-newsletter-signup";

/** Discreet inline newsletter call-to-action shown after the article grid.
 * Shares its submit logic with the full `/newsletter` page via
 * `useNewsletterSignup` - see that hook for why "not configured" is a
 * distinct, honest state rather than a faked success. */
export function NewsletterBox() {
  const [email, setEmail] = useState("");
  const { status, errorMessage, subscribe } = useNewsletterSignup();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    subscribe(email.trim());
  }

  return (
    <div className="xp-surface-raised flex flex-col gap-2 rounded-sm border p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-2.5">
        <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--xp-link)]" />
        <div>
          <p className="text-[13px] font-semibold text-[#111]">
            Recevez l&apos;essentiel de la tech chaque semaine
          </p>
          <p className="text-[12px] text-[#5a5a5a]">
            Pas de spam, désinscription en un clic.{" "}
            <Link href="/newsletter" className="xp-link underline">
              En savoir plus
            </Link>
          </p>
        </div>
      </div>

      {status === "success" ? (
        <p className="flex items-center gap-1.5 text-[13px] font-semibold text-emerald-700">
          <CircleCheck className="h-4 w-4" />
          Merci, vérifiez votre boîte mail !
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex shrink-0 flex-col gap-1.5 sm:flex-row sm:items-start">
          <div className="flex">
            <label htmlFor="newsletter-box-email" className="sr-only">
              Adresse e-mail
            </label>
            <input
              id="newsletter-box-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vous@exemple.com"
              className="xp-input w-full rounded-l-sm rounded-r-none focus:outline-none sm:w-52"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="xp-btn xp-btn-primary xp-focusable rounded-l-none rounded-r-sm"
            >
              {status === "loading" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : "S'inscrire"}
            </button>
          </div>
          {(status === "error" || status === "not-configured") && (
            <p className="flex items-start gap-1 text-[12px] text-red-700 sm:max-w-[220px]">
              <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {errorMessage}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
