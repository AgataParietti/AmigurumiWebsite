import Link from "next/link";
import { config } from "@/data/config";

export default function HeroSection() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
        {/* Testo */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block text-rose-dark text-sm font-medium tracking-widest uppercase mb-4">
            Artigianato fatto a mano
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brown leading-tight">
            Amigurumi fatti
            <br />
            <span className="text-rose-dark italic">con amore</span>
            <br />
            a mano
          </h1>
          <p className="mt-6 text-brown-light text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            {config.tagline}. Ogni pezzo è unico, realizzato con cotone e ciniglia di qualità e tanta cura per i dettagli.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/galleria"
              className="px-8 py-3 rounded-full border-2 border-brown text-brown font-medium hover:bg-brown hover:text-white transition-colors text-center"
            >
              Guarda i lavori
            </Link>
            <Link
              href="/commissioni"
              className="px-8 py-3 rounded-full bg-rose text-white font-medium hover:bg-rose-dark transition-colors text-center"
            >
              Richiedi il tuo
            </Link>
          </div>
        </div>

        {/* Decorazione visiva */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-rose/20 animate-pulse" style={{ animationDuration: "3s" }} />
            <div className="absolute inset-6 rounded-full bg-rose/15" />
            <div className="absolute inset-12 rounded-full bg-rose/10" />
            <div className="absolute inset-0 flex items-center justify-center text-8xl md:text-9xl select-none">
              🧶
            </div>
          </div>
        </div>
      </div>

      {/* Onda decorativa */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
