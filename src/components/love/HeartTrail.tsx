import { useEffect, useRef } from "react";

const EMOJIS = ["💗", "💖", "✨", "🩷"];

export function HeartTrail() {
  const last = useRef(0);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const now = Date.now();
      if (now - last.current < 80) return;
      last.current = now;
      const el = document.createElement("span");
      el.className = "heart-trail";
      el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1000);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return null;
}
