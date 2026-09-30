import type { Metadata } from 'next';
import Link from 'next/link';
import { Store, ArrowLeftRight, Hotel, HardHat } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Oficina Técnica de Urbanismo y Gestión de Licencias | Bostak Inmobiliaria',
  description:
    'Ofrecemos servicios especializados en urbanismo y tramitación administrativa, orientados a facilitar el desarrollo de proyectos inmobiliarios, comerciales y turísticos.',
};

const services = [
  {
    icon: Store,
    title: 'Licencias de apertura y actividad',
    description:
      'Realizamos un completo asesoramiento técnico y administrativo para la obtención rápida y eficiente de licencias de apertura y actividad para todo tipo de negocios e instalaciones.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Cambios de uso',
    description:
      'Gestionamos integralmente los procedimientos necesarios para realizar cambios de uso en inmuebles, aportando estudios de viabilidad detallados y supervisando el cumplimiento riguroso de todas las normativas urbanísticas y sectoriales.',
  },
  {
    icon: Hotel,
    title: 'Licencias de uso turístico',
    description:
      'Brindamos asesoramiento especializado para obtener licencias de uso turístico en locales comerciales y viviendas destinadas a alquiler vacacional o alojamiento turístico, cubriendo todos los aspectos necesarios.',
  },
  {
    icon: HardHat,
    title: 'Licencias urbanísticas',
    description:
      'Ofrecemos soporte integral en la tramitación de licencias de obras, legalizaciones, y otros procedimientos relacionados con el desarrollo urbano, intervenciones en inmuebles y adecuación de espacios.',
  },
];

export default function OficinaTecnicaPage() {
  return (
    <div>
      {/* Section 1: Hero (Full-width background photo, 2 levels) */}
      <PageHero
        title={
          <>
            Oficina Técnica de{' '}
            <span className="text-[#238580]">Urbanismo y Licencias</span>
          </>
        }
        subtitle="Gestión integral y tramitación administrativa especializada en Bilbao y Bizkaia."
        imageSrc="/images/oficina-6.webp"
        imageAlt="Oficina Técnica de Urbanismo y Gestión de Licencias"
        imagePosition="object-center"
        minHeight="min-h-[480px] lg:min-h-[540px]"
      >
        <Link
          href="/contacto/"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#238580] text-white font-semibold hover:bg-[#1a6b67] transition-all shadow-md hover:shadow-lg cursor-pointer"
        >
          Contáctanos
        </Link>
      </PageHero>

      {/* Section 2: Overview / Approach */}
      <section className={`border-b border-zinc-200/80 bg-zinc-50/50 ${tokens.sectionSpacing}`}>
        <div className={`${tokens.container} grid gap-10 lg:grid-cols-2 items-center`}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 shadow-sm border border-zinc-200 order-2 lg:order-1">
            <img
              src="/images/oficina.webp"
              alt="Oficina técnica Bostak Inmobiliaria"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-medium">
              En nuestra Oficina Técnica ofrecemos servicios especializados en urbanismo y tramitación administrativa, orientados a facilitar el desarrollo de proyectos inmobiliarios, comerciales y turísticos con plena garantía legal y técnica.
            </p>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              Gracias a nuestro equipo multidisciplinar, brindamos soluciones completas adaptadas a cada cliente, gestionando desde la planificación inicial hasta la obtención definitiva de todos los permisos y autorizaciones necesarias.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Services Grid */}
      <section className={`bg-white ${tokens.sectionSpacing}`}>
        <div className={tokens.container}>
          <div className="max-w-2xl mb-10 lg:mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
              Amplia experiencia en la gestión integral de:
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="p-8 rounded-2xl border border-zinc-200/80 bg-white shadow-sm hover:border-accent/40 transition-colors"
                >
                  <div className="inline-flex items-center justify-center bg-accent-subtle text-accent p-3.5 rounded-xl mb-5">
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-950 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Closing reassurance & CTA (BRAND TEAL #218580 SECTION) */}
      <section className="bg-[#218580] text-white py-16 lg:py-24">
        <div className={tokens.container}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-white leading-relaxed font-normal">
              Ofrecemos un acompañamiento riguroso y personalizado en cada fase del proceso, desde el análisis técnico hasta la resolución administrativa, con el objetivo de aportar seguridad, agilidad y transparencia a nuestros clientes.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/contacto/"
                className="inline-flex items-center justify-center bg-white text-[#218580] hover:bg-zinc-100 font-semibold px-9 py-3.5 text-base rounded-xl shadow-lg transition-all hover:shadow-xl cursor-pointer"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
