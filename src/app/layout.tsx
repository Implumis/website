import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Image from "next/image";
import { cn } from "cn";

const inter = Inter({
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://implumis.com";

export const viewport: Viewport = {
  themeColor: "#0A2540",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s - Implumis",
    default: "Implumis",
  },
  description:
    "Implumis is a UAV (unmanned aerial vehicle) university project started in 2026 by two mechanical engineering students.",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icons/apple-touch-icon.png",
  },
  appleWebApp: {
    statusBarStyle: "black-translucent",
    title: "Implumis",
  },
  keywords: [
    "UAV",
    "unmanned aerial vehicle",
    "Implumis",
    "mechanical engineering",
    "drone",
  ],
  authors: [
    {
      name: "Charles",
      url: "https://axxowastaken.me",
    },
    {
      name: "Éliott",
    },
  ],
  creator: "Charles",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased bg-[#0A2540]`}>
      <body className="h-dvh p-2.5 sm:p-4 md:p-8 lg:p-12 xl:p-16">
        <div className="h-full border-white border-3 overflow-hidden relative">
          <aside className="absolute inner-body-bg w-full h-full top-0 left-0 opacity-20 z-0" />
          <div className="z-1 h-full relative">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
