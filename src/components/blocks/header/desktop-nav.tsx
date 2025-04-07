import React from "react";
import NavLink from "./nav-link";
import ContactButton from "./contact-button";
import { HEADER_LINKS } from "./constants";
import { usePathname } from "next/navigation";

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
      <nav className="lg:flex gap-2.5 hidden">
        {HEADER_LINKS.map((link) => (
          <NavLink
            key={link.href}
            link={link}
            isActive={isLinkActive(link.href)}
          />
        ))}
      </nav>
      <ContactButton className="hidden lg:flex" />
    </>
  );
};

export default DesktopNav;
