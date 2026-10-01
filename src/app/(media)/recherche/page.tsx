"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { searchArticles } from "@/content/media/queries";
import { MainWindowFrame } from "@/components/xp/main-window-frame";
import { ArticleCard } from "@/components/xp/article-card";
import { ArticlesGrid } from "@/components/xp/articles-grid";
import { XpSearch } from "@/components/xp/xp-search";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";
  const results = query ? searchArticles(query) : [];

  return (
    <div className="flex flex-col gap-5 p-3 sm:p-5">
      <div>
        <h1 className="text-2xl font-bold text-[#111]">Rechercher</h1>
        <p className="mt-1 text-[13px] text-[#5a5a5a]">
          Retrouvez un article par titre, résumé, auteur ou domaine.
        </p>
        <div className="mt-3">
          <XpSearch />
        </div>
      </div>

      {query && (
        <p className="text-[13px] text-[#5a5a5a]">
          {results.length > 0
            ? `${results.length} résultat${results.length > 1 ? "s" : ""} pour « ${query} »`
            : `Aucun résultat pour « ${query} »`}
        </p>
      )}

      {results.length > 0 && (
        <ArticlesGrid>
          {results.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </ArticlesGrid>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <MainWindowFrame title="Résultats de recherche" icon={<Search className="h-3.5 w-3.5" />}>
      <Suspense
        fallback={<div className="p-5 text-sm text-[#5a5a5a]">Chargement de la recherche…</div>}
      >
        <SearchResults />
      </Suspense>
    </MainWindowFrame>
  );
}
