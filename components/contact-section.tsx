"use client";

import { motion } from "framer-motion";

const contactMethods = [
  {
    label: "WhatsApp",
    value: "0877-9458-5528",
    href: "https://wa.me/6287794585528",
    icon: "chat"
  },
  {
    label: "Email",
    value: "tururizki20@gmail.com",
    href: "mailto:tururizki20@gmail.com",
    icon: "mail"
  },
  {
    label: "GitHub",
    value: "github.com/Rikansaa",
    href: "https://github.com/Rikansaa",
    icon: "code"
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-28 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-14 text-center"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent dark:text-white">Kontak</p>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Hubungi Saya</h2>
        <p className="mx-auto mt-3 max-w-lg text-neutral-600 dark:text-white">
          Terbuka untuk kolaborasi project, diskusi jaringan, atau sekadar menyapa.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.label}
            href={method.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="flex flex-col items-center gap-2 rounded-2xl glass-panel p-6 text-center"
          >
            <span className="material-symbols-outlined text-3xl text-accent dark:text-white">{method.icon}</span>
            <span className="font-display text-sm font-semibold">{method.label}</span>
            <span className="text-xs text-neutral-600 dark:text-white">{method.value}</span>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 overflow-hidden rounded-2xl glass-panel p-2"
      >
        <div className="overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63419.61873872041!2d107.72394196895176!3d-6.5562115697774574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e693c919ece3ed5%3A0x630f121657291f0!2sSubang%2C%20Kec.%20Subang%2C%20Kabupaten%20Subang%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1789255496970!5m2!1sid!2sid"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </motion.div>
    </section>
  );
}
