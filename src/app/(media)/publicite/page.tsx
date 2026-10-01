"use client";

import { useRouter } from "next/navigation";
import { Megaphone } from "lucide-react";
import { XpWindow } from "@/components/xp/xp-window";
import { XpNavIcon } from "@/components/xp/xp-nav-icon";

/** Placeholder window for advertising / partnerships (demo). */
export default function PublicitePage() {
  const router = useRouter();

  return (
    <div className="flex flex-1 items-start justify-center py-2 sm:py-6">
      <XpWindow
        title="Publicité"
        icon={<XpNavIcon section="publicite" imgClassName="h-3.5 w-3.5" />}
        closable
        onClose={() => router.push("/")}
        className="w-full max-w-lg"
      >
        <div className="flex flex-col gap-4 p-5">
          <div className="flex items-start gap-3">
            <Megaphone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--xp-link)]" aria-hidden />
            <div>
              <h1 className="text-xl font-bold text-[#111]">Espace publicitaire</h1>
              <p className="mt-1 text-[13px] leading-relaxed text-[#5a5a5a]">
                TECH.EXE propose des emplacements visibles (barre des tâches, encarts articles, newsletter)
                pour des marques tech. Contactez-nous pour un kit média et les tarifs démo.
              </p>
            </div>
          </div>
          <p className="rounded-sm border border-[#c4c4b0] bg-[var(--xp-face-raised)] p-3 text-[13px] text-[#444]">
            <strong className="text-[#111]">contact@tech.exe</strong> — réponse sous 48 h ouvrées.
          </p>
        </div>
      </XpWindow>
    </div>
  );
}
