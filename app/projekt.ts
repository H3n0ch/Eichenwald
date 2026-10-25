// Zentrale Objektdaten. Quellen: Wirtschaftspläne 2026 (Jakobi Hausverwaltung),
// Wohnflächenberechnung 2023, ImmoScout24-Inserate vom 16.09.2026.

// TODO: echte Kontaktdaten eintragen, bevor die Seite online geht.
export const KONTAKT = {
  firma: "",
  ansprechpartner: "Michael Rautenberg",
  rolle: "Vertrieb im Auftrag des Bauträgers",
  telefon: "+49 151 68957104",
  email: "",
  // Nummer im internationalen Format ohne +/Leerzeichen, z. B. "4915112345678"
  whatsapp: "",
  // Porträtfoto in public/ ablegen, z. B. "/michael.jpg"
  foto: "/michael-rautenberg.png",
};

// Z. B. "Samstag, 8. November, 11–15 Uhr" – leer lassen, um das Banner auszublenden.
export const BESICHTIGUNGSTAG = "";

export const ADRESSE = "Eichwaldweg 31–33, 63069 Offenbach am Main";
export const STELLPLATZ_PREIS = 20000;

export type Bild = { src: string; alt: string; hoch?: boolean };

export const BILDER: Record<string, Bild> = {
  aussen1: { src: "/b2429893-1bfd-4783-9e52-9d43f6d76c50.jpg", alt: "Neubau Eichwaldweg mit Gärten und Terrassen" },
  aussen2: { src: "/f3e462f5-ccbd-44f0-b3c3-7921aa1e06e7.jpg", alt: "Fassade mit Balkonen und Innenhof" },
  wohnenLeer: { src: "/1.jpg", alt: "Wohn- und Essbereich Penthouse mit Abendsonne" },
  wohnenMoebliert: { src: "/2.jpg", alt: "Wohnbereich Penthouse" },
  kueche: { src: "/3.jpg", alt: "Offene Küche mit Wohnbereich" },
  grundrissPenthouse: { src: "/cf8d8b16-87dd-48a5-a480-c5ae3db59042.jpg", alt: "Grundriss Penthouse Staffelgeschoss" },
  kuecheTerrasse: { src: "/4.jpg", alt: "Wohnküche mit Zugang zur Dachterrasse" },
  strasse: { src: "/a8e89e28-4e2b-4c2f-acad-9385f6f7a817.jpg", alt: "Ansicht vom Eichwaldweg im Abendlicht", hoch: true },
  gruen: { src: "/1e8ca2ac-a31a-47d3-9141-a1fd73f98254.jpg", alt: "Die beiden Häuser inmitten von Grün", hoch: true },
};


export const GALERIE: Bild[] = [
  BILDER.wohnenMoebliert,
  BILDER.strasse,
  BILDER.kuecheTerrasse,
  BILDER.aussen1,
  BILDER.gruen,
  BILDER.kueche,
  BILDER.wohnenLeer,
  BILDER.aussen2,
];

export type Status = "verfügbar" | "reserviert" | "verkauft";

// TODO: vom Bauträger schriftlich bestätigen lassen – 6 von 10 Einheiten verkauft.
export const VERKAUFT = [
  { we: "WE 31.2", haus: "Haus 31" },
  { we: "WE 31.3", haus: "Haus 31" },
  { we: "WE 31.4", haus: "Haus 31" },
  { we: "WE 33.2", haus: "Haus 33" },
  { we: "WE 33.3", haus: "Haus 33" },
  { we: "WE 33.4", haus: "Haus 33" },
];

export type Typ = {
  slug: string;
  name: string;
  titel: string;
  lage: string;
  flaeche: number;
  zimmer: string;
  preis: number;
  hausgeld: number;
  aussen: string;
  bild: Bild;
  grundriss?: { bild: Bild; titel: string; raeume: [string, number][] };
  beschreibung: string;
  merkmale: string[];
  einheiten: { we: string; haus: string; te: string; mea: string; status: Status }[];
};

export const TYPEN: Typ[] = [
  {
    slug: "maisonette",
    name: "Maisonette",
    titel: "Gartenwohnung auf zwei Ebenen – wie ein Haus, ohne Hauspreis",
    lage: "Erdgeschoss + Untergeschoss",
    flaeche: 120.53,
    zimmer: "5 Zimmer · 4 Schlafzimmer · 2 Bäder",
    preis: 579900,
    hausgeld: 300,
    aussen: "Terrasse mit direktem Gartenzugang",
    bild: BILDER.aussen2,
    beschreibung:
      "Ebenerdig wohnen mit eigener Terrasse und direktem Zugang zum Garten. Im Erdgeschoss der offene Wohn-, Ess- und Kochbereich, ein Zimmer und ein Bad. Im Untergeschoss drei weitere Zimmer, ein zweites Bad und Abstellflächen – Platz für Kinder, Gäste und ein ruhiges Homeoffice, getrennt vom Wohnbereich. Fünf Zimmer auf rund 120 m²: so viel Raum bietet sonst nur ein Haus.",
    merkmale: [
      "Ebenerdig & barrierefreier Zugang",
      "Eigene Terrasse + Gartenmitbenutzung",
      "Innentreppe mit Holzauflage",
      "Zwei Bäder mit bodengleichen Duschen",
    ],
    einheiten: [
      { we: "WE 31.1", haus: "Haus 31", te: "Nr. 1", mea: "140,04", status: "verfügbar" },
      { we: "WE 33.1", haus: "Haus 33", te: "Nr. 6", mea: "138,94", status: "verfügbar" },
    ],
  },
  {
    slug: "penthouse",
    name: "Penthouse",
    titel: "Staffelgeschoss mit Dachterrasse und Weitblick",
    lage: "Staffelgeschoss (3. OG)",
    flaeche: 93.24,
    zimmer: "3 Zimmer · 2 Schlafzimmer · Bad + Gäste-WC",
    preis: 549900,
    hausgeld: 240,
    aussen: "Dachterrasse ca. 23 m² + Balkon ca. 5 m²",
    bild: BILDER.wohnenLeer,
    grundriss: {
      bild: BILDER.grundrissPenthouse,
      titel: "Penthouse im Staffelgeschoss",
      raeume: [
        ["Wohnen / Essen / Kochen", 36.4],
        ["Zimmer II", 14.13],
        ["Zimmer I", 12.38],
        ["Flur", 9.05],
        ["Bad", 5.45],
        ["Dachterrasse", 22.97],
        ["Balkon", 5.37],
      ],
    },
    beschreibung:
      "Ganz oben, lichtdurchflutet und mit Blick über das Grün der Rosenhöhe. Herzstück ist der großzügige Wohn- und Essbereich mit bodentiefen Fenstern und direktem Übergang zur privaten Dachterrasse. Zwei weitere Zimmer für Schlafen, Kinder, Gäste oder Arbeiten, dazu Bad, Gäste-WC und Abstellraum.",
    merkmale: [
      "Dachterrasse über zwei Seiten + Balkon",
      "Bodentiefe Fenster, Licht von mehreren Seiten",
      "Gäste-WC separat",
      "Kein Nachbar über Ihnen",
    ],
    einheiten: [
      { we: "WE 31.5", haus: "Haus 31", te: "Nr. 5", mea: "108,33", status: "verfügbar" },
      { we: "WE 33.5", haus: "Haus 33", te: "Nr. 10", mea: "108,33", status: "verfügbar" },
    ],
  },
];

export const FAQ: [string, string][] = [
  [
    "Muss ich eine Maklerprovision bezahlen?",
    "Nein. Sie kaufen direkt vom Bauträger. Ihr Ansprechpartner ist im Auftrag des Bauträgers tätig – für Sie als Käufer fällt keine Provision an.",
  ],
  [
    "Welche Nebenkosten kommen beim Kauf hinzu?",
    "Grunderwerbsteuer (in Hessen 6 %) sowie Notar- und Grundbuchkosten von üblicherweise rund 2 % des Kaufpreises.",
  ],
  [
    "Wie hoch ist das Hausgeld und was ist enthalten?",
    "Laut Wirtschaftsplan 2026: 300 € monatlich für die Maisonettes, 240 € für die Penthouses. Enthalten sind Verwaltung, Gebäudeversicherung, Wasser, Hausmeister, Allgemeinstrom und Gartenpflege. Heizkosten werden verbrauchsabhängig abgerechnet.",
  ],
  [
    "Wann kann ich einziehen?",
    "Sofort. Alle Wohnungen sind fertiggestellt und unvermietet – die Übergabe erfolgt nach Kaufpreiszahlung.",
  ],
  [
    "Gibt es einen Stellplatz?",
    "Ja, ein Außenstellplatz kann optional für 20.000 € dazu erworben werden.",
  ],
  [
    "Kann ich die Wohnung als Kapitalanlage vermieten lassen?",
    "Ja. Auf Wunsch übernehmen wir die Vermietung für Sie – von der Mietersuche über die Besichtigungen bis zum Mietvertrag.",
  ],
  [
    "Ist eine KfW-Förderung möglich?",
    "Das Gebäude ist als KfW-Effizienzhaus 40 errichtet. Ob ein Förderprogramm für Ihre Finanzierung in Frage kommt, prüft Ihre Bank – wir stellen die nötigen Nachweise bereit.",
  ],
];


const eur = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const num = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 2 });

export const formatEur = (n: number) => eur.format(n);
export const formatNum = (n: number) => num.format(n);
