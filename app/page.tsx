'use client';

import Link from 'next/link';
import {
  Bed,
  Bath,
  Maximize2,
  Star,
  Users,
  Award,
  Laptop,
  ArrowRight,
  CalendarCheck,
  ShieldCheck,
  UserCheck,
  MapPin,
  Home,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react';
import { tokens } from '@/lib/tokens';
import ContactCTA from '@/components/ContactCTA';

const FEATURED_PROPERTIES = [
  {
    id: 'inmueble-2',
    image: '/images/properties/inmueble-2.webp',
    title: 'Piso con ascensor para entrar a vivir en Zurbaranbarri',
    type: 'Piso',
    location: 'Zurbaran - Arabella, Bilbao',
    price: '250.000 €',
    rooms: 2,
    baths: 1,
    size: '68 m²',
  },
  {
    id: 'inmueble-3',
    image: '/images/properties/inmueble-3.webp',
    title: 'Piso en venta en Casco Viejo, zona Siete Calles, balcón',
    type: 'Piso',
    location: 'Casco Viejo, Bilbao',
    price: '175.000 €',
    rooms: 3,
    baths: 1,
    size: '58 m²',
  },
  {
    id: 'inmueble-7',
    image: '/images/properties/inmueble-7.webp',
    title: 'Piso totalmente reformado en Karmelo',
    type: 'Piso',
    location: 'Santutxu, Bilbao',
    price: '395.000 €',
    rooms: 2,
    baths: 2,
    size: '65 m²',
  },
];

const VALUE_PROPOSITIONS = [
  {
    title: 'Compromiso local',
    description:
      '5 bizkainos decidimos crear un estudio inmobiliario familiar e independiente que nos permite trabajar de una forma más humana, más flexible y más digital.',
    icon: Users,
  },
  {
    title: 'Experiencia contrastada',
    description:
      'Con muchos años de experiencia en el sector inmobiliario y avalados por numerosas operaciones inmobiliarias, estamos convencidos de que te alegrarás de confiar en nosotros y habernos elegido.',
    icon: Award,
  },
  {
    title: 'Digitalización',
    description:
      'Creamos y seleccionamos las herramientas tecnológicas más eficientes del mercado inmobiliario para que cada etapa del proceso sea más ágil y profesional.',
    icon: Laptop,
  },
];

const TRUST_COMMITMENTS = [
  {
    icon: CalendarCheck,
    title: 'Tú decides cuándo vender',
    description:
      'Nos adaptamos a tus plazos de venta y ponemos toda la maquinaria en marcha para encontrar a tu comprador.',
  },
  {
    icon: ShieldCheck,
    title: 'Sin costes añadidos',
    description:
      'En nuestro ADN encontrarás transparencia e integridad. Sin sorpresas ni gastos añadidos.',
  },
  {
    icon: UserCheck,
    title: 'Tu agente exclusivo',
    description:
      'Un gestor dedicado de principio a fin para asesorarte en todo el proceso, sea cual sea la casuística de la operación.',
  },
];

const TESTIMONIALS = [
  {
    name: 'TonyK Briceño',
    displayName: 'TonyK Briceño',
    initial: 'T',
    date: '2024-09-18',
    comment:
      'Personal agradable y resolutivo. En todo momento me transmitieron tranquilidad y confianza a pesar de la dificultad con la vivienda... ¡Muy contento con ellos!',
    fullComment:
      'Personal agradable y resolutivo. En todo momento me transmitieron tranquilidad y confianza a pesar de la dificultad con la que, de manera inesperada, me topé con muchos problemas en la vivienda y me los resolvieron todos . Gracias especialmente a Alberto y como para Maite! MUY CONTETO CON ELLOS',
  },
  {
    name: 'AMA YogaPlazaNueva YOGA metro Zurbaranbarri',
    displayName: 'AMA Yoga Bilbao',
    initial: 'A',
    date: '2024-09-18',
    comment:
      'La primera vez que he tratado con una inmobiliaria y ha sido extraordinaria: ha superado todas mis expectativas. Nos han acompañado en todo el proceso... ¡Nos has encontrado el espacio perfecto!',
    fullComment:
      'La primera vez que he tratado con una inmobiliaria y ha sido una muy buena experiencia: el servicio recibido ha sido extraordinario, ha superado todas mis expectativas. Me han acompañado a lo largo de todo el proceso, han atendido todas mis consultas y necesidades. He tenido suerte y los vendedores son personas muy cercanas con las que he podido tratar encantadoramente; si hubiera sido de otra manera el contar con la inmobiliaria bostak me habría dado la confianza necesaria para dar este paso: RESPONDEN. Gracias a Maite por su atenta diligencia, y a todo el equipo. Muchas gracias a Gabriel, ¡nos has encontrado el espacio perfecto para nuestra escuelita de yoga en Bilbao!',
  },
  {
    name: 'Iker',
    displayName: 'Iker',
    initial: 'I',
    date: '2024-06-26',
    comment:
      'Entramos a Bostak buscando asesoramiento con la gestión de un piso en herencia y rápidamente nos solucionaron todas nuestras dudas... Gracias a todo el equipo jurídico.',
    fullComment:
      'Entramos a Bostak buscando asesoramiento con la gestión de un piso en herencia y rápidamente nos solucionaron todas nuestras dudas. Gracias a Maite y a todo el equipo jurídico.',
  },
  {
    name: 'Victor Ortiz',
    displayName: 'Victor Ortiz',
    initial: 'V',
    date: '2024-06-26',
    comment:
      'Acabo de vender un piso en Zurbaranbarri con Gabriel de Bostak y la experiencia no ha podido ser más satisfactoria... Que la persona encargada sea residente en la zona lo facilitó todo.',
    fullComment:
      'Acabo de vender un piso en Zurbaranbarri con Gabriel de inmobiliaria Bostak y la experiencia no ha podido ser más satisfactoria, que la persona encargada de la venta sea residente en la zona lo hizo todo mucho más fácil.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero (Premium Full-Screen Background Photo with centered content & subtle overlay) */}
      <section className="relative overflow-hidden bg-white min-h-[560px] lg:min-h-[640px] flex items-center justify-center border-b border-zinc-200/80">
        {/* Full-width background photo across the entire hero */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/images/hero-inicio.webp"
            alt="Oficina Bostak Inmobiliaria Bilbao"
            className="h-full w-full object-cover object-[75%_center] lg:object-[80%_center]"
            fetchPriority="high"
            loading="eager"
          />
          {/* Subtle translucent white overlay to ensure flawless readability while office & wall logo remain clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 to-white/70" />
        </div>

        {/* Centered content container directly over image */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 lg:py-24 text-center w-full">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-950 leading-[1.12]">
              Bostak Inmobiliaria en Bilbao:{' '}
              <span className="text-[#238580]">Confianza en cada paso</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-zinc-700 leading-relaxed font-normal max-w-2xl mx-auto">
              Compra o vende tu vivienda en Bilbao con asesoramiento cercano y una gestión ágil de principio a fin.
            </p>

            {/* Centered action buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/inmuebles-venta-alquiler/"
                className="inline-flex items-center justify-center gap-2 bg-[#238580] hover:bg-[#1a6b67] text-white font-semibold px-8 py-3.5 text-base rounded-xl shadow-md transition-all hover:shadow-lg w-full sm:w-auto"
              >
                <span>Ver inmuebles</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contacto/"
                className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-800 font-medium px-8 py-3.5 text-base rounded-xl shadow-xs transition-colors w-full sm:w-auto"
              >
                <span>Quiero vender</span>
              </Link>
            </div>
          </div>

          {/* Shortened benefits row centered beneath buttons */}
          <div className="mt-10 pt-6 border-t border-zinc-300/60 max-w-xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 text-xs sm:text-sm font-medium text-zinc-800">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#238580] shrink-0" />
                <span>Bilbao</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Home className="h-4 w-4 text-[#238580] shrink-0" />
                <span>Valoración</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-[#238580] shrink-0" />
                <span>Asesoramiento</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#238580] shrink-0" />
                <span>Gestión</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ahora en venta y alquiler */}
      <section className={`bg-zinc-50 border-b border-zinc-200/80 ${tokens.sectionSpacing}`}>
        <div className={tokens.container}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
                Ahora en venta y alquiler
              </h2>
            </div>
            <Link
              href="/inmuebles-venta-alquiler/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#238580] hover:text-[#1a6b67] transition-colors"
            >
              <span>Ver todos los inmuebles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PROPERTIES.map((property) => (
              <Link
                key={property.id}
                href="/inmuebles-venta-alquiler/"
                className={`group flex flex-col bg-white border border-zinc-200 overflow-hidden hover:border-zinc-300 hover:shadow-md transition-all ${tokens.radius.card}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
                      <span>{property.type}</span>
                      <span>{property.location}</span>
                    </div>
                    <p className="mt-2 text-2xl font-bold tracking-tight text-zinc-950">
                      {property.price}
                    </p>
                    <h3 className="mt-2 text-base font-medium text-zinc-900 group-hover:text-[#238580] transition-colors line-clamp-1">
                      {property.title}
                    </h3>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center gap-4 text-xs text-zinc-600">
                    <span className="inline-flex items-center gap-1.5">
                      <Bed className="h-4 w-4 text-zinc-400" />
                      {property.rooms} hab.
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Bath className="h-4 w-4 text-zinc-400" />
                      {property.baths} {property.baths === 1 ? 'baño' : 'baños'}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Maximize2 className="h-4 w-4 text-zinc-400" />
                      {property.size}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trabajar con Bostak es otra forma de vender */}
      <section className={`bg-white ${tokens.sectionSpacing}`}>
        <div className={tokens.container}>
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
              Trabajar con Bostak es otra forma de vender
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUE_PROPOSITIONS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`bg-zinc-50 border border-zinc-200/80 p-8 ${tokens.radius.card} hover:border-[#238580]/40 transition-colors`}
                >
                  <div className="inline-flex p-3.5 rounded-xl bg-[#eaf4f3] text-[#238580] mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Confianza de principio a fin (REDESIGNED 2-COLUMN SECTION WITH REAL PHOTO, NO AI NUMBERS 01 02 03) */}
      <section className="bg-[#238580] text-white py-16 lg:py-24">
        <div className={tokens.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Real Office/Team Photograph */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20 order-2 lg:order-1">
              <img
                src="/images/dentro.webp"
                alt="Instalaciones de Bostak Inmobiliaria en Bilbao"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Commitments with real Lucide icons (No 01, 02, 03) */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                  Confianza de principio a fin
                </h2>
                <p className="mt-3 text-base sm:text-lg text-emerald-50/90 leading-relaxed">
                  El servicio inmobiliario que se adapta a tus necesidades.
                </p>
              </div>

              <div className="space-y-6">
                {TRUST_COMMITMENTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white border border-white/20 mt-0.5">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-emerald-50/90 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  href="/contacto/"
                  className="inline-flex items-center justify-center bg-white text-[#238580] hover:bg-zinc-100 font-semibold px-8 py-3.5 text-base rounded-xl shadow-lg transition-all hover:shadow-xl cursor-pointer"
                >
                  Quiero vender
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Nuestros clientes opinan */}
      <section className={`bg-white ${tokens.sectionSpacing}`}>
        <div className={tokens.container}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
              Nuestros clientes opinan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="group bg-white border border-zinc-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-[#238580]/50 hover:shadow-md transition-all h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1" aria-label="5 de 5 estrellas">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-zinc-500 bg-zinc-100 border border-zinc-200/70 px-2 py-0.5 rounded-full flex items-center gap-1.5">
                      <svg className="h-3 w-3" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google
                    </span>
                  </div>
                  <p
                    className="text-sm text-zinc-600 leading-relaxed italic"
                    title={testimonial.fullComment}
                  >
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#eaf4f3] text-[#238580] font-semibold text-xs flex items-center justify-center shrink-0 border border-[#238580]/20">
                    {testimonial.initial}
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-sm font-semibold text-zinc-900 group-hover:text-[#238580] transition-colors truncate"
                      title={testimonial.name}
                    >
                      {testimonial.displayName}
                    </p>
                    <p className="text-xs text-zinc-400">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Contact CTA */}
      <ContactCTA />
    </div>
  );
}
