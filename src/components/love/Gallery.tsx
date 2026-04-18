import { useState } from "react";
import { Reveal } from "./Reveal";

const PHOTOS = [
  { emoji: "🌸", caption: "you, glowing softly", rotate: -4, color: "from-[var(--blush)] to-white" },
  { emoji: "🧸", caption: "our cuddle saturday", rotate: 3, color: "from-[var(--sky)] to-white" },
  { emoji: "🍓", caption: "strawberry kisses", rotate: -2, color: "from-[var(--blush)] to-[var(--sky)]" },
  { emoji: "🎀", caption: "you wore that bow ♡", rotate: 5, color: "from-white to-[var(--blush)]" },
  { emoji: "🌙", caption: "midnight whispers", rotate: -3, color: "from-[var(--sky)] to-[var(--blush)]" },
  { emoji: "☕", caption: "lazy coffee mornings", rotate: 4, color: "from-white to-[var(--sky)]" },
  { emoji: "🌷", caption: "spring with you", rotate: -5, color: "from-[var(--blush)] to-[var(--sky)]" },
  { emoji: "✨", caption: "the night you sparkled", rotate: 2, color: "from-[var(--sky)] to-white" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative z-10 px-6 py-24">
      <Reveal>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-display text-2xl text-[var(--rose-deep)]">our album 📷</p>
          <h2 className="mt-2 font-display text-6xl text-[var(--blue-deep)] md:text-7xl">every photo holds us</h2>
          <p className="mt-4 text-foreground/60">a little scrapbook of forever</p>
        </div>
      </Reveal>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
        {PHOTOS.map((p, i) => (
          <Reveal key={i} delay={i * 50}>
            <button
              onClick={() => setOpen(i)}
              className="polaroid relative w-full text-left"
              style={{ transform: `rotate(${p.rotate}deg)` }}
            >
              <div className={`flex aspect-square items-center justify-center rounded bg-gradient-to-br ${p.color} text-7xl`}>
                {p.emoji}
              </div>
              <p className="mt-3 text-center font-display text-xl text-foreground/70">{p.caption}</p>
              {i % 3 === 0 && <span className="absolute -right-3 -top-3 animate-wiggle text-3xl">🎀</span>}
              {i % 4 === 1 && <span className="absolute -left-3 -bottom-3 animate-twinkle text-2xl">✨</span>}
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--blue-deep)]/40 p-6 backdrop-blur-md animate-fade-up"
          onClick={() => setOpen(null)}
        >
          <div
            className="polaroid relative max-w-lg"
            style={{ transform: "rotate(-2deg)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`flex aspect-square w-full items-center justify-center rounded bg-gradient-to-br ${PHOTOS[open].color} text-[10rem]`}>
              {PHOTOS[open].emoji}
            </div>
            <p className="mt-4 text-center font-display text-3xl text-[var(--rose-deep)]">{PHOTOS[open].caption}</p>
            <button
              onClick={() => setOpen(null)}
              className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
