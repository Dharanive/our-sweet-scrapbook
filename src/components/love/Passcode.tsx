import { useState } from "react";
import { Reveal } from "./Reveal";

const CORRECT = "2711"; // change to your special date / code

export function Passcode({ onUnlock }: { onUnlock: () => void }) {
  const [code, setCode] = useState("");
  const [shake, setShake] = useState(false);

  const press = (n: string) => {
    if (code.length >= 4) return;
    const next = code + n;
    setCode(next);
    if (next.length === 4) {
      setTimeout(() => {
        if (next === CORRECT) onUnlock();
        else {
          setShake(true);
          setTimeout(() => {
            setShake(false);
            setCode("");
          }, 600);
        }
      }, 200);
    }
  };

  const clear = () => setCode("");
  const back = () => setCode((c) => c.slice(0, -1));

  return (
    <section id="passcode" className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
      <Reveal>
        <div
          className="glass relative w-full max-w-md rounded-[2.5rem] p-8 text-center"
        >

          <h2 className="font-display text-5xl text-[var(--rose-deep)]">Only my love can unlock this</h2>
          <p className="mt-2 text-foreground/60">enter our little secret code 💕</p>

          {/* Display */}
          <div className="mt-8 flex justify-center gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-3xl text-[var(--blue-deep)] shadow-inner"
              >
                {code[i] ? "♥" : ""}
              </div>
            ))}
          </div>

          {/* Keypad */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((n) => (
              <button
                key={n}
                onClick={() => press(n)}
                className="aspect-square rounded-2xl bg-gradient-to-br from-white to-[var(--sky)]/40 font-display text-3xl text-[var(--blue-deep)] shadow-[var(--shadow-soft)]"
              >
                {n}
              </button>
            ))}
            <button
              onClick={clear}
              className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--blush)]/40 to-white text-2xl shadow-[var(--shadow-soft)]"
            >
              ✕
            </button>
            <button
              onClick={() => press("0")}
              className="aspect-square rounded-2xl bg-gradient-to-br from-white to-[var(--sky)]/40 font-display text-3xl text-[var(--blue-deep)] shadow-[var(--shadow-soft)]"
            >
              0
            </button>
            <button
              onClick={back}
              className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--sky)]/40 to-white text-2xl shadow-[var(--shadow-soft)]"
            >
              ⌫
            </button>
          </div>

          {/* Hint removed */}
        </div>
      </Reveal>
    </section>
  );
}
