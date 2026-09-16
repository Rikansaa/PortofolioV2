"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";

const BASE_SIZE = 24;
const DARK_COLOR = "#181818";
const LIGHT_COLOR = "#ffffff";

type Phase = "travel" | "cover" | "fade";

interface RunState {
  id: number;
  color: string;
  bottomOffset: number;
  coverScale: number;
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [run, setRun] = useState<RunState | null>(null);
  const [phase, setPhase] = useState<Phase>("travel");

  const handleClick = () => {
    if (run) return;

    const nextTheme = theme === "light" ? "dark" : "light";
    const color = nextTheme === "dark" ? DARK_COLOR : LIGHT_COLOR;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const diagonal = Math.sqrt(vw * vw + vh * vh);
    const coverScale = (diagonal / BASE_SIZE) * 1.15;
    const bottomOffset = vh / 2 + BASE_SIZE * 2;

    setPhase("travel");
    setRun({ id: Date.now(), color, bottomOffset, coverScale });
  };

  const target =
    run &&
    (phase === "travel"
      ? { y: 0, scale: 0.4, opacity: 1 }
      : phase === "cover"
        ? { y: 0, scale: run.coverScale, opacity: 1 }
        : { y: 0, scale: run.coverScale, opacity: 0 });

  return (
    <>
      <button
        onClick={handleClick}
        aria-label="Ganti tema warna"
        className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
      >
        <span className="material-symbols-outlined text-[20px] text-neutral-800 dark:text-white!">
          {theme === "dark" ? "light_mode" : "dark_mode"}
        </span>
      </button>

      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 9999
        }}
      >
        <AnimatePresence>
          {run && target && (
            <motion.div
              key={run.id}
              initial={{ y: run.bottomOffset, scale: 0.4, opacity: 1 }}
              animate={target}
              transition={{
                duration: phase === "travel" ? 0.35 : phase === "cover" ? 0.5 : 0.35,
                ease: phase === "fade" ? "easeInOut" : [0.76, 0, 0.24, 1]
              }}
              onAnimationComplete={() => {
                if (phase === "travel") {
                  setPhase("cover");
                } else if (phase === "cover") {
                  toggleTheme();
                  setTimeout(() => setPhase("fade"), 150);
                } else if (phase === "fade") {
                  setRun(null);
                }
              }}
              style={{
                width: BASE_SIZE,
                height: BASE_SIZE,
                borderRadius: "9999px",
                backgroundColor: run.color
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
