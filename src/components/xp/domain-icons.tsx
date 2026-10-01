import {
  LayoutGrid,
  BrainCircuit,
  Bot,
  Rocket,
  Cpu,
  ShieldCheck,
  Glasses,
  Key,
  Clock,
  ArrowLeftRight,
  type LucideIcon,
} from "lucide-react";
import type { DomainIconKey, Tool } from "@/content/media/types";

/** Resolves the icon-agnostic keys from the content layer to actual
 * (lucide) icon components. Keeping this mapping in the components layer
 * (not the content layer) means the demo data stays UI-framework free. */
export const DOMAIN_ICONS: Record<DomainIconKey, LucideIcon> = {
  all: LayoutGrid,
  ai: BrainCircuit,
  robotics: Bot,
  startup: Rocket,
  hardware: Cpu,
  security: ShieldCheck,
  xr: Glasses,
};

/** PNG logos under `public/icon/` for the Explorer folder pane. */
export const DOMAIN_ICON_IMAGES: Record<DomainIconKey, string> = {
  all: "/icon/all.png",
  ai: "/icon/ai.png",
  robotics: "/icon/robotique.png",
  startup: "/icon/startup.png",
  hardware: "/icon/all.png",
  security: "/icon/cyber.png",
  xr: "/icon/vr.png",
};

export const TOOL_ICONS: Record<Tool["icon"], LucideIcon> = {
  key: Key,
  clock: Clock,
  swap: ArrowLeftRight,
};
