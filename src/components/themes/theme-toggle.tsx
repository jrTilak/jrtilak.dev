"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/helpers/cn";
import { useAppTheme } from "@/hooks/use-app-theme";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeToggle = ({ className }: { className?: string }) => {
  const { toggleTheme } = useAppTheme();

  // return null; // Remove this line to enable the theme toggle// todo dark mode us not working as the css variables are not being updated
  return (
    <Button
      className={cn(
        "h-fit w-fit p-1.5 aspect-square bg-transparent",
        className
      )}
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
    >
      <SunIcon className="h-4 w-4 rotate-90 scale-0 transition-transform duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
      <MoonIcon className="scale-1000 absolute h-4 w-4 rotate-0 transition-transform duration-500 ease-in-out dark:-rotate-90 dark:scale-0" />
      <span className="sr-only">Switch Theme</span>
    </Button>
  );
};

export default ThemeToggle;
