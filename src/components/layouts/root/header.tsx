"use client";
import ThemeToggle from "@/components/themes/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/helpers/cn";
import {
  FolderGit2Icon,
  HouseIcon,
  Layers3Icon,
  MessagesSquareIcon,
  PencilLineIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
  return (
    <header className="fixed inset-0 h-fit w-full bg-background/20 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center py-4 border-b">
        <Link href={"/"} className="text-2xl font-bold">
          jrTilak.
        </Link>
        <nav className="flex gap-2.5">
          {HEADER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "h-fit items-center gap-1.5",
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
        <div className="flex items-center gap-4">
          <ThemeToggle className="size-9" />
          <Link
            href={"/contact"}
            className={cn(buttonVariants({ variant: "default" }), "h-fit")}
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
