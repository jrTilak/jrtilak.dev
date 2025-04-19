import React from "react";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";
import { Button } from "@/components/base/button";
import { cn } from "@/lib/cn";

const ContactButton: React.FC<{ onClick?: () => void; className?: string }> = ({
  onClick,
  className,
}) => (
  <Link href="/contact" className="flex items-center gap-1.5">
    <Button className={cn("h-fit flex items-center gap-1.5", className)} onClick={onClick}>
      <MessagesSquareIcon className="size-[18px]" />
      <span className="ml-2">Contact</span>
    </Button>
  </Link>
);

export default ContactButton;
