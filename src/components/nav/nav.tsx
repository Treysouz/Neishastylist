"use client";

import { MobileNav, DesktopNav, NavLogo } from "./components";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { motion } from "motion/react";
import type { NavItemConfig } from "./nav.types";

/** Details for each nav item for rendering */
export const navItemConfigs: NavItemConfig[] = [
  {
    text: "Our Work",
    href: "/#work",
    sectionId: "work",
  },
  {
    text: "About Us",
    href: "/#about",
    sectionId: "about",
  },
  {
    text: "Services",
    href: "/#services",
    sectionId: "services",
  },
  {
    text: "Staff",
    href: "/#staff",
    sectionId: "staff",
  },
  {
    text: "Contact Us",
    href: "/#contact",
    sectionId: "contact",
  },
];

export default function Nav() {
  /** Whether the window has been scrolled from the top at all */
  const [isScrolled, setIsScrolled] = useState(false);
  /** The section of the page currently in view. */
  const [activeSection, setActiveSection] = useState("");

  /** Current path name */
  const pathname = usePathname();

  /**
   * Initiates an IntersectionObserver to track which sections are currently in view.
   * @returns {observer: IntersectionObserver, pageSections: NodeListOf<Element>} An object containing the observer instance and the sections being observed
   */
  const initiateObserver = (): {
    observer: IntersectionObserver;
    pageSections: NodeListOf<Element>;
  } => {
    // Query sections for the current page
    const pageSections = document.querySelectorAll("section[id]");

    // Options for observer
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "-50px 0px 50px 0px",
    };

    // Setup observer for current sections.
    const observer = new IntersectionObserver((elements) => {
      elements.forEach((element) => {
        if (element.isIntersecting) {
          // Update actionSection with section in view
          setActiveSection(element.target.id);
        }
      });
    }, observerOptions);

    // Observe each section to check when it is in view
    pageSections.forEach((section) => observer.observe(section));

    return { observer, pageSections };
  };

  /**On mount, initiate observer to get the current section in view */
  useEffect(() => {
    const { observer, pageSections } = initiateObserver();
    // Stop observing old sections
    return () => {
      pageSections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  /**On mount, initiate an event listener for scrolling to check whether the window has been scrolled from the top*/
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    //Stop listening to scrolling
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={clsx(
        "z-50 navbar fixed top-0 px-4 sm:px-8 transition-colors duration-300",
        {
          "bg-theme-dark shadow-lg": isScrolled,
          "bg-transparent shadow-none!": !isScrolled,
        }
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-row w-full items-center justify-between"
      >
        <header className="cursor-pointer  bg-theme-dark shrink-0 rounded-full">
          <NavLogo />
        </header>

        <MobileNav
          navItemConfigs={navItemConfigs}
          activeSection={activeSection}
        />

        <DesktopNav
          navItemConfigs={navItemConfigs}
          activeSection={activeSection}
        />
      </motion.div>
    </nav>
  );
}
