'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/lib/data';
import { SERVICE_NAV } from '@/lib/services';
import { cn } from '@/lib/utils';
import SocialLinks from '@/components/layout/SocialLinks';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const serviceActive = SERVICE_NAV.some(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const beforeServices = NAV_LINKS.slice(0, 2);
  const afterServices = NAV_LINKS.slice(2);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <nav
        className={cn(
          'mx-auto flex items-center justify-between rounded-full border px-3 py-2 transition-[background-color,border-color,box-shadow,max-width,backdrop-filter] duration-500 ease-out sm:px-4',
          scrolled || mobileOpen
            ? 'max-w-5xl border-white/20 bg-black/70 shadow-lg shadow-black/40 backdrop-blur-xl backdrop-saturate-150'
            : 'max-w-6xl border-transparent bg-black/0 shadow-none',
        )}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2 pl-1">
          <Image
            src="/logo.png"
            alt={COMPANY.name}
            width={160}
            height={48}
            className={cn(
              'h-12 w-auto transition-[filter] duration-500 ease-out sm:h-16',
              scrolled || mobileOpen
                ? 'drop-shadow-none'
                : 'drop-shadow-[0_0_28px_rgba(0,183,204,0.45)]',
            )}
            priority
          />
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {beforeServices.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              pathname={pathname}
            />
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocus={() => setServicesOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                setServicesOpen(false);
              }
            }}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              onClick={() => setServicesOpen((value) => !value)}
              className={cn(
                'group relative inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-widest uppercase transition-colors',
                serviceActive ? 'text-white' : 'text-white/80 hover:text-white',
              )}
            >
              Services
              <ChevronDown
                size={12}
                className={cn(
                  'transition-transform duration-200',
                  servicesOpen ? 'rotate-180' : '',
                )}
              />
              <span
                className={cn(
                  'absolute inset-x-3.5 -bottom-0.5 h-px bg-white transition-transform duration-300',
                  serviceActive || servicesOpen
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100',
                )}
              />
            </button>

            <AnimatePresence>
              {servicesOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3"
                >
                  <div
                    role="menu"
                    className="overflow-hidden rounded-2xl border border-white/15 bg-black/85 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl"
                  >
                    {SERVICE_NAV.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          className={cn(
                            'block rounded-xl px-3 py-2.5 text-sm transition-colors',
                            isActive
                              ? 'bg-white/10 text-white'
                              : 'text-white/75 hover:bg-white/10 hover:text-white',
                          )}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {afterServices.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              pathname={pathname}
            />
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <SocialLinks
            className="mr-4 md:mr-2"
            iconSize={18}
            linkClassName="text-white/80 hover:text-white"
          />
          <Link
            href="/contact"
            className="hidden items-center rounded-full border border-white px-3.5 py-1.5 text-[10px] tracking-[0.2em] uppercase text-white transition-all duration-200 hover:bg-[#00b7cc] hover:text-black sm:inline-flex"
          >
            Book a Tour
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className={cn(
              'mx-auto mt-2 overflow-hidden rounded-3xl border border-white/20 bg-black/70 p-4 shadow-xl backdrop-blur-xl backdrop-saturate-150 lg:hidden',
              scrolled || mobileOpen ? 'max-w-5xl' : 'max-w-6xl',
            )}
          >
            <div className="flex max-h-[70vh] flex-col overflow-y-auto">
              {beforeServices.map((link) => (
                <MobileNavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  pathname={pathname}
                  onClick={() => setMobileOpen(false)}
                />
              ))}

              <button
                type="button"
                onClick={() => setMobileServicesOpen((value) => !value)}
                className={cn(
                  'flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition hover:bg-white/10',
                  serviceActive
                    ? 'text-white'
                    : 'text-white/80 hover:text-white',
                )}
                aria-expanded={mobileServicesOpen}
              >
                Services
                <ChevronDown
                  size={16}
                  className={cn(
                    'transition-transform duration-200',
                    mobileServicesOpen ? 'rotate-180' : '',
                  )}
                />
              </button>
              <AnimatePresence>
                {mobileServicesOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="overflow-hidden"
                  >
                    <div className="mb-1 ml-2 flex flex-col border-l border-white/15 pl-2">
                      {SERVICE_NAV.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            'rounded-xl px-3 py-2 text-sm transition hover:bg-white/10',
                            pathname === item.href
                              ? 'text-white'
                              : 'text-white/70 hover:text-white',
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              {afterServices.map((link) => (
                <MobileNavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  pathname={pathname}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </div>
            <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-[#00b7cc] px-4 py-3 text-center text-sm font-semibold tracking-[0.15em] uppercase text-black"
              >
                Book a Tour
              </Link>
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/40 px-4 py-3 text-center text-sm font-medium text-white"
              >
                <Phone size={14} />
                {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function NavItem({
  href,
  label,
  pathname,
}: {
  href: string;
  label: string;
  pathname: string;
}) {
  const isActive =
    pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      className={cn(
        'group relative rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-widest uppercase transition-colors',
        isActive ? 'text-white' : 'text-white/80 hover:text-white',
      )}
    >
      {label}
      <span
        className={cn(
          'absolute inset-x-3.5 -bottom-0.5 h-px bg-white transition-transform duration-300',
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
        )}
      />
    </Link>
  );
}

function MobileNavItem({
  href,
  label,
  pathname,
  onClick,
}: {
  href: string;
  label: string;
  pathname: string;
  onClick: () => void;
}) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-white/10',
        isActive ? 'text-white' : 'text-white/80 hover:text-white',
      )}
    >
      {label}
    </Link>
  );
}
