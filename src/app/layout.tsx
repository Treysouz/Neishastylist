import type { Metadata } from "next";
import { Noto_Sans, Playwrite_CU } from "next/font/google";
import { NavBar } from "@/components";
import { ContactSection } from "@/sections";

import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const playwriteCU = Playwrite_CU({
  weight: ["100", "200", "300", "400"],
  variable: "--font-playwrite-cu",
});

export const metadata: Metadata = {
  title: "Neisha Stylist — Hair by Design",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth h-dvh ${playwriteCU.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className={`${notoSans.className}`}>
        <NavBar />
        <main>
          {children}
          <ContactSection />
        </main>
        <footer className="text-gray-400 bg-theme-dark text-xs sm:text-sm flex flex-col space-y-2 text-center px-8 pb-8 xl:px-16 xl:pb-17">
          <span>
            Made by&nbsp;
            <a
              className="btn btn-link p-0 h-min text-xs sm:text-sm"
              href="https://treysouzcodes.dev/"
            >
              Tremayne Souza
            </a>
            &nbsp;💻
          </span>
          <span>© 2025 Neisha Stylist. All Rights Reserved.</span>
        </footer>
      </body>
    </html>
  );
}
