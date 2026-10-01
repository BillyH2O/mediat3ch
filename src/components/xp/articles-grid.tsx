"use client";

import type { ReactNode } from "react";
import { useArticlesGridLayout } from "@/hooks/use-articles-grid-layout";
import { ArticlesGridLayoutToggle } from "./articles-grid-layout-toggle";
import { cn } from "@/lib/utils";

interface ArticlesGridProps {
  children: ReactNode;
  className?: string;
  showLayoutToggle?: boolean;
}

/** Article listing grid with optional layout toggle (1 / 2 / 3 columns). */
export function ArticlesGrid({ children, className, showLayoutToggle = true }: ArticlesGridProps) {
  const { columns, setColumns } = useArticlesGridLayout();

  return (
    <div className={className}>
      {showLayoutToggle && (
        <div className="mb-4 hidden justify-end md:flex">
          <ArticlesGridLayoutToggle columns={columns} onChange={setColumns} />
        </div>
      )}
      <div className={cn("xp-articles-grid", `xp-articles-grid-cols-${columns}`)}>{children}</div>
    </div>
  );
}
