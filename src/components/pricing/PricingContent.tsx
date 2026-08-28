'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import { ADD_ONS, PRICING_NOTES, VENUE_PACKAGES } from '@/lib/pricing';

export default function PricingContent() {
  return (
    <>
      <section className="bg-black px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">
            All-inclusive venue packages designed to simplify your celebration.
            Choose the level of décor and amenities that fits your event — from
            essential rental to fully styled packages.
          </p>
        </div>

        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">
          {VENUE_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`flex flex-col border p-8 ${
                pkg.highlighted
                  ? 'border-[#00b7cc] bg-slate-900 shadow-lg shadow-[#00b7cc]/10'
                  : 'border-white/10 bg-slate-950'
              }`}
            >
              {pkg.highlighted ? (
                <span className="self-start bg-[#00b7cc] px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-black mb-4">
                  Most Popular
                </span>
              ) : null}
              <p className="text-[#00b7cc] text-[10px] tracking-[0.3em] uppercase">
                {pkg.name}
              </p>
              <p className="font-serif text-5xl text-foreground mt-2">
                {pkg.price}
              </p>
              <p className="text-foreground/60 text-sm leading-relaxed mt-4 mb-6">
                {pkg.description}
              </p>
              <ul className="flex flex-col gap-3 flex-1">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-sm text-foreground/70"
                  >
                    <Check
                      size={14}
                      className="text-[#00b7cc] flex-shrink-0 mt-0.5"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex justify-center bg-[#00b7cc] px-6 py-3 text-xs tracking-[0.2em] uppercase text-black hover:bg-[#00d4ed] transition-colors"
              >
                Inquire About {pkg.name}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-foreground mb-6 text-center">
            Good to Know
          </h2>
          <ul className="flex flex-col gap-3">
            {PRICING_NOTES.map((note) => (
              <li
                key={note}
                className="flex gap-2.5 text-sm text-foreground/65"
              >
                <Check
                  size={14}
                  className="text-[#00b7cc] flex-shrink-0 mt-0.5"
                />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
