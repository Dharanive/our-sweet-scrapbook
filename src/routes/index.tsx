import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { FloatingDecor } from "@/components/love/FloatingDecor";
import { HeartTrail } from "@/components/love/HeartTrail";
import { Hero } from "@/components/love/Hero";
import { Passcode } from "@/components/love/Passcode";
import { Timeline } from "@/components/love/Timeline";
import { Gallery } from "@/components/love/Gallery";
import { LoveNotes } from "@/components/love/LoveNotes";
import { Reasons } from "@/components/love/Reasons";
import { Counters } from "@/components/love/Counters";
import { MusicPlayer } from "@/components/love/MusicPlayer";
import { FinalMessage } from "@/components/love/FinalMessage";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [unlocked, setUnlocked] = useState(false);
  const passRef = useRef<HTMLDivElement>(null);
  const lockedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (unlocked && lockedRef.current) {
      lockedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [unlocked]);

  return (
    <main className="relative min-h-screen">
      <FloatingDecor />
      <HeartTrail />

      <Hero
        onOpen={() => passRef.current?.scrollIntoView({ behavior: "smooth" })}
      />

      <div ref={passRef}>
        <Passcode onUnlock={() => setUnlocked(true)} />
      </div>

      <div
        ref={lockedRef}
        style={{
          maxHeight: unlocked ? "none" : 0,
          overflow: unlocked ? "visible" : "hidden",
          opacity: unlocked ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        {unlocked && (
          <>
            <Timeline />
            <Gallery />
            <LoveNotes />
            <Reasons />
            <Counters />
            <MusicPlayer />
            <FinalMessage />
          </>
        )}
      </div>
    </main>
  );
}
