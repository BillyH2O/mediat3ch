"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Loader2, CircleCheck, CircleAlert, TriangleAlert } from "lucide-react";
import { XpWindow } from "@/components/xp/xp-window";
import { XpButton } from "@/components/xp/xp-button";
import { XpInput } from "@/components/xp/xp-input";
import { useNewsletterSignup } from "@/hooks/use-newsletter-signup";

/**
 * Full newsletter sign-up window. Shares `useNewsletterSignup` with the
 * inline `NewsletterBox` shown after article lists - see that hook for why
 * a missing endpoint is reported honestly rather than faking a success.
 */
export default function NewsletterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const { status, errorMessage, subscribe, reset } = useNewsletterSignup();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    subscribe(email.trim());
  }

  return (
    <div className="flex flex-1 items-start justify-center py-2 sm:py-6">
      <XpWindow
        title="Newsletter TECH.EXE"
        icon={<Mail className="h-3.5 w-3.5" />}
        closable
        onClose={() => router.push("/")}
        className="w-full max-w-lg"
      >
        <div className="flex flex-col gap-4 p-5">
          <div>
            <h1 className="text-xl font-bold text-[#111]">Recevez l&apos;essentiel de la tech</h1>
            <p className="mt-1 text-[13px] text-[#5a5a5a]">
              Un e-mail par semaine : IA, robotique, startups, hardware, cybersécurité et XR/VR.
              Pas de spam, désinscription en un clic.
            </p>
          </div>

          {status === "success" ? (
            <div className="flex items-start gap-2 rounded-sm border border-emerald-300 bg-emerald-50 p-3 text-[13px] text-emerald-800">
              <CircleCheck className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                Merci ! Vérifiez votre boîte mail ({email}) pour confirmer votre inscription.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <label htmlFor="newsletter-email" className="text-[13px] font-semibold text-[#111]">
                Adresse e-mail
              </label>
              <XpInput
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") reset();
                }}
                placeholder="vous@exemple.com"
                className="w-full"
              />

              {status === "not-configured" && (
                <div className="flex items-start gap-2 rounded-sm border border-amber-300 bg-amber-50 p-3 text-[13px] text-amber-900">
                  <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-start gap-2 rounded-sm border border-red-300 bg-red-50 p-3 text-[13px] text-red-800">
                  <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <XpButton type="submit" variant="primary" disabled={status === "loading"} className="self-start">
                {status === "loading" ? (
                  <span className="flex items-center gap-1.5">
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    Inscription…
                  </span>
                ) : (
                  "S'inscrire"
                )}
              </XpButton>
            </form>
          )}
        </div>
      </XpWindow>
    </div>
  );
}
