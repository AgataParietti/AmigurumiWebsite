"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lavoro } from "@/data/lavori";

const categoriaLabel: Record<string, string> = {
  animali: "Animali",
  personaggi: "Personaggi",
  stagionale: "Stagionale",
  custom: "Custom",
};

export default function AmigurumiCard({ nome, immagini, categoria, descrizione, venduto }: Omit<Lavoro, "id">) {
  const [idx, setIdx] = useState(0);
  const multi = immagini.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + immagini.length) % immagini.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % immagini.length);
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square overflow-hidden">
        <Image
          key={immagini[idx]}
          src={immagini[idx]}
          alt={`${nome} – foto ${idx + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* frecce carousel */}
        {multi && (
          <>
            <button
              onClick={prev}
              aria-label="Foto precedente"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow transition-opacity opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={18} className="text-brown" />
            </button>
            <button
              onClick={next}
              aria-label="Foto successiva"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow transition-opacity opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={18} className="text-brown" />
            </button>
          </>
        )}

        {/* pallini indicatori */}
        {multi && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {immagini.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                aria-label={`Vai alla foto ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === idx ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {venduto && (
          <div className="absolute inset-0 bg-brown/60 flex items-center justify-center">
            <span className="bg-white text-brown font-semibold px-4 py-1 rounded-full text-sm font-serif">
              Venduto
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <span className="text-xs font-medium text-rose-dark uppercase tracking-wider">
          {categoriaLabel[categoria]}
        </span>
        <h3 className="font-serif text-brown text-lg mt-1">{nome}</h3>
        <p className="text-brown-light text-sm mt-1 leading-relaxed">{descrizione}</p>
      </div>
    </div>
  );
}
