"use client";

import { brands } from "@/lib/constants";

export function Trust() {
  const doubled = [...brands, ...brands];

  return (
    <section id="trust" className="py-16 md:py-20 border-y border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-10">
        <p className="text-center text-text-secondary text-sm tracking-widest uppercase">
          Brands I&apos;ve Worked With
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-bg to-transparent z-10" />

        <div className="marquee-track">
          {doubled.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex items-center mx-8 md:mx-12 shrink-0"
            >
              <div className="flex items-center gap-3 px-8 py-4 rounded-xl border border-white/[0.06] bg-card/50">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-accent text-xs font-bold">
                    {brand.charAt(0)}
                  </span>
                </div>
                <span className="text-text-secondary font-medium whitespace-nowrap text-sm md:text-base">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
