import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, MapPin, Star } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import ServiceFaq from '@/components/services/ServiceFaq';
import { COMPANY } from '@/lib/data';
import { SERVICE_CITIES } from '@/lib/services';
import type { ServiceAreaPageData } from '@/lib/service-areas';

const STATS = [
  { value: '9,000', label: 'Sq Ft Total' },
  { value: '350', label: 'Guest Capacity' },
  { value: `${COMPANY.googleRating}★`, label: `${COMPANY.reviewCount} Google Reviews` },
  { value: '22,600', label: 'Instagram Followers' },
] as const;

export default function ServiceAreaPage({ area }: { area: ServiceAreaPageData }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: area.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src={area.heroImage}
          alt={area.heroAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
          <p className="mb-3 text-[11px] tracking-[0.28em] text-white/55 uppercase">
            Home / {area.breadcrumb}
          </p>
          <p className="mb-5 text-[10px] tracking-[0.4em] text-[#00b7cc] uppercase">
            {area.driveTime} drive {area.driveVia}
          </p>
          <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            {area.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {area.highlights[0]} {area.lead}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="bg-[#00b7cc] px-8 py-3.5 text-xs tracking-[0.2em] text-black uppercase transition-colors duration-200 hover:bg-[#00d4ed]"
            >
              Schedule a Tour
            </Link>
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="border border-white/50 px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-all duration-200 hover:border-[#00b7cc] hover:text-[#00b7cc]"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p className="font-serif text-3xl text-[#00b7cc] sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-[10px] tracking-[0.2em] text-white/50 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
              {area.driveTime} from {area.city}
            </p>
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              {area.whyHeading}
            </h2>
            <ul className="mt-8 flex flex-col gap-4">
              {area.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground/65">
                  <Check size={16} className="mt-1 shrink-0 text-[#00b7cc]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
            <Image
              src={area.splitImage}
              alt={area.splitImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-[3/2] overflow-hidden lg:order-1">
            <Image
              src={area.gallery[1]?.src ?? area.heroImage}
              alt={area.gallery[1]?.alt ?? area.heroAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
              Ceremony + Reception Together
            </p>
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              {area.splitHeading}
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {area.splitBody.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-relaxed text-foreground/65 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <Link
              href="/pricing"
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#00b7cc] uppercase transition-all hover:gap-3"
            >
              Download our Wedding Pricing Pamphlet <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, n) => (
              <Star key={n} size={16} className="fill-[#00b7cc] text-[#00b7cc]" />
            ))}
          </div>
          <p className="text-base leading-relaxed text-white/75 sm:text-lg">
            4.8-star rating from 72 verified Google reviews. 500+ reviews across
            Google, Yelp, Facebook, TikTok, BBB, and Eventective. 10,000+ guests
            hosted in the past 12 months.
          </p>
          <Link
            href="/reviews"
            className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#00b7cc] uppercase transition-all hover:gap-3"
          >
            Read reviews <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
              Good to Know
            </p>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
              {area.faqsHeading}
            </h2>
          </div>
          <ServiceFaq faqs={area.faqs} />
          <p className="mt-10 text-center text-foreground/60">
            See our full{' '}
            <Link
              href="/wedding-venue-houston"
              className="text-[#00b7cc] underline-offset-4 hover:underline"
            >
              Wedding Venue
            </Link>{' '}
            page for complete information about packages, capacity, and availability.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
              Houston-Area Cities
            </p>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
              Brides also drive from
            </h2>
          </div>
          <ul className="flex flex-wrap justify-center gap-2">
            {SERVICE_CITIES.map((city) => (
              <li key={city.name}>
                <Link
                  href={city.href}
                  className="flex items-center gap-2 border border-border px-4 py-2 text-sm text-foreground/70 transition-colors hover:border-[#00b7cc] hover:text-[#00b7cc]"
                >
                  <MapPin size={12} />
                  <span className="font-medium">{city.name}</span>
                  <span className="text-xs tracking-wide text-foreground/40 uppercase">
                    {city.drive}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-950 px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
                Events at Copacabana Hall
              </p>
              <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
                A Glimpse of the Space
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#00b7cc] uppercase transition-all hover:gap-3"
            >
              View Full Gallery <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {area.gallery.map((image) => (
              <Link
                key={image.src}
                href="/gallery"
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        imageSrc={area.heroImage}
        imageAlt={area.heroAlt}
        eyebrow="Schedule a Tour"
        heading="Ready to Tour Copacabana Hall?"
        body="9,000 sq ft at 7107 Navigation Blvd — available for tours Monday through Sunday. Call or submit a request and we will confirm within 24 hours."
      />
    </>
  );
}
