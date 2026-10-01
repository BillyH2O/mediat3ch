import { ARTICLES, ARTICLES_BY_SLUG } from "./articles";
import { ARTICLE_DOMAINS, DOMAINS, getDomain } from "./domains";
import { LIVE_ITEMS } from "./live";
import { TOOLS } from "./tools";
import type { Article, ArticleFormat } from "./types";

/**
 * Single access point the UI layer talks to for demo content. Keeping every
 * read here means a future real API integration only has to change the
 * implementations below, not any component.
 */

function byDateDesc(a: Article, b: Article): number {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}

export function getAllArticles(): Article[] {
  return [...ARTICLES].sort(byDateDesc);
}

export function getFeaturedArticle(): Article {
  const featured = ARTICLES.find((a) => a.featured);
  return featured ?? getAllArticles()[0];
}

export function getLatestArticles(options?: {
  excludeSlug?: string;
  limit?: number;
}): Article[] {
  const { excludeSlug, limit } = options ?? {};
  const articles = getAllArticles().filter((a) => a.slug !== excludeSlug);
  return typeof limit === "number" ? articles.slice(0, limit) : articles;
}

export function getArticlesByDomain(domain: string): Article[] {
  return getAllArticles().filter((a) => a.domain === domain);
}

export function getArticlesByFormat(format: ArticleFormat): Article[] {
  return getAllArticles().filter((a) => a.format === format);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES_BY_SLUG[slug];
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return getArticlesByDomain(article.domain)
    .filter((a) => a.slug !== article.slug)
    .slice(0, limit);
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getAllArticles().filter((a) => {
    const domainLabel = getDomain(a.domain)?.label.toLowerCase() ?? "";
    return (
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q) ||
      domainLabel.includes(q)
    );
  });
}

export function getArticlesBySlugs(slugs: string[]): Article[] {
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => Boolean(a))
    .sort(byDateDesc);
}

export function getDomains() {
  return DOMAINS;
}

export function getArticleDomains() {
  return ARTICLE_DOMAINS;
}

/** Article count per domain slug, including the virtual "toute-actu" entry
 * (total across every domain). Used by the sidebar task pane to show a
 * count next to each domain, like an Explorer folder item count. */
export function getDomainArticleCounts(): Record<string, number> {
  const counts: Record<string, number> = { "toute-actu": ARTICLES.length };
  for (const domain of ARTICLE_DOMAINS) {
    counts[domain.slug] = getArticlesByDomain(domain.slug).length;
  }
  return counts;
}

/** A few headline numbers surfaced in the sidebar's "Détails" block. */
export function getMediaStats(): { articleCount: number; domainCount: number } {
  return {
    articleCount: ARTICLES.length,
    domainCount: ARTICLE_DOMAINS.length,
  };
}

export function getLiveItems() {
  return LIVE_ITEMS;
}

export function getTools() {
  return TOOLS;
}

export { getDomain };
