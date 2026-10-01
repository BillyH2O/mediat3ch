import Link from "next/link";
import { notFound } from "next/navigation";
import { FileText, ArrowLeft, User, Clock } from "lucide-react";
import { ARTICLES } from "@/content/media/articles";
import { getArticleBySlug, getDomain, getRelatedArticles } from "@/content/media/queries";
import { MainWindowFrame } from "@/components/xp/main-window-frame";
import { ArticleReader } from "@/components/xp/article-reader";
import { ArticleReadAlsoAside } from "@/components/xp/article-read-also-aside";
import { FavoriteButton } from "@/components/xp/favorite-button";
import { ShareButton } from "@/components/xp/share-button";
import { NewsletterBox } from "@/components/xp/newsletter-box";
import { formatArticleDate } from "@/lib/media-format";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const domain = getDomain(article.domain);
  const related = getRelatedArticles(article, 5);

  return (
    <MainWindowFrame title={article.title} icon={<FileText className="h-3.5 w-3.5" />}>
      <div className="xp-article-page-layout flex flex-col gap-6 p-3 sm:p-5 lg:flex-row lg:items-start lg:gap-6">
        <article className="xp-article-page-main flex min-w-0 flex-1 flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <Link
              href={domain ? `/domaine/${domain.slug}` : "/"}
              className="xp-link xp-focusable flex items-center gap-1.5 text-[13px]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Retour {domain ? `à ${domain.label}` : "à l'accueil"}
            </Link>
            <div className="flex items-center gap-2">
              <FavoriteButton slug={article.slug} title={article.title} />
              <ShareButton title={article.title} />
            </div>
          </div>

          {domain && (
            <Link href={`/domaine/${domain.slug}`} className="xp-link text-[12px] font-semibold">
              {domain.label}
            </Link>
          )}

          <h1 className="text-2xl font-bold leading-tight text-[#111] sm:text-3xl">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-4 border-b border-[#e3e3d6] pb-4 text-[13px] text-[#5a5a5a]">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              {article.author}
            </span>
            <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime} min de lecture
            </span>
          </div>

          <div className="xp-article-image aspect-[16/9] w-full max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element -- static demo assets */}
            <img src={article.image} alt="" className="h-full w-full object-cover object-center" />
          </div>

          <ArticleReader blocks={article.body} />

          <NewsletterBox />
        </article>

        <ArticleReadAlsoAside articles={related} />
      </div>
    </MainWindowFrame>
  );
}
