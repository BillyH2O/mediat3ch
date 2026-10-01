import type { Domain } from "./types";

/** The 7 "Domaines" entries shown in the left XP window / mobile drawer.
 * "toute-actu" is the virtual "all news" entry and always links to "/". */
export const DOMAINS: Domain[] = [
  {
    slug: "toute-actu",
    label: "Toute l'actu",
    icon: "all",
    description: "Toutes les actualités tech, tous domaines confondus.",
  },
  {
    slug: "ia",
    label: "Intelligence artificielle",
    icon: "ai",
    description: "Modèles, usages et impacts de l'IA générative et au-delà.",
  },
  {
    slug: "robotique",
    label: "Robotique",
    icon: "robotics",
    description: "Robots industriels, humanoïdes et automatisation.",
  },
  {
    slug: "startups",
    label: "Startups",
    icon: "startup",
    description: "Levées de fonds, jeunes pousses et écosystème tech.",
  },
  {
    slug: "hardware",
    label: "Hardware",
    icon: "hardware",
    description: "Puces, composants et machines qui font tourner la tech.",
  },
  {
    slug: "cybersecurite",
    label: "Cybersécurité",
    icon: "security",
    description: "Failles, attaques et défenses du monde numérique.",
  },
  {
    slug: "xr-vr",
    label: "XR / VR",
    icon: "xr",
    description: "Réalité virtuelle, augmentée et mixte.",
  },
];

export function getDomain(slug: string): Domain | undefined {
  return DOMAINS.find((d) => d.slug === slug);
}

export const ARTICLE_DOMAINS = DOMAINS.filter((d) => d.slug !== "toute-actu");
