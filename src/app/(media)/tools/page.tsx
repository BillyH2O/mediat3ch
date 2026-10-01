"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Wrench } from "lucide-react";
import { XpWindow } from "@/components/xp/xp-window";
import { TOOL_ICONS } from "@/components/xp/domain-icons";
import { getTools } from "@/content/media/queries";
import { PasswordGeneratorTool } from "@/components/xp/tools/password-generator-tool";
import { ReadingTimeTool } from "@/components/xp/tools/reading-time-tool";
import { DataUnitConverterTool } from "@/components/xp/tools/data-unit-converter-tool";

const TOOL_WIDGETS: Record<string, React.ReactNode> = {
  "password-generator": <PasswordGeneratorTool />,
  "reading-time": <ReadingTimeTool />,
  "data-unit-converter": <DataUnitConverterTool />,
};

/**
 * "Tools" is a secondary, self-contained window (closable, unlike the main
 * "À la une" window) rather than a browsable page - closing it returns to
 * the home page. Everything below runs entirely client-side; nothing is
 * ever sent to a server.
 */
export default function ToolsPage() {
  const router = useRouter();
  const [maximized, setMaximized] = useState(false);
  const tools = getTools();

  return (
    <div className="flex flex-1 items-start justify-center py-2 sm:py-6">
      <XpWindow
        title="Outils"
        icon={<Wrench className="h-3.5 w-3.5" />}
        maximizable
        closable
        maximized={maximized}
        onToggleMaximize={() => setMaximized((m) => !m)}
        onClose={() => router.push("/")}
        className={maximized ? "w-full" : "w-full max-w-3xl"}
      >
        <div className="flex flex-col gap-5 p-4 sm:p-5">
          <p className="text-[13px] text-[#5a5a5a]">
            Trois petits outils, entièrement locaux : rien n&apos;est envoyé à un serveur.
          </p>

          {tools.map((tool) => {
            const Icon = TOOL_ICONS[tool.icon];
            return (
              <section key={tool.id} className="rounded-sm border border-[#c4c4b0]">
                <header className="flex items-center gap-2 border-b border-[#c4c4b0] bg-[#eef3fb] px-3 py-2">
                  <Icon className="h-4 w-4 text-[var(--xp-link)]" />
                  <div>
                    <h2 className="text-[14px] font-bold text-[#111]">{tool.name}</h2>
                    <p className="text-[12px] text-[#5a5a5a]">{tool.description}</p>
                  </div>
                </header>
                <div className="p-3">{TOOL_WIDGETS[tool.id]}</div>
              </section>
            );
          })}
        </div>
      </XpWindow>
    </div>
  );
}
