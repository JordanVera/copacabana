import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { COMPANY } from '@/lib/data';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Copacabana Hall — Houston Event Venue',
  description:
    'All-inclusive intimate event venue in Webster, Texas. Bridal showers, baby showers, and celebrations for up to 65 guests.',
  keywords:
    'Copacabana Hall, event venue Webster TX, bridal shower venue Houston, baby shower venue Bay Area Houston',
  openGraph: {
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description:
      'Premier intimate event venue on NASA Parkway — all-inclusive packages for showers and celebrations.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} dark h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex min-h-full flex-col bg-black text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
