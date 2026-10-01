"use client";

import { ChevronsLeft, ChevronsRight, FolderOpen } from "lucide-react";
import { XpWindow } from "./xp-window";
import { ExplorerFolderPane, ExplorerFolderRail } from "./explorer-folder-pane";
import { useWindowManager } from "./window-manager-context";
import { cn } from "@/lib/utils";

/**
 * Desktop left column: a Windows XP Explorer window (toolbar, address bar,
 * folder tree) pinned with `.xp-media-side-fixed`. Collapses to an icon rail
 * on tablet / when folded. Mobile uses `DomainsDrawer` instead.
 */
export function DomainsWindow() {
  const { domainsCollapsed, toggleDomainsCollapsed } = useWindowManager();

  return (
    <>
      <aside className={cn("xp-media-side-fixed hidden w-full flex-col md:flex")}>
        <div className={cn("flex flex-col gap-2", !domainsCollapsed && "lg:hidden")}>
          <button
            type="button"
            onClick={toggleDomainsCollapsed}
            aria-pressed={domainsCollapsed}
            title="Déplier l'explorateur"
            className="xp-explorer-rail-toggle xp-focusable hidden lg:flex"
          >
            <ChevronsRight className="h-3.5 w-3.5" aria-hidden />
            <span className="sr-only">{"Déplier l'explorateur"}</span>
          </button>
          <ExplorerFolderRail />
        </div>

        <div className={cn("hidden min-h-0 flex-1 flex-col overflow-hidden", !domainsCollapsed && "lg:flex")}>
          <XpWindow
            title="Explorateur"
            icon={<FolderOpen className="h-3.5 w-3.5" />}
            className="flex min-h-0 max-h-full flex-1 flex-col"
            bodyClassName="xp-explorer-window-body min-h-0 flex-1"
            minimizable
            maximizable
            closable
            titleBarExtra={
              <button
                type="button"
                onClick={toggleDomainsCollapsed}
                aria-pressed={domainsCollapsed}
                aria-label="Replier l'explorateur"
                title="Replier l'explorateur"
                className="xp-titlebar-btn xp-focusable"
              >
                <ChevronsLeft className="h-3 w-3" strokeWidth={3} aria-hidden />
              </button>
            }
          >
            <ExplorerFolderPane />
          </XpWindow>
        </div>
      </aside>
    </>
  );
}
