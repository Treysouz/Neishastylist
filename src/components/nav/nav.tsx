"use client";

import Image from "next/image";
import NavItem from "./components/nav-item";
import { useState, useEffect } from "react";

interface NavProps {}

export default function Nav({}: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <nav
    //   className={`w-full fixed top-0 h-34 flex flex-row justify-between transition-colors duration-300 z-50 ${
    //     isScrolled ? "bg-logo-dark shadow-2xl" : "bg-transparent"
    //   }`}>
    //   <div className="p-4">
    //     <a>
    //       <Image
    //         src="/logo.png"
    //         width="208"
    //         height="208"
    //         alt="Neishastylist"
    //         className="size-30 lg:size-50 border border-primary rounded-full shadow-lg"></Image>
    //     </a>
    //   </div>
    //   <div className="flex flex-row space-x-8 font-bold text-lg lg:text-xl text-white text-shadow-2xl h-full items-center p-8">
    //     <span>About Us</span>
    //     <span>Our Work</span>
    //     <span>Services</span>
    //     <span>Contact Us</span>
    //   </div>
    // </nav>
    <nav
      className={`navbar shadow-sm fixed top-0 transition-colors duration-300 ${isScrolled ? "bg-logo-dark shadow-2xl" : "bg-transparent shadow-none!"}`}>
      <div className="flex flex-row w-full items-center">
        <header className="w-full cursor-pointer">
          <a className="flex flex-row items-center px-4">
            <Image
              src="/logo.png"
              width="120"
              height="120"
              alt="Neishastylist"
              className="size-30 rounded-full shadow-lg z-10"></Image>
            <h1 className="font-header text-2xl text-accent bg-logo-dark pl-6 py-4 pr-4 font-medium -ml-4 rounded-r-3xl">
              Neisha Stylist
            </h1>
          </a>
        </header>
        <div className="text-white flex flex-row w-full justify-end  p-4 ">
          <ul className="menu menu-horizontal space-x-4">
            <li>
              <NavItem className="btn btn-ghost">Our Work</NavItem>
            </li>

            <li>
              <NavItem className="btn btn-ghost">Services</NavItem>
            </li>
            <li>
              <NavItem className="btn btn-ghost">About Us</NavItem>
            </li>
            <li>
              <NavItem className="btn btn-ghost">Contact Us</NavItem>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
