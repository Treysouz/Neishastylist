import Link, { LinkProps } from "next/link";
import type { ReactNode } from "react";

interface NavItemProps extends LinkProps {
  /** Content to render inside the link */
  children?: ReactNode;
  /** Whether this nav item is currently active */
  isActive?: boolean;
  /** Additional CSS classes to apply to the component */
  className?: string;
}

export default function NavItem({
  children,
  isActive,
  className,
  ...props
}: NavItemProps) {
  return (
    <Link
      {...props}
      className={`btn btn-ghost btn-primary text-base sm:text-lg ${isActive ? "border-primary" : ""} ${className} `}
    >
      {children}
    </Link>
  );
}
