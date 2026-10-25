"use client";

import { useEffect, useState } from "react";

// Über dem Hero transparent, beim Scrollen schieferblau mit Blur.
export default function Header({ nav }: { nav: string[][] }) {
  const [gescrollt, setGescrollt] = useState(false);

  useEffect(() => {
    const onScroll = () => setGescrollt(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 text-white transition-all duration-500 ${
        gescrollt ? "bg-brand-dark/90 py-3 shadow-[0_1px_0_rgb(255_255_255/0.08)] backdrop-blur-md" : "py-6 [text-shadow:0_1px_6px_rgb(0_0_0/0.35)]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#" className="font-serif text-base uppercase tracking-[0.2em] sm:text-lg sm:tracking-[0.3em]">
          Eichwaldweg <span className="text-gold">31–33</span>
        </a>
        <nav className="hidden gap-9 text-[11px] uppercase tracking-[0.22em] text-white/85 lg:flex">
          {nav.map(([href, label]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="hidden border border-white/60 px-5 sm:block py-2.5 text-[11px] uppercase tracking-[0.22em] transition hover:bg-white hover:text-stone-900 [text-shadow:none]"
        >
          Besichtigung
        </a>
      </div>
    </header>
  );
}
