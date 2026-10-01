import { Radio } from "lucide-react";
import type { LiveItem } from "@/content/media/types";

/** Horizontal "En direct" band with a handful of short news briefs. The
 * track duplicates its content once so the CSS scroll loop is seamless;
 * `prefers-reduced-motion` disables the animation (see globals.css). */
export function LiveTicker({ items }: { items: LiveItem[] }) {
  if (items.length === 0) return null;

  return (
    <div className="xp-infobar flex items-stretch overflow-hidden rounded-sm">
      <div className="flex shrink-0 items-center gap-2 bg-[#a3320f] px-3 text-[12px] font-bold text-white">
        <span className="xp-live-dot" aria-hidden />
        <Radio className="h-3.5 w-3.5" />
        EN DIRECT
      </div>
      <div className="min-w-0 flex-1 overflow-hidden">
        <div className="xp-ticker-track flex w-max items-center gap-8 whitespace-nowrap py-2 pl-4 pr-8 text-[13px] text-[#3f3f3f]">
          {[...items, ...items].map((item, i) => (
            <span key={`${item.id}-${i}`} className="flex items-center gap-2">
              <time className="font-semibold text-[#a3320f]">{item.time}</time>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
