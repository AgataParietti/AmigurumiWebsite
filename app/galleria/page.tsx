import type { Metadata } from "next";
import GalleriaGrid from "@/components/GalleriaGrid";

export const metadata: Metadata = {
  title: "Galleria",
  description: "Tutti i miei amigurumi fatti a mano: animali, personaggi, stagionali e pezzi custom.",
};

export default function GalleriaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-4xl text-brown">Galleria</h1>
        <p className="text-brown-light mt-2 text-lg">
          Tutti i miei lavori — filtra per categoria o scorri per ispirarti
        </p>
      </div>
      <GalleriaGrid />
    </div>
  );
}
