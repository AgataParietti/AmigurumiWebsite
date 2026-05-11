"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  nome: z.string().min(2, "Inserisci il tuo nome"),
  email: z.string().email("Email non valida"),
  soggetto: z.string().min(3, "Descrivi il soggetto che desideri"),
  dimensione: z.enum(["mini", "piccolo", "medio", "grande"], { required_error: "Seleziona una dimensione" }),
  colori: z.string().min(2, "Indica almeno un colore o preferenza"),
  budget: z.enum(["10-20", "20-40", "40-60", "60+", "aperto"], { required_error: "Seleziona un budget" }),
  dataConsegna: z.string().optional(),
  note: z.string().optional(),
  comeHaiTrovato: z.enum(["instagram", "passaparola", "google", "altro", ""]).optional(),
});

type FormData = z.infer<typeof schema>;

const labelClass = "block text-sm font-medium text-brown mb-1";
const inputClass =
  "w-full px-4 py-2.5 rounded-xl border border-brown/20 bg-white text-brown placeholder:text-brown-light/50 focus:outline-none focus:ring-2 focus:ring-rose/40 focus:border-rose transition text-sm";
const errorClass = "mt-1 text-xs text-red-500";

export default function CommissioniForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/commissioni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-sage/20 border border-sage rounded-2xl p-8 text-center">
        <CheckCircle className="mx-auto text-sage mb-4" size={48} />
        <h3 className="font-serif text-2xl text-brown mb-2">Richiesta inviata!</h3>
        <p className="text-brown-light">Ti risponderò entro 48 ore con un preventivo personalizzato.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 px-6 py-2 rounded-full border border-brown text-brown text-sm hover:bg-brown hover:text-white transition-colors"
        >
          Invia un'altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-sm text-red-700">
          <AlertCircle size={18} />
          Qualcosa è andato storto. Riprova o scrivimi via email.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Nome *</label>
          <input {...register("nome")} placeholder="Il tuo nome" className={inputClass} />
          {errors.nome && <p className={errorClass}>{errors.nome.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input {...register("email")} type="email" placeholder="tua@email.com" className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Tipo di soggetto *</label>
        <input
          {...register("soggetto")}
          placeholder="es. gatto tigrato arancione, personaggio anime, ecc."
          className={inputClass}
        />
        {errors.soggetto && <p className={errorClass}>{errors.soggetto.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Dimensione *</label>
          <select {...register("dimensione")} className={inputClass}>
            <option value="">Scegli una dimensione</option>
            <option value="mini">Mini (&lt;10 cm) — da €15</option>
            <option value="piccolo">Piccolo (10–15 cm) — da €25</option>
            <option value="medio">Medio (15–25 cm) — da €40</option>
            <option value="grande">Grande (&gt;25 cm) — da €60</option>
          </select>
          {errors.dimensione && <p className={errorClass}>{errors.dimensione.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Budget indicativo *</label>
          <select {...register("budget")} className={inputClass}>
            <option value="">Seleziona il budget</option>
            <option value="10-20">€10–20</option>
            <option value="20-40">€20–40</option>
            <option value="40-60">€40–60</option>
            <option value="60+">€60+</option>
            <option value="aperto">Aperto a preventivo</option>
          </select>
          {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Colori preferiti *</label>
        <input
          {...register("colori")}
          placeholder="es. blu cielo, toni caldi, multicolore…"
          className={inputClass}
        />
        {errors.colori && <p className={errorClass}>{errors.colori.message}</p>}
      </div>

      <div>
        <label className={labelClass}>
          Data di consegna desiderata{" "}
          <span className="text-brown-light/60 font-normal">(non garantita)</span>
        </label>
        <input {...register("dataConsegna")} type="date" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Note aggiuntive</label>
        <textarea
          {...register("note")}
          rows={4}
          placeholder="Qualsiasi dettaglio utile: postura, accessori, riferimenti visivi…"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Come hai trovato il sito?</label>
        <select {...register("comeHaiTrovato")} className={inputClass}>
          <option value="">— opzionale —</option>
          <option value="instagram">Instagram</option>
          <option value="passaparola">Passaparola</option>
          <option value="google">Ricerca Google</option>
          <option value="altro">Altro</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 rounded-full bg-rose text-white font-medium hover:bg-rose-dark disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Invio in corso…
          </>
        ) : (
          "Invia la richiesta"
        )}
      </button>
    </form>
  );
}
