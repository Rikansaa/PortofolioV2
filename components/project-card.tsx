"use client";

import { motion } from "framer-motion";
import type { GithubRepo } from "@/lib/github";

export default function ProjectCard({ repo, index }: { repo: GithubRepo; index: number }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl glass-panel p-5 transition-shadow hover:shadow-2xl"
    >
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold">{repo.name}</h3>
          <span className="material-symbols-outlined text-accent opacity-0 transition-opacity group-hover:opacity-100">
            north_east
          </span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {repo.description ? repo.description : "Tidak ada deskripsi"}
        </p>
      </div>
      <div className="mt-5 flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-500">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px] leading-none">star</span>
          {repo.stargazers_count}
        </span>
      </div>
    </motion.a>
  );
}