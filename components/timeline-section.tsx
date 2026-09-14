"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { getGithubRepos } from "@/lib/github";
import type { GithubRepo } from "@/lib/github";

function ProjectContent({ repo }: { repo: GithubRepo }) {
  return (
    <motion.a
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.25 }}
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl glass-panel p-5 transition-shadow hover:shadow-2xl"
    >
      <div className="mb-2 flex items-center justify-center gap-3 md:justify-between">
        <h3 className="font-display text-lg font-semibold">{repo.name}</h3>
        <span className="hidden material-symbols-outlined text-accent opacity-0 transition-opacity group-hover:opacity-100 md:inline-block">
          north_east
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {repo.description ? repo.description : "Tidak ada deskripsi"}
      </p>
      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-neutral-500 dark:text-neutral-500 md:justify-start">
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

function TimelineNode({
  index,
  children,
  dotRef
}: {
  index: number;
  children: React.ReactNode;
  dotRef?: React.Ref<HTMLSpanElement>;
}) {
  const isLeft = index % 2 === 0;
  const sideClass = isLeft ? "md:mr-auto md:pr-6 md:text-right" : "md:ml-auto md:pl-6 md:text-left";
  const stubSideClass = isLeft ? "right-1/2 mr-[7px]" : "left-1/2 ml-[7px]";

  return (
    <div className="relative flex min-h-[210px] items-center py-6">
      <motion.span
        ref={dotRef}
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:block"
      />
      <div className={"absolute top-1/2 hidden h-px w-6 -translate-y-1/2 bg-neutral-300 dark:bg-neutral-700 md:block " + stubSideClass} />
      <div className={"w-full text-center md:w-[46%] " + sideClass}>
        <motion.div
          initial={{ opacity: 0, y: 36, x: isLeft ? -16 : 16 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default function TimelineSection() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const firstDotRef = useRef<HTMLSpanElement>(null);
  const lastDotRef = useRef<HTMLSpanElement>(null);

  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 260,
    damping: 34,
    mass: 0.4,
    restDelta: 0.001
  });

  useEffect(() => {
    getGithubRepos().then(setRepos);
  }, []);

  useEffect(() => {
    function updateProgress() {
      const first = firstDotRef.current;
      const last = lastDotRef.current;
      if (!first || !last) return;

      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const total = lastRect.top - firstRect.top;
      if (total <= 0) {
        rawProgress.set(0);
        return;
      }
      const passed = viewportCenter - firstRect.top;
      const p = Math.min(1, Math.max(0, passed / total));
      rawProgress.set(p);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [repos, rawProgress]);

  return (
    <section id="project" className="mx-auto max-w-5xl scroll-mt-28 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Perjalanan</p>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Project Saya</h2>
        <p className="mx-auto mt-3 max-w-lg text-neutral-600 dark:text-neutral-400">
          5 project terbaru dari GitHub saya.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-neutral-300 dark:bg-neutral-700 md:block" />
        <motion.div
          style={{ scaleY: smoothProgress }}
          className="absolute left-1/2 top-0 hidden h-full w-px origin-top -translate-x-1/2 bg-accent md:block"
        />

        <div className="flex flex-col">
          {repos.map((repo, index) => (
            <TimelineNode
              key={repo.id}
              index={index}
              dotRef={index === 0 ? firstDotRef : index === repos.length - 1 ? lastDotRef : undefined}
            >
              <ProjectContent repo={repo} />
            </TimelineNode>
          ))}
        </div>
      </div>
    </section>
  );
}
