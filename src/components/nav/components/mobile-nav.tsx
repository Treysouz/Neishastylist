import { useState, type ToggleEventHandler } from "react";
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

interface DropdownToggleProps {
  /** Whehter toggle is open */
  isOpen: boolean;
}

interface DropdownMenuProps {
  /**Details for the nav items*/
  navItemConfigs: NavItemConfig[];
  /**Section currently in viewport */
  activeSection: string;
}

function DropdownToggle({ isOpen }: DropdownToggleProps) {
  return (
    <div
      className={`btn btn-ghost btn-primary p-2 ${isOpen ? "bg-primary" : ""}`}
    >
      <Icon svg="bars-3" className="size-8 text-white " />
    </div>
  );
}

function DropdownMenu({ navItemConfigs, activeSection }: DropdownMenuProps) {
  return (
    <ul className="menu menu-vertical bg-logo-dark shadow-lg border text-white w-64 absolute top-12 right-0 rounded-box">
      {navItemConfigs.map((config) => {
        const { href, sectionId, text } = config;
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
      })}
    </ul>
  );
}

/** Desktop variation of the navigation bar */
export default function MobileNav({
  activeSection = "",
  navItemConfigs,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

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
      toggle={<DropdownToggle isOpen={isOpen} />}
      menu={
        <DropdownMenu
          navItemConfigs={navItemConfigs}
          activeSection={activeSection}
        />
      }
      onToggle={handleToggle}
    />
  );
}
