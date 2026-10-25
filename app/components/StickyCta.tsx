import { KONTAKT } from "../projekt";

// Feste Kontaktleiste am unteren Rand – nur auf dem Handy.
export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-stone-200 bg-white/95 p-3 backdrop-blur md:hidden">
      {KONTAKT.telefon && (
        <a
          href={`tel:${KONTAKT.telefon.replace(/\s/g, "")}`}
          className="flex-1 border border-brand py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-brand"
        >
          Anrufen
        </a>
      )}
      {KONTAKT.whatsapp && (
        <a
          href={`https://wa.me/${KONTAKT.whatsapp}?text=${encodeURIComponent("Hallo, ich interessiere mich für eine Wohnung am Eichwaldweg 31–33.")}`}
          className="flex-1 bg-[#25D366] py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-white"
        >
          WhatsApp
        </a>
      )}
      <a href="#kontakt" className="flex-1 bg-brand py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-white">
        Besichtigung
      </a>
    </div>
  );
}
