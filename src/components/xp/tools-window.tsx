import Link from "next/link";
import { Wrench } from "lucide-react";
import { XpWindow } from "./xp-window";
import { TOOL_ICONS } from "./domain-icons";
import { getTools } from "@/content/media/queries";

/**
 * Right-hand "Meilleurs outils" window: a compact preview of the Tools
 * catalogue (see `content/media/tools.ts`). Every entry links into the full
 * `/tools` window, which stays the single place the tools actually run.
 */
export function ToolsWindow() {
  const tools = getTools();

  return (
    <XpWindow
      title="Meilleurs outils"
      icon={<Wrench className="h-3.5 w-3.5" />}
      bodyClassName="xp-tools-window-body"
      minimizable
      maximizable
      closable
    >
      <ul className="xp-utility-tool-list">
        {tools.map((tool) => {
          const Icon = TOOL_ICONS[tool.icon];
          return (
            <li key={tool.id}>
              <Link href="/tools" className="xp-utility-tool-link xp-focusable">
                <span className="xp-utility-tool-icon">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="xp-utility-tool-name">{tool.name}</span>
                  <span className="xp-utility-tool-desc">{tool.description}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="xp-utility-tool-footer">
        <Link href="/tools" className="xp-btn xp-focusable flex w-full items-center justify-center gap-1.5">
          <Wrench className="h-3.5 w-3.5" aria-hidden />
          Ouvrir tous les outils
        </Link>
      </div>
    </XpWindow>
  );
}
