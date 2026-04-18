import { Reveal } from "./Reveal";

const STEPS = [
  { title: "First Meet", date: "the day my world shifted", emoji: "🌷", text: "I still remember the exact look in your eyes." },
  { title: "First Chat", date: "tiny butterflies", emoji: "💌", text: "We talked till the sun came up — I knew." },
  { title: "First Photo", date: "frozen in time", emoji: "📸", text: "The cutest little polaroid of us, forever." },
  { title: "Special Day", date: "ours forever", emoji: "🎀", text: "A day stitched into my heart in soft pink thread." },
  { title: "Best Memory", date: "still my favorite", emoji: "🧸", text: "If I could relive one moment — it would be this." },
  { title: "Today", date: "still falling", emoji: "💖", text: "And tomorrow. And every day after that, my love." },
];

export function Timeline() {
  return (
    <section className="relative z-10 px-6 py-24">
      <Reveal>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-display text-2xl text-[var(--rose-deep)]">our story 💕</p>
          <h2 className="mt-2 font-display text-6xl text-[var(--blue-deep)] md:text-7xl">how we became us</h2>
          <p className="mt-4 text-foreground/60">every chapter wrapped in ribbon and sparkles</p>
        </div>
      </Reveal>

      <div className="relative mx-auto max-w-5xl">
        {/* center dotted line */}
        <div
          aria-hidden
          className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 border-l-4 border-dashed border-[var(--blush)] md:block"
        />

        <div className="space-y-12">
          {STEPS.map((s, i) => {
            const left = i % 2 === 0;
            return (
              <Reveal key={s.title} delay={i * 80}>
                <div className={`relative flex flex-col items-center md:flex-row ${left ? "" : "md:flex-row-reverse"}`}>
                  <div className={`w-full md:w-1/2 ${left ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass inline-block max-w-md rounded-3xl p-6 text-left">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{s.emoji}</span>
                        <div>
                          <h3 className="font-display text-3xl text-[var(--blue-deep)]">{s.title}</h3>
                          <p className="text-sm text-foreground/50">{s.date}</p>
                        </div>
                      </div>
                      <div className="mt-4 aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[var(--blush)]/40 to-[var(--sky)]/40 flex items-center justify-center text-6xl">
                        {s.emoji}
                      </div>
                      <p className="mt-4 text-foreground/70">{s.text}</p>
                    </div>
                  </div>
                  {/* heart connector */}
                  <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--blush)] to-[var(--sky)] text-2xl shadow-[var(--shadow-glow-pink)]">
                      ♥
                    </div>
                  </div>
                  <div className="hidden w-1/2 md:block" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
