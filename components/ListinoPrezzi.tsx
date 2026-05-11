const fasce = [
  { dimensione: "Mini", misura: "< 10 cm", prezzoPartenza: "€15", icona: "🐾" },
  { dimensione: "Piccolo", misura: "10–15 cm", prezzoPartenza: "€25", icona: "🐰" },
  { dimensione: "Medio", misura: "15–25 cm", prezzoPartenza: "€40", icona: "🐻" },
  { dimensione: "Grande", misura: "> 25 cm", prezzoPartenza: "€60", icona: "🦄" },
];

export default function ListinoPrezzi() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl text-brown">Listino prezzi</h2>
          <p className="text-brown-light mt-2">Prezzi orientativi — il preventivo finale dipende dalla complessità</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fasce.map((f) => (
            <div
              key={f.dimensione}
              className="bg-cream rounded-2xl p-6 text-center border border-rose/20 hover:border-rose/50 transition-colors"
            >
              <div className="text-4xl mb-3">{f.icona}</div>
              <h3 className="font-serif text-brown text-xl">{f.dimensione}</h3>
              <p className="text-brown-light text-sm mt-1">{f.misura}</p>
              <p className="text-rose-dark font-bold text-2xl mt-4">da {f.prezzoPartenza}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-brown-light text-sm mt-6">
          * I prezzi finali dipendono dalla complessità del soggetto, dal tipo di filato e dal tempo di lavorazione.
        </p>
      </div>
    </section>
  );
}
