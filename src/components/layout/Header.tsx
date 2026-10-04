import Link from "next/link";
import Logo from "../ui/Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between limit-width mt-8 py-3">
      <Link
        href="/"
        className="flex items-center gap-4 text-3xl group hover:brightness-85 transition-all duration-250 ease-in-out"
      >
        <Logo className="size-9 group-hover:rotate-360 transition-all duration-500 ease-in-out" />
        <span className="font-semibold">Implumis</span>
      </Link>
      <nav>
        <ul className="flex items-center gap-8 text-xl font-medium [&>li]:hover:brightness-85 [&>li]:transition-all [&>li]:duration-250 [&>li]:ease-in-out">
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/updates">Updates</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
