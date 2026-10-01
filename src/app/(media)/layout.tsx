"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { WindowManagerProvider, useWindowManager } from "@/components/xp/window-manager-context";
import { XpWallpaper } from "@/components/xp/xp-wallpaper";
import { XpTaskbar } from "@/components/xp/xp-taskbar";
import { DomainsWindow } from "@/components/xp/domains-window";
import { DomainsDrawer } from "@/components/xp/domains-drawer";
import { ToolsWindow } from "@/components/xp/tools-window";
import { MediaDockWindows } from "@/components/xp/media-dock-windows";
import { XpSiteFooter } from "@/components/xp/xp-site-footer";

/** Standalone secondary windows (Tools, Newsletter) render on their own,
 * without competing for space against the Domaines sidebar / Tools window. */
const STANDALONE_ROUTES = ["/tools", "/newsletter", "/publicite"];

function MediaShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { mobileDomainsOpen, closeMobileDomains } = useWindowManager();
  const showSideWindows = !STANDALONE_ROUTES.includes(pathname);

  useEffect(() => {
    closeMobileDomains();
  }, [pathname, closeMobileDomains]);

  return (
    <>
      <XpTaskbar />
      <div className="xp-media-shell-offset">
        <div className="xp-media-shell">
        {showSideWindows && <DomainsWindow />}
        <main className="flex min-w-0 flex-1 flex-col">{children}</main>
        {showSideWindows && (
          <div className="xp-media-side-fixed xp-media-side-fixed-right hidden xl:flex xl:w-full xl:flex-col">
            <ToolsWindow />
          </div>
        )}
        </div>
      </div>
      <XpSiteFooter />
      {showSideWindows && <MediaDockWindows />}
      <DomainsDrawer open={mobileDomainsOpen} onClose={closeMobileDomains} />
    </>
  );
}

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return (
    <WindowManagerProvider>
      <XpWallpaper>
        <MediaShell>{children}</MediaShell>
      </XpWallpaper>
    </WindowManagerProvider>
  );
}
