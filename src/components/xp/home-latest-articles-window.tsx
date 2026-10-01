"use client";

import type { ReactNode } from "react";
import { Newspaper } from "lucide-react";
import { SectionWindow } from "./section-window";
import { ArticlesListingSection } from "./articles-listing-section";

export function HomeLatestArticlesWindow({ children }: { children: ReactNode }) {
  return (
    <SectionWindow
      title="Les derniers articles"
      icon={<Newspaper className="h-3.5 w-3.5" aria-hidden />}
    >
      <ArticlesListingSection embeddedInWindow>{children}</ArticlesListingSection>
    </SectionWindow>
  );
}
