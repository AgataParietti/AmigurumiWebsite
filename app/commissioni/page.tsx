import type { Metadata } from "next";
import CommissioniForm from "@/components/CommissioniForm";
import { config } from "@/data/config";
import { Clock, CheckCircle, XCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Commissioni",
  description: "Richiedi il tuo amigurumi personalizzato. Compila il modulo e ricevi un preventivo entro 48 ore.",
};

const faq = [
  {
    domanda: "Quanto tempo ci vuole?",
    risposta:
      "Dipende dalla complessità e dalla coda di lavori. In media " + config.commissioni.tempiAttesa + " dalla conferma dell'ordine.",
  },
  {
    domanda: "Come avviene il pagamento?",
    risposta:
      "Dopo aver concordato il preventivo, richiedo un acconto del 50% prima di iniziare la lavorazione. Il saldo alla consegna.",
  },
  {
    domanda: "Posso richiedere qualsiasi soggetto?",
    risposta:
      "Nella maggior parte dei casi sì! Animali, personaggi fantasy, personaggi di anime/serie TV, ritratti di animali domestici. Scrivimi pure.",
  },
  {
    domanda: "Invii in tutta Italia?",
    risposta: "Sì, spedisco in tutta Italia tramite corriere tracciato. Le spese di spedizione vengono comunicate nel preventivo.",
  },
];

export default function CommissioniPage() {
  const { aperte, tempiAttesa } = config.commissioni;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-4xl text-brown">Commissioni</h1>
        <p className="text-brown-light mt-2 text-lg">Descrivi il tuo amigurumi dei sogni e ti mando un preventivo</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Colonna form — occupa 2/3 */}
        <div className="lg:col-span-2">
          {aperte ? (
            <CommissioniForm />
          ) : (
            <div className="bg-rose/10 border border-rose/30 rounded-2xl p-8 text-center">
              <XCircle className="mx-auto text-rose-dark mb-4" size={48} />
              <h2 className="font-serif text-2xl text-brown mb-2">Commissioni momentaneamente chiuse</h2>
              <p className="text-brown-light">
                Sono al lavoro su molti ordini in questo periodo. Torna presto o seguimi su Instagram per sapere quando riaprono!
              </p>
            </div>
          )}
        </div>

        {/* Colonna info */}
        <div className="space-y-6">
          {/* Stato commissioni */}
          <div
            className={`rounded-2xl p-5 flex items-center gap-4 ${
              aperte ? "bg-sage/20 border border-sage/40" : "bg-rose/10 border border-rose/30"
            }`}
          >
            {aperte ? (
              <CheckCircle className="text-sage flex-shrink-0" size={32} />
            ) : (
              <XCircle className="text-rose-dark flex-shrink-0" size={32} />
            )}
            <div>
              <p className="font-semibold text-brown">
                Commissioni {aperte ? "aperte" : "chiuse"}
              </p>
              {aperte && (
                <p className="text-sm text-brown-light flex items-center gap-1 mt-0.5">
                  <Clock size={14} />
                  Tempi medi: {tempiAttesa}
                </p>
              )}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-serif text-xl text-brown mb-4 flex items-center gap-2">
              <HelpCircle size={20} className="text-rose" />
              Domande frequenti
            </h2>
            <div className="space-y-4">
              {faq.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="font-semibold text-brown text-sm mb-1">{f.domanda}</p>
                  <p className="text-brown-light text-sm leading-relaxed">{f.risposta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
