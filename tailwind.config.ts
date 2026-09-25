import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          light: "#f5f6f8",
          dark: "#08090b"
        },
        accent: {
          DEFAULT: "#5865f2",
          soft: "#7c8bff"
        }
      },
      fontFamily: {
        display: ["var(--font-space)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"]
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "42px 42px"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        glow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;