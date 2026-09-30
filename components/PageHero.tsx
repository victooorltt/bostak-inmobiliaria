import React from 'react';

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
  className?: string;
  imagePosition?: string;
  minHeight?: string;
}

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  children,
  className = '',
  imagePosition = 'object-center',
  minHeight = 'min-h-[480px] lg:min-h-[540px]',
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-white ${minHeight} flex items-center justify-center border-b border-zinc-200/80 ${className}`}
    >
      {/* Full-width background photo across the entire hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`h-full w-full object-cover ${imagePosition}`}
          fetchPriority="high"
          loading="eager"
        />
        {/* Subtle translucent white overlay to ensure flawless readability while preserving image beauty */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 to-white/70" />
      </div>

      {/* Centered content directly over image - exactly 2 levels: Title + Subtitle */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 lg:py-20 text-center w-full">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950 leading-[1.15]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
