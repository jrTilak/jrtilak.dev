"use client";
import ThemeToggle from "@/components/themes/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/helpers/cn";
import {
  FolderGit2Icon,
  HouseIcon,
  Layers3Icon,
  LogOutIcon,
  MailIcon,
  MenuIcon,
  MessagesSquareIcon,
  MoonIcon,
  PencilLineIcon,
  SettingsIcon,
  SunIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PERSONAL_DETAILS } from "@/data/personal-details";
import useAuth from "@/hooks/use-auth";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useAppTheme } from "@/hooks/use-app-theme";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";

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
  const { loading, user } = useAuth();

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  const { toggleTheme, theme } = useAppTheme();

  return (
    <header className="fixed inset-0 h-fit w-full bg-background/20 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-4 border-b">
        <Link href={"/"} className="text-2xl font-bold">
          {PERSONAL_DETAILS.nickname}.
        </Link>
        <nav className="lg:flex gap-2.5 hidden">
          {HEADER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "h-fit items-center gap-1.5 hover:bg-accent/80 backdrop-blur-sm bg-transparent",
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
          {loading ? (
            <Skeleton className="size-9" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="!outline-none !ring-0">
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <Avatar>
                    <AvatarImage
                      src={
                        user?.photoURL ??
                        "https://www.svgrepo.com/show/393899/avatar-19.svg"
                      }
                      width={36}
                      height={36}
                      alt="Avatar"
                      className="overflow-hidden rounded-full"
                    />
                    <AvatarFallback>
                      {user?.displayName
                        ?.split(" ")
                        ?.map((str) => str[0].toUpperCase())
                        .filter((_, i) => i < 2)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-40">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => toast.error("Not available yet!")}
                  className="w-full flex items-center justify-between"
                >
                  Settings
                  <SettingsIcon className="ml-auto size-3.5" />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href={"/contact"}
                    className="w-full flex items-center justify-between"
                  >
                    Support
                    <MailIcon className="ml-auto size-3.5" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between"
                >
                  Toggle Theme
                  {theme === "dark" ? (
                    <SunIcon className="h-3.5 w-3.5 " />
                  ) : (
                    <MoonIcon className="h-3.5 w-3.5 " />
                  )}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    toast.promise(signOut(auth), {
                      error: "Failed to logout",
                      loading: "Logging out...",
                      success: "Logout success!",
                    });
                  }}
                >
                  Logout
                  <LogOutIcon className="ml-auto size-3.5" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <ThemeToggle className="size-9" />
          )}
          {/* mobile nav */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger
              className={buttonVariants({
                variant: "ghost",
                className:
                  "size-9 h-fit w-fit p-1.5 aspect-square bg-transparent lg:hidden",
              })}
            >
              <MenuIcon className="size-[18px]" />
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
                    onClick={closeSheet}
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
                  onClick={closeSheet}
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
