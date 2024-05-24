import type { Metadata } from "next";
import "./globals.css";
import { Oswald } from "next/font/google";
export const metadata: Metadata = {
  title: "Kalesthetics",
  description: "Get ready to unlock your potential.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-primary"}>{children}</body>
    </html>
  );
}
