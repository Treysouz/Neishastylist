import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
