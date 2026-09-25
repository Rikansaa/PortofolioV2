"use client";

import { motion } from "framer-motion";

export default function MusicSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10 text-center"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent dark:text-white">
          Apple Music
        </p>
        <h2 className="font-display text-3xl font-bold dark:text-white sm:text-4xl">Playlist</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto flex max-w-[802px] justify-center rounded-2xl glass-panel p-2"
      >
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="450"
          style={{ width: "100%", maxWidth: "802px", overflow: "hidden", borderRadius: "10px" }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/playlist/alan-walker-essentials/pl.6e374be22e00430e9cacbb44d304df45"
        />
      </motion.div>
    </section>
  );
}
