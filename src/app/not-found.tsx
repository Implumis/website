import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex limit-width items-center">
      <div className="mt-12">
        <h1 className="text-6xl font-semibold">
          <i>Quem quaeritis?</i>
        </h1>
        <p className="mt-6 text-2xl">We could not find what you requested.</p>
        <Link
          className="flex relative items-center gap-2 font-medium text-2xl w-max group transition-all hover:brightness-85 ease-in-out duration-250 mt-4"
          href="/"
        >
          <MoveLeft className="invisible" />
          <MoveLeft className="absolute group-hover:-left-1 left-0 transition-all duration-250" />
          <span>Go home</span>
        </Link>
      </div>
    </main>
  );
}
