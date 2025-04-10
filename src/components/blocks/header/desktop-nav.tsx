import React from "react";
import NavLink from "./nav-link";
import ContactButton from "./contact-button";
import { HEADER_LINKS } from "./constants";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/composite/theme-toggle";

// Desktop navigation component
const DesktopNav = () => {
  const pathname = usePathname();

  // Helper function to check if a link is active
  const isLinkActive = (href: string) => {
    if (pathname === "/") return href === "/";
    return href !== "/" && pathname.startsWith(href);
  };

  return (
    <>
      <nav className="hidden gap-2.5 lg:flex">
        {HEADER_LINKS.map((link) => (
          <NavLink key={link.href} link={link} isActive={isLinkActive(link.href)} />
        ))}
      </nav>
      <div className="flex w-fit items-center gap-2.5">
        <ContactButton className="hidden lg:flex" />
        <ThemeToggle className="hidden lg:flex" />
      </div>
    </>
  );
};

export default DesktopNav;
