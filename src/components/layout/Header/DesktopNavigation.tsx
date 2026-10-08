import Link from "next/link";

export default function DesktopNavigation() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-8 sm:text-lg md:text-xl font-medium [&>li]:hover:brightness-85 [&>li]:transition-all [&>li]:duration-250 [&>li]:ease-in-out">
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/updates">Updates</Link>
        </li>
      </ul>
    </nav>
  );
}
