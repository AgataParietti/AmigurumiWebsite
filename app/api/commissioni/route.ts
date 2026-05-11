import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  soggetto: z.string().min(3),
  dimensione: z.enum(["mini", "piccolo", "medio", "grande"]),
  colori: z.string().min(2),
  budget: z.enum(["10-20", "20-40", "40-60", "60+", "aperto"]),
  dataConsegna: z.string().optional(),
  note: z.string().optional(),
  comeHaiTrovato: z.string().optional(),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Richiesta non valida" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Dati non validi", details: parsed.error.flatten() }, { status: 422 });
  }

  const data = parsed.data;

  // Invio email tramite Resend
  const apiKey = process.env.RESEND_API_KEY;
  const emailDestinatario = process.env.EMAIL_DESTINATARIO ?? process.env.NEXT_PUBLIC_EMAIL_DESTINATARIO;

  if (apiKey && emailDestinatario) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: "commissioni@tuodominio.com",
        to: emailDestinatario,
        subject: `Nuova commissione da ${data.nome}`,
        html: `
          <h2>Nuova richiesta di commissione</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Nome</td><td style="padding:8px;border:1px solid #eee">${data.nome}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${data.email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Soggetto</td><td style="padding:8px;border:1px solid #eee">${data.soggetto}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Dimensione</td><td style="padding:8px;border:1px solid #eee">${data.dimensione}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Colori</td><td style="padding:8px;border:1px solid #eee">${data.colori}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Budget</td><td style="padding:8px;border:1px solid #eee">${data.budget}</td></tr>
            ${data.dataConsegna ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Data desiderata</td><td style="padding:8px;border:1px solid #eee">${data.dataConsegna}</td></tr>` : ""}
            ${data.note ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Note</td><td style="padding:8px;border:1px solid #eee">${data.note}</td></tr>` : ""}
            ${data.comeHaiTrovato ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Come ha trovato il sito</td><td style="padding:8px;border:1px solid #eee">${data.comeHaiTrovato}</td></tr>` : ""}
          </table>
        `,
      });
    } catch (err) {
      console.error("Errore invio email:", err);
      // Non blocchiamo la risposta anche se l'email fallisce
    }
  }

  return NextResponse.json({ success: true });
}
