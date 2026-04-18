import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const ITEMS = [
  { label: "days together", value: 365, icon: "🗓️" },
  { label: "memories made", value: 1024, icon: "💞" },
  { label: "photos of us", value: 248, icon: "📸" },
  { label: "smiles you gave me", value: 9999, icon: "😊" },
];

function CountUp({ to }: { to: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const duration = 1800;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{n.toLocaleString()}</span>;
}

export function Counters() {
  return (
    <section className="relative z-10 px-6 py-24">
      <Reveal>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-display text-2xl text-[var(--rose-deep)]">us, by the numbers ✨</p>
          <h2 className="mt-2 font-display text-6xl text-[var(--blue-deep)] md:text-7xl">special moments</h2>
        </div>
      </Reveal>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 md:grid-cols-4">
        {ITEMS.map((it, i) => (
          <Reveal key={it.label} delay={i * 70}>
            <div className="glass rounded-3xl p-6 text-center transition hover:scale-105">
              <div className="text-4xl">{it.icon}</div>
              <div className="mt-3 font-display text-5xl text-[var(--rose-deep)] md:text-6xl">
                <CountUp to={it.value} />
              </div>
              <p className="mt-2 text-sm text-foreground/60">{it.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
