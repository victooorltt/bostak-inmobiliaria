import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Inicio', href: '/' },
  { name: 'Inmuebles', href: '/inmuebles-venta-alquiler/' },
  { name: 'Nosotros', href: '/conocenos/' },
  { name: 'Oficina técnica', href: '/oficina-tecnica/' },
  { name: 'Contacto', href: '/contacto/' },
];

const LEGAL_ITEMS = [
  { name: 'Aviso legal', href: '/aviso-legal/' },
  { name: 'Política de privacidad', href: '/politica-de-privacidad/' },
  { name: 'Política de cookies', href: '/politica-de-cookies/' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-zinc-200 text-zinc-600">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="Bostak Inmobiliaria - Inicio">
              <img src="/images/logo-footer.png" alt="Bostak Inmobiliaria" className="h-8 md:h-9 w-auto" />
            </Link>
            <p className="text-sm font-medium text-zinc-900">
              Confianza de principio a fin
            </p>
            <p className="text-sm text-zinc-600 max-w-sm">
              El servicio inmobiliario que se adapta a tus necesidades.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-950 uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-950 uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-zinc-900">Oficina Begoña</p>
                  <p className="text-zinc-600">Avenida Zumalacárregui 115, Bilbao</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a
                  href="tel:944678528"
                  className="text-zinc-600 hover:text-zinc-950 transition-colors"
                >
                  944 67 85 28
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a
                  href="mailto:gestion@bostakinmobiliaria.com"
                  className="text-zinc-600 hover:text-zinc-950 transition-colors"
                >
                  gestion@bostakinmobiliaria.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Bostak Inmobiliaria. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-6">
            {LEGAL_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-zinc-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
