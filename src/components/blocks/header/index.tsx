"use client"
import React from "react";
import ThemeToggle from "@/components/composite/theme-toggle";
import Logo from "./logo";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Header: React.FC = () => {
  return (
    <header className="fixed inset-0 h-fit w-full bg-background/20 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-4 border-b">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-2.5">
          <ThemeToggle className="size-9" />
          <MobileNav
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
