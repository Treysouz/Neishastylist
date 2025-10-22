import NavItem from "./nav-item";
import { useMemo } from "react";
import type { NavItemConfig } from "../nav.types";

interface DesktopNavProps {
  /** Details for the nav items */
  navItemConfigs: NavItemConfig[];
  /** The section of the page currently in view. */
  activeSection?: string;
}

function renderNavItem(
  { text, href, sectionId }: NavItemConfig,
  activeSection: string
) {
  const isActive = sectionId === activeSection;
  return (
    <li key={href}>
      <NavItem
        href={href}
        className={`p-2 ${isActive ? "border-primary" : ""}`}
      >
        {text}
      </NavItem>
    </li>
  );
}

/** Desktop variation of the navigation bar */
export default function DesktopNav({
  activeSection = "",
  navItemConfigs,
}: DesktopNavProps) {
  /** A map of navigation items config to render components for */
  const navItems = useMemo(() => {
    return navItemConfigs.map((config) => renderNavItem(config, activeSection));
  }, [activeSection, navItemConfigs]);

  return (
    <ul
      data-testid="desktop-nav"
      className="text-white flex-row w-full justify-end p-4 hidden xl:flex space-x-4"
    >
      {navItems}
    </ul>
  );
}
