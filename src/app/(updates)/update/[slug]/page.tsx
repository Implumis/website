import {
  getAdjacentUpdate,
  getUpdateSlugs,
  MDXMetadata,
  updateExists,
} from "@/lib/server/mdx";
import matter from "gray-matter";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";

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

  const contentMetadata = matter(
    fs.readFileSync(`@/app/(updates)/update/[slug]/${slug}.mdx`, "utf8"),
  );

  if (
    contentMetadata.data.status === "DRAFT" &&
    process.env.NODE_ENV === "production"
  ) {
    notFound();
  }

  const { prev, next } = await getAdjacentUpdate(slug);

  return <main></main>;
}

//
// [SECTION] Types
//

interface Props {
  params: Promise<{ slug: string }>;
}
