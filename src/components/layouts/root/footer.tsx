"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 container mx-auto items-center justify-center my-9 bg-gradient-to-b from-muted to-muted/0">
      <Separator />
      <span className="text-muted-foreground text-center">
        &copy; jrTilak - {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
