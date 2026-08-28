import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Mail, MapPin, Phone } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import {
  ABOUT_CONTENT,
  ABOUT_STATS,
  ABOUT_WHY,
  ANTHONY,
  COMPANY,
  VENUE_GLANCE,
  VENUE_HOURS,
  VENUE_HOURS_NOTE,
} from '@/lib/data';

export const metadata: Metadata = {
  title: `About Copacabana Hall — 7107 Navigation Blvd, Houston's East End Event Venue`,
  description: ABOUT_CONTENT.intro,
};

const MAP_EMBED =
  'https://maps.google.com/maps?q=7107+Navigation+Blvd,+Houston,+TX+77011&hl=en&z=15&output=embed';

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/gallery/gallery-04.jpg"
          alt="Outdoor ceremony at Copacabana Hall"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
          <p className="mb-3 text-[11px] tracking-[0.28em] text-white/55 uppercase">
            Home / About
          </p>
          <p className="mb-5 text-[10px] tracking-[0.4em] text-[#00b7cc] uppercase">
            Houston&apos;s East End
          </p>
          <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Copacabana Hall — 7107 Navigation Blvd, Houston&apos;s East End Event
            Venue
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {ABOUT_CONTENT.intro}
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px sm:grid-cols-4">
          {ABOUT_STATS.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p className="font-serif text-3xl text-[#00b7cc] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] tracking-[0.2em] text-white/50 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f0fdff] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
              The Venue
            </p>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
              Why Choose Copacabana Hall
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {ABOUT_WHY.map((item, index) => (
              <article
                key={item}
                className="flex gap-4 border border-border bg-white p-8"
              >
                <span className="font-serif text-2xl text-[#00b7cc]/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex gap-3">
                  <Check size={16} className="mt-1 shrink-0 text-[#00b7cc]" />
                  <p className="text-lg leading-relaxed text-foreground">
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
            <Image
              src="/gallery/gallery-69.jpg"
              alt="Reception styled at Copacabana Hall"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
              Meet the Owner
            </p>
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              Owner-Operated by{' '}
              <em className="italic text-[#00b7cc]">{ANTHONY.name}</em>
            </h2>
            <p className="mt-3 text-xs tracking-[0.25em] text-foreground/40 uppercase">
              {ANTHONY.role} · Copacabana Hall
            </p>
            <p className="mt-8 text-base leading-relaxed text-foreground/65 sm:text-lg">
              {ANTHONY.bio}
            </p>
            <div className="mt-10 flex flex-col gap-4">
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-[#00b7cc]"
              >
                <span className="flex h-10 w-10 items-center justify-center border border-[#00b7cc]/30">
                  <Phone size={14} className="text-[#00b7cc]" />
                </span>
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-[#00b7cc]"
              >
                <span className="flex h-10 w-10 items-center justify-center border border-[#00b7cc]/30">
                  <Mail size={14} className="text-[#00b7cc]" />
                </span>
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
              East End Houston
            </p>
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              Find Copacabana Hall
            </h2>
            <p className="mt-6 flex items-start gap-3 text-base leading-relaxed text-foreground/65 sm:text-lg">
              <MapPin size={18} className="mt-1 shrink-0 text-[#00b7cc]" />
              7107 Navigation Blvd, Houston TX 77011 · 10 min from downtown · 5
              min from Minute Maid Park
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-5 text-[10px] tracking-[0.25em] text-foreground/40 uppercase">
                  Venue at a Glance
                </h3>
                <dl className="flex flex-col gap-3">
                  {VENUE_GLANCE.map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between gap-4 border-b border-border pb-3 text-sm"
                    >
                      <dt className="text-foreground/45">{item.label}</dt>
                      <dd className="text-right text-foreground">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <h3 className="mb-5 text-[10px] tracking-[0.25em] text-foreground/40 uppercase">
                  Hours
                </h3>
                <dl className="flex flex-col gap-3">
                  {VENUE_HOURS.map((item) => (
                    <div
                      key={item.days}
                      className="flex justify-between gap-4 border-b border-border pb-3 text-sm"
                    >
                      <dt className="text-foreground/45">{item.days}</dt>
                      <dd className="text-right text-foreground">{item.hours}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-sm leading-relaxed text-foreground/50">
                  {VENUE_HOURS_NOTE}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="bg-[#00b7cc] px-6 py-3 text-center text-xs tracking-[0.2em] text-black uppercase transition-colors hover:bg-[#00d4ed]"
                  >
                    Schedule a Tour
                  </Link>
                  <a
                    href={`tel:${COMPANY.phoneHref}`}
                    className="border border-border px-6 py-3 text-center text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:border-[#00b7cc] hover:text-[#00b7cc]"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden border border-border">
            <iframe
              title="Map of Copacabana Hall at 7107 Navigation Blvd, Houston"
              src={MAP_EMBED}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CtaStrip
        imageSrc="/gallery/gallery-04.jpg"
        imageAlt="Outdoor ceremony at Copacabana Hall"
        eyebrow="Schedule a Tour"
        heading="Ready to Tour Copacabana Hall?"
        body="9,000 sq ft at 7107 Navigation Blvd — available for tours Monday through Sunday. Call or submit a request and we will confirm within 24 hours."
      />
    </>
  );
}
