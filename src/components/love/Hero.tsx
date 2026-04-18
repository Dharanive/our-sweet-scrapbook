import { Reveal } from "./Reveal";
import valentinesGif from "@/assets/images/be-mine-will-you-be-my-valentines.gif";
import jd13 from "@/assets/images/JD13.jpeg";
import jd7 from "@/assets/images/JD7.jpeg";
import jd5 from "@/assets/images/JD5.jpeg";
import loveHeartGif from "@/assets/images/love-heart.gif";

export function Hero({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <Reveal>
        <div className="mb-8 flex flex-col items-center gap-4">
          <p className="font-display text-2xl text-[var(--rose-deep)]">to my forever person</p>
          <img 
            src={valentinesGif} 
            alt="Valentines" 
            className="h-40 w-auto object-contain" 
          />
        </div>
      </Reveal>

      <Reveal>
        <h1 className="font-display text-7xl leading-none tracking-tight text-[var(--blue-deep)] md:text-9xl">
          Our Little
          <span className="ml-3 inline-block bg-gradient-to-r from-[var(--rose-deep)] to-[var(--blue-deep)] bg-clip-text text-transparent">
            World
          </span>
        </h1>
      </Reveal>

      <Reveal>
        <p className="mt-6 max-w-xl text-lg text-foreground/70 md:text-xl">
          A tiny universe filled with us — every photo, every silly moment, every soft “i love you”.
        </p>
      </Reveal>

      {/* Polaroid */}
      <Reveal>
        <div className="mt-12 flex items-center justify-center gap-6">
          <div className="polaroid hidden md:block" style={{ transform: "rotate(-8deg)" }}>
            <div className="overflow-hidden rounded">
              <img src={jd13} alt="us" className="h-44 w-36 object-cover" />
            </div>
            <p className="mt-3 text-center font-display text-xl text-foreground/70">us, always</p>
          </div>
          <div className="polaroid relative" style={{ transform: "rotate(2deg)" }}>
            <div className="overflow-hidden rounded">
              <img src={jd7} alt="favorite" className="h-56 w-48 object-cover" />
            </div>
            <p className="mt-3 text-center font-display text-2xl text-[var(--rose-deep)]">my favorite ♡</p>
          </div>
          <div className="polaroid hidden md:block" style={{ transform: "rotate(7deg)" }}>
            <div className="overflow-hidden rounded">
              <img src={jd5} alt="cuddles" className="h-44 w-36 object-cover" />
            </div>
            <p className="mt-3 text-center font-display text-xl text-foreground/70">cuddles only</p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="relative mt-20 inline-flex flex-col items-center">
          <img 
            src={loveHeartGif} 
            alt="Heart" 
            className="absolute -top-24 h-24 w-auto select-none" 
          />
          <button
            onClick={onOpen}
            className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--blush)] to-[var(--sky)] px-10 py-5 font-display text-2xl text-foreground"
          >
            Open Our Memories
            <span className="text-3xl">→</span>
          </button>
        </div>
      </Reveal>

      <Reveal delay={800}>
        <p className="mt-8 text-sm text-foreground/50">scroll down, my love ↓</p>
      </Reveal>
    </section>
  );
}
