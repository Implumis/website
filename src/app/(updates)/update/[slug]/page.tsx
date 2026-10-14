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
import { cn } from "cn";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      <section className="md:p-14 relative my-3">
        <div className="max-w-240 w-full mx-auto">
          <MDXContent />
          <hr className="my-5" />
          <div className="flex flex-col md:flex-row justify-between *:w-full gap-4">
            <Link
              href={prev ? `/update/${prev.slug}` : "#"}
              aria-disabled={!prev}
              className={cn(
                "bg-black/45 flex items-center gap-3 backdrop-blur-md rounded-md p-3 overflow-hidden relative border transition-all duration-250 ease-in-out",
                prev ? "hover:bg-black/55" : "brightness-70 cursor-not-allowed",
              )}
            >
              <ChevronLeft className="shrink-0 size-7" />
              <div className="w-full">
                <span className="font-medium text-lg">Previous</span>
                <div>
                  {prev ? (
                    <div className="flex flex-col gap-1">
                      <span>{prev.title}</span>
                      <p className="line-clamp-1">{prev.description}</p>
                    </div>
                  ) : (
                    <p>There are no older articles.</p>
                  )}
                </div>
              </div>
              <div className="absolute w-full h-full grid-bg top-0 left-0 -z-10 opacity-12" />
            </Link>
            <Link
              href={next ? `/update/${next.slug}` : "#"}
              aria-disabled={!next}
              className={cn(
                "bg-black/45 backdrop-blur-md items-center flex gap-3 rounded-md text-right p-3 overflow-hidden relative border transition-all duration-250 ease-in-out",
                next ? "hover:bg-black/55" : "brightness-70 cursor-not-allowed",
              )}
            >
              <div className="w-full">
                <span className="font-medium text-lg">Next</span>
                <div>
                  {next ? (
                    <div className="flex flex-col gap-1">
                      <span>{next.title}</span>
                      <p className="line-clamp-1">{next.description}</p>
                    </div>
                  ) : (
                    <p>There are no more recent articles.</p>
                  )}
                </div>
              </div>
              <ChevronRight className="shrink-0 size-7" />
              <div className="absolute w-full h-full grid-bg top-0 left-0 -z-10 opacity-12" />
            </Link>
          </div>
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
