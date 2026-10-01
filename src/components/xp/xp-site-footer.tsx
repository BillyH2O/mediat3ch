"use client";

import Link from "next/link";

/** Full-width site footer: Bliss “grass” green (#2e7126), visible below the
 * desktop window row when the main pane is scrolled to the end. */
export function XpSiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="xp-site-footer">
      <div className="xp-site-footer-inner">
        <p className="xp-site-footer-brand">
          <span className="font-bold italic">TECH.EXE</span>
          <span aria-hidden> · </span>
          <span className="opacity-90">L&apos;essentiel de la tech</span>
        </p>
        <nav aria-label="Pied de page" className="xp-site-footer-links">
          <Link href="/guide" className="xp-site-footer-link">
            Guides
          </Link>
          <Link href="/newsletter" className="xp-site-footer-link">
            Newsletter
          </Link>
          <Link href="/recherche" className="xp-site-footer-link">
            Recherche
          </Link>
        </nav>
        <p className="xp-site-footer-copy">© {year} TECH.EXE — démo éditoriale</p>
      </div>
    </footer>
  );
}
