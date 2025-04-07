"use client";

import { Button } from "@/components/base/button";
import { cn } from "@/lib/cn";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = ({ className }: { className?: string }) => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      className={cn(
        "h-fit w-fit p-1.5 aspect-square bg-transparent",
        className
      )}
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <SunIcon className="h-4 w-4 rotate-90 scale-0 transition-transform duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
      <MoonIcon className="scale-100 absolute h-4 w-4 rotate-0 transition-transform duration-500 ease-in-out dark:-rotate-90 dark:scale-0" />
      <span className="sr-only">Switch Theme</span>
    </Button>
  );
};

export default ThemeToggle;