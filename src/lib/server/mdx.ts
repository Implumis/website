import fs from "fs";
import path from "path";
import { cache } from "react";
import { unstable_cache } from "next/cache";
import { compareDesc, parseISO } from "date-fns";

//
// [SECTION] Functions
//

export function getUpdateSlugs(): string[] {
  const contentDir = path.join(
    process.cwd(),
    "src/app/(updates)/update/[slug]",
  );

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function updateExists(slug: string): boolean {
  return fs.existsSync(
    path.join(process.cwd(), "src/app/(updates)/update/[slug]", `${slug}.mdx`),
  );
}

export function calculateReadingTime(
  rawContent: string,
  wpm: number = 200,
): string {
  const text = rawContent
    .replace(/export const metadata = \s*\{[\s\S]*?\};/, "")
    .replace(/<[^>]*>/g, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]+)\]\(.*?\)/g, "$1")
    .replace(/[#*`_~]/g, "");

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / wpm));
  return `${minutes} min read`;
}

export function parseMetadata(content: string): Partial<MDXMetadata> {
  const match = content.match(/export const metadata = \s*\{([\s\S]*?)\};/);
  if (!match) return {};

  const objStr = match[1];
  const result: Record<string, unknown> = {};

  const cleanObjStr = objStr
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "");

  // Matches object keys and captures their values (supporting double, single, and backtick quoted strings with escaped chars, arrays, and primitive literals)
  const regex =
    /\b([a-zA-Z0-9_]+)\s*:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`|\[[\s\S]*?\]|null|true|false|\d+)/g;

  let m;
  while ((m = regex.exec(cleanObjStr)) !== null) {
    const key = m[1];
    const valStr = m[2].trim();

    if (valStr === "null") {
      result[key] = null;
    } else if (valStr === "true") {
      result[key] = true;
    } else if (valStr === "false") {
      result[key] = false;
    } else if (
      (valStr.startsWith('"') && valStr.endsWith('"')) ||
      (valStr.startsWith("'") && valStr.endsWith("'")) ||
      (valStr.startsWith("`") && valStr.endsWith("`"))
    ) {
      result[key] = valStr.slice(1, -1);
    } else if (valStr.startsWith("[") && valStr.endsWith("]")) {
      try {
        const jsonArrStr = valStr.replace(/'((?:[^'\\]|\\.)*)'/g, '"$1"');
        result[key] = JSON.parse(jsonArrStr);
      } catch {
        result[key] = [];
      }
    } else {
      result[key] = valStr;
    }
  }

  return result;
}

export function readMetadataFromFile(
  mdxPath: string,
  slug: string,
): MDXMetadata | null {
  if (!fs.existsSync(mdxPath)) return null;

  try {
    const fileContent = fs.readFileSync(mdxPath, "utf-8");
    const metadata = parseMetadata(fileContent);
    const readingTime = calculateReadingTime(fileContent);

    return { ...metadata, slug, readingTime } as MDXMetadata;
  } catch (err) {
    console.error(`Error reading metadata from ${mdxPath}:`, err);
    return null;
  }
}

export const getUpdateMetadata = cache((slug: string): MDXMetadata | null => {
  return readMetadataFromFile(
    path.join(process.cwd(), "src/app/(updates)/update/[slug]", `${slug}.mdx`),
    slug,
  );
});

export const getAllUpdatesMetadata = cache(async (): Promise<MDXMetadata[]> => {
  return unstable_cache(
    async () => {
      const slugs = getUpdateSlugs();
      const contentDir = path.join(
        process.cwd(),
        "src/app/(updates)/update/[slug]",
      );

      const all = slugs
        .map((slug) => {
          const mdxPath = path.join(contentDir, `${slug}.mdx`);
          return readMetadataFromFile(mdxPath, slug);
        })
        .filter((item): item is MDXMetadata => item !== null);

      const filtered =
        process.env.NODE_ENV === "production"
          ? all.filter((item) => item.status !== "DRAFT")
          : all;

      return filtered.sort((a, b) =>
        compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)),
      );
    },
    [`all-content-metadata-updates`],
    {
      revalidate: 3600,
      tags: [`mdx-updates`],
    },
  )();
});

export async function getAdjacentUpdate(
  currentSlug: string,
): Promise<{ prev: MDXMetadata | null; next: MDXMetadata | null }> {
  const sorted = await getAllUpdatesMetadata();
  const currentIndex = sorted.findIndex((item) => item.slug === currentSlug);

  return {
    prev: currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null,
    next: currentIndex > 0 ? sorted[currentIndex - 1] : null,
  };
}

//
// [SECTION] Types
//

export interface MDXMetadata {
  title: string;
  description: string;
  background?: string;
  slug: string;
  readingTime: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
  status: "DRAFT" | "WIP" | "COMPLETE";
  [key: string]: unknown;
}
