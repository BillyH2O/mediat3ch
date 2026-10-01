"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDomains } from "@/content/media/queries";
import { DOMAIN_ICONS } from "./domain-icons";
import { cn } from "@/lib/utils";

interface DomainsListProps {
  /** "full" shows icon + label (sidebar, drawer). "rail" shows icon only
   * (collapsed desktop sidebar). */
  variant?: "full" | "rail";
  onNavigate?: () => void;
  className?: string;
}

function hrefForSlug(slug: string) {
  return slug === "toute-actu" ? "/" : `/domaine/${slug}`;
}

/** The 7 "Domaines" entries, shared between the desktop sidebar window and
 * the mobile drawer so the active-state logic lives in exactly one place. */
export function DomainsList({ variant = "full", onNavigate, className }: DomainsListProps) {
  const pathname = usePathname();
  const domains = getDomains();

  return (
    <ul className={cn("flex flex-col gap-1", className)}>
      {domains.map((domain) => {
        const href = hrefForSlug(domain.slug);
        const isActive =
          domain.slug === "toute-actu" ? pathname === "/" : pathname === href;
        const Icon = DOMAIN_ICONS[domain.icon];

        return (
          <li key={domain.slug}>
            <Link
              href={href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              title={variant === "rail" ? domain.label : undefined}
              className={cn(
                "xp-domain-item xp-focusable flex items-center gap-2.5 px-2.5 py-1.5 text-[13px]",
                variant === "rail" && "justify-center px-0 py-2",
                isActive && "xp-domain-item-active",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {variant === "full" && <span className="truncate">{domain.label}</span>}
              {variant === "rail" && <span className="sr-only">{domain.label}</span>}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
