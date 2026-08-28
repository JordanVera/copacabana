'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ABOUT_CONTENT, COMPANY } from '@/lib/data';

const anim = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <motion.div {...anim(0)} className="mb-8 flex items-center gap-4">
              <span className="text-[10px] tracking-[0.4em] text-accent uppercase">
                Welcome to Copacabana
              </span>
              <span className="h-px w-16 bg-accent/60" />
            </motion.div>

            <motion.h2
              {...anim(0.1)}
              className="max-w-3xl font-serif text-5xl leading-[0.98] text-white sm:text-6xl xl:text-7xl"
            >
              A Houston venue with
              <em className="block text-accent italic">
                room for the extraordinary.
              </em>
            </motion.h2>

            <motion.div
              {...anim(0.2)}
              className="mt-9 grid gap-6 border-l border-accent/50 pl-6 sm:grid-cols-2 sm:gap-8"
            >
              <p className="text-base leading-8 text-white/65">
                {ABOUT_CONTENT.intro}
              </p>
              <p className="text-sm leading-7 text-white/45">
                {ABOUT_CONTENT.body}
              </p>
            </motion.div>

            <motion.div
              {...anim(0.3)}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-[10px] font-medium tracking-[0.22em] text-black uppercase transition-colors hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Discover our story <ArrowRight aria-hidden="true" size={14} />
              </Link>
              <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">
                {COMPANY.serviceArea}
              </span>
            </motion.div>
          </div>

          <motion.div
            {...anim(0.15)}
            className="relative min-h-130 sm:min-h-165"
          >
            <div className="absolute inset-x-8 top-0 h-[85%] overflow-hidden sm:left-0 sm:right-16">
              <Image
                src="/photos/events-2026/copacabana-hall-event-space-houston-east-end-06.webp"
                alt="Copacabana Hall prepared for an elegant Houston celebration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-black/10" />
            </div>
            <div className="absolute bottom-0 right-0 w-[70%] border border-white/10 bg-black/90 p-6 backdrop-blur-md sm:p-8">
              <p className="font-serif text-2xl leading-tight text-white sm:text-3xl">
                “A celebration should feel entirely
                <span className="text-accent italic"> your own.</span>”
              </p>
              <p className="mt-5 text-[9px] tracking-[0.28em] text-white/40 uppercase">
                Owner-operated · Houston East End
              </p>
            </div>
            <span className="absolute left-0 top-10 hidden [writing-mode:vertical-rl] text-[9px] tracking-[0.35em] text-white/35 uppercase sm:block">
              9,000 square feet · indoor + outdoor
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
