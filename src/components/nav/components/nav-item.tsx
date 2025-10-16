import type { ComponentProps, ReactNode } from "react";

interface NavItemProps extends ComponentProps<"a"> {
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
    <a
      {...props}
      className={`btn btn-ghost btn-primary text-base sm:text-xl ${isActive ? "border-primary" : ""} ${className} `}>
      {children}
    </a>
  );
}
