import type { Tool } from "./types";

/** Catalogue of small utilities shown in the "Tools" secondary window. */
export const TOOLS: Tool[] = [
  {
    id: "password-generator",
    name: "Générateur de mot de passe",
    description: "Génère un mot de passe aléatoire robuste, entièrement en local.",
    icon: "key",
  },
  {
    id: "reading-time",
    name: "Estimateur de temps de lecture",
    description: "Colle un texte pour estimer son temps de lecture moyen.",
    icon: "clock",
  },
  {
    id: "data-unit-converter",
    name: "Convertisseur d'unités de données",
    description: "Convertit entre octets, kilo-octets, mégaoctets, gigaoctets et téraoctets.",
    icon: "swap",
  },
];
