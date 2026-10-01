/** Purely decorative "réduire / agrandir / fermer" dots for the mini XP
 * title strip on article cards - not real buttons (the whole card is
 * already a single link), just visual chrome so the card reads as a tiny
 * window. */
export function WindowDots() {
  return (
    <span className="xp-article-titlebar-dots" aria-hidden="true">
      <span className="xp-article-titlebar-dot" />
      <span className="xp-article-titlebar-dot" />
      <span className="xp-article-titlebar-dot xp-article-titlebar-dot-close" />
    </span>
  );
}
