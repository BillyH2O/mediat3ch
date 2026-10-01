import { redirect } from "next/navigation";

/**
 * The public site was rebuilt as TECH.EXE (see `src/app/(media)`). This
 * old `/blog` route is kept only as a redirect for any bookmarked/shared
 * links pointing here - the real "actualité" home now lives at `/`.
 */
export default function BlogRedirectPage() {
  redirect("/");
}
