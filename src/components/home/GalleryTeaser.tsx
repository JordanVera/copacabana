'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '@/lib/data';
import { ArrowRight, Expand } from 'lucide-react';

export default function GalleryTeaser() {
  const images = GALLERY_IMAGES.filter(
    (img) => 'featured' in img && img.featured,
  );

  return (
    <section className="bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid items-end gap-8 md:grid-cols-[1fr_0.7fr] md:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-[10px] tracking-[0.4em] text-accent uppercase"
            >
              Our Space
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-2xl font-serif text-4xl leading-[0.98] text-white sm:text-6xl lg:text-7xl"
            >
              The atmosphere,
              <em className="block text-accent italic">before the first guest arrives.</em>
            </motion.h2>
          </div>
          <div className="md:justify-self-end">
            <p className="mb-6 max-w-sm text-sm leading-7 text-white/50">
              Explore the details, scale, and character that make every corner of
              Copacabana Hall camera-ready.
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 border-b border-accent pb-2 text-[10px] tracking-[0.25em] text-white uppercase transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              View the full gallery <ArrowRight aria-hidden="true" size={13} />
            </Link>
          </div>
        </div>

        <div className="grid auto-rows-47.5 grid-cols-2 gap-3 sm:auto-rows-65 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden ${
                i === 0
                  ? 'col-span-2 row-span-2'
                  : i === 3 || i === 6
                    ? 'row-span-2'
                    : i === 7
                      ? 'col-span-2'
                      : ''
              }`}
            >
              <Link
                href="/gallery"
                aria-label={`View ${img.category} venue photos in the gallery`}
                className="absolute inset-0 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 group-focus-within:scale-105"
                  sizes={
                    i === 0
                      ? '(max-width: 1024px) 100vw, 50vw'
                      : '(max-width: 1024px) 50vw, 25vw'
                  }
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-4 p-4 opacity-80 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:p-6">
                  <div>
                    <span className="block text-[9px] tracking-[0.3em] text-accent uppercase">
                      {img.category}
                    </span>
                    <span className="mt-1 block font-serif text-xl text-white">
                      Copacabana Hall
                    </span>
                  </div>
                  <Expand aria-hidden="true" className="text-white" size={15} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
