// Gemeinsames Gerüst für Impressum und Datenschutz.
export default function RechtSeite({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24">
      <a href="/" className="text-[11px] uppercase tracking-[0.25em] text-stone-500 hover:text-stone-900">
        ← Zurück zum Exposé
      </a>
      <h1 className="mt-10 font-serif text-5xl text-stone-900">{titel}</h1>
      <div className="mt-10 space-y-4 leading-relaxed text-stone-700">{children}</div>
    </main>
  );
}
