import React from "react";
import Link from "next/link";

// Logo component for reuse
const Logo: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <Link 
    href="/" 
    className="text-2xl font-bold" 
    onClick={onClick}
  >
    jrTilak.
  </Link>
);

export default Logo;
