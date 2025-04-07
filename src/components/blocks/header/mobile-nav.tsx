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
          className="size-9 h-fit w-fit p-1.5 aspect-square bg-transparent lg:hidden"
        >
          <MenuIcon className="size-[18px]" />
        </Button>
      </SheetTrigger>
      <SheetContent className="lg:hidden flex items-center flex-col justify-between h-dvh w-[200px]">
        <SheetHeader>
          <SheetTitle>
            <Logo onClick={closeSheet} />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex gap-2.5 flex-col items-start w-full">
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
