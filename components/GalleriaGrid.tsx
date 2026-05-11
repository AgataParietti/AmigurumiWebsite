"use client";

import { useMemo, useState } from "react";
import { lavori, Lavoro, Categoria } from "@/data/lavori";
import AmigurumiCard from "./AmigurumiCard";

type Filtro = "tutti" | Categoria;

const filtri: { valore: Filtro; etichetta: string }[] = [
  { valore: "tutti", etichetta: "Tutti" },
  { valore: "animali", etichetta: "Animali" },
  { valore: "personaggi", etichetta: "Personaggi" },
  { valore: "stagionale", etichetta: "Stagionale" },
  { valore: "custom", etichetta: "Custom" },
];

interface Props {
  iniziali?: Lavoro[];
  mostraCTA?: boolean;
}

export default function GalleriaGrid({ iniziali, mostraCTA = false }: Props) {
  const fonte = iniziali ?? lavori;
  const [attivo, setAttivo] = useState<Filtro>("tutti");

  const filtrati = useMemo(
    () => (attivo === "tutti" ? fonte : fonte.filter((l) => l.categoria === attivo)),
    [attivo, fonte]
  );

  return (
    <div>
      {!mostraCTA && (
        <div className="flex flex-wrap gap-2 mb-8">
          {filtri.map((f) => (
            <button
              key={f.valore}
              onClick={() => setAttivo(f.valore)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                attivo === f.valore
                  ? "bg-rose text-white"
                  : "bg-white text-brown-light border border-rose/30 hover:border-rose hover:text-rose-dark"
              }`}
            >
              {f.etichetta}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtrati.map((lavoro) => (
          <AmigurumiCard key={lavoro.id} {...lavoro} />
        ))}
      </div>
    </div>
  );
}
