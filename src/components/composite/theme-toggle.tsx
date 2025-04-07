"use client";

import { Button } from "@/components/base/button";
import { cn } from "@/lib/cn";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = ({ className }: { className?: string }) => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      className={cn("aspect-square bg-transparent p-1.5", className)}
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <SunIcon className="h-4 w-4 scale-0 rotate-90 transition-transform duration-500 ease-in-out dark:scale-100 dark:rotate-0" />
      <MoonIcon className="absolute h-4 w-4 scale-100 rotate-0 transition-transform duration-500 ease-in-out dark:scale-0 dark:-rotate-90" />
      <span className="sr-only">Switch Theme</span>
    </Button>
  );
};

export default ThemeToggle;
