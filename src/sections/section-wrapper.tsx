import { ReactNode } from "react";

interface SectionWrapperProps {
  /**ID for section element*/
  id: string;
  /**Header for section*/
  header?: string;
  /** Content to render inside the section */
  children?: ReactNode;
  /** Additional CSS classes to apply to the section */
  className?: string;
}

/** A wrapper component for the sections of the site */
export default function SectionWrapper({
  id,
  header,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`w-full even:bg-logo-dark odd:bg-neutral text-white ${className}`}
    >
      {children}
    </section>
  );
}
