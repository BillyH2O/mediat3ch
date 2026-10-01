"use client";

import { Grid3x3, LayoutGrid, LayoutList } from "lucide-react";
import type { ArticlesGridColumns } from "@/hooks/use-articles-grid-layout";
import { cn } from "@/lib/utils";

const OPTIONS: {
  value: ArticlesGridColumns;
  label: string;
  Icon: typeof LayoutList;
}[] = [
  { value: 1, label: "Une colonne", Icon: LayoutList },
  { value: 2, label: "Deux colonnes", Icon: LayoutGrid },
  { value: 3, label: "Trois colonnes", Icon: Grid3x3 },
];

export function ArticlesGridLayoutToggle({
  columns,
  onChange,
  className,
}: {
  columns: ArticlesGridColumns;
  onChange: (columns: ArticlesGridColumns) => void;
  className?: string;
}) {
  return (
    <div
      className={cn("xp-articles-layout-toggle hidden md:inline-flex", className)}
      role="group"
      aria-label="Agencement des articles"
    >
      <span className="xp-articles-layout-toggle-label">Agencement</span>
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = columns === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            title={label}
            onClick={() => onChange(value)}
            className={cn("xp-articles-layout-btn xp-focusable", active && "xp-articles-layout-btn-active")}
          >
            <Icon className="h-4 w-4" aria-hidden />
            <span className="sr-only">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
