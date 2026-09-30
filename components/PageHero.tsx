import React from 'react';

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
  className?: string;
  imagePosition?: string;
  imageOpacity?: string;
  variant?: 'split' | 'centered';
  minHeight?: string;
}

export default function PageHero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  children,
  className = '',
  imagePosition = 'object-center',
  imageOpacity = 'opacity-100',
  variant = 'split',
  minHeight = 'min-h-[500px] lg:min-h-[580px]',
}: PageHeroProps) {
  if (variant === 'centered') {
    return (
      <section className={`relative overflow-hidden bg-white min-h-[460px] lg:min-h-[520px] flex items-center justify-center border-b border-zinc-200/80 ${className}`}>
        {/* Full-width background photo directly behind text with opacity */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`h-full w-full object-cover ${imagePosition} ${imageOpacity || 'opacity-25'}`}
            fetchPriority="high"
            loading="eager"
          />
        </div>

        {/* Centered content placed directly over the image (NO container) */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 lg:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-lg sm:text-xl font-medium text-[#238580]">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="mt-4 text-base sm:text-lg text-zinc-700 leading-relaxed max-w-xl mx-auto">
              {description}
            </p>
          )}
          {children && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {children}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={`relative overflow-hidden bg-white ${minHeight} flex items-center border-b border-zinc-100 ${className}`}>
      {/* Background image anchored to the right 54% reaching slightly more left with gentle fade */}
      <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[54%] h-full pointer-events-none overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`h-full w-full object-cover ${imagePosition} ${imageOpacity}`}
          fetchPriority="high"
          loading="eager"
        />
        {/* Desktop left-to-right gentle gradient fade: soft, natural dissolve without harsh lines */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/20 via-20% to-transparent to-55% hidden lg:block" />
        {/* Mobile vertical gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-white from-0% via-white/80 via-35% to-transparent to-85% lg:hidden" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:py-24 w-full">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950 leading-[1.15]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-lg sm:text-xl font-medium text-[#238580]">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              {description}
            </p>
          )}
          {children && (
            <div className="mt-8 flex flex-wrap gap-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
