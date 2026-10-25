import type { Metadata } from "next";
import RechtSeite from "../components/RechtSeite";

export const metadata: Metadata = { title: "Datenschutz · Eichwaldweg 31–33" };

// TODO: vollständige Datenschutzerklärung eintragen (Verantwortlicher, Kontaktformular/E-Mail,
// eingebettete Google-Maps-Karte, Hosting, Betroffenenrechte).
export default function Datenschutz() {
  return (
    <RechtSeite titel="Datenschutz">
      <p>Die Datenschutzerklärung wird in Kürze ergänzt.</p>
    </RechtSeite>
  );
}
