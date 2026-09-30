'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Inicio', href: '/' },
  { name: 'Inmuebles', href: '/inmuebles-venta-alquiler/' },
  { name: 'Nosotros', href: '/conocenos/' },
  { name: 'Oficina técnica', href: '/oficina-tecnica/' },
  { name: 'Contacto', href: '/contacto/' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#238580] border-b border-black/10 shadow-sm">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        {/* Plain Logo in white on #238580 */}
        <Link href="/" className="inline-block flex-shrink-0" aria-label="Bostak Inmobiliaria - Inicio">
          <img
            src="/images/logo.png"
            alt="Bostak Inmobiliaria"
            className="h-8 md:h-9 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors relative py-1 ${
                  active
                    ? 'text-white font-semibold after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-white'
                    : 'text-white/85 hover:text-white font-medium'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Phone Contact */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:944678528"
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/15 hover:bg-white/25 px-4 py-2 rounded-xl transition-all shadow-sm"
          >
            <Phone className="h-4 w-4 text-white" />
            <span>944 67 85 28</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-white/80 focus:outline-none cursor-pointer"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-white/15 bg-[#238580] px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-1.5 transition-colors ${
                    active ? 'text-white font-bold underline underline-offset-4' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-white/15">
            <a
              href="tel:944678528"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2.5 text-base font-medium text-white bg-white/15 px-4 py-2.5 rounded-xl w-full justify-center transition-colors"
            >
              <Phone className="h-4 w-4 text-white" />
              <span>944 67 85 28</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
