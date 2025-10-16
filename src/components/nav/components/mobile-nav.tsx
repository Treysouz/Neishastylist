import { useState, useMemo, type ToggleEventHandler } from "react";
import { Icon, Dropdown } from "@/components";
import NavItem from "./nav-item";
import type { NavItemConfig } from "../nav.types";

interface MobileNavProps {
  /** Details for the nav items */
  navItemConfigs: NavItemConfig[];
  /** The section of the page currently in view. */
  activeSection?: string;
  /** Additional CSS classes to apply to the component */
  className?: string;
}

function dropdownToggle(isOpen: boolean) {
  return (
    <div
      className={`btn btn-ghost btn-primary p-2 ${isOpen ? "bg-primary" : ""}`}
    >
      <Icon svg="bars-3" className="size-8 text-white "></Icon>
    </div>
  );
}

function navItem(
  { text, href, sectionId }: NavItemConfig,
  activeSection: string,
) {
  return (
    <li key={href}>
      <NavItem
        href={href}
        isActive={sectionId === activeSection}
        className="rounded-none w-full py-6"
      >
        {text}
      </NavItem>
    </li>
  );
}

/** Desktop variation of the navigation bar */
export default function MobileNav({
  activeSection = "",
  navItemConfigs,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  /** A map of navigation items config to render components for */
  const dropdownMenu = useMemo(() => {
    return (
      <ul className="menu menu-vertical bg-logo-dark shadow-2xl border text-white w-64 absolute top-12 right-0 rounded-2xl">
        {navItemConfigs.map((config) => navItem(config, activeSection))}
      </ul>
    );
  }, [activeSection, navItemConfigs]);

  const handleToggle: ToggleEventHandler<HTMLElement> = (event) => {
    if (
      "open" in event.currentTarget &&
      typeof event.currentTarget.open === "boolean"
    ) {
      setIsOpen(event.currentTarget.open);
    }
  };
  return (
    <Dropdown
      className="relative xl:hidden"
      label="Mobile Nav"
      open={isOpen}
      toggle={dropdownToggle(isOpen)}
      menu={dropdownMenu}
      onToggle={handleToggle}
    ></Dropdown>
  );
}
