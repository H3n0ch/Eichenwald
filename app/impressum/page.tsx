import type { Metadata } from "next";
import RechtSeite from "../components/RechtSeite";

export const metadata: Metadata = { title: "Impressum · Eichwaldweg 31–33" };

// TODO: Pflichtangaben nach § 5 DDG eintragen (Anbieter, Anschrift, Vertretungsberechtigte,
// Kontakt, Handelsregister, USt-IdNr., ggf. Erlaubnis nach § 34c GewO).
export default function Impressum() {
  return (
    <RechtSeite titel="Impressum">
      <p>Die Angaben gemäß § 5 DDG werden in Kürze ergänzt.</p>
    </RechtSeite>
  );
}
