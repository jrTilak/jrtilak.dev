import React from "react";
import Link from "next/link";
import { Button } from "@/components/base/button";
import { cn } from "@/lib/cn";
import { HEADER_LINKS } from "./constants";

type NavLinkProps = {
  link: typeof HEADER_LINKS[number];
  isActive: boolean;
  onClick?: () => void;
  className?: string;
};

// Navigation link component
const NavLink: React.FC<NavLinkProps> = ({ link, isActive, onClick, className }) => (
  <Button
    key={link.href}
    variant="ghost"
    onClick={onClick}
    className={cn(
      "h-fit items-center gap-1.5 hover:bg-accent/80 backdrop-blur-sm bg-transparent",
      isActive && "!text-primary",
      className
    )}
  >
    <Link
      href={link.href}
      className={cn("flex items-center gap-2.5", className?.includes("w-full") && "justify-normal")}
    >
      <link.icon className="size-[18px]" />
      <span>{link.label}</span>
    </Link>
  </Button>
);

export default NavLink;
