import Link from "next/link";
import Logo from "../ui/Logo";
import { cn } from "cn";

export default function Header() {
  return (
    <header className="border-b-3 border-r-3 border-white w-max h-15 bg-background">
      <nav className="h-full">
        <ul
          className={cn(
            "flex items-center h-full",
            "[&>li]:h-full [&>li>*]:px-4 [&>li>*]:block [&>li>*]:h-full [&>li>*]:content-center [&>li]:border-r-3 [&>li]:border-white [&>li]:last:border-r-0!",
          )}
        >
          <li>
            <Link href="/" className="text-3xl font-semibold">
              <span className="flex items-center gap-3.5">
                <Logo className="size-8.5" /> Implumis
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" className="text-xl font-medium">
              <span>About us</span>
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-xl font-medium">
              <span>Blog</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
