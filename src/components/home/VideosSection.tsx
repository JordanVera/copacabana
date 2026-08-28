'use client';

import { motion } from 'framer-motion';
import { VIDEOS, EMBEDS } from '@/lib/data';

function youtubeEmbed(id: string) {
  return `https://www.youtube.com/embed/${id}`;
}

export default function VideosSection() {
  if (VIDEOS.length === 0 && EMBEDS.length === 0) return null;

  return (
    <section className="bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase"
          >
            See the Space
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl text-foreground sm:text-5xl"
          >
            Venue Videos
          </motion.h2>
        </div>

        {EMBEDS.length > 0 && (
          <div className="mb-16 space-y-8">
            {EMBEDS.map((embed, i) => (
              <motion.div
                key={embed.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-center text-sm tracking-[0.2em] text-foreground/50 uppercase">
                  {embed.title}
                </h3>
                <div
                  className="relative w-full overflow-hidden rounded-sm border border-border"
                  style={{ minHeight: '280px' }}
                >
                  <iframe
                    src={embed.url}
                    title={embed.title}
                    className="absolute inset-0 h-full min-h-[280px] w-full border-0"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {VIDEOS.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2">
            {VIDEOS.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="space-y-3"
              >
                <h3 className="text-sm tracking-[0.15em] text-foreground/50 uppercase">
                  {video.title}
                </h3>
                {video.type === 'youtube' && video.youtubeId ? (
                  <div className="relative aspect-video overflow-hidden rounded-sm border border-border">
                    <iframe
                      src={youtubeEmbed(video.youtubeId)}
                      title={video.title}
                      className="absolute inset-0 h-full w-full border-0"
                      allowFullScreen
                    />
                  </div>
                ) : video.type === 'mp4' && video.src ? (
                  <video
                    controls
                    className="w-full rounded-sm border border-border"
                    poster={video.poster || undefined}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                ) : null}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
