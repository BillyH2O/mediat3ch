"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface XpSearchProps {
  className?: string;
  compact?: boolean;
}

/** Search field wired to `/recherche?q=...`. Pre-fills from the current
 * query string when already on the search results page.
 *
 * Reads `window.location.search` directly (client-only, after mount)
 * rather than `useSearchParams()` on purpose: this component is rendered
 * from the shared taskbar on every page, including statically generated
 * ones (`/domaine/[slug]`, `/article/[slug]`), and `useSearchParams()`
 * would force those pages into a client-side Suspense bailout. */
export function XpSearch({ className, compact = false }: XpSearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (pathname === "/recherche" && typeof window !== "undefined") {
      setValue(new URLSearchParams(window.location.search).get("q") ?? "");
    } else {
      setValue("");
    }
  }, [pathname]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = value.trim();
    router.push(q ? `/recherche?q=${encodeURIComponent(q)}` : "/recherche");
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={cn("flex items-center", className)}
    >
      <label htmlFor="xp-search-input" className="sr-only">
        Rechercher un article
      </label>
      <input
        id="xp-search-input"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Article, auteur, domaine…"
        className={cn(
          "xp-input rounded-l-sm rounded-r-none focus:outline-none",
          compact ? "xp-taskbar-search-input" : "w-40 md:w-56",
        )}
      />
      <button
        type="submit"
        aria-label="Lancer la recherche"
        className={cn(
          "xp-btn xp-focusable rounded-l-none rounded-r-sm",
          compact ? "xp-taskbar-search-submit" : "px-2 py-[5px]",
        )}
      >
        <Search className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}
