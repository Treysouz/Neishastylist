import type { ReactNode } from "react";

interface CardProps {
  /** Content to render inside the card */
  children?: ReactNode;
  /** Additional CSS classes to apply to the card */
  className?: string;
}

/** Card component */
export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      data-testid="card"
      className={`animate-fade-in card rounded-3xl ${className}`}
    >
      {children}
    </div>
  );
}
