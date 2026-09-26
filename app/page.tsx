import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import SplineRobot from "@/components/spline-robot";
import SplineMouseFollow from "@/components/spline-mouse-follow";
import MarqueeSection from "@/components/marquee-section";
import AboutSection from "@/components/about-section";
import TimelineSection from "@/components/timeline-section";
import MusicSection from "@/components/music-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="relative">
      <SplineMouseFollow />
      <Navbar />
      <HeroSection robotSlot={<SplineRobot />} />
      <MarqueeSection />
      <AboutSection />
      <TimelineSection />
      <MusicSection />
      <SkillsSection />
      <ContactSection />
      <footer className="border-t border-black/5 py-8 text-center text-sm text-neutral-500 dark:border-white/5 dark:text-neutral-500">
        Dibuat oleh Rizki Krisna Santika, TJKT SMK PGRI Subang
      </footer>
    </main>
  );
}
