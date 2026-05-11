import Link from "next/link";
import { Instagram } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import GalleriaGrid from "@/components/GalleriaGrid";
import ListinoPrezzi from "@/components/ListinoPrezzi";
import Testimonianze from "@/components/Testimonianze";
import { lavori } from "@/data/lavori";
import { config } from "@/data/config";

const passi = [
  {
    numero: "01",
    titolo: "Compila il modulo",
    testo: "Descrivi il soggetto che desideri, le dimensioni e i colori preferiti.",
  },
  {
    numero: "02",
    titolo: "Ricevi un preventivo",
    testo: "Ti rispondo entro 48 ore con prezzo, tempi di lavorazione e conferma disponibilità.",
  },
  {
    numero: "03",
    titolo: "Aspetta la tua creazione",
    testo: "Mi metto al lavoro! Ti aggiornerò con foto durante la lavorazione.",
  },
];

export default function Home() {
  const ultime6 = lavori.slice(0, 6);

  return (
    <>
      <HeroSection />

      {/* Anteprima galleria */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-brown">Ultimi lavori</h2>
            <p className="text-brown-light mt-2">Ogni pezzo è unico e fatto interamente a mano</p>
          </div>
          <GalleriaGrid iniziali={ultime6} mostraCTA />
          <div className="text-center mt-10">
            <Link
              href="/galleria"
              className="inline-flex px-8 py-3 rounded-full border-2 border-brown text-brown font-medium hover:bg-brown hover:text-white transition-colors"
            >
              Vedi tutti i lavori
            </Link>
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-brown">Come funzionano le commissioni</h2>
            <p className="text-brown-light mt-2">Tre semplici passi per avere il tuo amigurumi personalizzato</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {passi.map((p) => (
              <div key={p.numero} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-rose/20 text-rose-dark font-serif font-bold text-xl mb-4">
                  {p.numero}
                </div>
                <h3 className="font-serif text-xl text-brown mb-2">{p.titolo}</h3>
                <p className="text-brown-light text-sm leading-relaxed">{p.testo}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/commissioni"
              className="inline-flex px-8 py-3 rounded-full bg-rose text-white font-medium hover:bg-rose-dark transition-colors"
            >
              Richiedi il tuo amigurumi
            </Link>
          </div>
        </div>
      </section>

      <ListinoPrezzi />

      <Testimonianze />

      {/* Banner Instagram */}
      {config.social.instagram && (
        <section className="py-12 bg-rose/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-serif text-2xl text-brown mb-2">Seguimi su Instagram</h2>
            <p className="text-brown-light mb-6">Per restare aggiornata sui nuovi lavori e dietro le quinte</p>
            <a
              href={config.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-brown text-white font-medium hover:bg-brown/80 transition-colors"
            >
              <Instagram size={20} />
              Vai al profilo
            </a>
          </div>
        </section>
      )}
    </>
  );
}
