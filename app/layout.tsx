import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import "./theme-config.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "A simple issue tracking application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-gray-100 text-gray-900 min-h-screen flex flex-col`}
      >
        <Theme accentColor="violet" radius="medium" scaling="100%">
          <NavBar />
          <main className="container mx-auto px-5 py-8 flex-1">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
