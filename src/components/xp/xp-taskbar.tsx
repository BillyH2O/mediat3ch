"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoreVertical, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/use-favorites";
import type { NavSectionKey } from "./nav-icons";
import { useWindowManager } from "./window-manager-context";
import { XpClock } from "./xp-clock";
import { XpNavIcon } from "./xp-nav-icon";
import { XpSearch } from "./xp-search";
import { XpTraySocial } from "./xp-tray-social";

const SECTIONS: ReadonlyArray<{
  href: string;
  label: string;
  imageKey: NavSectionKey;
  match: (p: string) => boolean;
}> = [
  {
    href: "/",
    label: "Actualité",
    imageKey: "actualite",
    match: (p) => p === "/" || p.startsWith("/domaine") || p.startsWith("/article"),
  },
  { href: "/guide", label: "Guide", imageKey: "guide", match: (p) => p === "/guide" },
  { href: "/tools", label: "Tools", imageKey: "tools", match: (p) => p === "/tools" },
  { href: "/favoris", label: "Favoris", imageKey: "favoris", match: (p) => p === "/favoris" },
  { href: "/newsletter", label: "Newsletter", imageKey: "newsletter", match: (p) => p === "/newsletter" },
  { href: "/publicite", label: "Publicité", imageKey: "publicite", match: (p) => p === "/publicite" },
];

function SectionTabs({
  pathname,
  favorites,
  openMain,
  className,
}: {
  pathname: string;
  favorites: string[];
  openMain: () => void;
  className?: string;
}) {
  return (
    <nav aria-label="Sections principales" className={cn("xp-taskbar-nav xp-taskbar-nav-flush", className)}>
      {SECTIONS.map((section, index) => {
        const active = section.match(pathname);
        return (
          <Link
            key={section.href}
            href={section.href}
            onClick={section.href === "/" ? openMain : undefined}
            aria-current={active ? "page" : undefined}
            aria-label={section.label}
            title={section.label}
            className={cn(
              "xp-tab xp-tab-nav xp-focusable",
              active && "xp-tab-active",
              index === 0 && "xp-tab-first",
              index === SECTIONS.length - 1 && "xp-tab-last",
            )}
          >
            <XpNavIcon section={section.imageKey} />
            <span className="xp-tab-label">{section.label}</span>
            {section.href === "/favoris" && favorites.length > 0 && (
              <span className="xp-tab-badge">{favorites.length}</span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
}

/**
 * Top navigation bar styled like the Windows XP taskbar, pinned to the top
 * (not the bottom) and always visible while scrolling.
 */
export function XpTaskbar() {
  const pathname = usePathname();
  const { openMain, mobileDomainsOpen, openMobileDomains, closeMobileDomains } = useWindowManager();
  const { favorites } = useFavorites();

  function toggleMobileExplorer() {
    if (mobileDomainsOpen) closeMobileDomains();
    else openMobileDomains();
  }

  function handleBrandClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (isMobileViewport()) {
      e.preventDefault();
      toggleMobileExplorer();
      return;
    }
    openMain();
  }

  return (
    <header className="xp-taskbar">
      <Link
        href="/"
        onClick={handleBrandClick}
        className="xp-brand-btn xp-focusable shrink-0"
        aria-expanded={mobileDomainsOpen}
        aria-controls="xp-mobile-explorer"
        aria-label={
          mobileDomainsOpen ? "Mediat3ch — fermer le menu" : "Mediat3ch — ouvrir le menu"
        }
      >
        
        {/* eslint-disable-next-line @next/next/no-img-element -- static brand logo */}
        <img src="/logo.png" alt="" className="xp-brand-logo" suppressHydrationWarning />
        <span className="xp-brand-name">Mediat3ch</span>
      </Link>

      <div className="xp-taskbar-nav-screen-center hidden md:flex">
        <SectionTabs pathname={pathname} favorites={favorites} openMain={openMain} />
      </div>

      <div className="xp-taskbar-end">
        <div className="xp-taskbar-tools hidden shrink-0 xl:flex">
          <XpSearch compact className="xp-taskbar-search" />
        </div>

        <div className="xp-tray flex shrink-0 items-stretch gap-1 self-stretch pl-1 pr-0 md:pr-3">
          <Link
            href="/recherche"
            aria-label="Rechercher"
            className="xp-tray-btn xp-focusable my-auto flex h-6 w-6 items-center justify-center xl:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </Link>
          <XpTraySocial />
          <div className="hidden md:flex md:items-center">
            <XpClock />
          </div>
          <div className="xp-tray-mobile-more md:hidden">
            <button
              type="button"
              onClick={toggleMobileExplorer}
              aria-expanded={mobileDomainsOpen}
              aria-controls="xp-mobile-explorer"
              aria-label={mobileDomainsOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className={cn(
                "xp-tray-mobile-more-btn xp-focusable",
                mobileDomainsOpen && "xp-tray-mobile-more-btn-active",
              )}
            >
              {mobileDomainsOpen ? (
                <X className="h-4 w-4" strokeWidth={2.5} aria-hidden />
              ) : (
                <MoreVertical className="h-4 w-4" strokeWidth={2.5} aria-hidden />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
