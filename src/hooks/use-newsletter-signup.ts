"use client";

import { useCallback, useState } from "react";

export type NewsletterStatus = "idle" | "loading" | "success" | "error" | "not-configured";

/**
 * Handles newsletter sign-up against `NEXT_PUBLIC_NEWSLETTER_ENDPOINT`.
 * There is no newsletter backend in this MVP yet (see
 * `backend/app/api/routes`) - when the env var isn't set, this reports
 * "not-configured" instead of faking a success, per the "no fake success"
 * requirement. Once a real endpoint exists, set that env var and this
 * starts working with no UI changes needed.
 */
export function useNewsletterSignup() {
  const [status, setStatus] = useState<NewsletterStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;

  const subscribe = useCallback(
    async (email: string) => {
      if (!endpoint) {
        setStatus("not-configured");
        setErrorMessage(
          "Le service d'inscription n'est pas encore connecté dans cet environnement (NEXT_PUBLIC_NEWSLETTER_ENDPOINT absent).",
        );
        return;
      }
      setStatus("loading");
      setErrorMessage(null);
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        if (!res.ok) {
          throw new Error(`Le service a répondu avec le statut ${res.status}.`);
        }
        setStatus("success");
      } catch (err) {
        setStatus("error");
        setErrorMessage(
          err instanceof Error ? err.message : "Une erreur inattendue est survenue.",
        );
      }
    },
    [endpoint],
  );

  const reset = useCallback(() => {
    setStatus("idle");
    setErrorMessage(null);
  }, []);

  return { status, errorMessage, subscribe, reset, isConfigured: Boolean(endpoint) };
}
