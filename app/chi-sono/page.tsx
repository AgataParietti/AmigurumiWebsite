import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Heart, Leaf, Shield } from "lucide-react";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Chi sono",
  description: "Scopri chi c'è dietro gli amigurumi: la mia storia, la mia passione per l'uncinetto e i materiali che uso.",
};

const materiali = [
  { icona: <Heart size={20} />, titolo: "Cotone e ciniglia certificati", testo: "Uso solo filati di qualità selezionati, morbidi e resistenti nel tempo." },
  { icona: <Shield size={20} />, titolo: "Occhietti di sicurezza", testo: "Tutti i miei lavori usano occhietti di sicurezza homologati, sicuri anche per bambini." },
  { icona: <Leaf size={20} />, titolo: "Imbottitura anallergica", testo: "Riempiti con ovatta ipoallergenica certificata, morbida e lavabile." },
];

export default function ChiSonoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Presentazione */}
      <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
        <div className="w-56 h-56 rounded-full overflow-hidden flex-shrink-0 shadow-md">
          <Image
            src="/images/lavori/7c2e2861-e85e-47eb-a68b-4a434991003e.JPG"
            alt={config.nome}
            width={224}
            height={224}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="font-serif text-4xl text-brown mb-4">Ciao, sono {config.nome}!</h1>
          <div className="space-y-4 text-brown-light leading-relaxed">
            <p>
              Ho iniziato a fare amigurumi quasi per caso, durante un periodo di pausa forzata, e mi sono innamorata subito di questo mondo. C'è qualcosa di magico nel vedere nascere una piccola creatura da un semplice gomitolo di cotone.
            </p>
            <p>
              Ogni amigurumi che realizzo è pensato nei minimi dettagli: la scelta del colore giusto, la proporzione delle parti, l'espressione del viso. Per me non sono solo pupazzi — sono piccoli personaggi con una loro storia.
            </p>
            <p>
              Lavoro principalmente su commissione perché mi piace creare qualcosa di veramente speciale per ogni persona. Che sia un regalo, un ricordo, o semplicemente qualcosa di bello da tenere vicino — ci metto sempre tutto il mio cuore.
            </p>
          </div>
          {config.social.instagram && (
            <a
              href={config.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-full bg-brown text-white text-sm font-medium hover:bg-brown/80 transition-colors"
            >
              <Instagram size={18} />
              Seguimi su Instagram
            </a>
          )}
        </div>
      </div>

      {/* Materiali */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-brown mb-6">Materiali che uso</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {materiali.map((m) => (
            <div key={m.titolo} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-rose/20 flex items-center justify-center text-rose-dark mb-4">
                {m.icona}
              </div>
              <h3 className="font-serif text-brown text-lg mb-2">{m.titolo}</h3>
              <p className="text-brown-light text-sm leading-relaxed">{m.testo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-rose/10 rounded-2xl p-8 text-center">
        <h2 className="font-serif text-2xl text-brown mb-3">Vuoi un amigurumi tutto tuo?</h2>
        <p className="text-brown-light mb-6">Raccontami cosa hai in mente — realizzo commissioni personalizzate con amore.</p>
        <Link
          href="/commissioni"
          className="inline-flex px-8 py-3 rounded-full bg-rose text-white font-medium hover:bg-rose-dark transition-colors"
        >
          Richiedi la tua commissione
        </Link>
      </div>
    </div>
  );
}
