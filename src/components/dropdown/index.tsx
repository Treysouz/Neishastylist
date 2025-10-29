"use client";

import {
  ReactNode,
  useRef,
  useMemo,
  useEffect,
  useState,
  useCallback,
} from "react";
import type { RefObject, ToggleEventHandler } from "react";

interface DropdownProps {
  /** Label for dropdown*/
  label: string;
  /** Content to render as the toggle for the menu */
  toggle: ReactNode;
  /** Content to render as the menu */
  menu: ReactNode;
  /** Additional CSS classes to apply to the component */
  className?: string;
  /** Additional CSS classes to apply to toggle*/
  toggleClass?: string;
  /** Whether the dropdown is open. */
  open?: boolean;
  /** Handlers for when key is pressed*/
  onToggle?: ToggleEventHandler<HTMLElement>;
}

/** Dropdown component */
export default function Dropdown({
  label,
  toggle,
  menu,
  className,
  toggleClass,
  open = false,
  onToggle,
}: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(open);
  /** Reference to details element. */
  const detailsRef: RefObject<HTMLDetailsElement | null> = useRef(null);

  /** Accessibility label for toggle button */
  const toggleLabel: string = useMemo(() => {
    return `${dropdownOpen ? "Close" : "Open"}${label ? ` ${label} ` : " "}Menu`;
  }, [dropdownOpen, label]);

  /**
   * Toggle event handler.
   *
   *  @param {ToggleEvent} event  - Toggle event that occurs when dropdown is toggled
   */
  const handleToggle: ToggleEventHandler<HTMLDetailsElement> = (event) => {
    setDropdownOpen(event.currentTarget.open);
    onToggle?.(event);
  };

  /**
   * Click event handler that closes the navigation menu if a click occurs outside of the component.
   *
   *  @param {MouseEvent} event  - Mouse event that occurs when a click occurs.
   */
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownOpen &&
        detailsRef?.current &&
        event.target instanceof Node &&
        !detailsRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    },
    [dropdownOpen, detailsRef]
  );

  useEffect(() => {
    // Add click event listener for click handler.
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Stop listening to click event when component unmounts.
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    setDropdownOpen(open);
  }, [open]);

  return (
    <details
      data-testid="mobile-nav"
      ref={detailsRef}
      className={`cursor-pointer ${className}`}
      open={dropdownOpen}
      onToggle={handleToggle}
    >
      <summary
        aria-expanded={dropdownOpen}
        aria-label={toggleLabel}
        title={toggleLabel}
        className={`h-full w-full list-none ${toggleClass}`}
      >
        {toggle}
      </summary>
      {menu}
    </details>
  );
}
