import { ABOUT_STATS } from '@/lib/data';

export default function StatsStrip() {
  return (
    <section
      aria-label="Copacabana Hall at a glance"
      className="relative overflow-hidden border-y border-white/10 bg-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-30" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">
        {ABOUT_STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={`relative py-9 sm:py-12 lg:px-8 ${
              index % 2 === 0 ? 'pr-5' : 'border-l border-white/10 pl-5'
            } ${index > 1 ? 'border-t border-white/10 lg:border-t-0' : ''} ${
              index > 0 ? 'lg:border-l lg:border-white/10' : 'lg:border-l-0'
            }`}
          >
            <span className="mb-3 block text-[9px] tracking-[0.32em] text-white/35 uppercase">
              0{index + 1}
            </span>
            <p className="font-serif text-3xl leading-none text-accent sm:text-4xl xl:text-5xl">
              {stat.value}
            </p>
            <p className="mt-3 max-w-32 text-[10px] leading-relaxed tracking-[0.18em] text-white/50 uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
