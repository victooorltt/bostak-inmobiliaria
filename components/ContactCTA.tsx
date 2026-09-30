import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { tokens } from '@/lib/tokens';

interface ContactCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function ContactCTA({
  title = '¿Hablamos de tu próximo paso inmobiliario?',
  description = 'Tanto si buscas vender, comprar o alquilar, estamos a tu disposición para asesorarte de principio a fin con cercanía y total transparencia.',
  buttonText = 'Contactar con nosotros',
}: ContactCTAProps) {
  return (
    <section className="bg-[#dcece9] border-y border-[#c0ddd8] py-16 lg:py-20">
      <div className={tokens.container}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-950">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-700 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto/"
              className="inline-flex items-center justify-center gap-2 bg-[#238580] hover:bg-[#1a6b67] text-white font-semibold px-8 py-3.5 text-base rounded-xl shadow-sm transition-colors w-full sm:w-auto cursor-pointer"
            >
              <span>{buttonText}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:944678528"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#c4dcda] hover:border-[#238580] text-zinc-900 font-medium px-6 py-3.5 text-base rounded-xl transition-colors w-full sm:w-auto shadow-xs"
            >
              <Phone className="h-4 w-4 text-[#238580]" />
              <span>944 67 85 28</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
