import Update from "@/components/page/updates/Update";
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
      <div className="mt-12">
        <h1 className="text-6xl font-semibold">Updates</h1>
        <p className="text-2xl mt-5">
          Read about our latest and past progress.
        </p>
      </div>
      <div className="grid grid-cols-3 mt-8">
        {updates.map((update, index) => (
          <Update
            key={`update-${index}`}
            filename={update.slug}
            background={update.background}
            title={update.title}
            createdAt={new Date(update.createdAt)}
            description={update.description}
          />
        ))}
      </div>
    </main>
  );
}
