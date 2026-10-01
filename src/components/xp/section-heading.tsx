import type { ReactNode } from "react";

/** Explorer-style group heading used to introduce a section on the home
 * page: bold blue label with an icon, followed by a fading rule. */
export function SectionHeading({ icon, children }: { icon?: ReactNode; children: ReactNode }) {
  return (
    <h2 className="xp-section-heading">
      {icon && <span className="flex h-4 w-4 shrink-0 items-center justify-center">{icon}</span>}
      {children}
    </h2>
  );
}
