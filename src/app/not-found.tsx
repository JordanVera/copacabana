import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Page Not Found | ${COMPANY.name}`,
  description:
    'This page could not be found. Return to Copacabana Hall to plan your event.',
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 pb-24 pt-32 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,183,204,0.16),transparent_60%)]"
      />

      <p className="relative mb-6 text-[10px] tracking-[0.4em] text-[#00b7cc] uppercase">
        Wrong turn
      </p>

      <h1 className="sr-only">404 — Page not found</h1>
      <p
        aria-hidden
        className="relative flex items-center justify-center font-serif text-[clamp(6.5rem,22vw,13rem)] leading-none text-white"
      >
        <span>4</span>
        <Image
          src="/logo.png"
          alt=""
          width={288}
          height={229}
          priority
          className="mx-[-0.03em] h-[0.78em] w-auto translate-y-[0.04em] drop-shadow-[0_0_28px_rgba(0,183,204,0.55)]"
        />
        <span>4</span>
      </p>

      <p className="relative mt-8 max-w-md font-serif text-2xl text-white sm:text-3xl">
        This page isn&apos;t on the floor plan.
      </p>
      <p className="relative mt-4 max-w-lg text-base leading-relaxed text-white/60">
        The celebration is still at {COMPANY.address}. Let&apos;s get you back
        to the venue.
      </p>

      <div className="relative mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="bg-[#00b7cc] px-8 py-3.5 text-xs tracking-[0.2em] text-black uppercase transition-colors hover:bg-[#00d4ed]"
        >
          Back Home
        </Link>
        <Link
          href="/contact"
          className="border border-white/50 px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-all hover:border-[#00b7cc] hover:text-[#00b7cc]"
        >
          Book a Tour
        </Link>
      </div>
    </section>
  );
}
