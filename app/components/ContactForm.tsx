"use client";

import { useState } from "react";
import { KONTAKT } from "../projekt";

const WOHNUNGEN = ["Maisonette (WE 31.1 / 33.1)", "Penthouse (WE 31.5 / 33.5)", "Noch offen"];

// Ohne Backend: das Formular öffnet eine vorbefüllte E-Mail an den Vertrieb.
export default function ContactForm() {
  const [gesendet, setGesendet] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("name")}`,
      `Telefon: ${d.get("telefon")}`,
      `E-Mail: ${d.get("email")}`,
      `Interesse: ${d.get("wohnung")}`,
      `Anliegen: ${d.get("anliegen")}`,
      "",
      String(d.get("nachricht") ?? ""),
    ].join("\n");
    const subject = `Anfrage Eichwaldweg 31–33 – ${d.get("wohnung")}`;
    window.location.href = `mailto:${KONTAKT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setGesendet(true);
  }

  const feld =
    "w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-stone-900 outline-none transition focus:border-brand";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input name="name" required placeholder="Name *" className={feld} autoComplete="name" />
      <input name="telefon" placeholder="Telefon" className={feld} autoComplete="tel" type="tel" />
      <input name="email" required placeholder="E-Mail *" className={`${feld} sm:col-span-2`} type="email" autoComplete="email" />
      <select name="wohnung" className={feld} defaultValue={WOHNUNGEN[0]}>
        {WOHNUNGEN.map((w) => (
          <option key={w}>{w}</option>
        ))}
      </select>
      <select name="anliegen" className={feld} defaultValue="Besichtigung">
        <option>Besichtigung</option>
        <option>Unterlagen anfordern</option>
        <option>Rückruf</option>
        <option>Vermietungsservice</option>
      </select>
      <textarea name="nachricht" rows={4} placeholder="Ihre Nachricht (optional)" className={`${feld} sm:col-span-2`} />
      <button className="bg-brand px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-white transition hover:bg-brand-dark sm:col-span-2">
        Besichtigung anfragen
      </button>
      {gesendet && (
        <p className="text-sm text-stone-600 sm:col-span-2">
          Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die vorbereitete Nachricht ab – wir melden uns kurzfristig.
        </p>
      )}
    </form>
  );
}
