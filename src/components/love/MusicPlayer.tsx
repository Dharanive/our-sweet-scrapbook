import { useState } from "react";
import { Reveal } from "./Reveal";

export function MusicPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative z-10 px-6 py-20">
      <Reveal>
        <div className="mx-auto max-w-md">
          <div className="glass relative rounded-[2rem] p-6 text-center">
            <span className="absolute -left-4 -top-4 animate-wiggle text-4xl">🎀</span>
            <span className="absolute -right-3 -top-3 animate-twinkle text-3xl">✨</span>

            <p className="font-display text-2xl text-[var(--rose-deep)]">our song 🎶</p>
            <h3 className="mt-1 font-display text-3xl text-[var(--blue-deep)]">a melody for us</h3>

            {/* Cassette */}
            <div className="mx-auto mt-6 flex w-full items-center justify-around rounded-2xl bg-gradient-to-r from-[var(--blush)] to-[var(--sky)] p-5">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full bg-white/80 ${playing ? "animate-spin" : ""}`}
                style={{ animationDuration: "3s" }}
              >
                <div className="h-4 w-4 rounded-full bg-[var(--rose-deep)]" />
              </div>
              <div className="flex-1 px-4">
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/60">
                  <div
                    className="h-full bg-white transition-all"
                    style={{ width: playing ? "60%" : "10%", transitionDuration: playing ? "20s" : "0.4s" }}
                  />
                </div>
              </div>
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full bg-white/80 ${playing ? "animate-spin" : ""}`}
                style={{ animationDuration: "3s" }}
              >
                <div className="h-4 w-4 rounded-full bg-[var(--blue-deep)]" />
              </div>
            </div>

            <button
              onClick={() => setPlaying((p) => !p)}
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--blush)] to-[var(--sky)] px-7 py-3 font-display text-xl shadow-[var(--shadow-soft)] transition hover:scale-105"
            >
              {playing ? "⏸ pause" : "▶ play our song"}
            </button>

            <p className="mt-3 text-xs text-foreground/40">add your own audio source later 💕</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
