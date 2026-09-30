import type { Metadata } from 'next';
import { tokens } from '@/lib/tokens';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Conócenos | Bostak Inmobiliaria',
  description:
    'Bostak es un proyecto que nace desde la inquietud, el inconformismo y la convicción de 5 personas cuya mentalidad innovadora y transformadora han dado forma a un estudio inmobiliario con un enfoque humano a la par que digital.',
};

const teamMembers = [
  {
    name: 'Gabriel Arjona',
    image: '/images/team/gabriel.webp',
  },
  {
    name: 'Alberto Quintas',
    image: '/images/team/alberto.webp',
  },
  {
    name: 'Maitane de Diego',
    image: '/images/team/maitane.webp',
  },
  {
    name: 'Maite Etxaburu',
    image: '/images/team/maite.webp',
  },
  {
    name: 'Arkaitz Lopez',
    image: '/images/team/arkaitz.webp',
  },
];

export default function ConocenosPage() {
  return (
    <>
      {/* Section 1: Hero (TALL photo height, balanced text) */}
      <PageHero
        title={
          <>
            Conócenos: <span className="text-[#238580]">Bostak</span>
          </>
        }
        subtitle="Un enfoque humano a la par que digital"
        description="Bostak nace desde la inquietud, el inconformismo y la convicción de 5 profesionales de Bilbao para transformar el sector inmobiliario con cercanía, honestidad y tecnología."
        imageSrc="/images/equipo-recepcion.webp"
        imageAlt="Equipo Bostak Inmobiliaria"
        imagePosition="object-center"
        minHeight="min-h-[580px] lg:min-h-[660px]"
      />

      {/* Section 2: Narrative / Vision (Brand Teal #218580 Section) */}
      <section className="bg-[#218580] text-white py-16 lg:py-24">
        <div className={tokens.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-snug">
                Gabriel, Alberto, Maitane y Maite tenían muy clara su visión.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-emerald-50/95 leading-relaxed">
                <p>
                  Bostak es un proyecto que nace desde la inquietud, el inconformismo y la convicción de 5 personas cuya mentalidad innovadora y transformadora han dado forma a un estudio inmobiliario con un enfoque humano a la par que digital.
                </p>
                <p>
                  Las cosas se podían hacer de otro modo y les unía la pasión por ofrecer un gran servicio y asesorar siempre al cliente desde la transparencia y honestidad.
                </p>
                <p>
                  Nuestro único objetivo es que cuando vendas, compres o alquiles un inmueble sientas que te acompañamos a lo largo del proceso de principio a fin.
                </p>
                <p>
                  Ponemos a tu servicio nuestro capital humano, nuestra experiencia y las herramientas tecnológicas necesarias para que tu experiencia y el resultado final superen tus mejores expectativas.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-2xl">
              <img
                src="/images/oficina.webp"
                alt="Oficina Bostak Inmobiliaria"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Team grid */}
      <section className={`bg-white ${tokens.sectionSpacing}`}>
        <div className={tokens.container}>
          <div className="max-w-2xl mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
              Nuestro equipo
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group flex flex-col">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100 mb-3 sm:mb-4 border border-zinc-200 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <p className="text-base sm:text-lg font-semibold text-zinc-950 group-hover:text-[#238580] transition-colors">
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Contact CTA */}
      <ContactCTA
        title="¿Quieres conocernos en persona?"
        description="Pásate por nuestra oficina en Avenida Zumalacárregui 115 en Bilbao o escríbenos para cualquier consulta."
        buttonText="Contactar con el equipo"
      />
    </>
  );
}
