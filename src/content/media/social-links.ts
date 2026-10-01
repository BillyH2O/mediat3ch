/** Demo social profile URLs for the dock window (replace with real accounts). */
export const SOCIAL_LINKS = [
  { id: "twitter", label: "X (Twitter)", href: "https://x.com/" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
  { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/" },
] as const;

export type SocialNetworkId = (typeof SOCIAL_LINKS)[number]["id"];
