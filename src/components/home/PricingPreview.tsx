'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { VENUE_PACKAGES } from '@/lib/pricing';

export default function PricingPreview() {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 grid items-end gap-8 md:grid-cols-[1fr_0.65fr] md:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-[10px] tracking-[0.4em] text-accent uppercase"
            >
              Begin with a vision
            </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
              className="max-w-3xl font-serif text-4xl leading-[0.98] text-white sm:text-6xl lg:text-7xl"
          >
              Packages built around
              <em className="block text-accent italic">your kind of celebration.</em>
          </motion.h2>
          </div>
          <div className="md:justify-self-end">
            <p className="max-w-md text-sm leading-7 text-white/50">
              Every event is different. Choose a starting point, then work directly
              with our team to shape the details around your date and guest list.
            </p>
            <p className="mt-5 text-[9px] tracking-[0.22em] text-white/30 uppercase">
              Tours available Monday through Sunday
            </p>
          </div>
        </div>

        <div className="grid border-l border-t border-white/10 md:grid-cols-3">
          {VENUE_PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`relative flex min-h-130 flex-col border-b border-r p-7 sm:p-9 ${
                pkg.highlighted
                  ? 'border-accent bg-slate-900 md:-my-5 md:min-h-140 md:border md:p-10'
                  : 'border-white/10 bg-black'
              }`}
            >
              {pkg.highlighted ? (
                <span className="absolute right-5 top-0 bg-accent px-4 py-2 text-[9px] font-medium tracking-[0.2em] text-black uppercase md:-top-px">
                  Signature
                </span>
              ) : null}
              <span className="mb-14 font-serif text-5xl text-white/10">0{i + 1}</span>
              <p className="text-[10px] tracking-[0.3em] text-accent uppercase">
                {pkg.name}
              </p>
              <p className="mt-3 font-serif text-3xl text-white">{pkg.price}</p>
              <p className="mb-8 mt-5 text-sm leading-7 text-white/50">
                {pkg.description}
              </p>
              <ul className="mb-10 flex flex-1 flex-col gap-3 border-t border-white/10 pt-6">
                {pkg.features.slice(0, 5).map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-white/65">
                    <Check
                      aria-hidden="true"
                      size={14}
                      className="mt-1 shrink-0 text-accent"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`inline-flex items-center justify-between gap-3 px-5 py-4 text-[10px] tracking-[0.22em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                  pkg.highlighted
                    ? 'bg-accent text-black hover:bg-accent-light'
                    : 'border border-white/20 text-white hover:border-accent hover:text-accent'
                }`}
              >
                Request package details <ArrowRight aria-hidden="true" size={13} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-3 border-b border-accent pb-2 text-[10px] tracking-[0.25em] text-white uppercase transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Compare all package details <ArrowRight aria-hidden="true" size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
