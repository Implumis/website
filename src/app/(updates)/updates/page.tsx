import { formatUTC } from "@/lib/client/utils";
import Image from "next/image";
import Link from "next/link";

export default function Updates() {
  return (
    <main className="limit-width">
      <div className="mt-12">
        <h1 className="text-6xl font-semibold">Updates</h1>
        <p className="text-2xl mt-5">
          Read about our latest and past progress.
        </p>
      </div>
      <div className="grid grid-cols-3 mt-8">
        <Link
          href="/update/baby-steps"
          className="bg-black/45 hover:bg-black/55 backdrop-blur-md rounded-md p-3 overflow-hidden relative border hover:rotate-1 transition-all duration-250 ease-in-out"
        >
          <div>
            <Image
              alt="Banner"
              src="/images/documents/baby_steps/thumbnail.avif"
              className="rounded-md"
              width={480}
              height={270}
            />
            <span className="font-medium text-2xl block mt-1.5">
              Baby steps
            </span>
            <span className="block mt-0.5">
              Created • {formatUTC(new Date("2026-10-04"))}
            </span>
            <p className="text-xl mt-1 font-light line-clamp-2 min-h-[2lh]">
              We have a name! Now what?
            </p>
          </div>
          <div className="absolute w-full h-full grid-bg top-0 left-0 -z-10 opacity-12" />
        </Link>
      </div>
    </main>
  );
}
