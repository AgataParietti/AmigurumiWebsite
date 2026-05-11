export type Categoria = "animali" | "personaggi" | "stagionale" | "custom";

export interface Lavoro {
  id: string;
  nome: string;
  categoria: Categoria;
  immagini: string[];
  descrizione: string;
  venduto: boolean;
}

const p = (f: string) => `/images/lavori/${f}`;

export const lavori: Lavoro[] = [
  // ── Amigurumi con foto reali ──────────────────────────────────
  {
    id: "1",
    nome: "Gina la Tazzina",
    categoria: "personaggi",
    immagini: [p("IMG_0332.jpg"), p("IMG_0333.jpg")],
    descrizione: "Tazzina amigurumi in cotone, con faccina tenerissima",
    venduto: false,
  },
  {
    id: "2",
    nome: "Lena la Balena",
    categoria: "animali",
    immagini: [p("IMG_0369.jpg"), p("IMG_0370.jpg"), p("IMG_0371.jpg")],
    descrizione: "Balena azzurra in cotone, morbida e abbracciabile",
    venduto: false,
  },
  {
    id: "3",
    nome: "Galatea la Medusa",
    categoria: "animali",
    immagini: [p("IMG_0639.jpg")],
    descrizione: "Medusa con tentacoli blu in cotone, delicata e unica",
    venduto: false,
  },
  {
    id: "4",
    nome: "Piumino il Pulcino",
    categoria: "animali",
    immagini: [p("IMG_6341.jpg"), p("IMG_6373.jpg")],
    descrizione: "Pulcino portachiavi in ciniglia gialla, da portare sempre con sé",
    venduto: false,
  },
  {
    id: "7",
    nome: "Filomeno l'Unicorno",
    categoria: "personaggi",
    immagini: [
      p("IMG_7360.jpg"),
      p("IMG_7361.jpg"),
      p("IMG_7362.jpg"),
      p("IMG_7363.jpg"),
    ],
    descrizione: "Unicorno bianco con criniera arcobaleno in cotone, grande e dettagliato",
    venduto: false,
  },
  {
    id: "10",
    nome: "Gloria l'Anguria",
    categoria: "personaggi",
    immagini: [p("IMG_9698.jpg"), p("IMG_9699.jpg")],
    descrizione: "Fettina di anguria portachiavi in cotone, fresca e colorata",
    venduto: false,
  },
  {
    id: "11",
    nome: "Velma l'Elefante",
    categoria: "animali",
    immagini: [p("IMG_0442.jpg"), p("IMG_0443.jpg"), p("IMG_0444.jpg")],
    descrizione: "Elefantina grigia in ciniglia, morbidissima, con grandi orecchie",
    venduto: false,
  },
  {
    id: "12",
    nome: "Coralia la Tartaruga",
    categoria: "animali",
    immagini: [
      p("IMG_0039.jpg"),
      p("IMG_0040.jpg"),
      p("IMG_0042.jpg"),
      p("IMG_2850.jpg"),
    ],
    descrizione: "Tartaruga verde e marrone in cotone, con guscio lavorato",
    venduto: false,
  },
  {
    id: "13",
    nome: "Sebastian il Granchio",
    categoria: "animali",
    immagini: [
      p("IMG_9951.jpg"),
      p("IMG_9952.jpg"),
      p("IMG_9953.jpg"),
      p("IMG_9954.jpg"),
    ],
    descrizione: "Granchio rosso in ciniglia con occhi sgranati e chele divertenti",
    venduto: false,
  },
  {
    id: "16",
    nome: "Arturo l'Orsetto",
    categoria: "animali",
    immagini: [p("IMG_2614.jpg"), p("IMG_2615.jpg"), p("IMG_2616.jpg")],
    descrizione: "Orsetto marrone scuro in ciniglia, con fiocco rosso al collo",
    venduto: false,
  },
  // ── Nuovi soggetti ────────────────────────────────────────────
  {
    id: "25",
    nome: "Bassotto con Sciarpa",
    categoria: "animali",
    immagini: [
      p("IMG_3047.jpg"),
      p("IMG_3048.jpg"),
      p("IMG_3049.jpg"),
      p("IMG_3054.jpg"),
    ],
    descrizione: "Bassotto nero e marrone in ciniglia, con sciarpa rossa frangettata",
    venduto: false,
  },
  {
    id: "26",
    nome: "Gallina Bianca",
    categoria: "animali",
    immagini: [p("IMG_0722.jpg"), p("IMG_0723.jpg"), p("IMG_0724.jpg")],
    descrizione: "Gallina bianca in ciniglia, con cresta e zampe rosa, grande e soffice",
    venduto: false,
  },
  {
    id: "27",
    nome: "Rossella la Mucca",
    categoria: "animali",
    immagini: [
      p("IMG_1726.jpg"),
      p("IMG_1727.jpg"),
      p("IMG_1728.jpg"),
      p("IMG_1729.jpg"),
    ],
    descrizione: "Mucca in cotone bianca con macchie rosse, piccola e rotondetta",
    venduto: false,
  },
  {
    id: "28",
    nome: "Elefante Azzurro",
    categoria: "custom",
    immagini: [
      p("IMG_0537.jpg"),
      p("IMG_0538.jpg"),
      p("IMG_0539.jpg"),
      p("IMG_0540.jpg"),
    ],
    descrizione: "Elefantino azzurro in ciniglia, versione personalizzata su commissione",
    venduto: false,
  },
  {
    id: "29",
    nome: "Medusa Rosa",
    categoria: "custom",
    immagini: [p("IMG_6156.jpg"), p("IMG_6157.jpg"), p("IMG_6158.jpg")],
    descrizione: "Medusa rosa con tentacoli lilla in cotone, versione su commissione",
    venduto: false,
  },
  {
    id: "32",
    nome: "Cosmo la Balena",
    categoria: "animali",
    immagini: [p("IMG_0068.jpg"), p("IMG_0069.jpg")],
    descrizione: "Balena in cotone blu notte, piccola e morbidissima",
    venduto: false,
  },
  {
    id: "33",
    nome: "Filippa la Tartaruga",
    categoria: "animali",
    immagini: [p("IMG_0041.jpg"), p("IMG_2851.jpg"), p("IMG_2852.jpg")],
    descrizione: "Tartaruga in ciniglia verde salvia con guscio bordeaux, grande e soffice",
    venduto: false,
  },
  {
    id: "34",
    nome: "Margherita la Mucca",
    categoria: "animali",
    immagini: [p("IMG_1730.jpg"), p("IMG_1731.jpg"), p("IMG_1732.jpg"), p("IMG_1733.jpg")],
    descrizione: "Mucca in cotone bianca con macchie rosse, piccola e rotondetta",
    venduto: false,
  },
  {
    id: "35",
    nome: "Anita l'Ananas",
    categoria: "personaggi",
    immagini: [
      p("IMG_6173.jpg"),
      p("IMG_6174.jpg"),
      p("IMG_6175.jpg"),
      p("IMG_6176.jpg"),
    ],
    descrizione: "Ananas amigurumi in cotone giallo senape con ciuffo verde oliva",
    venduto: false,
  },
  {
    id: "37",
    nome: "Cactino e Cactina",
    categoria: "personaggi",
    immagini: [p("IMG_9007.jpg")],
    descrizione: "Coppia di cactus amigurumi con faccine tenere, in un cestino di cotone beige",
    venduto: false,
  },
  {
    id: "44",
    nome: "Tullio il Tulipano",
    categoria: "personaggi",
    immagini: [p("IMG_9536.jpg"), p("IMG_9537.jpg")],
    descrizione: "Tulipano portachiavi in cotone rosso con stelo verde",
    venduto: false,
  },
  {
    id: "31",
    nome: "Ciro il Cammello",
    categoria: "animali",
    immagini: [p("IMG_2663.jpg"), p("IMG_2664.jpg"), p("IMG_2665.jpg")],
    descrizione: "Cammello in ciniglia beige con due gobbe, morbido e dettagliato",
    venduto: false,
  },
];
