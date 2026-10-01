"use client";

import { Star } from "lucide-react";
import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  slug: string;
  title: string;
  className?: string;
  /** Shows the "Enregistré" / "Enregistrer" label next to the star. */
  withLabel?: boolean;
}

/** Toggles an article as favorite, persisted locally (see `useFavorites`).
 * No account exists in this prototype, so this is intentionally
 * browser-scoped rather than synced to a server. */
export function FavoriteButton({ slug, title, className, withLabel = false }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(slug);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(slug)}
      aria-pressed={active}
      aria-label={active ? `Retirer « ${title} » des favoris` : `Ajouter « ${title} » aux favoris`}
      className={cn(
        "xp-btn xp-focusable flex items-center gap-1.5",
        active && "border-amber-600 bg-amber-100",
        className,
      )}
    >
      <Star className={cn("h-3.5 w-3.5", active && "fill-amber-500 text-amber-600")} />
      {withLabel && <span>{active ? "Enregistré" : "Enregistrer"}</span>}
    </button>
  );
}
