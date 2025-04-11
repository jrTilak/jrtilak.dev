import React, { useState } from "react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/base/sheet";
import { Button } from "@/components/base/button";
import NavLink from "./nav-link";
import Logo from "./logo";
import ContactButton from "./contact-button";
import { HEADER_LINKS } from "./constants";
import { usePathname } from "next/navigation";

// Mobile navigation component
const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeSheet = () => setIsOpen(false);

  // Helper function to check if a link is active
  const isLinkActive = (href: string) => {
    if (pathname === "/") return href === "/";
    return href !== "/" && pathname.startsWith(href);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="aspect-square size-9 h-fit w-fit bg-transparent p-1.5 lg:hidden"
        >
          <MenuIcon className="size-[18px]" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-dvh w-[200px] flex-col items-center justify-between lg:hidden">
        <SheetHeader>
          <SheetTitle>
            <Logo onClick={closeSheet} />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex w-full flex-col items-start gap-2.5">
          {HEADER_LINKS.map((link) => (
            <NavLink
              key={link.href}
              link={link}
              isActive={isLinkActive(link.href)}
              onClick={closeSheet}
              className="w-full justify-normal"
            />
          ))}
        </nav>
        <SheetFooter className="w-full">
          <ContactButton onClick={closeSheet} className="w-full" />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
