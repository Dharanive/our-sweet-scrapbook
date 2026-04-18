import { Reveal } from "./Reveal";

const NOTES = [
  { text: "you are my favorite memory, and my favorite future too.", color: "oklch(0.95 0.06 90)", rotate: -3 },
  { text: "my heart feels at home with you. always.", color: "oklch(0.93 0.08 350)", rotate: 2 },
  { text: "you + me = my safest place in the whole world 💕", color: "oklch(0.92 0.07 230)", rotate: -2 },
  { text: "i'd choose you in every life, in every version of me.", color: "oklch(0.94 0.07 350)", rotate: 4 },
  { text: "even on my softest days, you make me brave.", color: "oklch(0.95 0.06 90)", rotate: -4 },
  { text: "thank you for being my favorite hello and hardest goodbye.", color: "oklch(0.93 0.07 230)", rotate: 3 },
];

export function LoveNotes() {
  return (
    <section className="relative z-10 px-6 py-24">
      <Reveal>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-display text-2xl text-[var(--rose-deep)]">tiny letters 💌</p>
          <h2 className="mt-2 font-display text-6xl text-[var(--blue-deep)] md:text-7xl">love notes for you</h2>
        </div>
      </Reveal>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {NOTES.map((n, i) => (
          <Reveal key={i} delay={i * 80}>
            <div
              className="sticky-note rounded-lg p-6 font-display text-2xl text-foreground/80"
              style={{ background: n.color, transform: `rotate(${n.rotate}deg)` }}
            >
              <span className="block text-3xl">“</span>
              <p className="mt-2">{n.text}</p>
              <span className="mt-3 block text-right text-base">— yours, always ♡</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
