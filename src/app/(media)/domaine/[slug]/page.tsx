import { notFound } from "next/navigation";
import { getArticleDomains, getArticlesByDomain, getDomain } from "@/content/media/queries";
import { MainWindowFrame } from "@/components/xp/main-window-frame";
import { ArticleCard } from "@/components/xp/article-card";
import { ArticlesGrid } from "@/components/xp/articles-grid";
import { NewsletterBox } from "@/components/xp/newsletter-box";
import { DOMAIN_ICONS } from "@/components/xp/domain-icons";

export function generateStaticParams() {
  return getArticleDomains().map((d) => ({ slug: d.slug }));
}

export default async function DomainPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const domain = getDomain(slug);
  if (!domain || domain.slug === "toute-actu") {
    notFound();
  }

  const articles = getArticlesByDomain(domain.slug);
  const Icon = DOMAIN_ICONS[domain.icon];

  return (
    <MainWindowFrame title={domain.label} icon={<Icon className="h-3.5 w-3.5" />}>
      <div className="flex flex-col gap-5 p-3 sm:p-5">
        <div>
          <h1 className="text-2xl font-bold text-[#111]">{domain.label}</h1>
          <p className="text-[13px] text-[#5a5a5a]">{domain.description}</p>
        </div>

        {articles.length > 0 ? (
          <ArticlesGrid>
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </ArticlesGrid>
        ) : (
          <p className="text-[13px] text-[#5a5a5a]">
            Aucun article dans ce domaine pour le moment.
          </p>
        )}

        <NewsletterBox />
      </div>
    </MainWindowFrame>
  );
}
