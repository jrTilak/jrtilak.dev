import React from "react";
import Link from "next/link";
import { Button } from "@/components/base/button";
import { cn } from "@/lib/cn";
import { HEADER_LINKS } from "./constants";

type NavLinkProps = {
  link: (typeof HEADER_LINKS)[number];
  isActive: boolean;
  onClick?: () => void;
  className?: string;
};

// Navigation link component
const NavLink: React.FC<NavLinkProps> = ({ link, isActive, onClick, className }) => (
  <Link href={link.href}>
    <Button
      key={link.href}
      variant="ghost"
      onClick={onClick}
      className={cn(
        "hover:bg-accent/80 h-fit items-center justify-normal gap-1.5 bg-transparent backdrop-blur-sm",
        isActive && "!text-primary",
        className
      )}
    >
      <link.icon className="size-[18px]" />
      <span>{link.label}</span>
    </Button>
  </Link>
);

export default NavLink;
