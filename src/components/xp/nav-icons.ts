import type { LucideIcon } from "lucide-react";
import { BookOpen, Mail, Megaphone, Newspaper, Star, Wrench } from "lucide-react";

/** PNG paths under `public/icon/` for main navbar + Explorer shortcuts. */
export type NavSectionKey =
  | "actualite"
  | "guide"
  | "tools"
  | "favoris"
  | "newsletter"
  | "publicite";

/** Fichiers réellement présents dans `frontend/public/icon/`. `null` → icône Lucide. */
export const NAV_SECTION_ICON_IMAGES: Record<NavSectionKey, string | null> = {
  actualite: "/icon/all.png",
  guide: "/icon/guide.png",
  tools: "/icon/tools.png",
  favoris: "/icon/fav.png",
  newsletter: "/icon/newslatter.png",
  publicite: "/icon/ads.png",
};

export const NAV_SECTION_LUCIDE_FALLBACKS: Record<NavSectionKey, LucideIcon> = {
  actualite: Newspaper,
  guide: BookOpen,
  tools: Wrench,
  favoris: Star,
  newsletter: Mail,
  publicite: Megaphone,
};

export function navSectionIconSrc(key: NavSectionKey): string | null {
  return NAV_SECTION_ICON_IMAGES[key];
}
