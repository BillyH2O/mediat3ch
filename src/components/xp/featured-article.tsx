import Link from "next/link";
import { Clock, User } from "lucide-react";
import type { Article } from "@/content/media/types";
import { FavoriteButton } from "./favorite-button";

/** Featured hero content (inside a `SectionWindow` on the home page). */
export function FeaturedArticle({ article }: { article: Article }) {
  return (
    <div className="xp-featured-panel">
      <div className="xp-featured-layout flex flex-col sm:flex-row">
        <div className="xp-article-image xp-featured-image w-full shrink-0 sm:w-[46%]">
          {/* eslint-disable-next-line @next/next/no-img-element -- static demo assets */}
          <img src={article.image} alt="" className="h-full w-full object-cover object-center" />
        </div>

        <div className="xp-featured-copy flex flex-1 flex-col gap-2 p-3 sm:gap-2.5 sm:p-4">
          <h2 className="text-xl font-bold leading-snug text-[var(--xp-text)] sm:text-[1.35rem] sm:leading-tight">
            {article.title}
          </h2>
          <p className="line-clamp-3 text-[14px] leading-snug text-[var(--xp-text-muted)] sm:line-clamp-4">
            {article.excerpt}
          </p>
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-1 text-[12px] text-[#4a4a4a]">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime} min de lecture
            </span>
          </div>
        </div>
      </div>

      <div className="xp-toolbar-band xp-featured-footer flex flex-wrap items-center gap-2 border-t border-[#aca899] px-3 py-2 sm:px-4">
        <Link
          href={`/article/${article.slug}`}
          className="xp-btn xp-btn-primary xp-focusable"
        >
          Lire l&apos;article
        </Link>
        <FavoriteButton slug={article.slug} title={article.title} />
      </div>
    </div>
  );
}
