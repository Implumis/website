"use client";

import MenuIcon from "@/components/ui/MenuIcon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileNavigation() {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setSheetOpen(false));
    return () => cancelAnimationFrame(handle);
  }, [pathname]);

  return (
    <Sheet open={sheetOpen} onOpenChange={(open) => setSheetOpen(open)}>
      <SheetTrigger
        className="sm:hidden cursor-pointer z-20"
        aria-label="Open navigation menu"
      >
        <MenuIcon active={sheetOpen} className="size-8" />
      </SheetTrigger>
      <SheetContent className="border-0! w-full! bg-[#072038]">
        <SheetHeader className="mt-3 pt-3 px-2.5">
          <SheetTitle className="text-2xl">Navigation</SheetTitle>
          <SheetDescription hidden={true}>
            Navigate through the various pages of the website
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
