"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "techexe:favorites";

// `useSyncExternalStore` requires `getSnapshot`/`getServerSnapshot` to
// return a *cached* value when nothing changed - returning a fresh array
// literal on every call (as an earlier version of this hook did) makes
// React think the store is perpetually changing, which throws "The result
// of getServerSnapshot should be cached to avoid an infinite loop".
// `EMPTY` and the raw-string cache below keep the reference stable.
const EMPTY: string[] = [];
let cachedRaw: string | null = null;
let cachedSnapshot: string[] = EMPTY;

function readFavorites(): string[] {
  if (typeof window === "undefined") return EMPTY;

  let raw: string | null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    raw = null;
  }

  if (raw === cachedRaw) {
    return cachedSnapshot;
  }
  cachedRaw = raw;

  if (!raw) {
    cachedSnapshot = EMPTY;
    return cachedSnapshot;
  }

  try {
    const parsed = JSON.parse(raw);
    cachedSnapshot = Array.isArray(parsed)
      ? parsed.filter((s): s is string => typeof s === "string")
      : EMPTY;
  } catch {
    cachedSnapshot = EMPTY;
  }
  return cachedSnapshot;
}

function writeFavorites(slugs: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  } catch {
    // localStorage unavailable (quota, privacy mode) - fail silently, the
    // favorites feature is best-effort for this prototype.
  }
}

type Listener = () => void;
const listeners = new Set<Listener>();

function emitChange() {
  for (const listener of listeners) listener();
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): string[] {
  return readFavorites();
}

function getServerSnapshot(): string[] {
  return EMPTY;
}

/** Locally-persisted favorite article slugs (prototype-only: no backend
 * account exists yet, so this is intentionally scoped to the browser).
 * Synced across tabs of the same browser via the `storage` event. */
export function useFavorites() {
  const favorites = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const isFavorite = useCallback((slug: string) => favorites.includes(slug), [favorites]);

  const toggleFavorite = useCallback((slug: string) => {
    const current = readFavorites();
    const next = current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [...current, slug];
    writeFavorites(next);
    emitChange();
  }, []);

  const removeFavorite = useCallback((slug: string) => {
    const current = readFavorites();
    writeFavorites(current.filter((s) => s !== slug));
    emitChange();
  }, []);

  return { favorites, isFavorite, toggleFavorite, removeFavorite };
}
