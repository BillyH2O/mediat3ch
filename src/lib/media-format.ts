/** French date/time formatting helpers for the TECH.EXE public media site.
 * Kept separate from `src/lib/format.ts` (dashboard-only, English tone). */

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const dateFormatterShort = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "short",
});

export function formatArticleDate(iso: string): string {
  return dateFormatter.format(new Date(iso));
}

export function formatArticleDateShort(iso: string): string {
  return dateFormatterShort.format(new Date(iso));
}

export function formatTodayLong(): string {
  return dateFormatter.format(new Date());
}
