import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="limit-width">
      <div className="mt-36">
        <hgroup className="font-semibold text-9xl">
          <h1>We make things</h1>
          <h1>
            That <i className="text-primary">fly</i>.
          </h1>
        </hgroup>
        <Link
          className="flex mt-5 items-center gap-2 font-medium text-2xl w-max group transition-all hover:brightness-85 ease-in-out duration-250"
          href="/updates"
        >
          <span>View updates</span>{" "}
          <MoveRight className="group-hover:ml-1 transition-all ease-in-out duration-250" />
        </Link>
      </div>
    </main>
  );
}
