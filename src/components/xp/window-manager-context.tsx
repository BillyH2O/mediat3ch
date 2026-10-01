"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export type MainWindowState = "normal" | "maximized" | "minimized";

interface WindowManagerContextValue {
  mainWindowState: MainWindowState;
  domainsCollapsed: boolean;
  toolsOpen: boolean;
  /** Mobile-only "Domaines" drawer, opened from the compact taskbar. */
  mobileDomainsOpen: boolean;
  openMobileDomains: () => void;
  closeMobileDomains: () => void;
  /** Toggles the main "À la une" window between normal and maximized.
   * Maximizing also folds the Domains window (per spec); restoring brings
   * back whatever fold state it had before. */
  toggleMainMaximize: () => void;
  /** Hides the main window, leaving only a desktop icon behind. */
  minimizeMain: () => void;
  /** Reopens the main window if it is currently minimized (no-op
   * otherwise) - the main window must always stay reachable. */
  openMain: () => void;
  toggleDomainsCollapsed: () => void;
  setDomainsCollapsed: (collapsed: boolean) => void;
  openTools: () => void;
  closeTools: () => void;
}

const WindowManagerContext = createContext<WindowManagerContextValue | null>(null);

const STORAGE_KEY_MAIN = "techexe:main-window";
const STORAGE_KEY_DOMAINS = "techexe:domains-collapsed";

function readStoredMainWindowState(): MainWindowState {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY_MAIN);
    if (stored === "normal" || stored === "maximized" || stored === "minimized") {
      return stored;
    }
  } catch {
    // localStorage unavailable (privacy mode, SSR, etc.) - ignore.
  }
  return "normal";
}

function readStoredDomainsCollapsed(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY_DOMAINS) === "1";
  } catch {
    return false;
  }
}

export function WindowManagerProvider({ children }: { children: React.ReactNode }) {
  const [mainWindowState, setMainWindowState] = useState<MainWindowState>("normal");
  const [domainsCollapsed, setDomainsCollapsedState] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileDomainsOpen, setMobileDomainsOpen] = useState(false);
  const domainsBeforeMaximizeRef = useRef<boolean | null>(null);
  const hydratedRef = useRef(false);

  // Restore persisted preferences after mount only, so the server-rendered
  // markup always matches the default (normal / expanded) state and we
  // avoid a hydration mismatch.
  useEffect(() => {
    setMainWindowState(readStoredMainWindowState());
    setDomainsCollapsedState(readStoredDomainsCollapsed());
    hydratedRef.current = true;
  }, []);

  useEffect(() => {
    if (!hydratedRef.current) return;
    try {
      window.localStorage.setItem(STORAGE_KEY_MAIN, mainWindowState);
    } catch {
      // Ignore write failures (quota, privacy mode).
    }
  }, [mainWindowState]);

  useEffect(() => {
    if (!hydratedRef.current) return;
    try {
      window.localStorage.setItem(STORAGE_KEY_DOMAINS, domainsCollapsed ? "1" : "0");
    } catch {
      // Ignore write failures.
    }
  }, [domainsCollapsed]);

  const toggleMainMaximize = useCallback(() => {
    setMainWindowState((current) => {
      if (current === "maximized") {
        setDomainsCollapsedState(domainsBeforeMaximizeRef.current ?? false);
        domainsBeforeMaximizeRef.current = null;
        return "normal";
      }
      domainsBeforeMaximizeRef.current = domainsCollapsed;
      setDomainsCollapsedState(true);
      return "maximized";
    });
  }, [domainsCollapsed]);

  const minimizeMain = useCallback(() => {
    setMainWindowState("minimized");
  }, []);

  const openMain = useCallback(() => {
    setMainWindowState((current) => (current === "minimized" ? "normal" : current));
  }, []);

  const toggleDomainsCollapsed = useCallback(() => {
    setDomainsCollapsedState((c) => !c);
  }, []);

  const setDomainsCollapsed = useCallback((collapsed: boolean) => {
    setDomainsCollapsedState(collapsed);
  }, []);

  const openTools = useCallback(() => setToolsOpen(true), []);
  const closeTools = useCallback(() => setToolsOpen(false), []);
  const openMobileDomains = useCallback(() => setMobileDomainsOpen(true), []);
  const closeMobileDomains = useCallback(() => setMobileDomainsOpen(false), []);

  return (
    <WindowManagerContext.Provider
      value={{
        mainWindowState,
        domainsCollapsed,
        toolsOpen,
        mobileDomainsOpen,
        openMobileDomains,
        closeMobileDomains,
        toggleMainMaximize,
        minimizeMain,
        openMain,
        toggleDomainsCollapsed,
        setDomainsCollapsed,
        openTools,
        closeTools,
      }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager(): WindowManagerContextValue {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) {
    throw new Error("useWindowManager must be used within a WindowManagerProvider");
  }
  return ctx;
}
