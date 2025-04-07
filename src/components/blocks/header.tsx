"use client";
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
} from "@/components/base/sheet";
import { Button } from "../base/button";
import { cn } from "@/lib/cn";
import ThemeToggle from "../composite/theme-toggle";

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
            <Button
              key={link.href}
              variant={"ghost"}
              className={cn("h-fit items-center gap-1.5 hover:bg-accent/80 backdrop-blur-sm bg-transparent", (pathname === "/"
                ? pathname === link.href
                : link.href.startsWith(pathname)) && "!text-primary"
              )}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1.5"
              >
                <link.icon className="size-[18px]" />
                <span>{link.label}</span>
              </Link>
            </Button>

          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <ThemeToggle className="size-9" />
          {/* mobile nav */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger
              asChild
            >
              <Button
                variant={"ghost"}
                className="size-9 h-fit w-fit p-1.5 aspect-square bg-transparent lg:hidden"
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
                  <Button
                    key={link.href}
                    onClick={closeSheet}
                    variant={"ghost"}
                    className={cn(
                      "h-fit items-center gap-1.5 w-full justify-normal",
                      (pathname === "/"
                        ? pathname === link.href
                        : link.href.startsWith(pathname)) && "!text-primary"
                    )}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 justify-normal"
                    >
                      <link.icon className="size-[18px]" />
                      <span>{link.label}</span>
                    </Link>
                  </Button>
                ))}
              </nav>
              <SheetFooter className="w-full">
                <Button
                  className="h-fit w-full"
                  onClick={closeSheet}
                >
                  <Link
                    className="flex items-center gap-1.5"
                    href={"/contact"}
                  >
                    <MessagesSquareIcon className="size-[18px]" />
                    <span className="ml-2">Contact</span>
                  </Link>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Button
            className="h-fit hidden lg:flex"
          >
            <Link
              href={"/contact"}
              className="flex items-center gap-1.5"
            >
              <MessagesSquareIcon className="size-[18px]" />
              <span className="ml-2">Contact</span>
            </Link>
          </Button>
        </div>
      </div >
    </header >
  );
};

export default Header;