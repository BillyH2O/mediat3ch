"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Compass,
  Flame,
  Info,
  LayoutGrid,
  Mail,
  Megaphone,
  Search,
  Star,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/use-favorites";
import {
  getDomainArticleCounts,
  getDomains,
  getLatestArticles,
  getMediaStats,
} from "@/content/media/queries";
import { DOMAIN_ICONS } from "./domain-icons";
import { formatTodayLong } from "@/lib/media-format";

function hrefForDomainSlug(slug: string) {
  return slug === "toute-actu" ? "/" : `/domaine/${slug}`;
}

interface TaskPaneSectionProps {
  id: string;
  title: string;
  icon?: ReactNode;
  special?: boolean;
  defaultOpen?: boolean;
  children: ReactNode;
}

/**
 * A single collapsible group inside the task pane, styled after the
 * Windows XP Explorer left-column groupboxes (white-to-blue header, pale
 * blue body). Open/closed state is remembered per section in localStorage,
 * read only after mount so the server-rendered markup always matches the
 * default (avoids a hydration mismatch).
 */
function TaskPaneSection({ id, title, icon, special = false, defaultOpen = true, children }: TaskPaneSectionProps) {
  const storageKey = `techexe:taskpane:${id}`;
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = useId();

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored === "0") setOpen(false);
      if (stored === "1") setOpen(true);
    } catch {
      // localStorage unavailable - keep the default.
    }
    // Only ever read the stored value once, right after mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggle() {
    setOpen((current) => {
      const next = !current;
      try {
        window.localStorage.setItem(storageKey, next ? "1" : "0");
      } catch {
        // Ignore write failures (quota, privacy mode).
      }
      return next;
    });
  }

  return (
    <div className="xp-taskpane-section">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={bodyId}
        className={cn("xp-taskpane-header xp-focusable", special && "xp-taskpane-header-special")}
      >
        {icon && <span className="flex h-4 w-4 shrink-0 items-center justify-center">{icon}</span>}
        <span className="flex-1 truncate">{title}</span>
        <span className="xp-taskpane-chevron" aria-hidden>
          {open ? <ChevronUp className="h-2.5 w-2.5" /> : <ChevronDown className="h-2.5 w-2.5" />}
        </span>
      </button>
      <div className="xp-taskpane-section-body" data-collapsed={!open}>
        <div id={bodyId}>
          <div className="xp-taskpane-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

interface TaskPaneProps {
  /** Called after following any link, e.g. to close the mobile drawer. */
  onNavigate?: () => void;
  /** When true, renders just the stacked sections without the outer blue
   * panel chrome - used by `DomainsDrawer`, which supplies its own chrome. */
  bare?: boolean;
}

/**
 * The "Domaines" sidebar content: an Explorer-style task pane with a
 * primary "Domaines" group (dark header) plus "Accès rapide", "Tendances"
 * and "Détails" groups. Shared between the desktop sidebar
 * (`DomainsWindow`) and the mobile drawer (`DomainsDrawer`) so the active
 * state and content logic live in exactly one place.
 */
export function TaskPane({ onNavigate, bare = false }: TaskPaneProps) {
  const pathname = usePathname();
  const domains = getDomains();
  const counts = getDomainArticleCounts();
  const trending = getLatestArticles({ limit: 3 });
  const stats = getMediaStats();
  const { favorites } = useFavorites();

  const quickLinks: Array<{ href: string; label: string; icon: LucideIcon; count?: number }> = [
    { href: "/favoris", label: "Favoris", icon: Star, count: favorites.length || undefined },
    { href: "/guide", label: "Guides", icon: BookOpen },
    { href: "/tools", label: "Tools", icon: Wrench },
    { href: "/newsletter", label: "Newsletter", icon: Mail },
    { href: "/recherche", label: "Recherche", icon: Search },
  ];

  const content = (
    <>
      <TaskPaneSection id="domaines" title="Domaines" icon={<Compass className="h-3.5 w-3.5" />} special>
        <ul className="flex flex-col gap-0.5">
          {domains.map((domain) => {
            const href = hrefForDomainSlug(domain.slug);
            const active = domain.slug === "toute-actu" ? pathname === "/" : pathname === href;
            const Icon = DOMAIN_ICONS[domain.icon];
            return (
              <li key={domain.slug}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={cn("xp-taskpane-link xp-focusable", active && "xp-taskpane-link-active")}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  <span className="truncate">{domain.label}</span>
                  <span className="xp-taskpane-count">{counts[domain.slug] ?? 0}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </TaskPaneSection>

      <TaskPaneSection id="quick-access" title="Accès rapide" icon={<LayoutGrid className="h-3.5 w-3.5" />}>
        <ul className="flex flex-col gap-0.5">
          {quickLinks.map(({ href, label, icon: Icon, count }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={cn("xp-taskpane-link xp-focusable", active && "xp-taskpane-link-active")}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  <span className="truncate">{label}</span>
                  {count ? <span className="xp-taskpane-count">{count}</span> : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </TaskPaneSection>

      <TaskPaneSection id="trending" title="Tendances" icon={<Flame className="h-3.5 w-3.5" />}>
        {trending.length > 0 ? (
          <ul className="flex flex-col gap-0.5">
            {trending.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/article/${article.slug}`}
                  onClick={onNavigate}
                  className="xp-taskpane-link xp-focusable"
                >
                  <span className="truncate">{article.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-1.5 py-1 text-[12px] text-[#16327d]">Aucun article pour le moment.</p>
        )}
      </TaskPaneSection>

      <TaskPaneSection id="details" title="Détails" icon={<Info className="h-3.5 w-3.5" />} defaultOpen={false}>
        <dl className="flex flex-col gap-1 px-1.5 py-1 text-[11px] text-[#16327d]">
          <div className="flex items-center justify-between">
            <dt>Articles</dt>
            <dd className="font-semibold">{stats.articleCount}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt>Domaines</dt>
            <dd className="font-semibold">{stats.domainCount}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt>Mis à jour</dt>
            <dd className="font-semibold">{formatTodayLong()}</dd>
          </div>
        </dl>
        <a
          href="mailto:pub@techexe.example?subject=Devenir%20annonceur%20sur%20TECH.EXE"
          title="Devenir annonceur"
          className="xp-taskpane-link xp-focusable"
        >
          <Megaphone className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span>Devenir annonceur</span>
        </a>
      </TaskPaneSection>
    </>
  );

  if (bare) {
    return <div className="flex flex-col gap-2">{content}</div>;
  }

  return <div className="xp-taskpane">{content}</div>;
}

/** Collapsed/tablet rendering: icons-only vertical strip on the same blue
 * panel, with tooltips (`title`) standing in for the full labels. */
export function TaskPaneRail({ className }: { className?: string }) {
  const pathname = usePathname();
  const domains = getDomains();

  return (
    <div className={cn("xp-taskpane-rail", className)}>
      {domains.map((domain) => {
        const href = hrefForDomainSlug(domain.slug);
        const active = domain.slug === "toute-actu" ? pathname === "/" : pathname === href;
        const Icon = DOMAIN_ICONS[domain.icon];
        return (
          <Link
            key={domain.slug}
            href={href}
            title={domain.label}
            aria-label={domain.label}
            aria-current={active ? "page" : undefined}
            className={cn("xp-taskpane-rail-btn xp-focusable", active && "xp-taskpane-rail-btn-active")}
          >
            <Icon className="h-4 w-4" aria-hidden />
          </Link>
        );
      })}
    </div>
  );
}
