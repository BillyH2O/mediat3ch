"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { useFavorites } from "@/hooks/use-favorites";
import { getArticlesBySlugs } from "@/content/media/queries";
import { MainWindowFrame } from "@/components/xp/main-window-frame";
import { ArticleCard } from "@/components/xp/article-card";
import { ArticlesGrid } from "@/components/xp/articles-grid";

/** Favorites are stored locally in this browser only (no account exists
 * yet in this prototype) - see `src/hooks/use-favorites.ts`. */
export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const articles = getArticlesBySlugs(favorites);

  return (
    <MainWindowFrame title="Favoris" icon={<Star className="h-3.5 w-3.5" />}>
      <div className="flex flex-col gap-5 p-3 sm:p-5">
        <div>
          <h1 className="text-2xl font-bold text-[#111]">Favoris</h1>
          <p className="mt-1 text-[13px] text-[#5a5a5a]">
            Enregistrés dans ce navigateur uniquement, via le bouton{" "}
            <span className="inline-flex items-center gap-1 font-semibold">
              <Star className="h-3.5 w-3.5" /> sur chaque article.
            </span>
          </p>
        </div>

        {articles.length > 0 ? (
          <ArticlesGrid>
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </ArticlesGrid>
        ) : (
          <div className="rounded-sm border border-dashed border-[#c4c4b0] p-6 text-center text-[13px] text-[#5a5a5a]">
            <p>Vous n&apos;avez encore aucun article enregistré.</p>
            <Link href="/" className="xp-link mt-2 inline-block font-semibold">
              Parcourir les actualités
            </Link>
          </div>
        )}
      </div>
    </MainWindowFrame>
  );
}
