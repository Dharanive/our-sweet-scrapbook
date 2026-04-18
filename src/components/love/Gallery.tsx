import { useState } from "react";
import { Reveal } from "./Reveal";
import jd20 from "@/assets/images/JD20.jpeg";
import jd18 from "@/assets/images/JD18.jpeg";
import jd19 from "@/assets/images/JD19.jpeg";
import jd6 from "@/assets/images/JD6.jpeg";
import jd23 from "@/assets/images/JD23.jpeg";
import jd4 from "@/assets/images/JD4.jpeg";
import jd10 from "@/assets/images/JD10.jpeg";
import jd9 from "@/assets/images/JD9.jpeg";
import loveLikeGif from "@/assets/images/love-like.gif";

const PHOTOS = [
  { image: jd20, caption: "you, glowing softly", rotate: -4, color: "from-[var(--blush)] to-white" },
  { image: jd18, caption: "our cuddle saturday", rotate: 3, color: "from-[var(--sky)] to-white" },
  { image: jd19, caption: "strawberry kisses", rotate: -2, color: "from-[var(--blush)] to-[var(--sky)]" },
  { image: jd6, caption: "you wore that bow ♡", rotate: 5, color: "from-white to-[var(--blush)]" },
  { image: jd23, caption: "midnight whispers", rotate: -3, color: "from-[var(--sky)] to-[var(--blush)]" },
  { image: jd4, caption: "lazy coffee mornings", rotate: 4, color: "from-white to-[var(--sky)]" },
  { image: jd10, caption: "spring with you", rotate: -5, color: "from-[var(--blush)] to-[var(--sky)]" },
  { image: jd9, caption: "the night you sparkled", rotate: 2, color: "from-[var(--sky)] to-white" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative z-10 px-6 py-24 overflow-x-hidden">
      <img 
        src={loveLikeGif} 
        alt="Love" 
        className="absolute right-0 top-32 z-10 h-24 w-auto select-none md:right-4 md:h-32" 
      />
      <Reveal>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-display text-2xl text-[var(--rose-deep)]">our album</p>
          <h2 className="mt-2 font-display text-6xl text-[var(--blue-deep)] md:text-7xl">every photo holds us</h2>
          <p className="mt-4 text-foreground/60">a little scrapbook of forever</p>
        </div>
      </Reveal>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
        {PHOTOS.map((p, i) => (
          <Reveal key={i}>
            <button
              onClick={() => setOpen(i)}
              className="polaroid relative w-full text-left"
              style={{ transform: `rotate(${p.rotate}deg)` }}
            >
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded">
                <img src={p.image} alt={p.caption} className="h-full w-full object-cover" />
              </div>
              <p className="mt-3 text-center font-display text-xl text-foreground/70">{p.caption}</p>
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--blue-deep)]/40 p-6 backdrop-blur-md"
          onClick={() => setOpen(null)}
        >
          <div
            className="polaroid relative max-w-lg"
            style={{ transform: "rotate(-2deg)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded">
              <img src={PHOTOS[open].image} alt={PHOTOS[open].caption} className="h-full w-full object-cover" />
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
