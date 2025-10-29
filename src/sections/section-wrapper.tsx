"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionWrapperProps {
  /**ID for section element*/
  id: string;
  /** Content to render inside the section */
  children?: ReactNode;
  /** Additional CSS classes to apply to the section */
  className?: string;
}

/** A wrapper component for the sections of the site */
export default function SectionWrapper({
  id,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className="even:bg-theme-dark odd:bg-neutral scroll-mt-16 sm:scroll-mt-22 xl:scroll-mt-34 overflow-hidden"
    >
      <motion.div
        className={`w-full flex flex-col items-center text-white  ${className || ""}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
