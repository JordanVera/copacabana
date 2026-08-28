'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Quote, Star } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { SERVICE_TESTIMONIALS } from '@/lib/services';

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 grid items-end gap-8 md:grid-cols-[1fr_0.65fr] md:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-[10px] tracking-[0.4em] text-accent uppercase"
            >
              Notes from the guest book
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl font-serif text-4xl leading-[0.98] text-white sm:text-6xl lg:text-7xl"
            >
              The night ends.
              <em className="block text-accent italic">The feeling stays.</em>
            </motion.h2>
          </div>
          <div className="md:justify-self-end">
            <div className="flex items-center gap-3">
              <div className="flex gap-1" aria-label={`${COMPANY.googleRating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    aria-hidden="true"
                    size={13}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              <span className="font-serif text-2xl text-white">{COMPANY.googleRating}</span>
            </div>
            <p className="mt-2 text-[9px] tracking-[0.22em] text-white/40 uppercase">
              {COMPANY.reviewCount}+ Google reviews
            </p>
          </div>
        </div>

        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-5 scrollbar-none lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
          {SERVICE_TESTIMONIALS.map((review, i) => (
            <motion.blockquote
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex min-h-107.5 w-[84vw] shrink-0 snap-center flex-col border border-white/10 bg-slate-950 p-7 sm:w-[60vw] sm:p-9 lg:w-auto"
            >
              <Quote aria-hidden="true" className="mb-10 text-accent" size={30} strokeWidth={1} />
              <p className="font-serif text-xl leading-relaxed text-white sm:text-2xl">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-auto border-t border-white/10 pt-6">
                <p className="font-serif text-lg text-white">{review.name}</p>
                <p className="mt-1 text-[9px] tracking-[0.22em] text-white/35 uppercase">
                  Verified guest · Google review
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-[9px] tracking-[0.22em] text-white/30 uppercase lg:hidden">
            Swipe to read more
          </p>
          <a
            href={COMPANY.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-white uppercase transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:ml-auto"
          >
            Read All {COMPANY.reviewCount} Google Reviews
            <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
