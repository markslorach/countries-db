"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// Icons
import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <Button
      aria-label="Toggle Theme"
      type="button"
      variant="ghost"
      size="icon"
      className="dark:bg-transparent"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </Button>
  );
};

export default ThemeToggle;
