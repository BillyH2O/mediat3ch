"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "xp-articles-grid-columns";
const LAYOUT_EVENT = "xp-articles-grid-layout-change";
const DEFAULT_COLUMNS = 3 as const;

export type ArticlesGridColumns = 1 | 2 | 3;

function parseColumns(raw: string | null): ArticlesGridColumns {
  if (raw === "1" || raw === "2" || raw === "3") {
    return Number(raw) as ArticlesGridColumns;
  }
  return DEFAULT_COLUMNS;
}

function readColumns(): ArticlesGridColumns {
  if (typeof window === "undefined") return DEFAULT_COLUMNS;
  try {
    return parseColumns(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return DEFAULT_COLUMNS;
  }
}

function subscribe(onStoreChange: () => void) {
  const handler = () => onStoreChange();
  window.addEventListener("storage", handler);
  window.addEventListener(LAYOUT_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(LAYOUT_EVENT, handler);
  };
}

/** Shared article grid density preference (1 / 2 / 3 columns), persisted in localStorage. */
export function useArticlesGridLayout() {
  const columns = useSyncExternalStore(subscribe, readColumns, () => DEFAULT_COLUMNS);

  const setColumns = useCallback((value: ArticlesGridColumns) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(value));
    } catch {
      /* ignore quota / private mode */
    }
    window.dispatchEvent(new Event(LAYOUT_EVENT));
  }, []);

  return { columns, setColumns };
}
