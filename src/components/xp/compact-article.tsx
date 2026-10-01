import Link from "next/link";
import type { Article } from "@/content/media/types";
import { getDomain } from "@/content/media/queries";
import { cn } from "@/lib/utils";

interface CompactArticleProps {
  article: Article;
  className?: string;
}

/** A small thumbnail + title row used in the "Aussi à la une" column next
 * to the featured article. */
export function CompactArticle({ article, className }: CompactArticleProps) {
  const domain = getDomain(article.domain);

  return (
    <Link
      href={`/article/${article.slug}`}
      className={cn("xp-card xp-focusable group flex gap-3 rounded-sm p-2", className)}
    >
      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-sm bg-[#dfe6f0]">
        {/* eslint-disable-next-line @next/next/no-img-element -- static demo assets */}
        <img
          src={article.image}
          alt=""
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
        {domain && (
          <span className="truncate text-[11px] font-semibold uppercase tracking-wide text-[var(--xp-link)]">
            {domain.label}
          </span>
        )}
        <h3 className="line-clamp-2 text-[13px] font-bold leading-snug text-[var(--xp-text)]">{article.title}</h3>
      </div>
    </Link>
  );
}
