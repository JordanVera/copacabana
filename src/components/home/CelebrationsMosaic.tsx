import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/services';

const featuredSlugs = new Set([
  'wedding-venue-houston',
  'quinceanera-venue-houston',
  'birthday-party-venue-houston',
  'corporate-event-venue-houston',
  'baby-shower-venue-houston',
  'reception-hall-houston',
]);

const celebrations = SERVICES.filter((service) => featuredSlugs.has(service.slug));

export default function CelebrationsMosaic() {
  return (
    <section className="overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid items-end gap-8 md:grid-cols-[1fr_0.7fr] md:mb-16">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.4em] text-accent uppercase">
              Made for every moment
            </p>
            <h2 className="max-w-3xl font-serif text-4xl leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              One remarkable space.
              <span className="block text-white/35 italic">Endless ways to celebrate.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/55 md:justify-self-end md:text-base">
            From quiet vows to packed dance floors, Copacabana Hall transforms around
            your story—not the other way around.
          </p>
        </div>

        <div className="grid auto-rows-57.5 grid-cols-1 gap-3 sm:auto-rows-70 sm:grid-cols-2 lg:grid-cols-4">
          {celebrations.map((service, index) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className={`group relative isolate overflow-hidden border border-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                index === 0
                  ? 'sm:row-span-2 lg:col-span-2'
                  : index === 3
                    ? 'lg:col-span-2'
                    : ''
              }`}
            >
              <Image
                src={service.heroImage}
                alt={service.heroAlt}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 group-focus-visible:scale-105"
                sizes={
                  index === 0
                    ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw'
                    : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                }
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <div>
                  <span className="mb-2 block text-[9px] tracking-[0.3em] text-accent uppercase">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-2xl text-white sm:text-3xl">
                    {service.navLabel}
                  </h3>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center border border-white/30 bg-black/20 text-white backdrop-blur-sm transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-black">
                  <ArrowUpRight aria-hidden="true" size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
