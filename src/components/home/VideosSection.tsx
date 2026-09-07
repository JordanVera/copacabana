'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { VIDEOS, EMBEDS } from '@/lib/data';
import type { VideoItem } from '@/lib/videos';

function youtubeEmbed(id: string) {
  return `https://www.youtube.com/embed/${id}`;
}

function VideoPlayer({ video }: { video: VideoItem }) {
  if (video.type === 'youtube' && video.youtubeId) {
    return (
      <iframe
        src={youtubeEmbed(video.youtubeId)}
        title={video.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full border-0"
        allowFullScreen
      />
    );
  }

  if (video.type === 'mp4' && video.src) {
    return (
      <video
        controls
        preload="metadata"
        poster={video.poster || undefined}
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={video.src} type="video/mp4" />
      </video>
    );
  }

  return null;
}

export default function VideosSection() {
  if (VIDEOS.length === 0 && EMBEDS.length === 0) return null;

  return (
    <section className="overflow-hidden bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid items-end gap-8 md:grid-cols-[1fr_0.65fr] md:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-[10px] tracking-[0.4em] text-accent uppercase"
            >
              Step inside
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl font-serif text-4xl leading-[0.98] text-white sm:text-6xl lg:text-7xl"
            >
              Feel the space
              <em className="block text-accent italic">before you arrive.</em>
            </motion.h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/50 md:justify-self-end">
            Take a cinematic walk through the ballroom, outdoor grounds, and
            real celebrations hosted at Copacabana Hall.
          </p>
        </div>

        {VIDEOS.length > 0 ? (
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:gap-6">
            {VIDEOS.map((video) => (
              <article
                key={video.id}
                className="relative aspect-9/16 overflow-hidden border border-white/10 bg-black"
              >
                <VideoPlayer video={video} />
                <div className="pointer-events-none absolute inset-x-3 top-3 flex items-start gap-2 bg-black/70 px-3 py-2 backdrop-blur-md sm:inset-x-auto sm:left-5 sm:top-5 sm:items-center sm:gap-3 sm:px-4 sm:py-3">
                  <Play
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 fill-accent text-accent sm:mt-0"
                    size={12}
                  />
                  <span className="text-[8px] leading-4 tracking-[0.18em] text-white uppercase sm:text-[9px] sm:tracking-[0.25em]">
                    {video.title}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {EMBEDS.length > 0 ? (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {EMBEDS.map((embed, i) => (
              <motion.div
                key={embed.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="space-y-3"
              >
                <h3 className="text-[10px] tracking-[0.22em] text-white/45 uppercase">
                  {embed.title}
                </h3>
                <div className="relative aspect-video w-full overflow-hidden border border-white/10">
                  <iframe
                    src={embed.url}
                    title={embed.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full border-0"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
