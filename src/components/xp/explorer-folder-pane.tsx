"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/use-favorites";
import { getDomainArticleCounts, getDomains } from "@/content/media/queries";
import { SOCIAL_LINKS } from "@/content/media/social-links";
import { DOMAIN_ICON_IMAGES } from "./domain-icons";
import { navSectionIconSrc, NAV_SECTION_LUCIDE_FALLBACKS, type NavSectionKey } from "./nav-icons";
import { SocialBrandIcon } from "./social-brand-icons";

function hrefForDomainSlug(slug: string) {
  return slug === "toute-actu" ? "/" : `/domaine/${slug}`;
}

interface ExplorerTreeLinkProps {
  href: string;
  label: string;
  active?: boolean;
  count?: number;
  onNavigate?: () => void;
  iconSrc?: string;
  icon?: LucideIcon;
}

const QUICK_LINKS: Array<{
  href: string;
  label: string;
  imageKey?: NavSectionKey;
  icon?: LucideIcon;
  count?: number;
}> = [
  { href: "/favoris", label: "Favoris", imageKey: "favoris" },
  { href: "/guide", label: "Guides", imageKey: "guide" },
  { href: "/tools", label: "Tools", imageKey: "tools" },
  { href: "/newsletter", label: "Newsletter", imageKey: "newsletter" },
  { href: "/publicite", label: "Publicité", imageKey: "publicite" },
  { href: "/recherche", label: "Recherche", icon: Search },
];

function ExplorerTreeLink({
  href,
  label,
  active,
  count,
  onNavigate,
  iconSrc,
  icon: Icon,
}: ExplorerTreeLinkProps) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn("xp-explorer-tree-link xp-focusable", active && "xp-explorer-tree-link-active")}
    >
      {iconSrc ? (
        // eslint-disable-next-line @next/next/no-img-element -- static PNG icons in /public/icon
        <img src={iconSrc} alt="" className="xp-explorer-tree-icon" suppressHydrationWarning />
      ) : Icon ? (
        <Icon className="xp-explorer-tree-icon-fallback shrink-0" aria-hidden />
      ) : null}
      <span className="min-w-0 flex-1 truncate">{label}</span>
      {count != null ? <span className="xp-explorer-tree-count">{count}</span> : null}
    </Link>
  );
}

/** Left column: Explorer-style folder list (domaines + raccourcis), without
 * decorative toolbar, address bar or fake root folders. */
export function ExplorerFolderPane({
  onNavigate,
  showSocialLinks = false,
}: {
  onNavigate?: () => void;
  /** Shown in the mobile fullscreen sidebar (tray social icons are desktop-only). */
  showSocialLinks?: boolean;
}) {
  const pathname = usePathname();
  const domains = getDomains();
  const counts = getDomainArticleCounts();
  const { favorites } = useFavorites();

  const quickLinks = QUICK_LINKS.map((link) => {
    const png = link.imageKey ? navSectionIconSrc(link.imageKey) : null;
    return {
      ...link,
      count: link.href === "/favoris" ? favorites.length || undefined : undefined,
      iconSrc: png ?? undefined,
      icon:
        link.icon ??
        (link.imageKey && png === null ? NAV_SECTION_LUCIDE_FALLBACKS[link.imageKey] : undefined),
    };
  });

  return (
    <div className="xp-explorer-pane">
      <div className="xp-explorer-tree-scroll">
        <p className="xp-explorer-section-label">Domaines</p>
        <ul className="xp-explorer-tree-list">
          {domains.map((domain) => {
            const href = hrefForDomainSlug(domain.slug);
            const active = domain.slug === "toute-actu" ? pathname === "/" : pathname === href;
            return (
              <li key={domain.slug}>
                <ExplorerTreeLink
                  href={href}
                  label={domain.label}
                  iconSrc={DOMAIN_ICON_IMAGES[domain.icon]}
                  active={active}
                  count={counts[domain.slug] ?? 0}
                  onNavigate={onNavigate}
                />
              </li>
            );
          })}
        </ul>

        <p className="xp-explorer-section-label xp-explorer-section-label-spaced">Raccourcis</p>
        <ul className="xp-explorer-tree-list">
          {quickLinks.map(({ href, label, icon, iconSrc, count }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <ExplorerTreeLink
                  href={href}
                  label={label}
                  icon={icon}
                  iconSrc={iconSrc}
                  active={active}
                  count={count}
                  onNavigate={onNavigate}
                />
              </li>
            );
          })}
        </ul>

        {showSocialLinks && (
          <>
            <p className="xp-explorer-section-label xp-explorer-section-label-spaced">Réseaux</p>
            <ul className="xp-explorer-tree-list" aria-label="Nos réseaux sociaux">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onNavigate}
                    className="xp-explorer-tree-link xp-focusable"
                  >
                    <span className="xp-explorer-tree-social-icon">
                      <SocialBrandIcon network={item.id} />
                    </span>
                    <span className="min-w-0 flex-1 truncate">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

/** Collapsed strip: domain icons on the Explorer beige chrome. */
export function ExplorerFolderRail() {
  const pathname = usePathname();
  const domains = getDomains();

  return (
    <div className="xp-explorer-rail">
      {domains.map((domain) => {
        const href = hrefForDomainSlug(domain.slug);
        const active = domain.slug === "toute-actu" ? pathname === "/" : pathname === href;
        return (
          <Link
            key={domain.slug}
            href={href}
            title={domain.label}
            aria-label={domain.label}
            aria-current={active ? "page" : undefined}
            className={cn("xp-explorer-rail-btn xp-focusable", active && "xp-explorer-rail-btn-active")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- static PNG icons in /public/icon */}
            <img src={DOMAIN_ICON_IMAGES[domain.icon]} alt="" className="xp-explorer-rail-icon" suppressHydrationWarning />
          </Link>
        );
      })}
    </div>
  );
}
