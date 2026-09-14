"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-28 px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Profil</p>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Tentang Saya</h2>
      </motion.div>

      <div className="mx-auto mt-8 max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
          Saya Rizki Krisna Santika, siswa jurusan Teknik Jaringan Komputer dan Telekomunikasi
          di SMK PGRI Subang. Ketertarikan saya terbagi di dua dunia yang saling melengkapi:
          membangun infrastruktur jaringan yang stabil, dan menulis kode yang menghidupkan
          sebuah ide menjadi aplikasi nyata.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="mt-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
          Di sekolah saya belajar konfigurasi router, switch, dan simulasi jaringan lewat Cisco
          Packet Tracer, sementara di luar jam sekolah saya menghabiskan waktu bereksperimen
          dengan JavaScript, membangun website, bot otomatisasi, dan berbagai tools kecil yang
          memudahkan pekerjaan sehari-hari.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="mt-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
          Saya percaya cara terbaik untuk belajar adalah dengan membangun sesuatu yang nyata,
          gagal, memperbaikinya, lalu mengulanginya lagi. Ke depannya saya ingin memperdalam
          kemampuan di dua bidang ini sekaligus, dan berharap bisa berkontribusi sebagai Network
          Engineer yang juga mengerti bagaimana sebuah sistem dibangun dari sisi software-nya.
        </motion.p>
      </div>
    </section>
  );
}
