import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const googleFont = Noto_Sans({
  subsets: ["latin"],
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
    <html lang="en" className={`scroll-smooth ${googleFont.className}`}>
      <body>{children}</body>
    </html>
  );
}
