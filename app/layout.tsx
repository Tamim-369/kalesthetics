import type { Metadata } from "next";
import "./globals.css";
import { Oswald } from "next/font/google";
import { Provider } from "@/components";
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
    <html lang="en" className="scroll-smooth">
      <body className={"bg-primary"}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
