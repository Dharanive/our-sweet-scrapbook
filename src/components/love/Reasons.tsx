import { Reveal } from "./Reveal";

const REASONS = [
  { title: "your smile", text: "it rearranges my whole day.", icon: "🌷" },
  { title: "the way you care", text: "softly, fully, without asking.", icon: "🧸" },
  { title: "our silly moments", text: "laughing till we can't breathe.", icon: "🎀" },
  { title: "your hands", text: "they fit mine like they were made to.", icon: "💞" },
  { title: "your voice", text: "my favorite song on repeat.", icon: "🎶" },
  { title: "you, just you", text: "every soft, brave, lovely part.", icon: "💖" },
];

export function Reasons() {
  return (
    <section className="relative z-10 px-6 py-24">
      <Reveal>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-display text-2xl text-[var(--rose-deep)]">a soft list 💗</p>
          <h2 className="mt-2 font-display text-6xl text-[var(--blue-deep)] md:text-7xl">reasons i love you</h2>
        </div>
      </Reveal>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {REASONS.map((r, i) => (
          <Reveal key={r.title} delay={i * 60}>
            <div className="glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-2 hover:shadow-[var(--shadow-glow-pink)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--blush)] to-[var(--sky)] text-3xl transition-transform group-hover:scale-110 group-hover:rotate-12">
                {r.icon}
              </div>
              <h3 className="mt-4 font-display text-3xl text-[var(--blue-deep)]">{r.title}</h3>
              <p className="mt-2 text-foreground/70">{r.text}</p>
              <span className="absolute -right-2 -bottom-2 text-7xl opacity-0 transition-opacity group-hover:opacity-20">♥</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
