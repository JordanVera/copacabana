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
  imageSrc = '/gallery/gallery-12.jpg',
  imageAlt = 'Copacabana Hall event venue in Houston',
  eyebrow = 'Plan Your Celebration',
  heading = (
    <>
      Let&apos;s Make It <em className="italic">Unforgettable</em>
    </>
  ),
  body = "Text us to schedule a tour or inquire about availability. We'd love to host your next shower or celebration.",
}: CtaStripProps) {
  return (
    <section className="relative overflow-hidden py-24 px-6 lg:px-8">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-[10px] tracking-[0.4em] text-[#00b7cc] uppercase"
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-xl text-base text-white/75 sm:text-lg"
        >
          {body}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="bg-[#00b7cc] px-8 py-3.5 text-xs tracking-[0.2em] text-black uppercase transition-colors duration-200 hover:bg-[#00d4ed]"
          >
            Book a Tour
          </Link>
          <a
            href={`tel:${COMPANY.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 border border-white/50 px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-all duration-200 hover:border-[#00b7cc] hover:text-[#00b7cc]"
          >
            <Phone size={13} />
            Call {COMPANY.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
