"use client";

const LINE_ONE = "Hello, I'm Rizki";
const LINE_TWO = "Network Engineer Full Stack Developer";

function MarqueeRow({ text, reverse = false }: { text: string; reverse?: boolean }) {
  const items = Array.from({ length: 8 });

  return (
    <div className="marquee-viewport">
      <div className={"marquee-track" + (reverse ? " marquee-reverse" : "")}>
        <div className="marquee-group">
          {items.map((_, index) => (
            <span key={"a-" + index} className="marquee-item">
              {text}
            </span>
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {items.map((_, index) => (
            <span key={"b-" + index} className="marquee-item">
              {text}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee-viewport {
          overflow: hidden;
          width: 100%;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-left 80s linear infinite;
        }
        .marquee-track.marquee-reverse {
          animation-name: marquee-right;
        }
        .marquee-group {
          display: flex;
          flex-shrink: 0;
          align-items: center;
        }
        .marquee-item {
          margin: 0 1.5rem;
          white-space: nowrap;
          font-weight: 900;
          letter-spacing: -0.02em;
          color: rgb(212 212 216);
          font-size: 2.25rem;
          line-height: 1;
        }
        :global(.dark) .marquee-item {
          color: rgb(63 63 70);
        }
        @media (min-width: 640px) {
          .marquee-item {
            font-size: 3.75rem;
          }
        }
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="overflow-hidden border-y border-neutral-200 py-8 dark:border-neutral-800">
      <MarqueeRow text={LINE_ONE} />
      <div className="mt-3">
        <MarqueeRow text={LINE_TWO} reverse />
      </div>
    </section>
  );
}
