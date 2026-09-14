"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Coding",
    description: "Bahasa dan tools yang saya pakai untuk membangun website dan automation.",
    items: [
      { name: "JavaScript", icon: "code" },
      { name: "Next.js", icon: "bolt" },
      { name: "Node.js", icon: "dns" },
      { name: "HTML & CSS", icon: "css" },
      { name: "Git & GitHub", icon: "account_tree" },
      { name: "NextJS", icon: "widgets" },
      { name: "TailwindCSS", icon: "palette" }
    ]
  },
  {
    title: "Jaringan",
    description: "Kompetensi jaringan komputer yang saya pelajari di jurusan TJKT.",
    items: [
      { name: "Cisco Packet Tracer", icon: "router" },
      { name: "Konfigurasi Router & Switch", icon: "settings_ethernet" },
      { name: "Subnetting", icon: "lan" },
      { name: "Troubleshooting Jaringan", icon: "build" }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-28 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Skills and Tools</p>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Kemampuan Saya</h2>
      </motion.div>

      <div className="flex flex-col gap-16">
        {skillGroups.map((group) => (
          <div key={group.title} className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center md:text-left"
            >
              <h3 className="font-display text-xl font-semibold">{group.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{group.description}</p>
            </motion.div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {group.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl glass-panel p-4 text-center"
                >
                  <span className="material-symbols-outlined text-2xl text-accent">{item.icon}</span>
                  <span className="text-xs font-medium">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
