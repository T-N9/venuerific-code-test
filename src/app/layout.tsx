import type { Metadata } from "next";

import { inter } from "@/fonts/fonts";

import "./globals.css";
import Navigation from "./components/navigation";

export const metadata: Metadata = {
  title: "Venuerific",
  description: "Smart Ways to Manage Your Venues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
