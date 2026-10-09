import {
  getAdjacentUpdate,
  getUpdateSlugs,
  isPublished,
  MDXMetadata,
  updateExists,
} from "@/lib/server/mdx";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/page/update/Hero";
import Corner from "@/components/ui/Corner";
import { AUTHORS } from "@/lib/server/authors";

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
    authors: metadata.authors.map((author) => AUTHORS[author]),
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
      authors: metadata.authors.map((author) => AUTHORS[author].name),
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

  if (!isPublished(metadata)) {
    notFound();
  }

  const { prev, next } = await getAdjacentUpdate(slug);

  return (
    <main className="limit-width">
      <Hero {...metadata} />
      <section className="md:p-14 relative mt-3">
        <div className="max-w-240 w-full mx-auto">
          <MDXContent />
        </div>
        <aside className="md:block hidden">
          <Corner className="absolute brightness-90 size-13 top-5.5 left-5.5" />
          <Corner className="absolute brightness-90 size-13 top-5.5 right-5.5 rotate-90" />
          <Corner className="absolute brightness-90 size-13 bottom-5.5 left-5.5 -rotate-90" />
          <Corner className="absolute brightness-90 size-13 bottom-5.5 right-5.5 -rotate-180" />
        </aside>
      </section>
    </main>
  );
}

//
// [SECTION] Types
//

interface Props {
  params: Promise<{ slug: string }>;
}
