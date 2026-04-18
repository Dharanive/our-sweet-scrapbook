import { Reveal } from "./Reveal";
import penguGif from "@/assets/images/pengu-pudgy.gif";

export function FinalMessage() {
  return (
    <section className="relative z-10 overflow-hidden px-6 py-32 text-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[var(--blush)]/20 to-[var(--sky)]/30" />

      <Reveal>
        <p className="font-display text-2xl text-[var(--rose-deep)]">my forever ✨</p>
      </Reveal>
      <Reveal>
        <h2 className="mx-auto mt-3 max-w-4xl font-display text-6xl leading-tight text-[var(--blue-deep)] md:text-8xl">
          in every universe, in every soft little moment —
          <span className="ml-2 bg-gradient-to-r from-[var(--rose-deep)] to-[var(--blue-deep)] bg-clip-text text-transparent">
            it's you. always you.
          </span>
        </h2>
      </Reveal>
      <Reveal>
        <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/70">
          thank you for being the softest part of my life. this little world we built — i'd choose it, and you, a million times over.
        </p>
      </Reveal>
      <Reveal>
        <button className="mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--blush)] to-[var(--sky)] px-10 py-5 font-display text-2xl shadow-[var(--shadow-glow-pink)]">
          <span className="text-3xl">💖</span>
          Forever Us
          <span className="text-3xl">💖</span>
        </button>
      </Reveal>
      <Reveal>
        <div className="mt-12 flex flex-col items-center gap-4">
          <img src={penguGif} alt="Penguin" className="h-24 w-auto" />
          <p className="font-display text-xl text-foreground/50">made with all my heart, for you</p>
        </div>
      </Reveal>
    </section>
  );
}
