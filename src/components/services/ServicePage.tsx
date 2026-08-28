import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Check,
  Gift,
  Heart,
  MapPin,
  Sparkles,
  Star,
  Users,
  Volume2,
} from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import ServiceFaq from '@/components/services/ServiceFaq';
import { COMPANY } from '@/lib/data';
import {
  SERVICE_CITIES,
  SERVICE_TESTIMONIALS,
  type ServicePageData,
} from '@/lib/services';

const FEATURE_ICONS = [
  Sparkles,
  MapPin,
  Volume2,
  Users,
  Gift,
  Heart,
] as const;

const STATS = [
  { value: '9,000', label: 'Sq Ft Indoor + Outdoor' },
  { value: '350', label: 'Guest Capacity' },
  { value: `${COMPANY.googleRating}★`, label: `${COMPANY.reviewCount} Google Reviews` },
  { value: '10 min', label: 'from Downtown' },
] as const;

export default function ServicePage({ service }: { service: ServicePageData }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
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
          src={service.heroImage}
          alt={service.heroAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
          <p className="mb-3 text-[11px] tracking-[0.28em] text-white/55 uppercase">
            Home / {service.breadcrumb}
          </p>
          <p className="mb-5 text-[10px] tracking-[0.4em] text-[#00b7cc] uppercase">
            {service.eyebrow}
          </p>
          <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {service.lead}
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

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
              {service.eyebrow}
            </p>
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              {service.introHeading}
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {service.introBody.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-relaxed text-foreground/65 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {service.pamphletLabel ? (
              <Link
                href="/pricing"
                className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#00b7cc] uppercase transition-all hover:gap-3"
              >
                {service.pamphletLabel} <ArrowRight size={12} />
              </Link>
            ) : null}
          </div>
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
            <Image
              src={service.splitImage}
              alt={service.splitImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f0fdff] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
              {service.whyEyebrow}
            </p>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
              {service.whyHeading}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => {
              const Icon = FEATURE_ICONS[index % FEATURE_ICONS.length];
              return (
                <article
                  key={feature.title}
                  className="border border-border bg-white p-8"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center border border-[#00b7cc]/30">
                      <Icon size={16} className="text-[#00b7cc]" />
                    </div>
                    <span className="font-serif text-2xl text-[#00b7cc]/35">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mb-3 font-serif text-2xl text-foreground">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-foreground/60">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-[3/2] overflow-hidden lg:order-1">
            <Image
              src={service.gallery[1]?.src ?? service.gallery[0]?.src ?? service.heroImage}
              alt={service.gallery[1]?.alt ?? service.gallery[0]?.alt ?? service.heroAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
              {service.splitEyebrow}
            </p>
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              {service.splitHeading}
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {service.splitBody.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-relaxed text-foreground/65 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {service.pamphletLabel ? (
              <Link
                href="/pricing"
                className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#00b7cc] uppercase transition-all hover:gap-3"
              >
                {service.pamphletLabel} <ArrowRight size={12} />
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {service.extraHeading && service.extraBody ? (
        <section className="border-y border-border bg-background px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {service.extraEyebrow ? (
              <p className="mb-4 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
                {service.extraEyebrow}
              </p>
            ) : null}
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              {service.extraHeading}
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {service.extraBody.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-relaxed text-foreground/65 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-black px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex items-start gap-4">
            <Building2 size={22} className="mt-1 shrink-0 text-[#00b7cc]" />
            <h2 className="font-serif text-3xl text-white sm:text-4xl">
              {service.highlightsHeading}
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-white/75">
                <Check size={16} className="mt-1 shrink-0 text-[#00b7cc]" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f0fdff] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
              Guest Experiences
            </p>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
              What Our Clients Are Saying
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {SERVICE_TESTIMONIALS.map((review) => (
              <blockquote key={review.name} className="border border-border bg-white p-8">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, n) => (
                    <Star
                      key={n}
                      size={14}
                      className="fill-[#00b7cc] text-[#00b7cc]"
                    />
                  ))}
                </div>
                <p className="font-serif text-lg leading-snug text-foreground">
                  &ldquo;{review.text}&rdquo;
                </p>
                <footer className="mt-6">
                  <p className="font-serif text-foreground">— {review.name}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
              Greater Houston
            </p>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
              {service.citiesHeading}
            </h2>
            {service.citiesIntro ? (
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-foreground/65 sm:text-lg">
                {service.citiesIntro}
              </p>
            ) : null}
          </div>
          <ul className="flex flex-wrap justify-center gap-2">
            {SERVICE_CITIES.map((city) => (
              <li
                key={city.name}
                className="border border-border px-4 py-2 text-sm text-foreground/70"
              >
                <span className="font-medium text-foreground">{city.name}</span>
                <span className="ml-2 text-xs tracking-wide text-foreground/40 uppercase">
                  {city.drive}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
              Good to Know
            </p>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
              {service.faqsHeading}
            </h2>
          </div>
          <ServiceFaq faqs={service.faqs} />
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
                Events &amp; Weddings at Copacabana Hall
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
            {service.gallery.map((image) => (
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
        imageSrc={service.heroImage}
        imageAlt={service.heroAlt}
        eyebrow={service.ctaEyebrow}
        heading={service.ctaHeading}
        body={service.ctaBody}
      />
    </>
  );
}
