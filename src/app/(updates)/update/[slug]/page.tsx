import { formatUTC } from "@/lib/client/utils";
import {
  getAdjacentUpdate,
  getUpdateMetadata,
  getUpdateSlugs,
  MDXMetadata,
  updateExists,
} from "@/lib/server/mdx";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export async function generateStaticParams() {
  const slugs = getUpdateSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!updateExists(slug)) {
    return {};
  }

  const post = await import(`@/app/(updates)/update/[slug]/${slug}.mdx`);
  const metadata: MDXMetadata = post.metadata;

  if (metadata.status === "DRAFT") {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
    authors: [{ name: "Charles" }, { name: "Eliott" }],
    alternates: {
      canonical: `/project/${slug}`,
    },
    openGraph: {
      type: "article",
      title: metadata.title,
      description: metadata.description,
      url: `/update/${slug}`,
      images: [
        {
          url: metadata.thumbnail,
          width: 1200,
          height: 630,
          alt: `${metadata.title} thumbnail`,
        },
      ],
      publishedTime: metadata.createdAt,
      modifiedTime: metadata.updatedAt,
      authors: ["Charles", "Eliott"],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [metadata.thumbnail],
    },
  };
}

export default async function UpdatePage({ params }: Props) {
  const { slug } = await params;

  if (!updateExists(slug)) {
    notFound();
  }

  const post = await import(`@/app/(updates)/update/[slug]/${slug}.mdx`);
  const MDXContent = post.default;
  const metadata: MDXMetadata = post.metadata;
  const contentMetadata = getUpdateMetadata(slug);

  if (metadata.status === "DRAFT" && process.env.NODE_ENV === "production") {
    notFound();
  }

  const { prev, next } = await getAdjacentUpdate(slug);

  const usesBgColor = metadata.background && metadata.background[0] === "#";

  return (
    <main className="limit-width">
      <div className="relative mt-4 lg:mt-8 xl:mt-12 md:rounded-md md:overflow-hidden md:border-2">
        <AspectRatio
          ratio={16 / 9}
          className="rounded-md h-full overflow-hidden relative border-2 md:border-0"
          style={
            usesBgColor ? { backgroundColor: metadata.background } : undefined
          }
        >
          {!usesBgColor && metadata.background && (
            <Image
              alt="Thumbnail background"
              className="absolute left-0 top-0"
              fill
              src={metadata.background}
            />
          )}
        </AspectRatio>
        <div className="mt-3 md:mt-0 md:absolute md:bottom-0 md:pl-6 md:pb-6 md:pt-8 flex flex-col gap-1.5 md:gap-3 md:from-black/50 md:bg-linear-to-t md:to-0 w-full">
          <h1 className="text-4xl md:text-6xl font-semibold">
            {metadata.title}
          </h1>
          <span className="block mt-0.5 md:text-lg font-medium text-white/80">
            Created on {formatUTC(new Date(metadata.createdAt))}
          </span>
        </div>
      </div>
    </main>
  );
}

//
// [SECTION] Types
//

interface Props {
  params: Promise<{ slug: string }>;
}
