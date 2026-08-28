import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { ABOUT_WHY, AMENITIES } from '@/lib/data';

const indoorImage =
  '/photos/events-2026/copacabana-hall-indoor-reception-hall-houston-35.webp';
const outdoorImage =
  '/photos/events-2026/copacabana-hall-outdoor-wedding-ceremony-houston-13.webp';

export default function VenueExperience() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div className="relative min-h-140 sm:min-h-170">
            <div className="absolute left-0 top-0 h-[68%] w-[82%] overflow-hidden">
              <Image
                src={indoorImage}
                alt="Elegant indoor reception space at Copacabana Hall"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 82vw, 36vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-5 left-5 text-[9px] tracking-[0.35em] text-white/80 uppercase">
                Indoor ballroom
              </p>
            </div>
            <div className="absolute bottom-0 right-0 h-[49%] w-[60%] overflow-hidden border-8 border-slate-950 shadow-2xl sm:border-12">
              <Image
                src={outdoorImage}
                alt="Outdoor wedding ceremony grounds at Copacabana Hall"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 27vw"
              />
              <p className="absolute bottom-4 left-4 text-[9px] tracking-[0.3em] text-white uppercase drop-shadow-lg">
                Outdoor ceremony
              </p>
            </div>
            <div className="absolute right-[7%] top-[8%] flex size-24 items-center justify-center rounded-full border border-accent/50 bg-black/75 text-center text-[9px] leading-4 tracking-[0.2em] text-accent uppercase backdrop-blur-md sm:size-28">
              One
              <br />
              address
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] tracking-[0.4em] text-accent uppercase">
              Two atmospheres · one seamless day
            </p>
            <h2 className="font-serif text-4xl leading-[1.02] text-white sm:text-6xl">
              Begin under the sky.
              <em className="block text-accent italic">Celebrate into the night.</em>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/60">
              Move naturally from an outdoor ceremony to an elegant indoor reception,
              with no shuttles, split venues, or lost moments in between.
            </p>

            <ul className="mt-9 grid gap-x-8 gap-y-4 border-y border-white/10 py-8 sm:grid-cols-2">
              {ABOUT_WHY.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/70">
                  <Check aria-hidden="true" className="mt-1 shrink-0 text-accent" size={15} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {AMENITIES.slice(3, 9).map((amenity) => (
                <span
                  key={amenity}
                  className="border border-white/10 px-3 py-2 text-[9px] tracking-[0.18em] text-white/45 uppercase"
                >
                  {amenity}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-3 border-b border-accent pb-2 text-[10px] tracking-[0.25em] text-white uppercase transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Explore the venue <ArrowRight aria-hidden="true" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
