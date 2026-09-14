"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const name = "HI, Visitor!";

export default function WelcomeIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-3 bg-white dark:bg-black"
        >
          <div className="flex overflow-hidden">
            {name.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.05, ease: "easeOut" }}
                className="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-sm text-neutral-500 dark:text-neutral-400"
          >
            Selamat datang di portofolio saya
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
