import { getFeaturedArticle, getLatestArticles } from "@/content/media/queries";
import { ArticleCard } from "@/components/xp/article-card";
import { HomeFeaturedWindow } from "@/components/xp/home-featured-window";
import { HomeLatestArticlesWindow } from "@/components/xp/home-latest-articles-window";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles({ excludeSlug: featured.slug, limit: 12 });

  return (
    <div className="xp-home-windows flex min-h-0 w-full flex-1 flex-col gap-5 sm:gap-6">
      <HomeFeaturedWindow article={featured} />

      <HomeLatestArticlesWindow>
        {latest.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </HomeLatestArticlesWindow>
    </div>
  );
}
