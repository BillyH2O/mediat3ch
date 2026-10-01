import { redirect } from "next/navigation";

/**
 * The old `/blog/[id]` demo articles no longer exist - they were replaced
 * by TECH.EXE's own demo content at `/article/[slug]` (see
 * `src/content/media/articles.ts`). There is no reliable mapping from the
 * old numeric ids to the new slugs, so any legacy link is sent to the new
 * home page rather than guessing at a specific article.
 */
export default function LegacyBlogArticleRedirectPage() {
  redirect("/");
}
