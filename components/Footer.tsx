import Link from "next/link";
import { Instagram } from "lucide-react";
import { config } from "@/data/config";

export default function Footer() {
  return (
    <footer className="bg-brown text-cream/80 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-cream text-lg mb-2">{config.nome}</h3>
          <p className="text-sm leading-relaxed">{config.tagline}</p>
        </div>

        <div>
          <h4 className="font-semibold text-cream mb-3 text-sm tracking-wide uppercase">Pagine</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/galleria", label: "Galleria" },
              { href: "/commissioni", label: "Commissioni" },
              { href: "/chi-sono", label: "Chi sono" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-rose transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-cream mb-3 text-sm tracking-wide uppercase">Contatti</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${config.commissioni.emailContatto}`} className="hover:text-rose transition-colors">
                {config.commissioni.emailContatto}
              </a>
            </li>
            {config.social.instagram && (
              <li>
                <a
                  href={config.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-rose transition-colors"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 text-center py-4 text-xs text-cream/50">
        &copy; {new Date().getFullYear()} {config.nome} — Tutti i diritti riservati
      </div>
    </footer>
  );
}
