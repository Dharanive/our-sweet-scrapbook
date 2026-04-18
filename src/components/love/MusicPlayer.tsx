import { useState, useRef, useEffect } from "react";
import { Reveal } from "./Reveal";
import musicPenguGif from "@/assets/images/pengu-pudgy (1).gif";

const ourSong = "/audio/our-song.mp3";

const SONG_NAME = "Theera Ulaa - A.R. Rahman";

export function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing]);

  return (
    <section className="relative z-10 px-6 py-20">
      <Reveal>
        <div className="mx-auto max-w-md flex flex-col items-center gap-0">
          <img 
            src={musicPenguGif} 
            alt="Dancing Penguin" 
            className="relative z-10 -mb-6 h-28 w-auto select-none" 
          />
          <div className="glass relative rounded-[2rem] p-6 text-center w-full">
            <p className="font-display text-2xl text-[var(--rose-deep)]">our song 🎶</p>
            <h3 className="mt-1 font-display text-3xl text-[var(--blue-deep)]">{SONG_NAME}</h3>

            <audio ref={audioRef} src={ourSong} loop />

            {/* Cassette */}
            <div className="mx-auto mt-6 flex w-full items-center justify-around rounded-2xl bg-gradient-to-r from-[var(--blush)] to-[var(--sky)] p-5">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80"
              >
                <div className="h-4 w-4 rounded-full bg-[var(--rose-deep)]" />
              </div>
              <div className="flex-1 px-4">
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/60">
                  <div
                    className="h-full bg-white"
                    style={{ 
                      width: playing ? "100%" : "0%",
                      transition: playing ? "width 180s linear" : "width 0.3s ease"
                    }}
                  />
                </div>
              </div>
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80"
              >
                <div className="h-4 w-4 rounded-full bg-[var(--blue-deep)]" />
              </div>
            </div>

            <button
              onClick={() => setPlaying((p) => !p)}
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--blush)] to-[var(--sky)] px-7 py-3 font-display text-xl shadow-[var(--shadow-soft)]"
            >
              {playing ? "⏸ pause" : "▶ play our song"}
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
