import { testimonianze } from "@/data/testimonianze";
import { Quote } from "lucide-react";

export default function Testimonianze() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl text-brown">Cosa dicono di me</h2>
          <p className="text-brown-light mt-2">Recensioni di clienti soddisfatte</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonianze.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-3">
              <Quote size={24} className="text-rose opacity-60" />
              <p className="text-brown-light text-sm leading-relaxed flex-1">"{t.testo}"</p>
              <div>
                <p className="font-semibold text-brown text-sm">{t.nome}</p>
                <p className="text-xs text-brown-light/60">{t.data}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
