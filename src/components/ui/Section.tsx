import type { ReactNode } from "react";

type SectionProps = {
  sectionId?: string;
  styles?: string;
  children: ReactNode;
}

export default function Section({ sectionId, styles, children }: SectionProps) {
  return (
    <div
      id={sectionId}
      className={`py-32 px-5 xl:px-15 ${styles}`}
    >{children}</div>
  )
}
