import { BookOpen } from "lucide-react";
import { getArticlesByFormat } from "@/content/media/queries";
import { MainWindowFrame } from "@/components/xp/main-window-frame";
import { ArticleCard } from "@/components/xp/article-card";
import { ArticlesGrid } from "@/components/xp/articles-grid";
import { NewsletterBox } from "@/components/xp/newsletter-box";

export default function GuidePage() {
  const guides = getArticlesByFormat("guide");

  return (
    <MainWindowFrame title="Guides" icon={<BookOpen className="h-3.5 w-3.5" />}>
      <div className="flex flex-col gap-5 p-3 sm:p-5">
        <div>
          <h1 className="text-2xl font-bold text-[#111]">Guides</h1>
          <p className="mt-1 text-[13px] text-[#5a5a5a]">
            Nos articles au format guide et tutoriel, tous domaines confondus.
          </p>
        </div>

        {guides.length > 0 ? (
          <ArticlesGrid>
            {guides.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </ArticlesGrid>
        ) : (
          <p className="text-[13px] text-[#5a5a5a]">Aucun guide disponible pour le moment.</p>
        )}

        <NewsletterBox />
      </div>
    </MainWindowFrame>
  );
}
