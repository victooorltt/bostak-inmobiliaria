'use client';

import React, { useState, useMemo } from 'react';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import { Bed, Bath, Ruler, Phone, Mail, Search, ChevronDown, RotateCcw } from 'lucide-react';

interface Property {
  id: string;
  type: string;
  city: string;
  zone: string;
  zoneDisplay: string;
  state: string;
  price: number;
  priceDisplay: string;
  title: string;
  rooms: number;
  baths: number;
  size: number;
  category: 'Venta' | 'Alquiler';
  image: string;
}

const PROPERTIES: Property[] = [
  {
    id: 'inmueble-1',
    type: 'Despacho',
    city: 'Bilbao',
    zone: 'Abando',
    zoneDisplay: 'Abando, Bilbao',
    state: 'Buen estado',
    price: 325,
    priceDisplay: '325 €',
    title: 'Se alquila oficina junto a la Plaza Moyua. Zonas comunes y aseos compa...',
    rooms: 0,
    baths: 2,
    size: 13,
    category: 'Alquiler',
    image: '/images/properties/inmueble-1.webp',
  },
  {
    id: 'inmueble-2',
    type: 'Piso',
    city: 'Bilbao',
    zone: 'Zurbaran - Arabella',
    zoneDisplay: 'Zurbaran - Arabella, Bilbao',
    state: 'Muy buen estado',
    price: 250000,
    priceDisplay: '250.000 €',
    title: 'Piso con ascensor para entrar a vivir en Zurbaranbarri',
    rooms: 2,
    baths: 1,
    size: 68,
    category: 'Venta',
    image: '/images/properties/inmueble-2.webp',
  },
  {
    id: 'inmueble-3',
    type: 'Piso',
    city: 'Bilbao',
    zone: 'Casco Viejo',
    zoneDisplay: 'Casco Viejo, Bilbao',
    state: 'Buen estado',
    price: 175000,
    priceDisplay: '175.000 €',
    title: 'Piso en venta en Casco Viejo, zona Siete Calles, balcón',
    rooms: 3,
    baths: 1,
    size: 58,
    category: 'Venta',
    image: '/images/properties/inmueble-3.webp',
  },
  {
    id: 'inmueble-4',
    type: 'Bar',
    city: 'Bilbao',
    zone: 'Casco Viejo',
    zoneDisplay: 'Casco Viejo, Bilbao',
    state: 'Buen estado',
    price: 540000,
    priceDisplay: '540.000 €',
    title: 'Local de hostelería en venta en Casco Viejo',
    rooms: 0,
    baths: 2,
    size: 174,
    category: 'Venta',
    image: '/images/properties/inmueble-4.webp',
  },
  {
    id: 'inmueble-5',
    type: 'Casa',
    city: 'Gamiz Fika',
    zone: 'Ergoien',
    zoneDisplay: 'Ergoien, Gamiz Fika',
    state: 'Muy buen estado',
    price: 895000,
    priceDisplay: '895.000 €',
    title: 'Casa independiente en Gamiz',
    rooms: 5,
    baths: 4,
    size: 375,
    category: 'Venta',
    image: '/images/properties/inmueble-5.webp',
  },
  {
    id: 'inmueble-6',
    type: 'Piso (Duplex)',
    city: 'Bilbao',
    zone: 'Casco Viejo',
    zoneDisplay: 'Casco Viejo, Bilbao',
    state: 'Recién reformado',
    price: 450000,
    priceDisplay: '450.000 €',
    title: 'Duplex en venta en Casco Viejo, Zona Bidebarrieta. 7 balcones',
    rooms: 2,
    baths: 2,
    size: 172,
    category: 'Venta',
    image: '/images/properties/inmueble-6.webp',
  },
  {
    id: 'inmueble-7',
    type: 'Piso',
    city: 'Bilbao',
    zone: 'Santutxu',
    zoneDisplay: 'Santutxu, Bilbao',
    state: 'Reforma Integral',
    price: 395000,
    priceDisplay: '395.000 €',
    title: 'Piso totalmente reformado en Karmelo',
    rooms: 2,
    baths: 2,
    size: 65,
    category: 'Venta',
    image: '/images/properties/inmueble-7.webp',
  },
  {
    id: 'inmueble-8',
    type: 'Garaje',
    city: 'Bilbao',
    zone: 'Zurbaran - Arabella',
    zoneDisplay: 'Zurbaran - Arabella, Bilbao',
    state: 'Sin especificar',
    price: 40000,
    priceDisplay: '40.000 €',
    title: 'Parcela de garaje con trastero en Begoña',
    rooms: 0,
    baths: 0,
    size: 10,
    category: 'Venta',
    image: '/images/properties/inmueble-8.webp',
  },
  {
    id: 'inmueble-9',
    type: 'Local',
    city: 'Bilbao',
    zone: 'San Francisco',
    zoneDisplay: 'San Francisco, Bilbao',
    state: 'Recién reformado',
    price: 950,
    priceDisplay: '950 €',
    title: 'Local en alquiler en Bilbao La Vieja, zona General Castillo',
    rooms: 0,
    baths: 2,
    size: 106,
    category: 'Alquiler',
    image: '/images/properties/inmueble-9.webp',
  },
];

interface FilterState {
  city: string;
  zone: string;
  type: string;
  category: string;
  maxPrice: number;
  minSize: string;
  maxSize: string;
  rooms: string;
  baths: string;
}

const INITIAL_FILTERS: FilterState = {
  city: 'Todas',
  zone: 'Todas las zonas',
  type: 'Todos',
  category: 'Todas',
  maxPrice: 1000000,
  minSize: '',
  maxSize: '',
  rooms: 'Todas',
  baths: 'Todos',
};

export default function InmueblesPage() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((property) => {
      // Ciudad
      if (filters.city !== 'Todas' && property.city !== filters.city) {
        return false;
      }

      // Zona
      if (filters.zone !== 'Todas las zonas' && property.zone !== filters.zone) {
        return false;
      }

      // Tipo
      if (filters.type !== 'Todos') {
        if (filters.type === 'Piso') {
          if (!property.type.startsWith('Piso')) {
            return false;
          }
        } else if (property.type !== filters.type) {
          return false;
        }
      }

      // Categoría
      if (filters.category !== 'Todas' && property.category !== filters.category) {
        return false;
      }

      // Rango de precio
      if (property.price > filters.maxPrice) {
        return false;
      }

      // Tamaño mínimo (m²)
      if (filters.minSize !== '' && property.size < Number(filters.minSize)) {
        return false;
      }

      // Tamaño máximo (m²)
      if (filters.maxSize !== '' && property.size > Number(filters.maxSize)) {
        return false;
      }

      // Nº habitaciones (0, 1, 2, 3, 4+)
      if (filters.rooms !== 'Todas') {
        if (filters.rooms === '4+') {
          if (property.rooms < 4) return false;
        } else {
          if (property.rooms !== Number(filters.rooms)) return false;
        }
      }

      // Nº baños (0, 1, 2, 3, 4+)
      if (filters.baths !== 'Todos') {
        if (filters.baths === '4+') {
          if (property.baths < 4) return false;
        } else {
          if (property.baths !== Number(filters.baths)) return false;
        }
      }

      return true;
    });
  }, [filters]);

  const displayedProperties = useMemo(() => {
    return filteredProperties.slice(0, visibleCount);
  }, [filteredProperties, visibleCount]);

  const hasMore = visibleCount < filteredProperties.length;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById('propiedades-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setFilters(INITIAL_FILTERS);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Section 1: Hero / Header (Full-width background photo, 2 levels) */}
      <PageHero
        title={
          <>
            Encuentra tu hogar <span className="text-[#238580]">a primera vista</span>
          </>
        }
        subtitle="Venta y alquiler de inmuebles seleccionados en Bilbao y Bizkaia."
        imageSrc="/images/entrada.webp"
        imageAlt="Bostak Inmobiliaria"
        imagePosition="object-center"
        minHeight="min-h-[460px] lg:min-h-[520px]"
      />

      {/* Filter and Properties Section */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* Section 2: Filter bar */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <form onSubmit={handleSearch}>
              {/* Primary row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
                {/* Ciudad */}
                <div>
                  <label
                    htmlFor="ciudad"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5"
                  >
                    Ciudad
                  </label>
                  <select
                    id="ciudad"
                    value={filters.city}
                    onChange={(e) => {
                      setFilters({ ...filters, city: e.target.value });
                      setVisibleCount(6);
                    }}
                    className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 focus:border-[#218580] focus:outline-none focus:ring-1 focus:ring-[#218580] cursor-pointer"
                  >
                    <option value="Todas">Todas</option>
                    <option value="Bilbao">Bilbao</option>
                    <option value="Gamiz Fika">Gamiz Fika</option>
                  </select>
                </div>

                {/* Zona */}
                <div>
                  <label
                    htmlFor="zona"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5"
                  >
                    Zona
                  </label>
                  <select
                    id="zona"
                    value={filters.zone}
                    onChange={(e) => {
                      setFilters({ ...filters, zone: e.target.value });
                      setVisibleCount(6);
                    }}
                    className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 focus:border-[#218580] focus:outline-none focus:ring-1 focus:ring-[#218580] cursor-pointer"
                  >
                    <option value="Todas las zonas">Todas las zonas</option>
                    <option value="Abando">Abando</option>
                    <option value="Zurbaran - Arabella">Zurbaran - Arabella</option>
                    <option value="Casco Viejo">Casco Viejo</option>
                    <option value="Santutxu">Santutxu</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="Ergoien">Ergoien</option>
                  </select>
                </div>

                {/* Tipo */}
                <div>
                  <label
                    htmlFor="tipo"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5"
                  >
                    Tipo
                  </label>
                  <select
                    id="tipo"
                    value={filters.type}
                    onChange={(e) => {
                      setFilters({ ...filters, type: e.target.value });
                      setVisibleCount(6);
                    }}
                    className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 focus:border-[#218580] focus:outline-none focus:ring-1 focus:ring-[#218580] cursor-pointer"
                  >
                    <option value="Todos">Todos</option>
                    <option value="Piso">Piso</option>
                    <option value="Despacho">Despacho</option>
                    <option value="Bar">Bar</option>
                    <option value="Casa">Casa</option>
                    <option value="Garaje">Garaje</option>
                    <option value="Local">Local</option>
                  </select>
                </div>

                {/* Categoría */}
                <div>
                  <label
                    htmlFor="categoria"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5"
                  >
                    Categoría
                  </label>
                  <select
                    id="categoria"
                    value={filters.category}
                    onChange={(e) => {
                      setFilters({ ...filters, category: e.target.value });
                      setVisibleCount(6);
                    }}
                    className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 focus:border-[#218580] focus:outline-none focus:ring-1 focus:ring-[#218580] cursor-pointer"
                  >
                    <option value="Todas">Todas</option>
                    <option value="Venta">Venta</option>
                    <option value="Alquiler">Alquiler</option>
                  </select>
                </div>

                {/* Rango de precio */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label
                      htmlFor="precio"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-600"
                    >
                      Precio máx.
                    </label>
                    <span className="text-xs font-semibold text-zinc-900">
                      {filters.maxPrice >= 1000000
                        ? '1.000.000 €'
                        : `${filters.maxPrice.toLocaleString('es-ES')} €`}
                    </span>
                  </div>
                  <div className="h-11 flex items-center px-1">
                    <input
                      type="range"
                      id="precio"
                      name="precio"
                      min="0"
                      max="1000000"
                      step="10000"
                      value={filters.maxPrice}
                      onChange={(e) => {
                        setFilters({ ...filters, maxPrice: Number(e.target.value) });
                        setVisibleCount(6);
                      }}
                      className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#218580]"
                      aria-label="Rango de precio (0 € a 1.000.000 €)"
                    />
                  </div>
                </div>

                {/* Buscar button */}
                <div>
                  <button
                    type="submit"
                    className="w-full h-11 bg-[#218580] text-white hover:bg-[#1a6b67] font-medium text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Search className="h-4 w-4" />
                    <span>Buscar</span>
                  </button>
                </div>
              </div>

              {/* Secondary row: Toggle más filtros & Reset button */}
              <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setShowMoreFilters(!showMoreFilters)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
                >
                  <span>más filtros</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      showMoreFilters ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Restablecer filtros</span>
                </button>
              </div>

              {/* Expandable "más filtros" section */}
              {showMoreFilters && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 mt-4 border-t border-zinc-100">
                  {/* Tamaño mínimo (m²) */}
                  <div>
                    <label
                      htmlFor="minSize"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5"
                    >
                      Tamaño mínimo (m²)
                    </label>
                    <input
                      type="number"
                      id="minSize"
                      min="0"
                      placeholder="0"
                      value={filters.minSize}
                      onChange={(e) => {
                        setFilters({ ...filters, minSize: e.target.value });
                        setVisibleCount(6);
                      }}
                      className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 focus:border-[#218580] focus:outline-none focus:ring-1 focus:ring-[#218580]"
                    />
                  </div>

                  {/* Tamaño máximo (m²) */}
                  <div>
                    <label
                      htmlFor="maxSize"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5"
                    >
                      Tamaño máximo (m²)
                    </label>
                    <input
                      type="number"
                      id="maxSize"
                      min="0"
                      placeholder="500"
                      value={filters.maxSize}
                      onChange={(e) => {
                        setFilters({ ...filters, maxSize: e.target.value });
                        setVisibleCount(6);
                      }}
                      className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 focus:border-[#218580] focus:outline-none focus:ring-1 focus:ring-[#218580]"
                    />
                  </div>

                  {/* Nº habitaciones */}
                  <div>
                    <label
                      htmlFor="habitaciones"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5"
                    >
                      Nº habitaciones
                    </label>
                    <select
                      id="habitaciones"
                      value={filters.rooms}
                      onChange={(e) => {
                        setFilters({ ...filters, rooms: e.target.value });
                        setVisibleCount(6);
                      }}
                      className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 focus:border-[#218580] focus:outline-none focus:ring-1 focus:ring-[#218580] cursor-pointer"
                    >
                      <option value="Todas">Todas</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>

                  {/* Nº baños */}
                  <div>
                    <label
                      htmlFor="banos"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5"
                    >
                      Nº baños
                    </label>
                    <select
                      id="banos"
                      value={filters.baths}
                      onChange={(e) => {
                        setFilters({ ...filters, baths: e.target.value });
                        setVisibleCount(6);
                      }}
                      className="w-full h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 focus:border-[#218580] focus:outline-none focus:ring-1 focus:ring-[#218580] cursor-pointer"
                    >
                      <option value="Todos">Todos</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Section 3: Properties grid */}
          <div id="propiedades-grid" className="mt-12">
            {filteredProperties.length === 0 ? (
              <div className="py-16 text-center text-zinc-500">
                <p className="text-base font-medium">
                  No se han encontrado inmuebles con los filtros seleccionados.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 text-sm text-[#218580] hover:underline font-medium cursor-pointer"
                >
                  Restablecer filtros
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayedProperties.map((property) => (
                    <article
                      key={property.id}
                      className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow hover:shadow-md"
                    >
                      {/* Photo top aspect-[4/3] rounded-t-2xl */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-zinc-100">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex flex-1 flex-col p-5">
                        {/* Price bold */}
                        <div className="text-2xl font-bold tracking-tight text-zinc-950">
                          {property.priceDisplay}
                        </div>

                        {/* Title 1 line */}
                        <h3
                          className="mt-1.5 text-base font-semibold text-zinc-900 truncate"
                          title={property.title}
                        >
                          {property.title}
                        </h3>

                        {/* Location and state text */}
                        <p className="mt-1 text-sm text-zinc-600 truncate">
                          {property.zoneDisplay} · {property.state}
                        </p>

                        {/* Meta row with Lucide icons (Bed, Bath, Ruler) */}
                        <div className="mt-4 flex items-center gap-4 border-t border-zinc-100 pt-3 text-xs text-zinc-600">
                          <div className="flex items-center gap-1.5">
                            <Bed className="h-4 w-4 text-zinc-400" />
                            <span>
                              {property.rooms} {property.rooms === 1 ? 'hab.' : 'habs.'}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Bath className="h-4 w-4 text-zinc-400" />
                            <span>
                              {property.baths} {property.baths === 1 ? 'baño' : 'baños'}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Ruler className="h-4 w-4 text-zinc-400" />
                            <span>{property.size} m²</span>
                          </div>
                        </div>

                        {/* Action buttons: Llamar and Email as quiet outline buttons */}
                        <div className="mt-5 grid grid-cols-2 gap-2.5 pt-1">
                          <a
                            href="tel:944678528"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                          >
                            <Phone className="h-3.5 w-3.5 text-zinc-500" />
                            <span>Llamar</span>
                          </a>
                          <a
                            href="mailto:gestion@bostakinmobiliaria.com"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                          >
                            <Mail className="h-3.5 w-3.5 text-zinc-500" />
                            <span>Email</span>
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Button "cargar más inmuebles" at bottom */}
                <div className="mt-12 flex justify-center">
                  <button
                    type="button"
                    onClick={handleLoadMore}
                    disabled={!hasMore}
                    className={`inline-flex items-center justify-center rounded-xl border px-8 py-3 text-sm font-medium transition-colors shadow-sm ${
                      hasMore
                        ? 'border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 cursor-pointer'
                        : 'border-zinc-200 bg-zinc-50 text-zinc-400 cursor-not-allowed'
                    }`}
                  >
                    Cargar más inmuebles
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Final Contact CTA */}
      <ContactCTA
        title="¿No encuentras lo que buscas?"
        description="Dinos qué tipo de inmueble necesitas y nuestro equipo en Bilbao lo buscará por ti con cercanía y honestidad."
        buttonText="Pedir búsqueda personalizada"
      />
    </div>
  );
}
