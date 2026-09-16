import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://implumis.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s - Implumis",
    default: "Implumis",
  },
  description: "Implumis is a UAV (unmanned aerial vehicle) university project started in 2026 by two mechanical engineering students.",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icons/apple-touch-icon.png",
  },
  appleWebApp: {
    statusBarStyle: "black-translucent",
    title: "Implumis",
  },
  keywords: ["UAV", "unmanned aerial vehicle", "Implumis", "mechanical engineering", "drone"],
  authors: [
    {
      name: "Charles",
      url: "https://axxowastaken.me",
    },
    {
      name: "Éliott"
    }
  ],
  creator: "Charles",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
