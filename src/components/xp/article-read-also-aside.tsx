import type { Article } from "@/content/media/types";
import { CompactArticle } from "./compact-article";

export function ArticleReadAlsoAside({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <aside className="xp-article-read-also-aside">
      <h2 className="xp-article-read-also-heading">À lire aussi</h2>
      <ul className="xp-article-read-also-list">
        {articles.map((item) => (
          <li key={item.slug}>
            <CompactArticle article={item} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
