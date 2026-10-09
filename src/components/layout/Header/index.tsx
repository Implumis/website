import Link from "next/link";
import Logo from "@/components/ui/Logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  return (
    <header className="flex items-center justify-between limit-width mt-3 md:mt-8 py-3">
      <Link
        href="/"
        className="flex items-center gap-2 md:gap-4 text-2xl md:text-3xl group hover:brightness-85 transition-all duration-250 ease-in-out"
      >
        <Logo className="size-8 md:size-9 group-hover:rotate-360 transition-all duration-500 ease-in-out" />
        <span className="font-semibold">Implumis</span>
      </Link>
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
}
