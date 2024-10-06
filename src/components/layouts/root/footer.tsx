"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 container mx-auto items-center justify-center my-9 bg-gradient-to-b from-muted to-muted/0">
      <Separator />
      <div className="flex flex-col">
        <span className="text-muted-foreground text-center">
          &copy; jrTilak - {new Date().getFullYear()}
        </span>
        <span
          title="(Vidya vinaya sampunnah
          brahmano'pi gacchati) Meaning: 'Knowledge is the most important aspect
          of a person; even a Brahmin is respected for their wisdom and
          humility.' - Krishna (Bhagvad Gita)"
          className="text-muted-foreground text-xs sm:text-sm p-0.5 border-background border hover:border-primary rounded-lg"
        >
          विद्या विनय संपूर्णा ब्रह्मणोऽपि गच्छति
        </span>
      </div>
    </footer>
  );
};

export default Footer;
