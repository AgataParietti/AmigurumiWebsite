export interface Testimonianza {
  id: string;
  nome: string;
  testo: string;
  data: string;
}

export const testimonianze: Testimonianza[] = [
  {
    id: "1",
    nome: "Martina C.",
    testo: "Ho ordinato un gatto personalizzato uguale al mio Felix e il risultato mi ha fatto piangere di gioia. Ogni dettaglio era perfetto, anche il ciuffo ribelle sulla testa!",
    data: "Marzo 2025",
  },
  {
    id: "2",
    nome: "Sara T.",
    testo: "Regalo di compleanno per mia figlia: un unicorno con i colori preferiti suoi. Lei non voleva più smettere di tenerlo in mano. La qualità è eccellente e il filato è morbidissimo.",
    data: "Gennaio 2025",
  },
  {
    id: "3",
    nome: "Lucia M.",
    testo: "Professionalità e cura artigianale fuori dal comune. Ho ricevuto aggiornamenti durante la lavorazione e il pacchetto è arrivato confezionato in modo bellissimo.",
    data: "Aprile 2025",
  },
  {
    id: "4",
    nome: "Francesca R.",
    testo: "Il mio secondo ordine e non sarà l'ultimo! La renna di Natale era il decorazione più bella sotto l'albero. Tutta la famiglia voleva toccarlo.",
    data: "Dicembre 2024",
  },
];
