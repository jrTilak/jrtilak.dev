"use client";
import ThemeToggle from "@/components/themes/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/helpers/cn";
import {
  FolderGit2Icon,
  HouseIcon,
  Layers3Icon,
  MenuIcon,
  MessagesSquareIcon,
  PencilLineIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HEADER_LINKS = [
  {
    label: "Home",
    href: "/",
    icon: HouseIcon,
  },
  {
    label: "About",
    href: "/about",
    icon: UserIcon,
  },
  {
    label: "Services",
    href: "/services",
    icon: Layers3Icon,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderGit2Icon,
  },
  {
    label: "Blogs",
    href: "/blogs",
    icon: PencilLineIcon,
  },
];

const Header = () => {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="fixed inset-0 h-fit w-full bg-background/20 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-4 border-b">
        <Link href={"/"} className="text-2xl font-bold">
          jrTilak.
        </Link>
        <nav className="lg:flex gap-2.5 hidden">
          {HEADER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "h-fit items-center gap-1.5 hover:bg-accent/80 backdrop-blur-sm",
                (pathname === "/"
                  ? pathname === link.href
                  : link.href.startsWith(pathname)) && "!text-primary"
              )}
            >
              <link.icon className="size-[18px]" />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <ThemeToggle className="size-9" />
          {/* mobile nav */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger>
              <Button
                className="size-9 h-fit w-fit p-1.5 aspect-square bg-transparent lg:hidden"
                variant="ghost"
              >
                <MenuIcon className="size-[18px]" />
              </Button>
            </SheetTrigger>
            <SheetContent className="lg:hidden flex items-center flex-col justify-between h-dvh w-[200px]">
              <SheetHeader>
                <SheetTitle>
                  <Link
                    onClick={closeSheet}
                    href={"/"}
                    className="text-2xl font-bold"
                  >
                    jrTilak.
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex gap-2.5 flex-col items-start w-full ">
                {HEADER_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "h-fit items-center gap-1.5 w-full justify-normal",
                      (pathname === "/"
                        ? pathname === link.href
                        : link.href.startsWith(pathname)) && "!text-primary"
                    )}
                  >
                    <link.icon className="size-[18px]" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
              <SheetFooter className="w-full">
                <Link
                  href={"/contact"}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "h-fit w-full"
                  )}
                >
                  <MessagesSquareIcon className="size-[18px]" />
                  <span className="ml-2">Contact</span>
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Link
            href={"/contact"}
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-fit hidden lg:flex"
            )}
          >
            <MessagesSquareIcon className="size-[18px]" />
            <span className="ml-2">Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
