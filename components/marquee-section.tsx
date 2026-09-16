"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity
} from "framer-motion";

const LINE_ONE = "Hello, I'm Rizki Hello, I'm Rizki Hello, I'm Rizki Hello, I'm Rizki";
const LINE_TWO = "Network Engineer Full Stack Developer";

function wrapValue(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function ParallaxRow({ text, baseVelocity = 3 }: { text: string; baseVelocity?: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 60, stiffness: 150, mass: 0.5 });

  const velocityFactor = useTransform(smoothVelocity, [-2000, 0, 2000], [-5, 0, 5], {
    clamp: false
  });

  const skewX = useSpring(
    useTransform(smoothVelocity, [-400, 0, 400], [-25, 0, 25], { clamp: true }),
    { damping: 12, stiffness: 150, mass: 0.4 }
  );

  const x = useTransform(baseX, (v) => `${wrapValue(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const items = Array.from({ length: 4 });

  return (
    <div className="overflow-hidden">
      <motion.div className="flex w-max" style={{ x, skewX }}>
        {items.map((_, index) => (
          <span
            key={index}
            className="mx-6 whitespace-nowrap text-4xl font-black tracking-tight text-neutral-300 dark:text-neutral-800 sm:text-6xl"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="overflow-hidden border-y border-neutral-200 py-8 dark:border-neutral-800">
      <ParallaxRow text={LINE_ONE} baseVelocity={3} />
      <div className="mt-3">
        <ParallaxRow text={LINE_TWO} baseVelocity={-3} />
      </div>
    </section>
  );
}
