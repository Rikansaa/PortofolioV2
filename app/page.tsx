import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import MarqueeSection from "@/components/marquee-section";
import AboutSection from "@/components/about-section";
import TimelineSection from "@/components/timeline-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <TimelineSection />
      <SkillsSection />
      <ContactSection />
      <footer className="border-t border-black/5 py-8 text-center text-sm text-neutral-500 dark:border-white/5 dark:text-white">
        Dibuat oleh Rizki Krisna Santika, TJKT SMK PGRI Subang
      </footer>
    </main>
  );
}
