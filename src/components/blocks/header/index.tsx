"use client";
import React from "react";
import ThemeToggle from "@/components/composite/theme-toggle";
import Logo from "./logo";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Header: React.FC = () => {
  return (
    <header className="bg-background/20 fixed inset-0 z-50 h-fit w-full backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between border-b py-4">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-2.5 lg:hidden">
          <ThemeToggle className="size-9 lg:hidden" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
