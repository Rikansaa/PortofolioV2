"use client";

import { useTheme } from "@/context/theme-context";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="toggle theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-full glass-panel transition-transform hover:scale-105 active:scale-95"
    >
      <span className="material-symbols-outlined">
        {theme === "light" ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
}