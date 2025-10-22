import type { Metadata } from "next";
import { Noto_Sans, Playwrite_CU } from "next/font/google";

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
  title: "Neishastylist - Hair by Design",
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
      className={`scroll-smooth ${playwriteCU.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
