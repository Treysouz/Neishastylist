import React from "react";

interface NavItemProps {
  /** content to render inside the link */
  children?: string;
  /** Props for anchor element*/
  anchorProps?: React.ComponentProps<"a">;
  /** Whether this nav item is currently active */
  isActive?: boolean;
  /** Additional CSS classes to apply to the component */
  className?: string;
}

export default function NavItem({
  children,
  anchorProps,
  isActive,
  className,
}: NavItemProps) {
  return (
    <a {...anchorProps} className={`btn btn-ghost btn-primary text-xl`}>
      {children}
    </a>
  );
}
