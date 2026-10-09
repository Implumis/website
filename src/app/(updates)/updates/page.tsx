import Hero from "@/components/page/updates/Hero";
import UpdatesGrid from "@/components/page/updates/UpdatesGrid";
import { getAllUpdatesMetadata } from "@/lib/server/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates",
  description: "Read about Implumis' latest and past progress.",
  alternates: {
    canonical: "/updates",
  },
  openGraph: {
    title: "Updates - Implumis",
    description: "Read about Implumis' latest and past progress.",
    url: "/updates",
  },
  twitter: {
    card: "summary_large_image",
    title: "Updates - Implumis",
    description: "Read about Implumis' latest and past progress.",
  },
};

export default async function Updates() {
  const updates = await getAllUpdatesMetadata();

  return (
    <main className="limit-width">
      <Hero />
      <UpdatesGrid updates={updates} />
    </main>
  );
}
