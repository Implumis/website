"use client";

import MenuIcon from "@/components/ui/MenuIcon";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "cn";
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
        className="sm:hidden cursor-pointer z-60"
        aria-label="Open navigation menu"
      >
        <MenuIcon active={sheetOpen} className="size-8" />
      </SheetTrigger>
      <SheetContent className="border-0! w-full! bg-[#072038] [&_#close]:hidden">
        <SheetClose
          className="absolute size-8 right-2.5 top-6 z-100"
          aria-label="Close navigation menu"
        />
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
