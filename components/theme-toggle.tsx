"use client";

import { useRef } from "react";
import { useAnimate } from "framer-motion";
import { useTheme } from "@/context/theme-context";

const BASE_SIZE = 24;

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const isAnimating = useRef(false);

  const handleClick = async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const nextTheme = theme === "light" ? "dark" : "light";
    const circleColor = nextTheme === "dark" ? "#000000" : "#ffffff";

    const el = scope.current;
    if (!el) {
      toggleTheme();
      isAnimating.current = false;
      return;
    }

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const diagonal = Math.sqrt(vw * vw + vh * vh);
    const coverScale = (diagonal / BASE_SIZE) * 1.15;
    const bottomOffset = vh / 2 + BASE_SIZE * 2;

    await animate(
      el,
      { y: bottomOffset, scale: 0.4, opacity: 1, backgroundColor: circleColor },
      { duration: 0 }
    );

    await animate(el, { y: 0 }, { duration: 0.35, ease: [0.65, 0, 0.35, 1] });

    await animate(el, { scale: coverScale }, { duration: 0.5, ease: [0.76, 0, 0.24, 1] });

    toggleTheme();
    await new Promise((resolve) => setTimeout(resolve, 150));

    await animate(el, { opacity: 0 }, { duration: 0.35 });

    isAnimating.current = false;
  };

  return (
    <>
      <button
        onClick={handleClick}
        aria-label="Ganti tema warna"
        className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
      >
        <span className="material-symbols-outlined text-[20px]">
          {theme === "dark" ? "light_mode" : "dark_mode"}
        </span>
      </button>

      <div
        ref={scope}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          width: BASE_SIZE,
          height: BASE_SIZE,
          marginLeft: -BASE_SIZE / 2,
          marginTop: -BASE_SIZE / 2,
          borderRadius: "9999px",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 9999
        }}
      />
    </>
  );
}
