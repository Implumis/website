import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { AUTHORS } from "@/lib/server/authors";

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
  authors: Object.values(AUTHORS),
  creator: "Charles",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased bg-[#0A2540]`}>
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
