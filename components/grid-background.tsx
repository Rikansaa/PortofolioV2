"use client";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-surface-light dark:bg-surface-dark">
      <div className="grid-overlay" />
      <div className="absolute top-[-10%] left-[10%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px] animate-glow" />
      <div className="absolute bottom-[-10%] right-[10%] h-[380px] w-[380px] rounded-full bg-accent-soft/20 blur-[120px] animate-glow" />
    </div>
  );
}