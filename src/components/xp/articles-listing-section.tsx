"use client";

import type { ReactNode } from "react";
import { useArticlesGridLayout } from "@/hooks/use-articles-grid-layout";
import { ArticlesGridLayoutToggle } from "./articles-grid-layout-toggle";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

interface ArticlesListingSectionProps {
  heading?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  /** When true, the section title lives on the outer `SectionWindow` instead. */
  embeddedInWindow?: boolean;
}

/** Section heading + layout toggle + responsive article grid. */
export function ArticlesListingSection({
  heading,
  icon,
  children,
  className,
  embeddedInWindow = false,
}: ArticlesListingSectionProps) {
  const { columns, setColumns } = useArticlesGridLayout();

  return (
    <section className={cn("xp-articles-section", embeddedInWindow && "xp-articles-section-embedded", className)}>
      {embeddedInWindow ? (
        <div className="xp-toolbar-band flex flex-wrap items-center justify-end gap-2 px-3 py-2 sm:px-4">
          <ArticlesGridLayoutToggle columns={columns} onChange={setColumns} />
        </div>
      ) : (
        <div className="xp-articles-section-header">
          <SectionHeading icon={icon}>{heading ?? "Articles"}</SectionHeading>
          <ArticlesGridLayoutToggle columns={columns} onChange={setColumns} />
        </div>
      )}
      <div
        className={cn(
          "xp-articles-grid",
          `xp-articles-grid-cols-${columns}`,
          embeddedInWindow && "xp-articles-grid-embedded",
        )}
      >
        {children}
      </div>
    </section>
  );
}
