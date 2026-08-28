import type { ServiceFaq, ServicePhoto } from '@/lib/services';

export type ServiceAreaPageData = {
  slug: string;
  city: string;
  driveTime: string;
  driveVia: string;
  breadcrumb: string;
  title: string;
  heroImage: string;
  heroAlt: string;
  lead: string;
  whyHeading: string;
  highlights: string[];
  splitImage: string;
  splitImageAlt: string;
  splitHeading: string;
  splitBody: string[];
  faqsHeading: string;
  faqs: ServiceFaq[];
  gallery: ServicePhoto[];
  metaTitle: string;
  metaDescription: string;
};

const p = (file: string) => `/photos/events-2026/${file}`;

const AREA_PHOTOS = {
  hero: p('copacabana-hall-wedding-reception-houston-tx-01.webp'),
  split: p('copacabana-hall-ballroom-wedding-copacabana-hall-07.webp'),
  outdoor: p('copacabana-hall-outdoor-wedding-ceremony-houston-13.webp'),
  decor: p('copacabana-hall-wedding-decor-houston-tx-venue-09.webp'),
} as const;

const SHARED_GALLERY: ServicePhoto[] = [
  {
    src: AREA_PHOTOS.split,
    alt: 'Ballroom wedding at Copacabana Hall',
  },
  {
    src: AREA_PHOTOS.outdoor,
    alt: 'Outdoor wedding ceremony Houston',
  },
  {
    src: AREA_PHOTOS.decor,
    alt: 'Wedding decor at Copacabana Hall Houston',
  },
];

type AreaInput = {
  slug: string;
  city: string;
  driveTime: string;
  driveVia: string;
  lead: string;
  nearby: string;
};

function defineArea({
  slug,
  city,
  driveTime,
  driveVia,
  lead,
  nearby,
}: AreaInput): ServiceAreaPageData {
  return {
    slug,
    city,
    driveTime,
    driveVia,
    breadcrumb: `Wedding Venue / ${city}`,
    title: `The Houston Wedding Venue ${city} Couples Drive To — Copacabana Hall`,
    heroImage: AREA_PHOTOS.hero,
    heroAlt: 'Wedding reception at Copacabana Hall — Houston TX',
    lead: `Copacabana Hall at 7107 Navigation Blvd offers 9,000 sq ft indoor + outdoor space and capacity for 350 guests — ceremony and reception at one address.`,
    whyHeading: `Why ${city} Couples Choose Copacabana Hall`,
    highlights: [
      lead,
      '9,000 sq ft venue at 7107 Navigation Blvd — indoor reception space and outdoor ceremony area at one Houston East End address',
      'Seats up to 350 guests — 3x the average Houston banquet hall',
      'Tables, chairs, AV system, uplighting, and post-event cleaning included in every rental — pricing sent on request',
      `${city} couples get ceremony and reception at one Navigation Blvd address — no venue shuttles`,
      '4.8-star Google rating from 72 verified reviews. 500+ total reviews across 6 platforms. Owner-operated by Anthony Johnson',
    ],
    splitImage: AREA_PHOTOS.split,
    splitImageAlt: 'Ballroom wedding at Copacabana Hall',
    splitHeading: `Why ${city} Couples Drive to Copacabana Hall Instead of a Local Wedding Venue`,
    splitBody: [
      `Wedding venues in ${city} typically require couples to book a ceremony space and a separate reception hall — two contracts, two security deposits, and a shuttle to move guests between addresses. Copacabana Hall at 7107 Navigation Blvd puts ceremony and reception under one 9,000 sq ft roof. ${city} couples making the ${driveTime} drive ${driveVia} leave with a single venue booking that covers both programs, on site parking for 350 guests, and an AV system included in the base rental.`,
      `All inclusive wedding packages at Copacabana Hall include DJ, centerpieces, draping, a luxury backdrop, rose flowerwall, and valet — everything a comparable ${city} venue would charge separately. Current pricing is sent by request through the wedding pricing pamphlet. Outside caterers are welcome for couples who prefer their own food vendor. Anthony Johnson is on-site for every wedding, not a day-of coordinator hired the week of. The 4.8-star Google rating from 72 reviews and 22,600 Instagram followers reflect real Houston weddings at Navigation Blvd, not staged photos.`,
    ],
    faqsHeading: `${city} Event Venue — Common Questions`,
    faqs: [
      {
        question: `How far is Copacabana Hall from ${city}?`,
        answer: `Copacabana Hall at 7107 Navigation Blvd is ${driveTime} from ${city} ${driveVia}. The venue is in Houston's East End, ${nearby}.`,
      },
      {
        question: `Why do ${city} couples choose Copacabana Hall for wedding venue?`,
        answer: `${lead} Copacabana Hall holds 350 guests across 9,000 sq ft of indoor and outdoor space at one Navigation Blvd address — ceremony and reception together, AV system included, owner-operated by Anthony Johnson with a 4.8-star Google rating.`,
      },
      {
        question: 'How do I get pricing for a wedding venue at Copacabana Hall?',
        answer:
          'Pricing for weddings and all events is sent by request. Visit the pricing page to receive the current pamphlet by email, or call (713) 282-9194. Anthony Johnson responds within 24 hours with 2026 availability and package details.',
      },
      {
        question: 'What is the guest capacity for wedding venue at Copacabana Hall?',
        answer:
          'Copacabana Hall seats up to 350 guests across 9,000 sq ft of indoor reception space and outdoor ceremony and cocktail area. All-inclusive packages are configured for up to 150 guests; the full 350 capacity is available on venue-only rentals and custom packages.',
      },
    ],
    gallery: SHARED_GALLERY,
    metaTitle: `The Houston Wedding Venue ${city} Couples Drive To — Copacabana Hall | Navigation Blvd Houston`,
    metaDescription: `${lead} ${driveTime} ${driveVia} to 7107 Navigation Blvd. 9,000 sq ft, 350 guests, ceremony and reception at one address.`,
  };
}

export const SERVICE_AREAS: ServiceAreaPageData[] = [
  defineArea({
    slug: 'wedding-venue-pasadena',
    city: 'Pasadena',
    driveTime: '15 min',
    driveVia: 'via I-610 E and TX-225',
    lead: 'Pasadena brides on the East Side are 15 minutes west via TX-225 — closer to Navigation Blvd than most Houston inner-loop venues.',
    nearby: 'near Strawberry Road corridor',
  }),
  defineArea({
    slug: 'wedding-venue-pearland',
    city: 'Pearland',
    driveTime: '30 min',
    driveVia: 'via TX-288 N and I-45',
    lead: "Pearland's Shadow Creek Ranch and Silverlake neighborhoods drive 30 minutes north on TX-288 to reach Navigation Blvd's 350-guest capacity.",
    nearby: 'near Pearland Town Center',
  }),
  defineArea({
    slug: 'wedding-venue-sugar-land',
    city: 'Sugar Land',
    driveTime: '30 min',
    driveVia: 'via US-59 N and 610 Loop',
    lead: "Sugar Land's First Colony and Telfair neighborhoods drive 30 min via US-59 N — Houston's East End hosts what Sugar Land venues can't match for guest capacity.",
    nearby: 'near First Colony Mall',
  }),
  defineArea({
    slug: 'wedding-venue-katy',
    city: 'Katy',
    driveTime: '35 min',
    driveVia: 'via I-10 E',
    lead: 'Katy couples near Cinco Ranch book weekdays to save significantly vs Saturday — 35 minutes east on I-10 to Navigation Blvd.',
    nearby: 'near Cinco Ranch and LaCenterra',
  }),
  defineArea({
    slug: 'wedding-venue-missouri-city',
    city: 'Missouri City',
    driveTime: '30 min',
    driveVia: 'via US-59 N and Beltway 8',
    lead: "Missouri City's Sienna Plantation and Quail Valley communities drive 30 min via US-59 N to 7107 Navigation Blvd.",
    nearby: 'near Sienna Plantation',
  }),
  defineArea({
    slug: 'wedding-venue-friendswood',
    city: 'Friendswood',
    driveTime: '30 min',
    driveVia: 'via I-45 N and TX-518',
    lead: "Friendswood brides along FM 518 drive 30 minutes north on I-45 — Copacabana Hall's ceremony + reception at one address removes venue shuttle logistics.",
    nearby: 'near FM 518 corridor',
  }),
  defineArea({
    slug: 'wedding-venue-bellaire',
    city: 'Bellaire',
    driveTime: '20 min',
    driveVia: 'via I-610 W (inside Loop)',
    lead: 'Bellaire is inside the Loop — Copacabana Hall on Navigation Blvd is 20 minutes east on I-610, making it one of the closest large-capacity venues to this enclave city.',
    nearby: 'near Bellaire Blvd commercial strip',
  }),
  defineArea({
    slug: 'wedding-venue-deer-park',
    city: 'Deer Park',
    driveTime: '20 min',
    driveVia: 'via I-610 E and TX-225',
    lead: 'Deer Park couples near the San Jacinto Monument corridor drive 20 minutes west via I-610 and TX-225 to reach Navigation Blvd.',
    nearby: 'near San Jacinto Monument',
  }),
  defineArea({
    slug: 'wedding-venue-la-porte',
    city: 'La Porte',
    driveTime: '25 min',
    driveVia: 'via I-610 E, TX-225, and TX-146',
    lead: "La Porte couples near Sylvan Beach Park drive 25 min via TX-225 and I-610 to Navigation Blvd's 350-guest hall.",
    nearby: 'near Sylvan Beach Park',
  }),
  defineArea({
    slug: 'wedding-venue-webster',
    city: 'Webster',
    driveTime: '35 min',
    driveVia: 'via I-45 S',
    lead: 'Webster couples along the NASA/JSC corridor drive 35 minutes north on I-45 to Navigation Blvd.',
    nearby: 'near NASA Johnson Space Center corridor',
  }),
  defineArea({
    slug: 'wedding-venue-stafford',
    city: 'Stafford',
    driveTime: '30 min',
    driveVia: 'via US-59 N',
    lead: "Stafford couples drive 30 min north on US-59 — Copacabana Hall's bilingual English/Spanish support makes it the natural choice for Stafford's diverse wedding market.",
    nearby: 'near Stafford Municipal School District area',
  }),
  defineArea({
    slug: 'wedding-venue-baytown',
    city: 'Baytown',
    driveTime: '30 min',
    driveVia: 'via I-10 E',
    lead: 'Baytown couples near the San Jacinto River drive 30 min west on I-10 to Navigation Blvd.',
    nearby: 'near San Jacinto River corridor',
  }),
  defineArea({
    slug: 'wedding-venue-league-city',
    city: 'League City',
    driveTime: '35 min',
    driveVia: 'via I-45 S',
    lead: "League City and Clear Lake couples drive 35 min north on I-45 — Copacabana Hall's 9,000 sq ft surpasses anything in the Bay Area corridor.",
    nearby: 'near Clear Lake area',
  }),
  defineArea({
    slug: 'wedding-venue-humble',
    city: 'Humble',
    driveTime: '35 min',
    driveVia: 'via I-10 W and Beltway 8 N',
    lead: 'Humble couples near Deerbrook Mall drive 35 min south via Beltway 8 and I-10 to Navigation Blvd.',
    nearby: 'near Deerbrook Mall area',
  }),
];

export function getServiceAreaBySlug(slug: string) {
  return SERVICE_AREAS.find((area) => area.slug === slug);
}

export const SERVICE_AREA_SLUGS = SERVICE_AREAS.map((area) => area.slug);

export const SERVICE_AREA_NAV = SERVICE_AREAS.map((area) => ({
  label: area.city,
  href: `/${area.slug}`,
  drive: area.driveTime,
}));
