"use client";

import { useEffect, useState } from "react";

const timeFormatter = new Intl.DateTimeFormat("fr-FR", {
  hour: "2-digit",
  minute: "2-digit",
});

/** Live clock shown at the right of the taskbar, à la Windows XP system
 * tray. Renders a static placeholder on the server and fills in the real
 * time only after mount, to avoid a hydration mismatch. */
export function XpClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="flex items-center px-1 text-[11px] tabular-nums text-white"
      role="status"
      aria-label={now ? `Heure actuelle : ${timeFormatter.format(now)}` : undefined}
    >
      {now ? timeFormatter.format(now) : "--:--"}
    </div>
  );
}
