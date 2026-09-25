"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getGithubRepos, type GithubRepo } from "@/lib/github";
import ProjectCard from "@/components/project-card";

export default function ProjectsSection() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    setLoading(true);
    setError(false);

    getGithubRepos()
      .then((data) => {
        if (active) {
          setRepos(data.slice(0, 5));
        }
      })
      .catch(() => {
        if (active) {
          setError(true);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="project" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 text-center"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent dark:text-white">Portofolio</p>
        <h2 className="font-display text-3xl font-bold dark:text-white sm:text-4xl">Project Saya</h2>
        <p className="mx-auto mt-3 max-w-lg text-neutral-600 dark:text-white">
          5 project terbaru dari akun GitHub saya, diperbarui otomatis setiap ada perubahan.
        </p>
      </motion.div>

      {loading && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-48 animate-pulse rounded-xl bg-neutral-200 dark:bg-neutral-800"
            />
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="text-center text-sm text-red-500">
          Gagal memuat data project dari GitHub.
        </p>
      )}

      {!loading && !error && repos.length === 0 && (
        <p className="text-center text-sm text-neutral-500">
          Belum ada project untuk ditampilkan.
        </p>
      )}

      {!loading && !error && repos.length > 0 && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, index) => (
            <ProjectCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
