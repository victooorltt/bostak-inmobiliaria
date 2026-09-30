'use client';

import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { tokens } from '@/lib/tokens';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white">
      {/* Hero (Full-width background photo, 2 levels) */}
      <PageHero
        title={
          <>
            Contacta con <span className="text-[#238580]">Bostak</span>
          </>
        }
        subtitle="Estamos a tu disposición en Bilbao para asesorarte en cualquier trámite inmobiliario o consulta técnica."
        imageSrc="/images/dentro.webp"
        imageAlt="Oficina de Bostak Inmobiliaria"
        imagePosition="object-center"
        minHeight="min-h-[460px] lg:min-h-[520px]"
      />

      {/* 2-Column Content Layout */}
      <section className="py-14 lg:py-20">
        <div className={tokens.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: Clean Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center sm:p-10 shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-subtle text-accent mb-4">
                    <CheckCircle2 className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="text-xl font-semibold text-zinc-950">
                    Mensaje enviado correctamente
                  </h2>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                    Gracias por ponerte en contacto con nosotros. Responderemos a tu consulta a la mayor brevedad.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        nombre: '',
                        email: '',
                        telefono: '',
                        mensaje: '',
                      });
                    }}
                    className="mt-6 inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50 transition-colors cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm">
                  <h2 className="text-xl font-semibold text-zinc-950 mb-6">
                    Envíanos tu consulta
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-medium text-zinc-900 mb-2"
                      >
                        Nombre completo <span className="text-accent">*</span>
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre y apellidos"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-zinc-900 mb-2"
                      >
                        Correo electrónico <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@correo.com"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm font-medium text-zinc-900 mb-2"
                      >
                        Teléfono
                      </label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Ej. 944 67 85 28"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mensaje"
                        className="block text-sm font-medium text-zinc-900 mb-2"
                      >
                        Mensaje <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        rows={5}
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="¿En qué podemos ayudarte?"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center rounded-xl bg-accent hover:bg-accent-hover text-white px-6 py-3.5 text-base font-semibold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Right Column: Real Contact Details Card + Map */}
            <div className="space-y-6">
              {/* Brand Teal #218580 Contact Card */}
              <div className="rounded-2xl bg-[#218580] text-white p-6 sm:p-8 space-y-6 shadow-md">
                <h3 className="text-xl font-semibold text-white border-b border-white/20 pb-4">
                  Datos de contacto
                </h3>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Oficina Begoña</h4>
                    <p className="mt-1 text-sm text-emerald-50/90">Avenida Zumalacárregui 115, Bilbao</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Teléfono</h4>
                    <p className="mt-1 text-sm text-emerald-50/90">
                      <a
                        href="tel:944678528"
                        className="hover:underline transition-all font-medium"
                      >
                        944 67 85 28
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Correo electrónico</h4>
                    <p className="mt-1 text-sm text-emerald-50/90">
                      <a
                        href="mailto:gestion@bostakinmobiliaria.com"
                        className="hover:underline transition-all font-medium"
                      >
                        gestion@bostakinmobiliaria.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 aspect-[16/10] w-full shadow-sm">
                <iframe
                  title="Mapa de ubicación de Bostak Inmobiliaria"
                  src="https://maps.google.com/maps?q=Avenida+Zumalac%C3%A1rregui+115%2C+Bilbao&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
