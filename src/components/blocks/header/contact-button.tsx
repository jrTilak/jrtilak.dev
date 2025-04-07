import React from "react";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";
import { Button } from "@/components/base/button";
import { cn } from "@/lib/cn";

// Contact button component
const ContactButton: React.FC<{ onClick?: () => void; className?: string }> = ({ onClick, className }) => (
  <Button
    className={cn("h-fit", className)}
    onClick={onClick}
  >
    <Link
      href="/contact"
      className="flex items-center gap-1.5"
    >
      <MessagesSquareIcon className="size-[18px]" />
      <span className="ml-2">Contact</span>
    </Link>
  </Button>
);

export default ContactButton;
