import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="limit-width pb-10 mt-12 md:pb-16 md:mt-16">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-4 text-xl md:text-2xl group hover:brightness-85 transition-all duration-250 ease-in-out"
        >
          <Logo className="size-7 md:size-8 group-hover:rotate-360 transition-all duration-500 ease-in-out" />
          <span className="font-semibold">Implumis</span>
        </Link>
        <nav>
          <ul className="flex items-center gap-8 md:text-lg font-medium [&>li]:hover:brightness-85 [&>li]:transition-all [&>li]:duration-250 [&>li]:ease-in-out">
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/updates">Updates</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-8 flex items-center justify-between text-white/75">
        <span className="text-xs md:text-base">© 2026 Implumis.</span>
        <Link
          href="/privacy"
          className="text-xs md:text-base hover:brightness-85 transition-all duration-250 ease-in-out"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
