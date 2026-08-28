'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { COMPANY } from '@/lib/data';

type CtaStripProps = {
  imageSrc?: string;
  imageAlt?: string;
  eyebrow?: string;
  heading?: ReactNode;
  body?: string;
};

export default function CtaStrip({
  imageSrc = '/gallery/gallery-04.jpg',
  imageAlt = 'Copacabana Hall event venue in Houston',
  eyebrow = 'Plan Your Celebration',
  heading = (
    <>
      Let&apos;s Make It <em className="italic">Unforgettable</em>
    </>
  ),
  body = 'Tour the ballroom and outdoor ceremony grounds, meet the team, and picture your celebration at 7107 Navigation Blvd.',
}: CtaStripProps) {
  return (
    <section className="relative min-h-170 overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center scale-[1.02]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/70 to-transparent" />
      <div className="relative z-10 mx-auto flex min-h-125 max-w-7xl items-end">
        <div className="grid w-full items-end gap-12 md:grid-cols-[1fr_auto]">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 text-[10px] tracking-[0.4em] text-accent uppercase"
            >
              {eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-7 max-w-4xl font-serif text-5xl leading-[0.95] text-white sm:text-7xl lg:text-8xl"
            >
              {heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-base leading-8 text-white/70 sm:text-lg"
            >
              {body}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex min-w-65 flex-col gap-3 md:pb-2"
          >
            <Link
              href="/contact"
              className="bg-accent px-8 py-4 text-center text-[10px] font-medium tracking-[0.24em] text-black uppercase transition-colors hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Check your date
            </Link>
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 border border-white/45 px-8 py-4 text-[10px] tracking-[0.22em] text-white uppercase transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <Phone aria-hidden="true" size={13} />
              Call {COMPANY.phone}
            </a>
            <p className="mt-2 text-center text-[9px] tracking-[0.2em] text-white/45 uppercase">
              Response within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
