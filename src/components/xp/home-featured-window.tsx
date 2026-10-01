"use client";

import { Newspaper } from "lucide-react";
import type { Article } from "@/content/media/types";
import { getDomain } from "@/content/media/queries";
import { FeaturedArticle } from "./featured-article";
import { SectionWindow } from "./section-window";

export function HomeFeaturedWindow({ article }: { article: Article }) {
  const domain = getDomain(article.domain);
  const title = domain ? `À la une — ${domain.label}` : "À la une";

  return (
    <SectionWindow title={title} icon={<Newspaper className="h-3.5 w-3.5" aria-hidden />}>
      <FeaturedArticle article={article} />
    </SectionWindow>
  );
}
