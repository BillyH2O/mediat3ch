// Pure data types for the TECH.EXE media demo content.
// No UI/React imports here on purpose: this layer is meant to be swappable
// for a real API later without touching any interface code.

export type DomainSlug =
  | "toute-actu"
  | "ia"
  | "robotique"
  | "startups"
  | "hardware"
  | "cybersecurite"
  | "xr-vr";

/** Domain slugs that real articles are actually tagged with (excludes the
 * virtual "all news" entry used only for the sidebar / home route). */
export type ArticleDomainSlug = Exclude<DomainSlug, "toute-actu">;

/** Icon keys are resolved to actual (lucide) icon components in
 * `src/components/xp/domain-icons.tsx` - keeps this data file icon-agnostic. */
export type DomainIconKey =
  | "all"
  | "ai"
  | "robotics"
  | "startup"
  | "hardware"
  | "security"
  | "xr";

export interface Domain {
  slug: DomainSlug;
  label: string;
  icon: DomainIconKey;
  description: string;
}

export type ArticleFormat = "actualite" | "guide" | "interview" | "analyse";

export interface ArticleBlock {
  type: "p" | "h2" | "quote" | "list";
  text?: string;
  items?: string[];
  cite?: string;
}

export interface Article {
  slug: string;
  domain: ArticleDomainSlug;
  format: ArticleFormat;
  title: string;
  excerpt: string;
  body: ArticleBlock[];
  image: string;
  author: string;
  /** ISO date string, e.g. "2026-09-12" */
  publishedAt: string;
  /** Minutes */
  readTime: number;
  featured?: boolean;
}

export interface LiveItem {
  id: string;
  time: string;
  text: string;
  href?: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: "key" | "clock" | "swap";
}
