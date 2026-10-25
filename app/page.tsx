import ProtectedImage from "./components/ProtectedImage";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Reveal from "./components/Reveal";
import StickyCta from "./components/StickyCta";
import {
  ADRESSE,
  BESICHTIGUNGSTAG,
  BILDER,
  FAQ,
  GALERIE,
  KONTAKT,
  STELLPLATZ_PREIS,
  TYPEN,
  VERKAUFT,
  formatEur,
  formatNum,
  type Status,
} from "./projekt";

const STATUS_PUNKT: Record<Status, string> = {
  verfügbar: "bg-brand",
  reserviert: "bg-gold",
  verkauft: "bg-stone-300",
};

const FREI = TYPEN.flatMap((t) => t.einheiten).filter((e) => e.status === "verfügbar").length;
const GESAMT = VERKAUFT.length + TYPEN.flatMap((t) => t.einheiten).length;

const NAV = [
  ["#wohnungen", "Wohnungen"],
  ["#galerie", "Galerie"],
  ["#ausstattung", "Ausstattung"],
  ["#lage", "Lage"],
  ["#kauf", "Ihr Kauf"],
  ["#faq", "FAQ"],
];

const VORTEILE = [
  ["Provisionsfrei", "Direkt vom Bauträger – Sie sparen die Käuferprovision, beim Maklerkauf in Hessen üblicherweise 3,57 % des Kaufpreises."],
  ["Sofort bezugsfrei", "Erstbezug, schlüsselfertig. Selbst einziehen oder vermieten – auf Wunsch übernehmen wir die Vermietung für Sie."],
  ["KfW-Effizienzhaus 40", "Höchster Neubau-Effizienzstandard: Wärmepumpe, Fußbodenheizung, 3-fach-Verglasung. Niedrige Energiekosten, zukunftssicher."],
  [`Die letzten ${FREI}`, `${VERKAUFT.length} von ${GESAMT} Wohnungen sind verkauft. Übrig sind zwei Gartenwohnungen und zwei Penthouses mit Dachterrasse – die besonderen Lagen im Haus.`],
];

const AUSSTATTUNG = [
  ["Energie", ["Wärmepumpe Viessmann Vitocal 250-A", "Fußbodenheizung in allen Räumen", "KfW-Effizienzhaus 40", "3-fach-Verglasung"]],
  ["Böden & Oberflächen", ["Designboden in Fischgrätoptik", "Großformatige Fliesen in den Bädern", "Natursteintreppen im Treppenhaus", "Innentreppe mit Holzauflage (Maisonette)"]],
  ["Bäder", ["Bodengleiche, geflieste Duschen", "Wandhängende Sanitärobjekte", "Armaturen in mattem Schwarz", "Handtuchheizkörper"]],
  ["Außen & Komfort", ["Terrasse mit Gartenzugang oder private Dachterrasse", "Gartenmitbenutzung", "Barrierefreier Zugang (Maisonette)", "Außenstellplatz optional"]],
] as const;

const LAGE = [
  ["Offenbacher Stadtwald", "ganz in der Nähe"],
  ["Offenbach Innenstadt", "schnell erreichbar"],
  ["Ring-Center", "wenige Fahrminuten"],
  ["A661 / A3", "in kurzer Zeit"],
  ["Frankfurt am Main", "direkte Nachbarstadt"],
  ["Flughafen Frankfurt", "ca. 27 Fahrminuten"],
];

const SCHRITTE = [
  ["Besichtigen", "Vereinbaren Sie einen Termin – beide Wohnungstypen sind fertiggestellt und jederzeit zu besichtigen."],
  ["Unterlagen prüfen", "Sie erhalten Grundrisse, Teilungserklärung, Wirtschaftsplan und Energieausweis direkt von uns."],
  ["Notartermin & Schlüssel", "Kaufvertrag beim Notar, Übergabe unmittelbar nach Kaufpreiszahlung. Keine Bauzeit, kein Warten."],
  ["Vermietung auf Wunsch", "Sie kaufen als Kapitalanlage? Wir übernehmen auf Wunsch die Vermietung – von der Mietersuche bis zum Mietvertrag."],
];

// Einheitliche, eckige Buttons in Großbuchstaben
const BTN = "inline-flex items-center gap-3 px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] transition";
const BTN_DUNKEL = `${BTN} bg-brand text-white hover:bg-brand-dark`;
const BTN_HELL = `${BTN} bg-white text-stone-900 hover:bg-sand`;
const BTN_GOLD = `${BTN} bg-gold text-white hover:bg-gold/90`;

function Kicker({ nr, children, hell }: { nr: string; children: React.ReactNode; hell?: boolean }) {
  return (
    <p className={`mb-6 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.3em] ${hell ? "text-white/70" : "text-stone-500"}`}>
      <span className="text-gold">{nr}</span>
      <span className="h-px w-10 bg-gold" />
      {children}
    </p>
  );
}

function H2({ children, hell }: { children: React.ReactNode; hell?: boolean }) {
  return (
    <h2 className={`max-w-3xl font-serif text-4xl leading-[1.05] md:text-6xl ${hell ? "text-white" : "text-stone-900"}`}>
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <Header nav={NAV} />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-svh items-end overflow-hidden">
          <ProtectedImage bild={BILDER.aussen1} sizes="100vw" preload className="absolute! inset-0" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32">
            <div className="max-w-2xl bg-brand-dark/35 p-6 text-white sm:p-8 backdrop-blur-[2px] [text-shadow:0_1px_8px_rgb(0_0_0/0.35)] md:p-12">
              {BESICHTIGUNGSTAG && (
                <a href="#kontakt" className="hero-in mb-6 block border-l-2 border-gold pl-4 text-sm [text-shadow:none]">
                  Offene Besichtigung: {BESICHTIGUNGSTAG} →
                </a>
              )}
              <p className="hero-in text-[11px] uppercase tracking-[0.3em] text-white/90">
                Provisionsfrei <span className="text-gold">·</span> KfW-Effizienzhaus 40{" "}
                <span className="text-gold">·</span> {VERKAUFT.length} von {GESAMT} verkauft
              </p>
              <h1 className="hero-in mt-6 font-serif text-[2.75rem] leading-[0.95] [animation-delay:150ms] sm:text-6xl md:text-8xl">
                Neues Zuhause <em className="text-[#f3dfb8]">am Stadtwald.</em>
              </h1>
              <p className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-white/90 [animation-delay:300ms]">
                Gartenwohnungen auf zwei Ebenen und Penthouses mit Dachterrasse in Offenbach-Rosenhöhe. Erstbezug,
                sofort bezugsfrei.
              </p>
              <div className="hero-in mt-10 flex flex-wrap items-center gap-6 [animation-delay:450ms] [text-shadow:none]">
                <a href="#wohnungen" className={BTN_HELL}>
                  Wohnungen ansehen <span aria-hidden>→</span>
                </a>
                <a href="#kontakt" className="border-b border-white/60 pb-1 text-xs uppercase tracking-[0.22em] hover:border-white">
                  Besichtigung vereinbaren
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Eckdaten */}
        <section className="border-b border-stone-200 bg-white">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-6">
            {[
              ["ab " + formatEur(549900), "Kaufpreis"],
              ["93 – 121 m²", "Wohnfläche"],
              ["3 – 5", "Zimmer"],
              ["2026", "Erstbezug"],
              ["KfW 40", "Effizienzhaus"],
              ["0 €", "Käuferprovision"],
            ].map(([wert, label]) => (
              <div key={label} className="border-stone-200 px-5 py-9 text-center odd:border-r md:border-r md:last:border-r-0">
                <dt className="text-[10px] uppercase tracking-[0.25em] text-stone-500">{label}</dt>
                <dd className="mt-2 font-serif text-3xl text-stone-900 md:text-4xl">{wert}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Vorteile */}
        <section id="projekt" className="mx-auto max-w-7xl px-5 py-32 md:py-40">
          <Reveal className="grid gap-16 md:grid-cols-[1fr_1.3fr]">
            <div>
              <Kicker nr="01">Das Projekt</Kicker>
              <H2>
                Ruhig wohnen im Grünen – <em>mitten im Rhein-Main-Gebiet.</em>
              </H2>
              <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-stone-600">
                Am Eichwaldweg ist ein kleines, hochwertiges Wohnensemble aus zwei Häusern entstanden. Wir verkaufen vier
                Wohnungen selbst – ohne Zwischenhändler, mit kurzen Wegen und klaren Preisen.
              </p>
            </div>
            <div className="grid border-t border-stone-200 sm:grid-cols-2">
              {VORTEILE.map(([titel, text], i) => (
                <div
                  key={titel}
                  className={`border-b border-stone-200 py-8 sm:px-8 ${i % 2 === 0 ? "sm:border-r sm:pl-0" : "sm:pr-0"}`}
                >
                  <h3 className="font-serif text-2xl text-stone-900">{titel}</h3>
                  <p className="mt-3 leading-relaxed text-stone-600">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Wohnungen */}
        <section id="wohnungen" className="scroll-mt-16 bg-sand py-32 md:py-40">
          <div className="mx-auto max-w-7xl px-5">
            <Kicker nr="02">Die letzten {FREI}</Kicker>
            <H2>
              {VERKAUFT.length} von {GESAMT} verkauft. <em>Ihre Chance auf Erstbezug am Stadtwald.</em>
            </H2>
            <div className="mt-10 max-w-xl">
              <div className="h-1 w-full bg-stone-300">
                <div className="h-full bg-gold" style={{ width: `${(VERKAUFT.length / GESAMT) * 100}%` }} />
              </div>
              <p className="mt-3 flex justify-between text-[11px] uppercase tracking-[0.25em] text-stone-500">
                <span>{Math.round((VERKAUFT.length / GESAMT) * 100)} % verkauft</span>
                <span className="text-stone-900">Nur noch {FREI} Wohnungen</span>
              </p>
            </div>

            <div className="mt-20 space-y-28">
              {TYPEN.map((t, i) => (
                <Reveal key={t.slug}>
                  <article
                    id={t.slug}
                    className={`grid scroll-mt-24 items-center gap-12 ${i % 2 ? "md:grid-cols-[1fr_1.35fr]" : "md:grid-cols-[1.35fr_1fr]"}`}
                  >
                    <div className={`group overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
                      <ProtectedImage
                        bild={t.bild}
                        sizes="(min-width: 768px) 60vw, 100vw"
                        className="aspect-[4/3] transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                        {t.name} · {t.lage}
                      </p>
                      <h3 className="mt-3 font-serif text-3xl leading-tight text-stone-900 md:text-5xl">{t.titel}</h3>
                      <p className="mt-5 leading-relaxed text-stone-600">{t.beschreibung}</p>

                      <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-stone-300 py-6 text-sm">
                        <div>
                          <dt className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Wohnfläche</dt>
                          <dd className="mt-1 font-serif text-2xl">ca. {formatNum(t.flaeche)} m²</dd>
                        </div>
                        <div>
                          <dt className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Aufteilung</dt>
                          <dd className="mt-1">{t.zimmer}</dd>
                        </div>
                        <div>
                          <dt className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Außenbereich</dt>
                          <dd className="mt-1">{t.aussen}</dd>
                        </div>
                        <div>
                          <dt className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Hausgeld (WP 2026)</dt>
                          <dd className="mt-1">{formatEur(t.hausgeld)} / Monat</dd>
                        </div>
                      </dl>

                      <ul className="mt-6 grid gap-2.5 text-sm text-stone-700 sm:grid-cols-2">
                        {t.merkmale.map((m) => (
                          <li key={m} className="flex items-baseline gap-3">
                            <span className="h-px w-3 shrink-0 translate-y-[-3px] bg-gold" />
                            {m}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">Kaufpreis · provisionsfrei</p>
                          <p className="mt-1 font-serif text-5xl tabular-nums text-stone-900">{formatEur(t.preis)}</p>
                          <p className="mt-1 text-sm text-stone-500">
                            {formatEur(t.preis / t.flaeche)} / m² · zzgl. Stellplatz optional
                          </p>
                        </div>
                        <a href="#kontakt" className={BTN_DUNKEL}>
                          Anfragen <span aria-hidden>→</span>
                        </a>
                      </div>
                    </div>

                    {t.grundriss && (
                      <div className="grid items-center gap-10 border border-stone-300 bg-white p-6 md:order-3 md:col-span-2 md:grid-cols-[minmax(0,420px)_1fr] md:p-12">
                        <ProtectedImage
                          bild={t.grundriss.bild}
                          sizes="(min-width: 768px) 420px, 100vw"
                          fit="contain"
                          className="mx-auto aspect-[642/1024] w-full max-w-[420px]"
                        />
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Grundriss</p>
                          <h4 className="mt-3 font-serif text-3xl text-stone-900 md:text-4xl">{t.grundriss.titel}</h4>
                          <ul className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
                            {t.grundriss.raeume.map(([raum, qm]) => (
                              <li key={raum} className="flex justify-between py-3.5">
                                <span className="text-stone-700">{raum}</span>
                                <span className="tabular-nums text-stone-900">{formatNum(qm)} m²</span>
                              </li>
                            ))}
                          </ul>
                          <p className="mt-5 text-xs leading-relaxed text-stone-500">
                            Unverbindliche Visualisierung, Möblierung beispielhaft. Maße auf Basis der
                            Baugenehmigungspläne, Abweichungen möglich. Außenflächen in der Wohnfläche anteilig
                            berücksichtigt.
                          </p>
                        </div>
                      </div>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Verfügbarkeit */}
            <div className="mt-28 overflow-x-auto border border-stone-300 bg-white">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="border-b border-stone-300">
                  <tr>
                    {["Einheit", "Typ", "Wohnfläche", "MEA", "Hausgeld / Monat", "Kaufpreis", "Status"].map((h) => (
                      <th key={h} className="px-6 py-5 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TYPEN.flatMap((t) =>
                    t.einheiten.map((e) => (
                      <tr key={e.we} className="border-t border-stone-100 transition hover:bg-background">
                        <td className="px-6 py-5">
                          <span className="font-serif text-lg">{e.we}</span>{" "}
                          <span className="text-stone-400">({e.haus})</span>
                        </td>
                        <td className="px-6 py-5">{t.name}</td>
                        <td className="px-6 py-5 tabular-nums">{formatNum(t.flaeche)} m²</td>
                        <td className="px-6 py-5 tabular-nums">{e.mea}/1.000</td>
                        <td className="px-6 py-5 tabular-nums">{formatEur(t.hausgeld)}</td>
                        <td className="px-6 py-5 font-serif text-lg tabular-nums">{formatEur(t.preis)}</td>
                        <td className="px-6 py-5">
                          <span className="inline-flex items-center gap-2 capitalize">
                            <span className={`h-2 w-2 rounded-full ${STATUS_PUNKT[e.status]}`} />
                            {e.status}
                          </span>
                        </td>
                      </tr>
                    )),
                  )}
                  {VERKAUFT.map((v) => (
                    <tr key={v.we} className="border-t border-stone-100 text-stone-400">
                      <td className="px-6 py-4">
                        <span className="font-serif text-lg">{v.we}</span> <span>({v.haus})</span>
                      </td>
                      <td className="px-6 py-4" colSpan={5}>
                        –
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2">
                          <span className={`h-2 w-2 rounded-full ${STATUS_PUNKT.verkauft}`} />
                          Verkauft
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="border-t border-stone-200 px-6 py-5 text-xs leading-relaxed text-stone-500">
                Außenstellplatz je {formatEur(STELLPLATZ_PREIS)} optional. Wohnflächen lt. Wohnflächenberechnung 2023.
                Hausgeld lt. Wirtschaftsplan 2026 (inkl. Verwaltung, Gebäudeversicherung, Wasser, Hausmeister,
                Allgemeinstrom, Gartenpflege); Heizkosten werden verbrauchsabhängig gesondert abgerechnet, Grundsteuer
                wird von der Stadt erhoben.
              </p>
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-stone-300 pt-12 md:flex-row md:items-center">
              <div>
                <h3 className="font-serif text-3xl text-stone-900">Alle Unterlagen auf einen Blick</h3>
                <p className="mt-2 text-stone-600">
                  Grundrisse, Teilungserklärung, Wirtschaftsplan und Energieausweis – kostenlos und unverbindlich.
                </p>
              </div>
              <a href="#kontakt" className={`${BTN_DUNKEL} shrink-0`}>
                Unterlagen anfordern <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Emotionsband */}
        <section className="relative flex min-h-[80vh] items-center overflow-hidden">
          <ProtectedImage bild={BILDER.kuecheTerrasse} sizes="100vw" className="absolute! inset-0" />
          <Reveal className="relative mx-auto w-full max-w-7xl px-5">
            <div className="max-w-xl bg-brand-dark/35 p-10 text-white backdrop-blur-[2px] [text-shadow:0_1px_8px_rgb(0_0_0/0.35)]">
              <p className="text-[11px] uppercase tracking-[0.3em]">Penthouse · Dachterrasse</p>
              <p className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
                Sonnenuntergang <em className="text-[#f3dfb8]">inklusive.</em>
              </p>
              <a href="#penthouse" className={`${BTN_HELL} mt-8 [text-shadow:none]`}>
                Zum Penthouse <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </section>

        {/* Galerie */}
        <section id="galerie" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-32 md:py-40">
          <Reveal className="mb-14">
            <Kicker nr="03">Eindrücke</Kicker>
            <H2>
              Licht, Raum und <em>ruhige Materialien.</em>
            </H2>
          </Reveal>
          <Gallery bilder={GALERIE} />
        </section>

        {/* Ausstattung */}
        <section id="ausstattung" className="scroll-mt-16 bg-brand py-32 text-white md:py-40">
          <Reveal className="mx-auto max-w-7xl px-5">
            <Kicker nr="04" hell>
              Ausstattung
            </Kicker>
            <H2 hell>
              Gehobener Standard, der bleibt – <em>und Energiekosten, die niedrig bleiben.</em>
            </H2>
            <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {AUSSTATTUNG.map(([titel, punkte]) => (
                <div key={titel}>
                  <h3 className="border-b border-white/20 pb-4 font-serif text-2xl text-gold">{titel}</h3>
                  <ul className="mt-5 space-y-3 text-white/85">
                    {punkte.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-20 flex flex-col gap-8 border border-white/20 p-8 md:flex-row md:items-center md:p-12">
              <div className="shrink-0 border border-gold px-10 py-7 text-center">
                <p className="font-serif text-7xl leading-none text-gold">40</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.25em]">KfW-Effizienzhaus</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl md:text-4xl">Der höchste Effizienzstandard im Neubau</h3>
                <p className="mt-4 max-w-[60ch] leading-relaxed text-white/80">
                  Das Gebäude benötigt nur rund 40 % der Energie eines gesetzlichen Referenzneubaus. Für Sie heißt das:
                  dauerhaft niedrige Heizkosten, Unabhängigkeit von Öl und Gas dank Wärmepumpe und eine Immobilie, die
                  ihren Wert auch bei steigenden Energieanforderungen behält.
                </p>
              </div>
            </div>
            <p className="mt-8 max-w-3xl text-sm text-white/65">
              Energieeffiziente Neubauten können für Förderprogramme der KfW in Frage kommen. Ob und in welcher Höhe eine
              Förderung für Sie möglich ist, klären Sie bitte mit Ihrer finanzierenden Bank.
            </p>
          </Reveal>
        </section>

        {/* Lage */}
        <section id="lage" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-32 md:py-40">
          <Reveal className="grid gap-16 md:grid-cols-2">
            <div>
              <Kicker nr="05">Die Lage</Kicker>
              <H2>
                Vorderwald-Rosenhöhe: <em>grün, ruhig, angebunden.</em>
              </H2>
              <div className="mt-8 max-w-[60ch] space-y-5 text-lg leading-relaxed text-stone-600">
                <p>
                  Die Rosenhöhe liegt im Süden Offenbachs – ein durchgrünter, gewachsener Wohnstadtteil mit Ein- und
                  Mehrfamilienhäusern. Der Offenbacher Stadtwald liegt ganz in der Nähe – Joggen, Radfahren und
                  Spaziergänge gehören hier zum Alltag.
                </p>
                <p>
                  Gleichzeitig sind Sie schnell mittendrin: Offenbacher Innenstadt und das Ring-Center erreichen Sie in
                  wenigen Minuten, mehrere Bushaltestellen binden an das S-Bahn-Netz an. Über A661 und A3 sind Frankfurt,
                  Darmstadt und das gesamte Rhein-Main-Gebiet schnell erreichbar, der Frankfurter Flughafen liegt rund 27
                  Fahrminuten entfernt.
                </p>
                <p>
                  Wohnen am Waldrand, arbeiten in der Metropole: Dieses Gleichgewicht ist im Rhein-Main-Gebiet selten –
                  und im Neubau zu diesem Preis noch seltener.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <ProtectedImage bild={BILDER.gruen} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3]" />
              <ul className="divide-y divide-stone-200 border-y border-stone-200">
                {LAGE.map(([ziel, weg]) => (
                  <li key={ziel} className="flex justify-between py-4">
                    <span className="text-stone-900">{ziel}</span>
                    <span className="text-stone-500">{weg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <div className="mt-20 border border-stone-200">
            <iframe
              title="Karte Eichwaldweg 31, Offenbach"
              src="https://www.google.com/maps?q=Eichwaldweg+31,+63069+Offenbach+am+Main&z=14&output=embed"
              className="block h-[420px] w-full grayscale contrast-[1.05]"
              loading="lazy"
            />
          </div>
        </section>

        {/* Direktkauf */}
        <section id="kauf" className="scroll-mt-16 bg-sand py-32 md:py-40">
          <Reveal className="mx-auto max-w-7xl px-5">
            <Kicker nr="06">Provisionsfrei kaufen</Kicker>
            <H2>
              Alles aus einer Hand – <em>ohne Provision für Sie.</em>
            </H2>
            <div className="mt-20 grid border-t border-stone-300 sm:grid-cols-2 lg:grid-cols-4">
              {SCHRITTE.map(([titel, text], i) => (
                <div key={titel} className="border-b border-stone-300 py-10 pr-8 lg:border-b-0 lg:border-r lg:pl-8 lg:first:pl-0 lg:last:border-r-0">
                  <span className="font-serif text-5xl text-gold">0{i + 1}</span>
                  <h3 className="mt-5 font-serif text-2xl text-stone-900">{titel}</h3>
                  <p className="mt-3 leading-relaxed text-stone-600">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-14 max-w-[70ch] text-lg leading-relaxed text-stone-600">
              Von der ersten Besichtigung bis zur Schlüsselübergabe begleitet Sie {KONTAKT.ansprechpartner} persönlich –
              im Auftrag des Bauträgers. <strong className="font-medium text-stone-900">Für Sie als Käufer fällt keine Provision an.</strong>
            </p>
            <div className="mt-16 flex flex-col gap-8 bg-brand p-10 text-white md:flex-row md:items-center md:justify-between md:p-14">
              <div className="max-w-2xl">
                <h3 className="font-serif text-3xl md:text-4xl">Kapitalanleger? Wir vermieten für Sie.</h3>
                <p className="mt-4 leading-relaxed text-white/80">
                  Kauf, Übergabe und Vermietung aus einer Hand: Wir suchen und prüfen geeignete Mieter, organisieren die
                  Besichtigungen und bereiten den Mietvertrag vor. Sie erhalten eine vermietete Neubauwohnung – ohne
                  eigenen Aufwand.
                </p>
              </div>
              <a href="#kontakt" className={`${BTN_GOLD} shrink-0`}>
                Vermietung anfragen <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-4xl scroll-mt-16 px-5 py-32 md:py-40">
          <Reveal>
            <Kicker nr="07">Häufige Fragen</Kicker>
            <H2>Gut zu wissen.</H2>
            <div className="mt-14 divide-y divide-stone-200 border-y border-stone-200">
              {FAQ.map(([frage, antwort]) => (
                <details key={frage} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-stone-900 md:text-2xl">
                    {frage}
                    <span className="shrink-0 text-2xl font-light text-gold transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[65ch] leading-relaxed text-stone-600">{antwort}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="scroll-mt-16 bg-sand">
          <div className="mx-auto grid max-w-7xl items-start gap-16 px-5 py-32 md:grid-cols-[1fr_1.3fr] md:py-40">
            <div>
              <Kicker nr="08">Kontakt</Kicker>
              <H2>
                Besichtigung <em>vereinbaren.</em>
              </H2>
              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Die letzten {FREI} Wohnungen, sofort verfügbar. Sichern Sie sich Ihren Termin – wir melden uns schnellstmöglich bei
                Ihnen.
              </p>
              <div className="mt-10 space-y-2 text-stone-700">
                {KONTAKT.firma && <p className="font-medium text-stone-900">{KONTAKT.firma}</p>}
                {KONTAKT.ansprechpartner && (
                  <div className="mb-6 max-w-sm">
                    {KONTAKT.foto ? (
                      <ProtectedImage
                        bild={{ src: KONTAKT.foto, alt: KONTAKT.ansprechpartner }}
                        sizes="(min-width: 640px) 384px, 100vw"
                        position="center top"
                        className="aspect-square w-full"
                      />
                    ) : (
                      <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand font-serif text-2xl text-white">
                        {KONTAKT.ansprechpartner
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    )}
                    <p className="mt-6 border-l-2 border-gold pl-5">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500">Ihr Ansprechpartner</span>
                      <span className="mt-1 block font-serif text-3xl text-stone-900">{KONTAKT.ansprechpartner}</span>
                      <span className="mt-1 block text-sm text-stone-500">{KONTAKT.rolle} · für Käufer provisionsfrei</span>
                      <span className="mt-3 block leading-relaxed text-stone-600">
                        Persönliche Begleitung von der Besichtigung bis zur Schlüsselübergabe.
                      </span>
                    </p>
                  </div>
                )}
                {KONTAKT.telefon && (
                  <p>
                    <a href={`tel:${KONTAKT.telefon.replace(/\s/g, "")}`} className="border-b border-brand text-brand">
                      {KONTAKT.telefon}
                    </a>
                  </p>
                )}
                {KONTAKT.email && (
                  <p>
                    <a href={`mailto:${KONTAKT.email}`} className="border-b border-brand text-brand">
                      {KONTAKT.email}
                    </a>
                  </p>
                )}
                <p className="pt-3 text-sm text-stone-500">Objekt: {ADRESSE}</p>
              </div>
            </div>
            <div className="border border-stone-300 bg-white p-6 md:sticky md:top-24 md:p-12">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <StickyCta />

      <footer className="bg-brand-dark pb-28 pt-20 text-sm text-white/60 md:pb-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-white">
            <Logo gross />
          </div>
          <div className="mt-14 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-3">
            <div className="space-y-1">
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/40">Kontakt</p>
              {KONTAKT.firma && <p className="text-white">{KONTAKT.firma}</p>}
              <p className="text-white">{KONTAKT.ansprechpartner}</p>
              {KONTAKT.telefon && <p>{KONTAKT.telefon}</p>}
              {KONTAKT.email && <p>{KONTAKT.email}</p>}
            </div>
            <div className="space-y-1">
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/40">Objekt</p>
              <p className="text-white">{ADRESSE}</p>
              <p>{GESAMT} Wohnungen · KfW-Effizienzhaus 40</p>
            </div>
            <div className="space-y-1">
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/40">Rechtliches</p>
              <p>
                <a href="/impressum" className="hover:text-white">
                  Impressum
                </a>
              </p>
              <p>
                <a href="/datenschutz" className="hover:text-white">
                  Datenschutz
                </a>
              </p>
            </div>
          </div>
          <p className="mt-14 max-w-4xl text-xs leading-relaxed text-white/45">
            Alle Angaben ohne Gewähr. Maßgeblich sind ausschließlich der notarielle Kaufvertrag, die Teilungserklärung und
            die Baubeschreibung. Visualisierungen sind beispielhaft und nicht Vertragsbestandteil. Zzgl. Grunderwerbsteuer,
            Notar- und Grundbuchkosten. © {KONTAKT.firma || "Eichwaldweg 31–33"}. Bilder urheberrechtlich geschützt –
            Vervielfältigung nicht gestattet.
          </p>
        </div>
      </footer>
    </>
  );
}
