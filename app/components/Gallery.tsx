"use client";

import { useEffect, useState } from "react";
import ProtectedImage from "./ProtectedImage";
import type { Bild } from "../projekt";

// Jedes fünfte Bild groß (2×2), Hochformate doppelt hoch – ergibt mit 8 Bildern ein lückenloses Raster.
const istGross = (i: number) => i % 5 === 0;

export default function Gallery({ bilder }: { bilder: Bild[] }) {
  const [offen, setOffen] = useState<number | null>(null);

  useEffect(() => {
    if (offen === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOffen(null);
      if (e.key === "ArrowRight") setOffen((i) => (i! + 1) % bilder.length);
      if (e.key === "ArrowLeft") setOffen((i) => (i! - 1 + bilder.length) % bilder.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [offen, bilder.length]);

  return (
    <>
      <div className="grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
        {bilder.map((b, i) => (
          <button
            key={b.src}
            onClick={() => setOffen(i)}
            className={`group overflow-hidden ${istGross(i) ? "col-span-2 row-span-2" : b.hoch ? "row-span-2" : ""}`}
            aria-label={`Bild vergrößern: ${b.alt}`}
          >
            <ProtectedImage
              bild={b}
              sizes={istGross(i) ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
              className="h-full w-full transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      {offen !== null && (
        <div
          role="dialog"
          aria-modal
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOffen(null)}
        >
          <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <ProtectedImage bild={bilder[offen]} sizes="100vw" fit="contain" className="h-[78vh] w-full" />
            <p className="mt-3 text-center text-sm text-white/70">
              {bilder[offen].alt} · {offen + 1} / {bilder.length}
            </p>
            <button
              onClick={() => setOffen((offen - 1 + bilder.length) % bilder.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-4 py-3 text-2xl text-white hover:bg-white/30"
              aria-label="Vorheriges Bild"
            >
              ‹
            </button>
            <button
              onClick={() => setOffen((offen + 1) % bilder.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-4 py-3 text-2xl text-white hover:bg-white/30"
              aria-label="Nächstes Bild"
            >
              ›
            </button>
          </div>
          <button
            onClick={() => setOffen(null)}
            className="absolute right-5 top-4 text-3xl text-white/80 hover:text-white"
            aria-label="Schließen"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
