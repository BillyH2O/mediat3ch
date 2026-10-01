import type { ArticleBlock } from "@/content/media/types";

/** Renders an article's `body` blocks (structured data, not raw HTML - see
 * `src/content/media/types.ts`) with reading-friendly typography. */
export function ArticleReader({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="xp-prose flex flex-col gap-4 text-[16px]">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="mt-2 text-xl font-bold text-[#111]">
                {block.text}
              </h2>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-[var(--xp-link)] bg-[#eef3fb] py-2 pl-4 pr-3 italic text-[#2a2a2a]"
              >
                <p>&ldquo;{block.text}&rdquo;</p>
                {block.cite && (
                  <cite className="mt-1 block text-[13px] not-italic text-[#5a5a5a]">
                    — {block.cite}
                  </cite>
                )}
              </blockquote>
            );
          case "list":
            return (
              <ul key={i} className="list-disc space-y-1.5 pl-5">
                {block.items?.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          default:
            return <p key={i}>{block.text}</p>;
        }
      })}
    </div>
  );
}
