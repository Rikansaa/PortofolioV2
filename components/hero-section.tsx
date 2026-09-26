"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function HeroSection({ robotSlot }: { robotSlot?: ReactNode }) {
  return (
    <section id="home" className="relative w-full scroll-mt-10 px-6 pb-16 pt-32 md:min-h-screen">
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-full lg:block lg:w-[70%] xl:w-[65%]">
        <div className="pointer-events-auto h-full w-full">{robotSlot}</div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 text-center md:flex-row md:pb-0 md:text-left">
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            whileHover={{ scale: 1.04 }}
            className="mb-3 inline-block rounded-full glass-panel px-4 py-1 text-sm font-medium text-accent dark:text-white"
          >
            Siswa TJKT, SMK PGRI Subang
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Halo,
            <span className="block bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
             Saya Rizki
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-md text-neutral-600 dark:text-white md:mx-0"
          >
            Dikenal sebagai Rikansaa, membangun website dan tools kecil menggunakan JavaScript,
            bereksperimen dengan otomasi dan proyek jaringan komputer.
          </motion.p>
        </div>

        <div className="hidden flex-1 lg:block" />
      </div>
    </section>
  );
}
