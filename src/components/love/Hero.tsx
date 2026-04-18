import { Reveal } from "./Reveal";

export function Hero({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      {/* Floating decor stickers */}
      <span className="absolute left-[8%] top-[15%] animate-bounce-soft text-6xl select-none">🧸</span>
      <span className="absolute right-[10%] top-[18%] animate-wiggle text-5xl select-none">🎀</span>
      <span className="absolute left-[15%] bottom-[18%] animate-twinkle text-4xl select-none">⭐</span>
      <span className="absolute right-[14%] bottom-[22%] animate-bounce-soft text-5xl select-none" style={{ animationDelay: "0.5s" }}>💝</span>
      <span className="absolute left-[40%] top-[8%] animate-wiggle text-4xl select-none">🌷</span>

      <Reveal>
        <p className="mb-4 font-display text-2xl text-[var(--rose-deep)]">to my forever person 💌</p>
      </Reveal>

      <Reveal delay={150}>
        <h1 className="font-display text-7xl leading-none tracking-tight text-[var(--blue-deep)] md:text-9xl">
          Our Little
          <span className="ml-3 inline-block bg-gradient-to-r from-[var(--rose-deep)] to-[var(--blue-deep)] bg-clip-text text-transparent">
            World
          </span>
        </h1>
      </Reveal>

      <Reveal delay={300}>
        <p className="mt-6 max-w-xl text-lg text-foreground/70 md:text-xl">
          A tiny universe filled with us — every photo, every silly moment, every soft “i love you”.
        </p>
      </Reveal>

      {/* Polaroid */}
      <Reveal delay={450}>
        <div className="mt-12 flex items-center justify-center gap-6">
          <div className="polaroid animate-tilt hidden md:block" style={{ transform: "rotate(-8deg)" }}>
            <div className="flex h-44 w-36 items-center justify-center rounded bg-gradient-to-br from-[var(--blush)] to-[var(--sky)] text-5xl">
              🌸
            </div>
            <p className="mt-3 text-center font-display text-xl text-foreground/70">us, always</p>
          </div>
          <div className="polaroid relative" style={{ transform: "rotate(2deg)" }}>
            <div className="flex h-56 w-48 items-center justify-center rounded bg-gradient-to-br from-[var(--sky)] via-white to-[var(--blush)] text-7xl">
              💑
            </div>
            <p className="mt-3 text-center font-display text-2xl text-[var(--rose-deep)]">my favorite ♡</p>
            <span className="absolute -right-3 -top-3 animate-wiggle text-4xl">🎀</span>
          </div>
          <div className="polaroid animate-tilt hidden md:block" style={{ transform: "rotate(7deg)", animationDelay: "1s" }}>
            <div className="flex h-44 w-36 items-center justify-center rounded bg-gradient-to-br from-[var(--sky)] to-[var(--blush)] text-5xl">
              🧸
            </div>
            <p className="mt-3 text-center font-display text-xl text-foreground/70">cuddles only</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={650}>
        <button
          onClick={onOpen}
          className="group relative mt-14 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--blush)] to-[var(--sky)] px-10 py-5 font-display text-2xl text-foreground shadow-[var(--shadow-glow-pink)] transition-all hover:scale-105 hover:shadow-[0_0_60px_var(--blush)]"
        >
          <span className="text-3xl">💖</span>
          Open Our Memories
          <span className="text-3xl transition-transform group-hover:translate-x-1">→</span>
        </button>
      </Reveal>

      <Reveal delay={800}>
        <p className="mt-8 text-sm text-foreground/50">scroll down, my love ↓</p>
      </Reveal>
    </section>
  );
}
