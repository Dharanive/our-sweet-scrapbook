import { useMemo } from "react";

const HEARTS = ["💗", "💖", "💕", "🩷", "💝"];
const SPARKLES = ["✨", "⭐", "🌟", "💫"];

export function FloatingDecor() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 14,
        size: 14 + Math.random() * 22,
        emoji: HEARTS[i % HEARTS.length],
      })),
    [],
  );
  const sparkles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        size: 10 + Math.random() * 16,
        emoji: SPARKLES[i % SPARKLES.length],
      })),
    [],
  );
  const clouds = useMemo(
    () =>
      Array.from({ length: 4 }).map((_, i) => ({
        id: i,
        top: 5 + i * 22,
        delay: i * 8,
        duration: 60 + i * 15,
        opacity: 0.5 + Math.random() * 0.3,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {clouds.map((c) => (
        <div
          key={`c-${c.id}`}
          className="absolute animate-drift text-7xl"
          style={{
            top: `${c.top}%`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            opacity: c.opacity,
          }}
        >
          ☁️
        </div>
      ))}
    </div>
  );
}
