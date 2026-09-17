"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "@/components/theme-toggle";
import { useTheme } from "@/context/theme-context";

const links = [
  { label: "Home", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Skills", href: "#skills" },
  { label: "Kontak", href: "#contact" }
];

export default function Navbar() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const panel = panelRef.current;
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    panel.style.setProperty("--x", x + "%");
    panel.style.setProperty("--y", y + "%");
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-5 left-1/2 z-50 w-[92%] max-w-4xl -translate-x-1/2"
    >
      <div
        ref={panelRef}
        onMouseMove={handleMouseMove}
        className="glass-panel relative z-50 flex items-center justify-between overflow-hidden rounded-full px-5 py-2.5"
      >
        <span className="liquid-highlight" />
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#home"
          className="font-display text-lg font-semibold tracking-tight"
        >
          Rikansaa
        </motion.a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <motion.a
              key={link.href}
              whileHover={{ y: -2 }}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-accent dark:text-neutral-300 dark:hover:text-accent-soft"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="toggle menu"
            className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10 md:hidden"
          >
            <span
              className="material-symbols-outlined"
              style={{ color: theme === "dark" ? "#ffffff" : "#262626" }}
            >
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-white/30 backdrop-blur-md dark:bg-black/50 md:hidden"
            />
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="glass-panel relative z-50 mt-3 flex flex-col gap-1 rounded-2xl p-3 text-center md:hidden"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
