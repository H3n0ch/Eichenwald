import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const TITEL = "Eichwaldweg 31–33 · Neubau-Eigentumswohnungen in Offenbach-Rosenhöhe";
const BESCHREIBUNG =
  "Provisionsfrei direkt vom Bauträger: Gartenwohnungen mit Terrasse und Penthouses mit Dachterrasse. Erstbezug 2026, KfW-Effizienzhaus 40, Wärmepumpe, sofort bezugsfrei.";

export const metadata: Metadata = {
  // TODO: NEXT_PUBLIC_SITE_URL auf die echte Domain setzen, damit Vorschaubilder beim Teilen funktionieren.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: TITEL,
  description: BESCHREIBUNG,
  openGraph: {
    title: TITEL,
    description: BESCHREIBUNG,
    locale: "de_DE",
    type: "website",
    images: [{ url: "/a8e89e28-4e2b-4c2f-acad-9385f6f7a817.jpg", alt: "Eichwaldweg 31–33 im Abendlicht" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${geistSans.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
