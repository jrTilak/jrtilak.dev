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
  <Link
    onClick={onClick}
    className={cn(
      "items-center justify-center px-4 text-sm gap-1.5 flex gap-2",
      isActive && "!text-primary",
      className
    )}
    href={link.href}>
    <link.icon className="size-[18px]" />
    <span>{link.label}</span>
  </Link>
);

export default NavLink;
