"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { config } from "@/data/config";

const links = [
  { href: "/", label: "Home" },
  { href: "/galleria", label: "Galleria" },
  { href: "/commissioni", label: "Commissioni" },
  { href: "/chi-sono", label: "Chi sono" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-rose/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-serif text-xl font-semibold text-brown hover:text-rose-dark transition-colors">
          {config.nome}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-brown-light hover:text-rose-dark font-medium transition-colors text-sm tracking-wide"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/commissioni"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-rose text-white text-sm font-medium hover:bg-rose-dark transition-colors"
        >
          Richiedi il tuo
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brown p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-rose/20 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-2 text-brown-light hover:text-rose-dark font-medium transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/commissioni"
                className="inline-flex items-center px-4 py-2 rounded-full bg-rose text-white text-sm font-medium hover:bg-rose-dark transition-colors"
                onClick={() => setOpen(false)}
              >
                Richiedi il tuo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
