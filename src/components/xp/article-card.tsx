import Link from "next/link";
import { Clock } from "lucide-react";
import type { Article } from "@/content/media/types";
import { WindowDots } from "./window-dots";
import { getDomain } from "@/content/media/queries";
import { formatArticleDateShort } from "@/lib/media-format";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  className?: string;
}

/** A single card in the "Les derniers articles" grid (3 per row on large
 * screens, per spec): styled as a tiny XP window (blue title strip with
 * category/date + decorative system dots, beveled image, cream body).
 * Server-renderable - no interactivity of its own. */
export function ArticleCard({ article, className }: ArticleCardProps) {
  const domain = getDomain(article.domain);

  return (
    <Link
      href={`/article/${article.slug}`}
      className={cn("xp-article-window xp-focusable group", className)}
    >
      <div className="xp-article-titlebar">
        <span className="xp-article-titlebar-label">{domain?.label}</span>
        <span className="xp-article-titlebar-date">{formatArticleDateShort(article.publishedAt)}</span>
        <WindowDots />
      </div>
      <div className="xp-article-image aspect-[16/10] w-full">
        {/* eslint-disable-next-line @next/next/no-img-element -- static demo assets, no remote optimization needed */}
        <img
          src={article.image}
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <div className="xp-article-body">
        <h3 className="text-[15px] font-bold leading-snug text-[var(--xp-text)]">{article.title}</h3>
        <p className="line-clamp-2 text-[13px] leading-relaxed text-[var(--xp-text-muted)]">{article.excerpt}</p>
        <div className="xp-article-meta text-[12px] text-[#4a4a4a]">
          <Clock className="h-3.5 w-3.5" />
          <span>{article.readTime} min de lecture</span>
        </div>
      </div>
    </Link>
  );
}
