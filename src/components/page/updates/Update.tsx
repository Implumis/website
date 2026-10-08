import { AspectRatio } from "@/components/ui/aspect-ratio";
import { formatUTC } from "@/lib/client/utils";
import Image from "next/image";
import Link from "next/link";

export default function Update({
  filename,
  background,
  title,
  createdAt,
  description,
}: UpdateProps) {
  const usesBgColor = background && background[0] === "#";

  return (
    <Link
      href={`/update/${filename}`}
      className="bg-black/45 hover:bg-black/55 w-full backdrop-blur-md rounded-md p-3 overflow-hidden relative border transition-all duration-250 ease-in-out hover:rotate-[0.7deg]"
    >
      <article>
        <div>
          <AspectRatio
            ratio={16 / 9}
            style={usesBgColor ? { backgroundColor: background } : undefined}
            className="rounded-md overflow-hidden relative"
          >
            {!usesBgColor && background && (
              <Image
                alt="Thumbnail background"
                className="absolute left-0 top-0"
                src={background}
                width={480}
                height={270}
              />
            )}
          </AspectRatio>
          <span className="font-medium text-2xl block mt-1.5">{title}</span>
          <span className="block mt-0.5 text-white/80">
            Created on {formatUTC(createdAt)}
          </span>
          <p className="text-xl mt-1 font-light line-clamp-2 min-h-[2lh]">
            {description}
          </p>
        </div>
        <div className="absolute w-full h-full grid-bg top-0 left-0 -z-10 opacity-12" />
      </article>
    </Link>
  );
}

interface UpdateProps {
  filename: string;
  background?: string;
  title: string;
  createdAt: Date;
  description: string;
}
