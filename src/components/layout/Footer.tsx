import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/lib/data';
import { SERVICE_NAV } from '@/lib/services';
import SocialLinks from '@/components/layout/SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-black text-white/80">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={COMPANY.name}
                width={160}
                height={48}
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              9,000 sq ft indoor + outdoor event venue at 7107 Navigation Blvd
              in Houston&apos;s East End. Capacity for {COMPANY.maxGuests}{' '}
              guests. Ceremony and reception at one address.
            </p>
            <SocialLinks linkClassName="text-white/80 hover:text-white" />
          </div>

          <div>
            <h4 className="mb-6 text-xs tracking-[0.25em] text-white uppercase">
              Event Services
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICE_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs tracking-[0.25em] text-white uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs tracking-[0.25em] text-white uppercase">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone size={14} className="shrink-0 text-white" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail size={14} className="shrink-0 text-white" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-white" />
                <span>
                  {COMPANY.address}
                  <br />
                  {COMPANY.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
          </p>
          <p>{COMPANY.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
