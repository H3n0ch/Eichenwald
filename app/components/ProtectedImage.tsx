"use client";

import Image from "next/image";
import type { Bild } from "../projekt";

type Props = {
  bild: Bild;
  sizes: string;
  preload?: boolean;
  className?: string;
  fit?: "cover" | "contain";
  position?: string;
};

// Bilder liegen hinter einer transparenten Ebene: kein Rechtsklick "Bild speichern",
// kein Drag & Drop, kein Long-Press-Menü auf Mobilgeräten.
export default function ProtectedImage({ bild, sizes, preload, className = "", fit = "cover", position }: Props) {
  return (
    <div
      className={`protected relative overflow-hidden ${className}`}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <Image
        src={bild.src}
        alt={bild.alt}
        fill
        sizes={sizes}
        preload={preload}
        draggable={false}
        style={position ? { objectPosition: position } : undefined}
        className={`pointer-events-none select-none ${fit === "contain" ? "object-contain" : "object-cover"}`}
      />
      <div aria-hidden className="absolute inset-0" />
    </div>
  );
}
