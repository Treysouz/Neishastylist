import { ReactNode } from "react";

function sectionHeader(header?: string) {
  if (header) {
    return (
      <h2 className="text-2xl sm:text-4xl xl:text-5xl text-white">{header}</h2>
    );
  }
}

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
      className={`w-full even:bg-logo-dark odd:bg-neutral text-white flex flex-col items-center space-y-8 xl:space-y-16 ${className}`}
    >
      {sectionHeader(header)}
      {children}
    </section>
  );
}
