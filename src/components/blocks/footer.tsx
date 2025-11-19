"use client";
import { Separator } from "@/components/base/separator";
import React from "react";

const Footer = () => {
  return (
    <footer className="from-muted to-muted/0 container mx-auto my-9 flex flex-col items-center justify-center gap-5 bg-gradient-to-b">
      <Separator />
      <div className="flex flex-col">
        <span className="text-muted-foreground text-center">
          &copy; jrTilak - {new Date().getFullYear()}
        </span>
        <span
          title="by Optimus Prime (Transfomers)"
          className="text-muted-foreground border-background hover:border-primary rounded-lg border p-0.5 text-xs sm:text-sm"
        >
          One shall stand, one shall fall.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
