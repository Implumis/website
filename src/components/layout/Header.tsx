import Link from "next/link";
import Logo from "../ui/Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between limit-width mt-8 py-3">
      <Link href="/" className="flex items-center gap-4 text-3xl">
        <Logo className="size-9" />
        <span className="font-semibold">Implumis</span>
      </Link>
      <nav>
        <ul className="flex items-center gap-8 text-xl">
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
