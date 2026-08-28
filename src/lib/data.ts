export const COMPANY = {
  name: 'Copacabana Hall',
  shortName: 'Copacabana Hall',
  tagline: 'Indoor & Outdoor Wedding Venue',
  phone: '(713) 282-9194',
  phoneHref: '+17132829194',
  email: 'aj@copacabanahall.com',
  address: '7107 Navigation Blvd',
  city: 'Houston, TX 77011',
  serviceArea: 'Houston\'s East End · 10 min from Downtown',
  maxGuests: 350,
  instagram: 'https://www.instagram.com/copacabanahall/',
  instagramHandle: '@copacabanahall',
  facebook: 'https://www.facebook.com/people/Copacabana-Hall/61566366613114/',
  website: 'https://copacabanahall.com/',
  googleUrl: 'https://www.google.com/maps/search/?api=1&query=Copacabana+Hall+7107+Navigation+Blvd+Houston+TX+77011',
  googleReviewsUrl: 'https://www.google.com/maps/search/Copacabana+Hall+7107+Navigation+Blvd+Houston+reviews',
  googleRating: 4.8,
  reviewCount: 72,
};

export const ACCENT = '#00b7cc';
export const ACCENT_HOVER = '#00d4ed';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'interior', label: 'Interior' },
  { id: 'exterior', label: 'Outdoor' },
  { id: 'events', label: 'Events' },
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]['id'];

export {
  GALLERY_IMAGES,
  type GalleryImage,
} from './gallery-images';

export const ABOUT_CONTENT = {
  intro:
    "Copacabana Hall is a 9,000 sq ft indoor and outdoor event venue at 7107 Navigation Blvd in Houston's East End. The venue holds 350 guests and hosts ceremonies and receptions at one address — eliminating the split-venue logistics that most Houston couples face.",
  body: 'Copacabana Hall combines covered indoor reception space with outdoor ceremony grounds at one address — no shuttles, no split locations. Owner-operated by Anthony Johnson, with direct access from inquiry through event night.',
  evolution:
    "With 10,000+ guests hosted in the past 12 months, 4.8 stars from 72 Google reviews, and 22,600 Instagram followers, Copacabana Hall is one of Houston's most trusted all-inclusive event venues.",
};

export const ABOUT_WHY = [
  '350-guest capacity — 3x the average Houston banquet hall',
  'Ceremony + reception at one Navigation Blvd address',
  'Bilingual English/Spanish planning support',
  'Owner-operated by Anthony Johnson — personal event oversight',
] as const;

export const ABOUT_STATS = [
  { value: '22,600', label: 'Instagram followers' },
  { value: '500+', label: 'reviews across 6 platforms' },
  { value: '4.8★', label: 'Google rating' },
  { value: '10,000+', label: 'guests in past 12 months' },
] as const;

export const ANTHONY = {
  name: 'Anthony Johnson',
  role: 'Owner',
  bio: 'Copacabana Hall is owner-operated by Anthony Johnson, who is directly involved from the initial inquiry through the event itself. Couples and event planners work directly with the owner — not a third-party coordinator or a corporate event manager.',
};

export const VENUE_HOURS = [
  { days: 'Mon – Thu', hours: '10 AM – 10 PM' },
  { days: 'Fri – Sun', hours: '10 AM – midnight' },
] as const;

export const VENUE_HOURS_NOTE =
  'Event times may vary by package. Contact us for specifics.';

export const VENUE_GLANCE = [
  { label: 'Address', value: '7107 Navigation Blvd' },
  { label: 'City', value: 'Houston TX 77011' },
  { label: 'Size', value: '9,000 sq ft' },
  { label: 'Capacity', value: '350 guests' },
  { label: 'Owner', value: 'Anthony Johnson' },
  { label: 'Phone', value: '(713) 282-9194' },
] as const;

export const VENUE_HIGHLIGHTS = [
  {
    title: '9,000 Sq Ft Indoor + Outdoor',
    description: 'Ceremony and reception at one Navigation Blvd address — versatile indoor ballroom plus outdoor ceremony grounds.',
  },
  {
    title: '350 Guest Capacity',
    description: 'One of the largest event spaces in Houston\'s East End — seated or standing across flexible indoor and outdoor sections.',
  },
  {
    title: 'All-Inclusive Packages',
    description: 'Wedding and events packages with catering options — owner-operated service from inquiry to event night.',
  },
  {
    title: 'Central East End Location',
    description: '7107 Navigation Blvd — 10 minutes from downtown, 5 minutes from Minute Maid Park, with on-site parking.',
  },
];

export const AMENITIES = [
  '9,000 Sq Ft Event Space',
  'Indoor + Outdoor Ceremonies',
  '350 Guest Capacity',
  'All-Inclusive Packages',
  'On-Site Parking',
  'Catering Options',
  'Wedding & Quinceañera Venue',
  'Corporate Events',
  'Owner-Operated',
];

export const REVIEWS = [
  { id: 1, name: 'Google Reviewer', event: 'Wedding · Google Review', rating: 5, text: "Copacabana Hall exceeded every expectation for our wedding. The indoor and outdoor spaces are stunning, and having ceremony and reception at one address made the day seamless. Anthony and the team were incredible." },
  { id: 2, name: 'Google Reviewer', event: 'Quinceañera · Google Review', rating: 5, text: "We hosted our daughter\'s quinceañera here and it was absolutely beautiful. The venue holds a large crowd comfortably and the decor options are endless. Highly recommend for any celebration." },
  { id: 3, name: 'Google Reviewer', event: 'Corporate Event · Google Review', rating: 5, text: "Professional, spacious, and well maintained. Our corporate event for 200+ guests went flawlessly. Great parking, great location in the East End, and the all-inclusive packages simplified planning." },
  { id: 4, name: 'Google Reviewer', event: 'Birthday Party · Google Review', rating: 5, text: "Rented Copacabana Hall for a milestone birthday and guests are still talking about it. The 9,000 sq ft space feels luxurious and the staff was responsive from booking through event night." },
  { id: 5, name: 'Google Reviewer', event: 'Google Review', rating: 5, text: "One of the best event venues in Houston. Beautiful ballroom, gorgeous outdoor ceremony space, and owner-operated service that makes you feel like a priority — not a number." },
  { id: 6, name: 'Google Reviewer', event: 'Google Review', rating: 4, text: "Large capacity venue with real flexibility for weddings and events. The Navigation Blvd location is easy for guests coming from all over Houston. Would definitely book again." },
] as const;

export type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export const FAQS: FaqItem[] = [
  {
    question: 'What are your rental rates?',
    answer: 'All-inclusive wedding and events packages · Contact us or request a pricing pamphlet',
  },
  {
    question: 'What is your guest capacity?',
    answer: 'Our venue accommodates up to 350 guests depending on layout and event type.',
  },
  {
    question: 'Where are you located?',
    answer: 'We are located at 7107 Navigation Blvd, Houston, TX 77011.',
  },
  {
    question: 'How do I book a tour?',
    answer: 'Contact us through the inquiry form or call us directly to schedule a private tour of the space.',
  },
  {
    question: 'Do you offer parking?',
    answer: 'Yes — on-site and/or street parking is available. Contact us for details specific to your event date.',
  },
];

export { VIDEOS_DATA as VIDEOS, EMBEDS_DATA as EMBEDS } from './videos';
