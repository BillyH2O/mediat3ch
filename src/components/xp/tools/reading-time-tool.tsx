"use client";

import { useMemo, useState } from "react";

const WORDS_PER_MINUTE = 200;

/** Estimates reading time from pasted text, purely client-side. */
export function ReadingTimeTool() {
  const [text, setText] = useState("");

  const { wordCount, minutes } = useMemo(() => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    const count = words.length;
    return { wordCount: count, minutes: count === 0 ? 0 : Math.max(1, Math.round(count / WORDS_PER_MINUTE)) };
  }, [text]);

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="reading-time-textarea" className="text-[13px]">
        Collez un texte pour estimer son temps de lecture (≈ {WORDS_PER_MINUTE} mots/min) :
      </label>
      <textarea
        id="reading-time-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        placeholder="Collez votre texte ici…"
        className="xp-input w-full resize-none focus:outline-none"
      />
      <p className="text-[13px] text-[#3f3f3f]">
        {wordCount} mot{wordCount !== 1 ? "s" : ""} — environ{" "}
        <span className="font-semibold">
          {minutes} minute{minutes !== 1 ? "s" : ""}
        </span>{" "}
        de lecture
      </p>
    </div>
  );
}
