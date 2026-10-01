import Link from "next/link";
import { SOCIAL_LINKS } from "@/content/media/social-links";
import { SocialBrandIcon } from "./social-brand-icons";

/** Compact social links in the taskbar notification area (tray). */
export function XpTraySocial() {
  return (
    <div className="xp-tray-social hidden md:flex" aria-label="Nos réseaux sociaux">
      {SOCIAL_LINKS.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.label}
          className="xp-tray-social-btn xp-focusable"
        >
          <SocialBrandIcon network={item.id} />
          <span className="sr-only">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
