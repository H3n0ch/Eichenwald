// Bildmarke: die zwei Häuser mit seitlich zurückgesetztem Staffelgeschoss, als Goldlinie.
export function Bildmarke({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className={className}>
      <path d="M12 50V22h18v28M12 22v-7h12v7 M34 50V22h18v28M40 22v-7h12v7 M7 50h50" stroke="#b08d57" strokeWidth="2.2" strokeLinejoin="miter" />
      <g fill="#b08d57">
        <rect x="16" y="27" width="3" height="4" />
        <rect x="23" y="27" width="3" height="4" />
        <rect x="16" y="34" width="3" height="4" />
        <rect x="23" y="34" width="3" height="4" />
        <rect x="16" y="41" width="3" height="4" />
        <rect x="23" y="41" width="3" height="4" />
        <rect x="38" y="27" width="3" height="4" />
        <rect x="45" y="27" width="3" height="4" />
        <rect x="38" y="34" width="3" height="4" />
        <rect x="45" y="34" width="3" height="4" />
        <rect x="38" y="41" width="3" height="4" />
        <rect x="45" y="41" width="3" height="4" />
      </g>
    </svg>
  );
}

// Komplettes Logo: Bildmarke + Wortmarke. Textfarbe über currentColor.
export default function Logo({ gross = false }: { gross?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <Bildmarke className={gross ? "h-16 w-16 md:h-20 md:w-20" : "h-9 w-9"} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif uppercase ${
            gross ? "text-3xl tracking-[0.15em] sm:text-4xl md:text-6xl md:tracking-[0.2em]" : "text-base tracking-[0.2em] sm:text-lg sm:tracking-[0.3em]"
          }`}
        >
          Eichwaldweg
        </span>
        <span
          className={`mt-1.5 uppercase ${gross ? "text-xs tracking-[0.5em] text-gold md:text-sm" : "text-[9px] tracking-[0.45em] opacity-80"}`}
        >
          31–33 · Offenbach
        </span>
      </span>
    </span>
  );
}
