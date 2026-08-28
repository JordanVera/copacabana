export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePhoto = {
  src: string;
  alt: string;
};

export type ServicePageData = {
  slug: string;
  navLabel: string;
  breadcrumb: string;
  eyebrow: string;
  title: string;
  heroAlt: string;
  heroImage: string;
  lead: string;
  introHeading: string;
  introBody: string[];
  pamphletLabel?: string;
  splitImage: string;
  splitImageAlt: string;
  splitEyebrow: string;
  splitHeading: string;
  splitBody: string[];
  whyEyebrow: string;
  whyHeading: string;
  features: ServiceFeature[];
  highlightsHeading: string;
  highlights: string[];
  extraEyebrow?: string;
  extraHeading?: string;
  extraBody?: string[];
  citiesHeading: string;
  citiesIntro?: string;
  faqsHeading: string;
  faqs: ServiceFaq[];
  gallery: ServicePhoto[];
  metaTitle: string;
  metaDescription: string;
  ctaEyebrow: string;
  ctaHeading: string;
  ctaBody: string;
};

const p = (file: string) => `/photos/events-2026/${file}`;

export const SERVICE_CITIES = [
  { name: 'Houston', drive: '10 min', href: '/wedding-venue-houston' },
  { name: 'Pasadena', drive: '15 min', href: '/wedding-venue-pasadena' },
  { name: 'Pearland', drive: '30 min', href: '/wedding-venue-pearland' },
  { name: 'Sugar Land', drive: '30 min', href: '/wedding-venue-sugar-land' },
  { name: 'Katy', drive: '35 min', href: '/wedding-venue-katy' },
  { name: 'Missouri City', drive: '30 min', href: '/wedding-venue-missouri-city' },
  { name: 'Friendswood', drive: '30 min', href: '/wedding-venue-friendswood' },
  { name: 'Bellaire', drive: '20 min', href: '/wedding-venue-bellaire' },
  { name: 'Deer Park', drive: '20 min', href: '/wedding-venue-deer-park' },
  { name: 'La Porte', drive: '25 min', href: '/wedding-venue-la-porte' },
  { name: 'Webster', drive: '35 min', href: '/wedding-venue-webster' },
  { name: 'Stafford', drive: '30 min', href: '/wedding-venue-stafford' },
  { name: 'Baytown', drive: '30 min', href: '/wedding-venue-baytown' },
  { name: 'League City', drive: '35 min', href: '/wedding-venue-league-city' },
  { name: 'Humble', drive: '35 min', href: '/wedding-venue-humble' },
] as const;

export const SERVICE_TESTIMONIALS = [
  {
    name: 'Rossy Montes',
    text: "I recently attended a business event at Copacabana Hall and was thoroughly impressed. The venue is spacious and well-suited for hosting large gatherings. One standout feature was the valet service, which added a touch of convenience and professionalism to the experience. If you're looking for an event hall that combines size, functionality, and excellent service, Copacabana Hall is a fantastic choice.",
  },
  {
    name: 'Denise Walker',
    text: "This place has been transformed. The ambiance of the hall and grounds is exceptional, close to downtown, well-lit and beautifully designed. It's perfect for your next event — wedding, corporate function, parties and community events. The decor allows you to decorate however you want. The team is professional, courteous and knowledgeable. This facility is top notch. I highly recommend for anyone seeking a hassle-free and memorable event.",
  },
  {
    name: 'Brandon Cortes',
    text: "This venue is an exceptional choice for any celebration, whether it's a wedding, birthday, or corporate event. I personally had my wedding here and it was the night of my life! The combination of elegant design, high-quality amenities, and outstanding service makes it worth every penny. I would recommend Copacabana Hall without hesitation and look forward to attending another event there!",
  },
] as const;

export const SERVICES: ServicePageData[] = [
  {
    slug: 'wedding-venue-houston',
    navLabel: 'Wedding Venue',
    breadcrumb: 'Wedding Venue',
    eyebrow: 'Houston Wedding Venue',
    title: "Wedding Venue at Houston's Premier Event Hall — Copacabana Hall",
    heroImage: p('copacabana-hall-wedding-ceremony-navigation-blvd-04.webp'),
    heroAlt: 'Wedding ceremony at Copacabana Hall Navigation Blvd Houston',
    lead: 'Copacabana Hall at 7107 Navigation Blvd is a 9,000 sq ft Houston wedding venue with capacity for 350 guests. Ceremony and reception at one address. Owner-operated by Anthony Johnson. 4.8-star rating from 72 Google reviews. 22,600 Instagram followers documenting real Houston weddings.',
    introHeading: 'Celebrate Your Dream Wedding at Copacabana Hall',
    introBody: [
      "Copacabana Hall is Houston's premier destination for unforgettable weddings and elegant receptions. Conveniently located at 7107 Navigation Blvd, our stunning venue blends timeless charm with modern amenities, offering a picturesque backdrop for your big day. With a spacious layout, stylish design, and flexible packages, Copacabana Hall is where dream weddings come to life.",
      "Whether you're planning an intimate ceremony or a grand celebration, our versatile space and dedicated team are here to ensure every detail reflects your unique vision. From personalized decor to seamless coordination, we're committed to making your wedding day stress-free and truly unforgettable.",
    ],
    pamphletLabel: 'Download our Wedding Pricing Pamphlet',
    splitImage: p('copacabana-hall-outdoor-wedding-ceremony-houston-13.webp'),
    splitImageAlt: 'Outdoor wedding ceremony at Copacabana Hall Houston',
    splitEyebrow: 'Celebrations Captured',
    splitHeading: 'A Glimpse Into Wedding Moments at Copacabana Hall',
    splitBody: [
      'Every love story begins with a meaningful moment, and at Copacabana Hall, we specialize in creating those moments. Our venue has been the backdrop for countless weddings filled with laughter, tears of joy, and unforgettable memories. From walking down a beautifully adorned aisle to sharing a first dance under soft ambient lighting, couples experience a celebration that truly reflects their love and personality.',
      'Whether your dream wedding is modern and refined or timeless and romantic, our versatile space adapts to your vision. We have designed our venue to feel elegant yet welcoming, with decor possibilities that make it uniquely yours. At Copacabana Hall, every detail is crafted to ensure your day is not only picture perfect but emotionally unforgettable.',
    ],
    whyEyebrow: 'Why Choose Us',
    whyHeading: 'What Makes Us the Perfect Wedding Venue',
    features: [
      {
        title: 'Elegant & Versatile Venue',
        description:
          'Our sophisticated, open layout with high ceilings and refined decor can be adapted to any theme or color scheme, creating a magical ambiance for you and your guests.',
      },
      {
        title: 'Convenient Houston Location',
        description:
          'Situated in a prime area of Houston, our venue is easy to access for both local and out-of-town guests, with ample parking and straightforward directions.',
      },
      {
        title: 'Exceptional Amenities',
        description:
          'Enjoy our spacious dance floor, high-quality sound and lighting systems, and customizable seating arrangements to accommodate your unique wedding day needs.',
      },
      {
        title: 'Professional Planning Support',
        description:
          'Our experienced event planning team will guide you from initial planning through the final farewell, ensuring your wedding day is stress-free and memorable.',
      },
      {
        title: 'Tailored Wedding Packages',
        description:
          'Choose from a variety of flexible wedding packages that allow you to select options that best suit your vision and budget, from table settings to entertainment add-ons.',
      },
      {
        title: 'Dedicated to Your Love Story',
        description:
          "We're committed to making your wedding dreams come true, with a beautiful venue, professional support, and dedication to excellence for your special day.",
      },
    ],
    highlightsHeading:
      '9,000 Sq Ft Wedding Venue at 7107 Navigation Blvd — Ceremony and Reception Together',
    highlights: [
      '350-guest capacity — 3x the average Houston wedding hall',
      'Ceremony + reception at one Navigation Blvd address — no venue shuttles',
      'AV system and uplighting included with every rental',
      'All-inclusive packages starting at $8,999 — $800 off Monday through Friday',
      'Owner Anthony Johnson personally oversees every wedding',
    ],
    citiesHeading:
      'Houston Wedding Venue — Serving Couples from 15 Harris County Cities',
    citiesIntro:
      'Couples drive to 7107 Navigation Blvd from across the Houston metro — Katy (35 min via I-10), Sugar Land (30 min via US-59), Pearland (30 min via TX-288), Pasadena (15 min via TX-225), and Bellaire (20 min inside the Loop).',
    faqsHeading: 'Wedding Venue FAQs — Copacabana Hall Houston',
    faqs: [
      {
        question: 'How far in advance should I book a Houston wedding venue?',
        answer:
          'Saturday dates at Copacabana Hall book 6 to 12 months in advance. Weekday and Sunday dates have more availability. Call (713) 282-9194 to check specific 2026 dates.',
      },
      {
        question: 'Can I have the ceremony and reception at the same venue?',
        answer:
          'Yes. Copacabana Hall at 7107 Navigation Blvd has 9,000 sq ft of indoor and outdoor space that accommodates both ceremony and reception at one address. No venue shuttles required.',
      },
      {
        question: 'Does Copacabana Hall include sound and lighting?',
        answer:
          'Yes. AV system and uplighting are included with venue rental. Full DJ service, ceremony decor, and additional lighting are included in all-inclusive packages.',
      },
      {
        question: 'What is the guest capacity for weddings at Copacabana Hall?',
        answer:
          'Copacabana Hall holds up to 350 guests for weddings — ceremony and reception together. Contact us for floor plan diagrams specific to your guest count.',
      },
      {
        question:
          'Is parking available at 7107 Navigation Blvd for wedding guests?',
        answer:
          'Yes. Copacabana Hall has on-site parking and valet service available. Valet is included in all-inclusive package tiers.',
      },
    ],
    gallery: [
      {
        src: p('copacabana-hall-outdoor-wedding-ceremony-houston-13.webp'),
        alt: 'Outdoor wedding ceremony at Copacabana Hall Houston',
      },
      {
        src: p('copacabana-hall-elegant-wedding-reception-houston.webp'),
        alt: 'Elegant wedding reception at Copacabana Hall Houston',
      },
      {
        src: p('copacabana-hall-ballroom-wedding-copacabana-hall-28.webp'),
        alt: 'Wedding ballroom at Copacabana Hall',
      },
    ],
    metaTitle:
      'Wedding Venue Houston — Copacabana Hall | 9,000 Sq Ft at Navigation Blvd',
    metaDescription:
      "Houston's East End wedding venue — 9,000 sq ft, 350 guests at 7107 Navigation Blvd. Ceremony and reception at one address. Owner-operated by Anthony Johnson.",
    ctaEyebrow: 'Schedule a Wedding Tour',
    ctaHeading: 'Ready to Tour Copacabana Hall?',
    ctaBody:
      '9,000 sq ft at 7107 Navigation Blvd — available for tours Monday through Sunday. Call or submit a request and we will confirm within 24 hours.',
  },
  {
    slug: 'quinceanera-venue-houston',
    navLabel: 'Quinceañera Venue',
    breadcrumb: 'Quinceañera Venue',
    eyebrow: 'Houston Quinceañera Venue',
    title:
      "Quinceañera Venue at Houston's Premier Event Hall — Copacabana Hall",
    heroImage: p('copacabana-hall-quinceanera-celebration-houston-02.webp'),
    heroAlt: 'Quinceañera celebration at Copacabana Hall Houston',
    lead: 'Copacabana Hall at 7107 Navigation Blvd hosts quinceañeras for up to 350 guests in 9,000 sq ft of indoor and outdoor space. Bilingual English/Spanish planning support. Owner Anthony Johnson manages every event on-site. 4.8-star rating from 72 Google reviews.',
    introHeading: 'Celebrate Your Quinceañera in Style at Copacabana Hall',
    introBody: [
      'A quinceañera in Houston typically runs 4 to 6 hours and requires space for multiple phases: the formal entrance and ceremony with the court, the vals waltz and court choreography, the last doll and crown ceremony, the parent dances, and a DJ reception that carries the night. Copacabana Hall at 7107 Navigation Blvd has the floor plan to set up ceremony rows for the entrance, a choreography floor for the vals and court presentations, and a full reception banquet layout — all without moving guests between buildings or paying for a shuttle.',
      "Anthony Johnson and the bilingual English/Spanish team at Copacabana Hall have worked with Houston's Latinx community from Pasadena, Bellaire, and the East End for years. All inclusive packages include luxury backdrops, draping, centerpieces, a rose flowerwall, and DJ service — everything needed for a complete celebration. The venue is at 7107 Navigation Blvd in Houston's East End, 15 minutes from Pasadena via TX-225 and 20 minutes from Bellaire.",
      "Mark your milestone moment with a celebration as unforgettable as the occasion itself. Copacabana Hall is Houston's premier event space for Quinceañeras, offering a luxurious and fully customizable venue designed to bring your vision to life. Located at 7107 Navigation Blvd, our hall blends timeless elegance with modern amenities, perfect for honoring tradition while celebrating your unique style.",
      'With ample space for dancing, dining, and unforgettable entrances, Copacabana Hall sets the scene for an evening full of joy, family, and cherished memories. Our venue includes elegant decor, high quality sound and lighting systems, and the flexibility to match any theme, from classic and regal to bold and contemporary.',
    ],
    pamphletLabel: 'Download our Event Pricing Pamphlet',
    splitImage: p('copacabana-hall-quinceanera-hall-houston-tx-10.webp'),
    splitImageAlt: 'Quinceañera hall at Copacabana Hall',
    splitEyebrow: 'Made for This Celebration',
    splitHeading: 'Space for Every Phase of Your Quinceañera',
    splitBody: [
      'With ample space for dancing, dining, and unforgettable entrances, Copacabana Hall sets the scene for an evening full of joy, family, and cherished memories. Our venue includes elegant decor, high quality sound and lighting systems, and the flexibility to match any theme, from classic and regal to bold and contemporary.',
    ],
    whyEyebrow: 'Why Choose Us',
    whyHeading: 'The Perfect Venue for Your Quinceañera',
    features: [
      {
        title: 'Beautiful Spacious Venue',
        description:
          'Our elegantly designed venue offers ample space for your ceremony, dinner, and dancing with customizable decor options to match your theme and vision.',
      },
      {
        title: 'Central Houston Location',
        description:
          'Conveniently located at 7107 Navigation Blvd in Houston, our venue is easily accessible for all your guests with plenty of parking available.',
      },
      {
        title: 'Premium Audio & Lighting',
        description:
          'Create the perfect atmosphere with our state-of-the-art sound system and customizable lighting options that will enhance your celebration.',
      },
      {
        title: 'Professional Planning Support',
        description:
          'Our friendly, dedicated bilingual staff will assist with all aspects of planning to ensure that your Quinceañera celebration runs smoothly from start to finish.',
      },
      {
        title: 'Flexible Packages',
        description:
          'Choose from our flexible packages that can be tailored to your specific requirements and budget, ensuring you get exactly what you need for your special day.',
      },
      {
        title: 'Exceptional Catering Options',
        description:
          'From traditional cuisine to modern favorites, our catering options can be customized to create the perfect menu for your celebration and guests.',
      },
    ],
    highlightsHeading: 'What Copacabana Hall Provides for Your Quinceañera',
    highlights: [
      '350-guest capacity — fits the full court, immediate family, and extended guests',
      'Choreography floor for vals and court presentations, then resets for reception',
      'Bilingual English/Spanish planning and day-of event support',
      'AV system supports ceremony audio and DJ reception',
      'All-inclusive packages starting at $8,999 — $800 off Monday through Friday',
      'All inclusive packages: backdrops, draping, centerpieces, rose flowerwall, DJ',
      'Indoor ceremony and outdoor cocktail space at one Navigation Blvd address',
    ],
    extraEyebrow: 'Built for Quinceañeras',
    extraHeading: 'Why Copacabana Hall Beats Other Houston Quinceañera Venues',
    extraBody: [
      'Most Houston quinceañera venues fall into one of three categories: banquet halls under 3,000 sq ft that force families to cut the court size or skip outdoor cocktail hour; hotel ballrooms with per-head minimums that inflate the final bill regardless of package; or party houses that rent space but provide no planning support, no bilingual staff, and no AV system for the vals and ceremony audio. None of them were built specifically for quinceañeras.',
      "Copacabana Hall at 7107 Navigation Blvd in Houston's East End was built for exactly this type of event. The 9,000 sq ft floor plan gives room for a court of 14 chambelanes and damas on the choreography floor without compressing the guest tables. The AV system handles ceremony audio, the vals waltz music, and the DJ reception without renting additional sound equipment. The bilingual English/Spanish team has worked quinceañeras in Houston's Latinx community from the East Side, Pasadena, Bellaire, and Katy for years — they know the event timeline, they know the cues, and they do not rush the transitions between phases. That specific knowledge is what separates Copacabana Hall from a generic event hall that takes quinceañera bookings but treats them like any other banquet.",
      'All inclusive packages include luxury backdrops, draping, centerpieces, a rose flowerwall, and DJ service at a flat rate — no per-head surprise charges. Call (713) 282-9194 to schedule a tour and check available 2026 dates.',
    ],
    citiesHeading: 'Quinceañera Venue near Your City',
    faqsHeading: 'Quinceañera FAQs — Copacabana Hall',
    faqs: [
      {
        question:
          'What makes Copacabana Hall the right quinceañera venue in Houston?',
        answer:
          'Copacabana Hall at 7107 Navigation Blvd holds 350 guests — enough for the full court, family, and extended guests that a quinceañera requires. The bilingual English/Spanish staff and the combined indoor and outdoor space make it the right choice for Houston quinceañeras.',
      },
      {
        question: 'How many guests fit for a quinceañera at Copacabana Hall?',
        answer:
          'Up to 350 guests. The 9,000 sq ft space includes indoor ceremony and reception areas plus outdoor space. Contact us for layout options based on your specific guest count and court size.',
      },
      {
        question:
          'Is there space for the vals waltz and court choreography at Copacabana Hall?',
        answer:
          "Yes. Copacabana Hall's layout accommodates ceremony rows for the formal entrance, a choreography floor for the vals and court presentations, and a reception layout for dinner and DJ. All phases happen at one address — no moving between buildings.",
      },
      {
        question:
          'Can I customize decor for my quinceañera at Copacabana Hall?',
        answer:
          'Yes. All inclusive packages include ceremony decor, centerpieces, luxury backdrops, draping, and a rose flowerwall. Contact (713) 282-9194 for 2026 package specifics and available dates.',
      },
      {
        question:
          'Does Copacabana Hall have bilingual planning support for quinceañeras?',
        answer:
          'Yes. The Copacabana Hall team includes bilingual English/Spanish staff who work with Houston families throughout the planning process — from the initial venue tour through the day of the event.',
      },
      {
        question: 'How far is Copacabana Hall from my city for a quinceañera?',
        answer:
          'Copacabana Hall is at 7107 Navigation Blvd, Houston TX 77011. Drive times: Pasadena 15 min via TX-225, Bellaire 20 min, Pearland 30 min via TX-288, Sugar Land 30 min via US-59, Katy 35 min via I-10.',
      },
    ],
    gallery: [
      {
        src: p('copacabana-hall-quinceanera-hall-houston-tx-10.webp'),
        alt: 'Quinceañera hall at Copacabana Hall',
      },
      {
        src: p('copacabana-hall-quinceanera-decor-houston-venue-21.webp'),
        alt: 'Quinceañera decor Houston venue',
      },
      {
        src: p('copacabana-hall-quinceanera-celebration-houston-23.webp'),
        alt: 'Quinceañera celebration Houston',
      },
    ],
    metaTitle:
      'Quinceañera Venue Houston — Copacabana Hall | 350 Guests, Navigation Blvd',
    metaDescription:
      'Houston quinceañera venue at 7107 Navigation Blvd. 9,000 sq ft, 350 guests, bilingual English/Spanish planning. Ceremony, vals, and reception at one address.',
    ctaEyebrow: 'Schedule a Tour',
    ctaHeading: 'Ready to Tour Copacabana Hall?',
    ctaBody:
      '9,000 sq ft at 7107 Navigation Blvd — available for tours Monday through Sunday. Call or submit a request and we will confirm within 24 hours.',
  },
  {
    slug: 'birthday-party-venue-houston',
    navLabel: 'Birthday Party Venue',
    breadcrumb: 'Birthday Party Venue',
    eyebrow: 'Houston Birthday Venue',
    title:
      "Birthday Party Venue at Houston's Premier Event Hall — Copacabana Hall",
    heroImage: p('copacabana-hall-birthday-party-venue-houston-tx.webp'),
    heroAlt: 'Birthday party venue at Copacabana Hall Houston TX',
    lead: 'Copacabana Hall at 7107 Navigation Blvd hosts birthday parties for up to 350 guests in 9,000 sq ft of indoor and outdoor space. Premium sound and lighting included. Owner-operated by Anthony Johnson. 4.8-star rating from 72 Google reviews.',
    introHeading: 'The Perfect Space for Memorable Celebrations',
    introBody: [
      'Transform your birthday into an extraordinary celebration at Copacabana Hall. Our stunning venue in the heart of Houston offers the ideal backdrop for your special day, with a perfect blend of elegance and energy that makes every birthday truly exceptional.',
      "Whether you're planning an intimate gathering or a grand celebration, our versatile space adapts to your vision. With soaring ceilings, customizable layouts, and contemporary design, we create the perfect atmosphere where memories are made and moments are cherished.",
    ],
    pamphletLabel: 'Download our Event Pricing Pamphlet',
    splitImage: p('copacabana-hall-birthday-party-venue-houston-tx-32.webp'),
    splitImageAlt: 'Birthday party celebration at Copacabana Hall Houston',
    splitEyebrow: 'Celebrations Captured',
    splitHeading: 'Moments of Joy and Celebration',
    splitBody: [
      'At Copacabana Hall, every birthday celebration is more than just an event — it is a memory in the making. Our venue has hosted milestone birthdays, from elegant soirées to vibrant themed parties, all designed to reflect the unique personality of each guest of honor. The combination of stunning decor, festive ambiance, and attention to detail creates the perfect setting for unforgettable moments shared with family and friends.',
      'We take pride in providing a space where laughter echoes, smiles abound, and photos capture pure joy. Guests often remark on the energy and warmth that fills the room, whether it is a grand entrance, a first dance, or a heartfelt toast. With customizable layouts and a dedicated team behind every event, Copacabana Hall transforms birthdays into meaningful experiences you will cherish for years to come.',
    ],
    whyEyebrow: 'Why Choose Us',
    whyHeading: 'Elevate Your Birthday Experience',
    features: [
      {
        title: 'Breathtaking Venue',
        description:
          'Our architecturally stunning space creates an instant wow factor with high ceilings, modern design, and luxurious details that set the stage for an exceptional celebration.',
      },
      {
        title: 'Central Houston Location',
        description:
          'Perfectly positioned for easy access from all parts of Houston, with ample parking and clear directions that ensure your guests arrive relaxed and ready to celebrate.',
      },
      {
        title: 'Premium Audio & Lighting',
        description:
          'Set the perfect mood with our state-of-the-art sound and lighting systems that create an immersive atmosphere for dancing, entertainment, and unforgettable moments.',
      },
      {
        title: 'Expert Event Support',
        description:
          'Enjoy peace of mind with our dedicated event specialists who handle the details and logistics, allowing you to be fully present and enjoy your celebration.',
      },
      {
        title: 'Customizable Packages',
        description:
          'Design your perfect celebration with our flexible packages that adapt to your vision, preferences, and budget, ensuring a personalized experience that exceeds expectations.',
      },
      {
        title: 'All-Inclusive Services',
        description:
          'Simplify your planning with our comprehensive offerings from catering to decor, entertainment to technical support — everything you need for a seamless celebration.',
      },
    ],
    highlightsHeading:
      "Birthday Party Venue at 7107 Navigation Blvd — What's Included",
    highlights: [
      '350-guest capacity — 3x the average Houston party hall',
      'Premium sound and lighting systems included',
      'Customizable layouts for any birthday theme or size',
      'All-inclusive packages starting at $8,999 — $800 off Monday through Friday',
      'On-site parking and valet available',
      'Owner Anthony Johnson personally oversees every event',
    ],
    citiesHeading: 'Birthday Party Venue — Serving 15 Houston-Area Cities',
    faqsHeading: 'Birthday Party Venue FAQs — Copacabana Hall Houston',
    faqs: [
      {
        question:
          'What is the capacity for a birthday party at Copacabana Hall?',
        answer:
          'Up to 350 guests at 7107 Navigation Blvd, Houston TX. 9,000 sq ft of indoor and outdoor space. Suitable for intimate gatherings and grand celebrations alike.',
      },
      {
        question:
          'Does Copacabana Hall include sound and lighting for birthday parties?',
        answer:
          'Yes. State-of-the-art sound and lighting systems are included with every rental. DJ service is included in all-inclusive packages.',
      },
      {
        question:
          'Can I customize the decor for my birthday party at Copacabana Hall?',
        answer:
          'Yes. Our flexible packages allow you to select decor options, themes, and layouts that fit your vision and budget. Contact (713) 282-9194 to discuss your specific needs.',
      },
      {
        question:
          'How far in advance should I book a birthday party venue in Houston?',
        answer:
          'Saturday dates at Copacabana Hall book 3 to 6 months in advance for milestone birthday parties. Weekday and Sunday dates have more flexibility. Call (713) 282-9194 to check availability.',
      },
      {
        question:
          'How do I get a quote for a birthday party at Copacabana Hall?',
        answer:
          'Visit the events pricing page to request the pricing pamphlet by email, or call (713) 282-9194 directly.',
      },
    ],
    gallery: [
      {
        src: p('copacabana-hall-birthday-party-venue-houston-tx.webp'),
        alt: 'Birthday party at Copacabana Hall Houston TX',
      },
      {
        src: p('copacabana-hall-birthday-party-venue-houston-tx-32.webp'),
        alt: 'Birthday party venue Copacabana Hall Houston',
      },
      {
        src: p('copacabana-hall-event-space-houston-east-end-06.webp'),
        alt: 'Event space at Copacabana Hall Houston East End',
      },
    ],
    metaTitle:
      'Birthday Party Venue Houston — Copacabana Hall | 7107 Navigation Blvd',
    metaDescription:
      'Houston birthday party venue at 7107 Navigation Blvd. Up to 350 guests, 9,000 sq ft indoor and outdoor space, premium sound and lighting included.',
    ctaEyebrow: 'Plan Your Birthday Party',
    ctaHeading: 'Ready to Tour Copacabana Hall?',
    ctaBody:
      '9,000 sq ft at 7107 Navigation Blvd — available for tours Monday through Sunday. Call or submit a request and we will confirm within 24 hours.',
  },
  {
    slug: 'bar-mitzvah-venue-houston',
    navLabel: 'Bar & Bat Mitzvah',
    breadcrumb: 'Bar Mitzvah and Bat Mitzvah Venue',
    eyebrow: '10 min from Houston',
    title:
      'Bar Mitzvah and Bat Mitzvah Venue Houston Families Drive To — Copacabana Hall Houston',
    heroImage: p('copacabana-hall-bar-mitzvah-venue-houston-tx-16.webp'),
    heroAlt: 'Bar and bat mitzvah venue at Copacabana Hall Houston',
    lead: 'Houston families in the East End and Midtown are 10 minutes from 7107 Navigation Blvd via Navigation Blvd itself — 5 minutes from Minute Maid Park. Copacabana Hall at 7107 Navigation Blvd offers 9,000 sq ft indoor + outdoor space and capacity for 350 guests — ceremony and reception at one address.',
    introHeading: 'Why Houston Families Choose Copacabana Hall',
    introBody: [
      'Houston families in the East End and Midtown are 10 minutes from 7107 Navigation Blvd via Navigation Blvd itself — 5 minutes from Minute Maid Park.',
      '9,000 sq ft venue at 7107 Navigation Blvd — indoor reception space and outdoor ceremony area at one Houston East End address.',
      'Seats up to 350 guests — 3x the average Houston banquet hall. Tables, chairs, AV system, uplighting, and post-event cleaning included in every rental — pricing sent on request.',
      'Houston families get ceremony and reception at one Navigation Blvd address — no venue shuttles. 4.8-star Google rating from 72 verified reviews. 500+ total reviews across 6 platforms. Owner-operated by Anthony Johnson.',
    ],
    splitImage: p('copacabana-hall-bar-mitzvah-venue-houston-tx-37.webp'),
    splitImageAlt: 'Bar mitzvah at Copacabana Hall Houston',
    splitEyebrow: 'Ceremony and Reception Together',
    splitHeading:
      'Why Houston Families Drive to Copacabana Hall for a Bar or Bat Mitzvah',
    splitBody: [
      'Bar and bat mitzvah celebrations need a venue that handles ceremony seating with clear sightlines for the service and microphone coverage for Torah readings and speeches — then resets to a reception with a dance floor for the hora, DJ, and dinner program. Most venues near Houston charge for a second room or require guests to shuttle between ceremony and reception hall. Copacabana Hall at 7107 Navigation Blvd is 10 min from Houston via Navigation Blvd — 9,000 sq ft that handles the ceremony, hora, and catered dinner reception at one Navigation Blvd address.',
      'Outside kosher caterers are welcome — call (713) 282-9194 before booking to arrange kitchen access and preparation coordination. The AV system supports microphone setups for readings, parent speeches, and candle lighting dedications. All inclusive packages include DJ, uplighting, centerpieces, draping, and a luxury backdrop. The venue seats up to 350 guests — enough for the full extended family and synagogue community. On site parking handles family and synagogue guests arriving from Houston and surrounding areas.',
    ],
    whyEyebrow: 'Why Choose Us',
    whyHeading: 'Why Houston Families Choose Copacabana Hall',
    features: [
      {
        title: '10 Minutes from Houston',
        description:
          'Houston families in the East End and Midtown are 10 minutes from 7107 Navigation Blvd via Navigation Blvd itself — 5 minutes from Minute Maid Park.',
      },
      {
        title: '9,000 Sq Ft Indoor + Outdoor',
        description:
          'Indoor reception space and outdoor ceremony area at one Houston East End address — ceremony and reception together, no venue shuttles.',
      },
      {
        title: '350 Guest Capacity',
        description:
          'Seats up to 350 guests — 3x the average Houston banquet hall. Enough for the full extended family and synagogue community.',
      },
      {
        title: 'AV for Readings & Speeches',
        description:
          'The AV system supports microphone setups for Torah readings, parent speeches, and candle lighting dedications, then resets for the hora and DJ.',
      },
      {
        title: 'Kosher Caterers Welcome',
        description:
          'Outside kosher caterers are welcome — call (713) 282-9194 before booking to arrange kitchen access and preparation coordination.',
      },
      {
        title: 'Owner-Operated Service',
        description:
          '4.8-star Google rating from 72 verified reviews. 500+ total reviews across 6 platforms. Owner-operated by Anthony Johnson.',
      },
    ],
    highlightsHeading: "What's Included for Bar and Bat Mitzvah Celebrations",
    highlights: [
      'Tables, chairs, AV system, uplighting, and post-event cleaning included in every rental',
      'Ceremony and reception at one Navigation Blvd address — no venue shuttles',
      'All inclusive packages include DJ, uplighting, centerpieces, draping, and a luxury backdrop',
      'All-inclusive packages are configured for up to 150 guests; the full 350 capacity is available on venue-only rentals and custom packages',
      'On site parking for family and synagogue guests',
    ],
    citiesHeading: 'Houston-Area Cities',
    citiesIntro: 'Brides also drive from:',
    faqsHeading: 'Houston Event Venue — Common Questions',
    faqs: [
      {
        question: 'How far is Copacabana Hall from Houston?',
        answer:
          "Copacabana Hall at 7107 Navigation Blvd is 10 min from Houston via Navigation Blvd. The venue is in Houston's East End, near Minute Maid Park.",
      },
      {
        question:
          'Why do Houston families choose Copacabana Hall for bar mitzvah and bat mitzvah venue?',
        answer:
          'Houston families in the East End and Midtown are 10 minutes from 7107 Navigation Blvd via Navigation Blvd itself — 5 minutes from Minute Maid Park. Copacabana Hall holds 350 guests across 9,000 sq ft of indoor and outdoor space at one Navigation Blvd address — ceremony and reception together, AV system included, owner-operated by Anthony Johnson with a 4.8-star Google rating.',
      },
      {
        question:
          'How do I get pricing for a bar mitzvah and bat mitzvah venue at Copacabana Hall?',
        answer:
          'Pricing for weddings and all events is sent by request. Visit the pricing page to receive the current pamphlet by email, or call (713) 282-9194. Anthony Johnson responds within 24 hours with 2026 availability and package details.',
      },
      {
        question:
          'What is the guest capacity for bar mitzvah and bat mitzvah venue at Copacabana Hall?',
        answer:
          'Copacabana Hall seats up to 350 guests across 9,000 sq ft of indoor reception space and outdoor ceremony and cocktail area. All-inclusive packages are configured for up to 150 guests; the full 350 capacity is available on venue-only rentals and custom packages.',
      },
    ],
    gallery: [
      {
        src: p('copacabana-hall-bar-mitzvah-venue-houston-tx-16.webp'),
        alt: 'Bar mitzvah at Copacabana Hall Houston',
      },
      {
        src: p('copacabana-hall-indoor-reception-hall-houston-14.webp'),
        alt: 'Indoor reception hall Houston',
      },
      {
        src: p('copacabana-hall-banquet-hall-350-guests-houston.webp'),
        alt: '350-guest banquet hall Houston',
      },
    ],
    metaTitle: 'Bar Mitzvah Venue Near Houston | Copacabana Hall — Houston TX',
    metaDescription:
      'Bar and bat mitzvah venue at 7107 Navigation Blvd, Houston. 9,000 sq ft, 350 guests, ceremony and reception at one address. Kosher caterers welcome.',
    ctaEyebrow: 'Schedule a Tour',
    ctaHeading: 'Ready to Tour Copacabana Hall?',
    ctaBody:
      '9,000 sq ft at 7107 Navigation Blvd — available for tours Monday through Sunday. Call or submit a request and we will confirm within 24 hours.',
  },
  {
    slug: 'corporate-event-venue-houston',
    navLabel: 'Corporate Events',
    breadcrumb: 'Corporate Events',
    eyebrow: 'Houston Corporate Venue',
    title:
      "Corporate Event Venue at Houston's Premier Event Hall — Copacabana Hall",
    heroImage: p(
      'copacabana-hall-corporate-event-space-navigation-blvd-15.webp',
    ),
    heroAlt: 'Corporate event space at Copacabana Hall Navigation Blvd',
    lead: 'Copacabana Hall at 7107 Navigation Blvd is a 9,000 sq ft Houston corporate event venue with capacity for 350 guests. AV system, projection, and uplighting included. Owner-operated by Anthony Johnson. 4.8-star rating from 72 Google reviews.',
    introHeading: 'A Professional Setting for Exceptional Business Events',
    introBody: [
      'Host your next corporate event in a venue that makes a lasting impression. Copacabana Hall offers a sophisticated and versatile space tailored to the needs of modern businesses and organizations. Conveniently located at 7107 Navigation Blvd in Houston, our venue combines refined style with practical amenities, perfect for conferences, workshops, networking events, product launches, holiday parties, and executive meetings.',
      'Designed with flexibility in mind, our open layout, high ceilings, and stylish decor create an environment that is both professional and inspiring. With state of the art audio visual equipment and customizable seating arrangements, Copacabana Hall supports a seamless experience from keynote presentations to breakout sessions and beyond. Whether you are gathering your team or hosting clients, we ensure your event is executed with excellence and ease.',
    ],
    pamphletLabel: 'Download our Event Pricing Pamphlet',
    splitImage: p(
      'copacabana-hall-corporate-event-space-navigation-blvd-36.webp',
    ),
    splitImageAlt: 'Corporate event at Copacabana Hall Houston',
    splitEyebrow: 'Moments That Matter',
    splitHeading: 'Where Productivity Meets Experience',
    splitBody: [
      'At Copacabana Hall, we have hosted everything from strategic planning retreats to festive holiday parties, creating an atmosphere that is both energizing and professional. Our venue is designed to foster collaboration and connection, giving your team the space to think creatively, celebrate milestones, and build stronger relationships. The stylish yet functional layout allows you to create memorable experiences that leave a lasting impression. Whether it is a daytime seminar or an evening awards banquet, the environment sets the tone for success.',
      "From launching a new product to recognizing your company's top performers, every event here is treated with thoughtful care. Our staff works closely with you to align every detail with your goals, making sure everything runs smoothly from start to finish. With flexible design options and full service amenities, we help bring your corporate vision to life. At Copacabana Hall, your event is more than a meeting — it's a moment worth remembering.",
    ],
    whyEyebrow: 'Why Choose Us',
    whyHeading: "Houston's Preferred Venue for Corporate Events",
    features: [
      {
        title: 'Professional & Versatile Venue',
        description:
          'Our event hall combines sophistication and functionality, offering the ideal atmosphere for corporate meetings and social gatherings with stylish decor and a professional ambiance.',
      },
      {
        title: 'Convenient Houston Location',
        description:
          'Positioned in the heart of Houston with easy access for both local attendees and out-of-town guests, plus convenient parking and proximity to major transportation routes.',
      },
      {
        title: 'Premium Audio & Lighting',
        description:
          'High-quality sound systems, lighting options, and projection equipment ensure effective communication and engaging presentations for a seamless experience.',
      },
      {
        title: 'Experienced Event Planning Support',
        description:
          'Our dedicated team helps with every aspect from setup and logistics to ambiance and decor, ensuring your event runs smoothly and professionally.',
      },
      {
        title: 'Customizable Space & Flexible Layouts',
        description:
          'Our versatile floor plan can be arranged for any event type or size, from banquet-style networking to theater seating for presentations and product launches.',
      },
      {
        title: 'Full-Service Catering & Amenities',
        description:
          'Enhance your event with curated catering options from light refreshments to full buffets or seated dinner service, through our partnerships with quality local caterers.',
      },
    ],
    highlightsHeading:
      "Corporate Event Venue at 7107 Navigation Blvd — What's Included",
    highlights: [
      '350-guest capacity — fits conferences, galas, and networking events',
      'AV system, projection, and uplighting included with rental',
      'Flexible seating: theater, banquet, or hybrid configurations',
      'All-inclusive packages starting at $8,999 — $800 off Monday through Friday',
      'On-site parking and valet service available',
      'Owner Anthony Johnson oversees every event personally',
    ],
    citiesHeading: 'Corporate Event Venue — Serving Houston-Area Businesses',
    faqsHeading: 'Corporate Event FAQs — Copacabana Hall Houston',
    faqs: [
      {
        question: 'What types of corporate events does Copacabana Hall host?',
        answer:
          'Copacabana Hall at 7107 Navigation Blvd hosts conferences, workshops, networking events, product launches, holiday parties, and executive meetings. 350-guest capacity with AV equipment included.',
      },
      {
        question:
          'Does Copacabana Hall have AV equipment for corporate events?',
        answer:
          'Yes. High-quality sound systems, lighting options, and projection equipment are available. Full AV setup is included with corporate event rentals.',
      },
      {
        question:
          'What is the capacity for corporate events at Copacabana Hall?',
        answer:
          'Up to 350 guests. The 9,000 sq ft space can be arranged for banquet-style networking, theater seating for presentations, or hybrid layouts for multi-phase events.',
      },
      {
        question:
          'Where is Copacabana Hall located for Houston corporate events?',
        answer:
          '7107 Navigation Blvd, Houston TX 77011. 10 minutes from downtown Houston, easy access from I-10, I-45, and US-59. On-site parking and valet available.',
      },
      {
        question: 'How do I book a corporate event at Copacabana Hall?',
        answer:
          'Call (713) 282-9194 or visit the contact page. Our event team responds within 24 hours with availability, layout options, and package details.',
      },
    ],
    gallery: [
      {
        src: p('copacabana-hall-corporate-event-space-navigation-blvd-15.webp'),
        alt: 'Corporate event space at Navigation Blvd Copacabana Hall',
      },
      {
        src: p('copacabana-hall-corporate-event-space-navigation-blvd-36.webp'),
        alt: 'Corporate event at Copacabana Hall Navigation Blvd',
      },
      {
        src: p('copacabana-hall-corporate-event-venue-houston-24.webp'),
        alt: 'Corporate event venue Houston Copacabana Hall',
      },
    ],
    metaTitle:
      'Corporate Event Venue Houston — Copacabana Hall | 7107 Navigation Blvd',
    metaDescription:
      'Houston corporate event venue at 7107 Navigation Blvd. 9,000 sq ft, 350 guests, AV, projection, and uplighting included. Conferences, galas, and holiday parties.',
    ctaEyebrow: 'Book a Corporate Event',
    ctaHeading: 'Ready to Tour Copacabana Hall?',
    ctaBody:
      '9,000 sq ft at 7107 Navigation Blvd — available for tours Monday through Sunday. Call or submit a request and we will confirm within 24 hours.',
  },
  {
    slug: 'funeral-reception-houston',
    navLabel: 'Funeral Reception',
    breadcrumb: 'Funeral Reception Hall',
    eyebrow: '10 min from Houston',
    title: 'The Houston Funeral Reception Hall Near Houston — Copacabana Hall',
    heroImage: p('copacabana-hall-indoor-reception-hall-houston-14.webp'),
    heroAlt: 'Indoor reception hall at Copacabana Hall Houston',
    lead: 'Houston families in the East End and Midtown are 10 minutes from 7107 Navigation Blvd via Navigation Blvd itself — 5 minutes from Minute Maid Park. Copacabana Hall at 7107 Navigation Blvd offers 9,000 sq ft indoor + outdoor space and capacity for 350 guests — ceremony and reception at one address.',
    introHeading: 'Why Houston Families Choose Copacabana Hall',
    introBody: [
      'Houston families in the East End and Midtown are 10 minutes from 7107 Navigation Blvd via Navigation Blvd itself — 5 minutes from Minute Maid Park.',
      '9,000 sq ft venue at 7107 Navigation Blvd — indoor reception space and outdoor ceremony area at one Houston East End address. Seats up to 350 guests — 3x the average Houston banquet hall.',
      'Tables, chairs, AV system, uplighting, and post-event cleaning included in every rental — pricing sent on request. 4.8-star Google rating from 72 verified reviews. 500+ total reviews across 6 platforms. Owner-operated by Anthony Johnson.',
    ],
    splitImage: p('copacabana-hall-reception-hall-350-guest-houston-05.webp'),
    splitImageAlt: 'Reception hall 350 guests Houston',
    splitEyebrow: 'A Private, Respectful Space',
    splitHeading:
      'Why Houston Families Choose Copacabana Hall for a Funeral Reception',
    splitBody: [
      'Funeral reception venues near Houston are typically limited to church fellowship halls and funeral home lounges that cap at 50 to 80 guests and lack catering coordination or AV for tribute video presentations. Copacabana Hall at 7107 Navigation Blvd is 10 min from Houston via Navigation Blvd — a private, respectful event space that seats up to 350 guests for a catered reception, supports tribute slideshows and video through the AV system, and handles large family gatherings with on site parking and valet service.',
      'Outside caterers are welcome. Tables, chairs, AV system, and uplighting are included. All inclusive packages add catering coordination, decor, and a full service team. Copacabana Hall does not rent the space to multiple events on the same day — your family has the venue privately for the reception. Owner Anthony Johnson manages every event personally. Call (713) 282-9194 to check available dates and discuss what your family needs. We respond within 24 hours.',
    ],
    whyEyebrow: 'Why Choose Us',
    whyHeading: 'A Private Hall for Families Gathering Together',
    features: [
      {
        title: 'Private Venue for Your Family',
        description:
          'Copacabana Hall does not rent the space to multiple events on the same day — your family has the venue privately for the reception.',
      },
      {
        title: 'Room for Large Gatherings',
        description:
          'Seats up to 350 guests across 9,000 sq ft — a respectful alternative to church fellowship halls and funeral home lounges that cap at 50 to 80 guests.',
      },
      {
        title: 'Tribute Video & AV Support',
        description:
          'The AV system supports tribute slideshows and video presentations so families can share memories with everyone in the room.',
      },
      {
        title: 'Catering Coordination',
        description:
          'Outside caterers are welcome. Tables, chairs, AV system, and uplighting are included. All inclusive packages add catering coordination, decor, and a full service team.',
      },
      {
        title: 'On-Site Parking & Valet',
        description:
          'On site parking and valet service handle large family gatherings arriving from Houston and surrounding cities.',
      },
      {
        title: 'Owner-Operated Care',
        description:
          'Owner Anthony Johnson manages every event personally. Call (713) 282-9194 — we respond within 24 hours.',
      },
    ],
    highlightsHeading: 'Funeral Reception at 7107 Navigation Blvd',
    highlights: [
      'Private reception — the venue is not shared with another event the same day',
      '350-guest capacity for large family gatherings',
      'AV system for tribute slideshows and video presentations',
      'Tables, chairs, uplighting, and post-event cleaning included',
      'Outside caterers welcome; all-inclusive packages available',
    ],
    citiesHeading: 'Houston-Area Cities',
    faqsHeading: 'Houston Event Venue — Common Questions',
    faqs: [
      {
        question: 'How far is Copacabana Hall from Houston?',
        answer:
          "Copacabana Hall at 7107 Navigation Blvd is 10 min from Houston via Navigation Blvd. The venue is in Houston's East End, near Minute Maid Park.",
      },
      {
        question:
          'Why do Houston families choose Copacabana Hall for funeral reception hall?',
        answer:
          'Copacabana Hall holds 350 guests across 9,000 sq ft of indoor and outdoor space at one Navigation Blvd address — a private, respectful event space with AV for tribute presentations, owner-operated by Anthony Johnson with a 4.8-star Google rating.',
      },
      {
        question:
          'How do I get pricing for a funeral reception hall at Copacabana Hall?',
        answer:
          'Pricing for weddings and all events is sent by request. Visit the pricing page to receive the current pamphlet by email, or call (713) 282-9194. Anthony Johnson responds within 24 hours with 2026 availability and package details.',
      },
      {
        question:
          'What is the guest capacity for funeral reception hall at Copacabana Hall?',
        answer:
          'Copacabana Hall seats up to 350 guests across 9,000 sq ft of indoor reception space and outdoor ceremony and cocktail area. All-inclusive packages are configured for up to 150 guests; the full 350 capacity is available on venue-only rentals and custom packages.',
      },
    ],
    gallery: [
      {
        src: p('copacabana-hall-reception-hall-350-guest-houston-05.webp'),
        alt: 'Reception hall 350 guests Houston',
      },
      {
        src: p('copacabana-hall-indoor-reception-hall-houston-35.webp'),
        alt: 'Indoor reception hall Houston',
      },
      {
        src: p('copacabana-hall-banquet-hall-navigation-blvd-houston-29.webp'),
        alt: 'Banquet hall Navigation Blvd',
      },
    ],
    metaTitle:
      'The Houston Funeral Reception Hall Near Houston — Copacabana Hall | Navigation Blvd Houston',
    metaDescription:
      'Funeral reception hall at 7107 Navigation Blvd, Houston. Private 9,000 sq ft venue for up to 350 guests, AV for tribute videos, owner-operated.',
    ctaEyebrow: 'Schedule a Tour',
    ctaHeading: 'Ready to Tour Copacabana Hall?',
    ctaBody:
      '9,000 sq ft at 7107 Navigation Blvd — available for tours Monday through Sunday. Call or submit a request and we will confirm within 24 hours.',
  },
  {
    slug: 'reception-hall-houston',
    navLabel: 'Reception Hall',
    breadcrumb: 'Reception Hall',
    eyebrow: 'Houston Reception Hall',
    title: "Reception Hall at Houston's Premier Event Hall — Copacabana Hall",
    heroImage: p('copacabana-hall-reception-hall-houston-east-end.webp'),
    heroAlt: 'Reception hall at Copacabana Hall Houston East End',
    lead: 'Copacabana Hall at 7107 Navigation Blvd hosts reception hall events for up to 350 guests. 9,000 sq ft indoor and outdoor at one address. Owner-operated by Anthony Johnson. 4.8-star rating from 72 Google reviews.',
    introHeading:
      "Celebrate Life's Special Moments at Houston's Top Reception Hall",
    introBody: [
      "Copacabana Hall is Houston's premier reception hall for unforgettable celebrations. Located at 7107 Navigation Blvd, our venue blends modern elegance with versatile functionality, making it the perfect space for birthdays, weddings, corporate events, and more. Whether you're planning an intimate gathering or a grand affair, our spacious, open layout allows you to design the event of your dreams with ease.",
      'With high ceilings, stylish decor, and built-in lighting and sound systems, our reception hall sets the stage for a celebration that feels elevated yet personal. From lively birthday parties to refined wedding receptions and polished corporate events, we provide the ideal atmosphere for every type of occasion. At Copacabana Hall, your event becomes a unique experience guests will remember.',
    ],
    pamphletLabel: 'Download our Event Pricing Pamphlet',
    splitImage: p('copacabana-hall-reception-hall-350-guest-houston-05.webp'),
    splitImageAlt: 'Reception hall at Copacabana Hall Houston 350 guests',
    splitEyebrow: 'Memories in the Making',
    splitHeading: 'Your Celebration Starts Here',
    splitBody: [
      "At Copacabana Hall, every event becomes more than just a gathering — it becomes a lasting memory. From milestone birthday parties to elegant receptions and inspiring corporate events, we have proudly hosted celebrations of every kind. Our venue's versatile layout and sophisticated style allow you to tailor the space to fit your theme, energy, and guest experience. Whatever you envision, we help bring it to life with style and intention.",
      'From the moment you schedule your tour to the final guest departure, our team is dedicated to delivering a seamless and memorable experience. We guide you through every detail, ensuring your event runs smoothly and reflects your goals. Whether you are planning a family celebration or a professional gathering, Copacabana Hall is the reception hall that turns your vision into reality.',
    ],
    whyEyebrow: 'Why Choose Us',
    whyHeading: "Houston's Preferred Venue for Private Celebrations",
    features: [
      {
        title: 'Elegant and Adaptable Space',
        description:
          'Our reception hall features high ceilings, chic decor, and an open layout that can be tailored to fit any style or theme, from romantic weddings to professional corporate settings.',
      },
      {
        title: 'Convenient Houston Location',
        description:
          'Situated in the heart of Houston, Copacabana Hall offers easy access for guests traveling from all over the area with ample parking and clear directions.',
      },
      {
        title: 'Full-Service Amenities',
        description:
          'Our venue is fully equipped with high-quality sound and lighting systems, a spacious dance floor, and flexible seating options to create the atmosphere you envision.',
      },
      {
        title: 'Professional Event Planning Assistance',
        description:
          'Our experienced team supports you at every step, from planning details and decor to seamless day-of coordination for an enjoyable and stress-free event.',
      },
      {
        title: 'Customizable Celebration Packages',
        description:
          'Whether hosting an intimate gathering or a large celebration, we offer tailored rental packages to fit your event type and budget with everything you need.',
      },
      {
        title: 'Personalized Service',
        description:
          'We take pride in providing attentive, personalized service for each celebration, ensuring your special day reflects your unique vision and exceeds expectations.',
      },
    ],
    highlightsHeading:
      '9,000 Sq Ft Reception Hall at Navigation Blvd — 350-Guest Capacity',
    highlights: [
      '350-guest capacity at 7107 Navigation Blvd, Houston TX',
      '9,000 sq ft indoor and outdoor space at one address',
      'AV system, uplighting, tables, chairs, and cleaning included',
      'All-inclusive packages starting at $8,999 — $800 off Monday through Friday',
      'Owner Anthony Johnson personally oversees every event',
    ],
    citiesHeading: 'Guests Drive from 15 Houston-Area Cities',
    faqsHeading: 'Common Questions — Reception Hall at Copacabana Hall',
    faqs: [
      {
        question:
          'What is the guest capacity for Reception Hall at Copacabana Hall?',
        answer:
          'Up to 350 guests at 7107 Navigation Blvd, Houston TX 77011. 9,000 sq ft indoor and outdoor space.',
      },
      {
        question: 'Where is Copacabana Hall located?',
        answer:
          "7107 Navigation Blvd, Houston TX 77011 in Houston's East End. 10 minutes from downtown Houston.",
      },
      {
        question: 'Does Copacabana Hall include AV and sound?',
        answer:
          'Yes. AV system and uplighting are included with every rental. DJ service is included in all-inclusive packages.',
      },
      {
        question: 'Is parking available at Copacabana Hall?',
        answer:
          'Yes. On-site parking and valet available. Valet is included in select packages.',
      },
      {
        question: 'How do I book a Reception Hall at Copacabana Hall?',
        answer:
          'Call (713) 282-9194 or submit a tour request on the contact page. We respond within 24 hours.',
      },
    ],
    gallery: [
      {
        src: p('copacabana-hall-banquet-hall-350-guests-houston.webp'),
        alt: 'Banquet hall 350 guests at Copacabana Hall Houston',
      },
      {
        src: p('copacabana-hall-banquet-hall-navigation-blvd-houston-08.webp'),
        alt: 'Banquet hall at Navigation Blvd Houston',
      },
      {
        src: p('copacabana-hall-indoor-reception-hall-houston-35.webp'),
        alt: 'Indoor reception hall at Copacabana Hall',
      },
    ],
    metaTitle:
      'Reception Hall Houston — Copacabana Hall | 7107 Navigation Blvd',
    metaDescription:
      'Houston reception hall at 7107 Navigation Blvd. 9,000 sq ft indoor and outdoor space for up to 350 guests. Weddings, birthdays, corporate events, and more.',
    ctaEyebrow: 'Check Availability',
    ctaHeading: 'Ready to Tour Copacabana Hall?',
    ctaBody:
      '9,000 sq ft at 7107 Navigation Blvd — available for tours Monday through Sunday. Call or submit a request and we will confirm within 24 hours.',
  },
  {
    slug: 'event-hall-rental-houston',
    navLabel: 'Event Hall Rental',
    breadcrumb: 'Event Hall Rental',
    eyebrow: 'Houston Event Hall',
    title:
      "Event Hall Rental at Houston's Premier Event Hall — Copacabana Hall",
    heroImage: p('copacabana-hall-event-hall-rental-houston.webp'),
    heroAlt: 'Event hall rental at Copacabana Hall Houston',
    lead: "Copacabana Hall at 7107 Navigation Blvd is Houston's premier event hall for every occasion. 9,000 sq ft indoor and outdoor space. 350-guest capacity. AV, uplighting, tables, and chairs included. Owner-operated by Anthony Johnson. 4.8-star rating from 72 Google reviews.",
    introHeading: "Houston's Event Hall for Every Celebration",
    introBody: [
      'Copacabana Hall is the premier event hall in Houston, offering a beautiful and versatile space for birthdays, weddings, corporate gatherings, and more. Conveniently located at 7107 Navigation Blvd, our venue combines modern style with functionality to create the perfect setting for any type of celebration. With thoughtful amenities, spacious design, and a dedicated team, we help turn your event into something truly memorable.',
      'Whether you are hosting an intimate dinner, a milestone birthday, or a full scale corporate event, our flexible layout can be tailored to match your style and vision. From the first impression to the final toast, Copacabana Hall is where Houston comes together to celebrate with elegance and ease.',
    ],
    pamphletLabel: 'Download our Event Pricing Pamphlet',
    splitImage: p('copacabana-hall-event-space-houston-east-end-06.webp'),
    splitImageAlt: 'Event space at Copacabana Hall Houston East End',
    splitEyebrow: 'Every Occasion',
    splitHeading: 'A Hall That Adapts to Your Event',
    splitBody: [
      'Whether you are hosting an intimate dinner, a milestone birthday, or a full scale corporate event, our flexible layout can be tailored to match your style and vision. From the first impression to the final toast, Copacabana Hall is where Houston comes together to celebrate with elegance and ease.',
    ],
    whyEyebrow: 'Why Choose Us',
    whyHeading: "Houston's Premier Event Hall Benefits",
    features: [
      {
        title: 'Flexible and Stylish Space',
        description:
          'Our Houston event hall features an open layout with high ceilings and tasteful decor that can be customized to fit any theme, color scheme, or celebration type for truly personalized events.',
      },
      {
        title: 'Convenient Houston Location',
        description:
          'Centrally located at 7107 Navigation Blvd, our event hall is easily accessible for guests from all over Houston with ample parking and a convenient address for stress-free arrival.',
      },
      {
        title: 'Complete Event Amenities',
        description:
          'Our Houston event hall comes fully equipped with high-quality sound and lighting systems, a spacious dance floor, and customizable seating options for the perfect atmosphere.',
      },
      {
        title: 'Dedicated Event Support Team',
        description:
          'Our professional event team assists with every detail, from planning and setup to day-of coordination, so you can focus on enjoying your event without stress or worry.',
      },
      {
        title: 'Flexible Event Hall Packages',
        description:
          'We offer a variety of event hall rental packages to suit any occasion and budget, providing options that let you select the amenities and services that fit your specific needs.',
      },
      {
        title: 'Versatile Event Configurations',
        description:
          'Our event hall adapts beautifully to any event type — from chic weddings and fun birthday celebrations to professional corporate meetings and elegant galas.',
      },
    ],
    highlightsHeading:
      "Event Hall Rental at 7107 Navigation Blvd — What's Included",
    highlights: [
      '350-guest capacity — fits weddings, galas, corporate events, and parties',
      '9,000 sq ft indoor and outdoor at one Navigation Blvd address',
      'AV system, uplighting, tables, chairs, and cleaning included',
      'All-inclusive packages starting at $8,999 — $800 off Monday through Friday',
      'On-site parking and valet service available',
      'Owner Anthony Johnson personally oversees every event',
    ],
    citiesHeading: 'Event Hall Rental — Serving 15 Houston-Area Cities',
    faqsHeading: 'Event Hall Rental FAQs — Copacabana Hall Houston',
    faqs: [
      {
        question: 'What types of events can I hold at Copacabana Hall?',
        answer:
          'Copacabana Hall at 7107 Navigation Blvd hosts weddings, quinceañeras, birthday parties, corporate events, networking events, galas, holiday parties, funeral receptions, and more. 350-guest capacity.',
      },
      {
        question: 'What does the event hall rental include at Copacabana Hall?',
        answer:
          'Rental includes 9,000 sq ft of indoor and outdoor space, AV system, uplighting, dance floor, tables, chairs, and cleaning. All-inclusive packages add catering, DJ, decor, and more.',
      },
      {
        question:
          'What is the capacity for event hall rental at Copacabana Hall?',
        answer:
          'Up to 350 guests at 7107 Navigation Blvd, Houston TX. The open floor plan can be configured for ceremony, banquet, theater, or cocktail-style layouts.',
      },
      {
        question: 'Is parking available at Copacabana Hall?',
        answer:
          'Yes. On-site parking and valet service are available. Valet is included in select all-inclusive packages.',
      },
      {
        question: 'How do I get event hall rental pricing for Copacabana Hall?',
        answer:
          'Visit the pricing page to request our pricing pamphlet by email, or call (713) 282-9194 to speak directly with our event team.',
      },
    ],
    gallery: [
      {
        src: p('copacabana-hall-event-hall-rental-houston-east-end-40.webp'),
        alt: 'Event hall rental Houston East End Copacabana Hall',
      },
      {
        src: p('copacabana-hall-event-hall-rental-houston.webp'),
        alt: 'Event hall rental Houston Copacabana Hall',
      },
      {
        src: p('copacabana-hall-banquet-hall-navigation-blvd-houston-29.webp'),
        alt: 'Banquet hall Navigation Blvd Houston Copacabana Hall',
      },
    ],
    metaTitle:
      'Event Hall Rental Houston — Copacabana Hall | 7107 Navigation Blvd',
    metaDescription:
      'Event hall rental in Houston at 7107 Navigation Blvd. 9,000 sq ft, 350 guests, AV, uplighting, tables, and chairs included. Owner-operated by Anthony Johnson.',
    ctaEyebrow: 'Check Availability',
    ctaHeading: 'Ready to Tour Copacabana Hall?',
    ctaBody:
      '9,000 sq ft at 7107 Navigation Blvd — available for tours Monday through Sunday. Call or submit a request and we will confirm within 24 hours.',
  },
  {
    slug: 'baby-shower-venue-houston',
    navLabel: 'Baby Shower Venue',
    breadcrumb: 'Baby Shower Venue Houston',
    eyebrow: 'Houston Baby Shower Venue',
    title:
      "Baby Shower Venue at Houston's Premier Event Hall — Copacabana Hall",
    heroImage: p('copacabana-hall-baby-shower-venue-houston-tx-17.webp'),
    heroAlt: 'Baby shower venue at Copacabana Hall Houston TX',
    lead: 'Copacabana Hall at 7107 Navigation Blvd hosts baby showers for Houston families from intimate 50-person gatherings to 350-guest celebrations. Catering, decor, AV system, and uplighting are available in all inclusive packages. Owner Anthony Johnson operates the venue directly. 4.8-star rating from 72 Google reviews.',
    introHeading: "Houston's Baby Shower Venue at Navigation Blvd",
    introBody: [
      'The 9,000 sq ft indoor and outdoor space at Navigation Blvd gives families room for a seated catered brunch or lunch, a gift opening station, games and activities setup, a dessert table, and photo moments with a luxury backdrop — all at one address. The outdoor area can be used for lawn games, overflow seating, or a fresh-air cocktail section while the indoor tables are being reset.',
      "All inclusive packages include catering coordination, centerpieces, draping, and a rose flowerwall for photo moments. Outside vendors — bakers, photographers, decorators — are welcome with advance notice. Copacabana Hall is at 7107 Navigation Blvd in Houston's East End, 10 minutes from downtown. Baby shower guests drive in from Pasadena (15 min via TX-225), Pearland (30 min via TX-288), Sugar Land (30 min via US-59), and Katy (35 min via I-10). On site parking and valet service are available.",
    ],
    splitImage: p('copacabana-hall-baby-shower-venue-houston-tx-38.webp'),
    splitImageAlt: 'Baby shower at Copacabana Hall',
    splitEyebrow: 'Any Size Celebration',
    splitHeading:
      'Why Houston Families Choose Copacabana Hall for Baby Showers',
    splitBody: [
      'Baby showers in Houston split between restaurant private dining rooms that cap at 40 guests and event venues with large minimums built for 300-person weddings. Copacabana Hall fills the gap: a purpose-built event venue that accommodates showers of any size without forcing families to pay for more space than they need or compress 150 guests into a restaurant back room.',
      'The 4.8-star Google rating reflects events that were executed the way families planned them. For baby showers, that means a venue team that understands the schedule — games, gift opening, the catered meal, the photo moments — and sets up accordingly. Call (713) 282-9194 or use the contact form to check available dates and get a quote within 24 hours.',
    ],
    whyEyebrow: 'Why Choose Us',
    whyHeading: 'What Copacabana Hall Includes for Baby Showers',
    features: [
      {
        title: 'Intimate or Large',
        description:
          'Baby showers from intimate 50-person gatherings to 350-guest celebrations at Navigation Blvd. The space scales to your guest list without a minimum head count requirement.',
      },
      {
        title: 'All-Inclusive Packages',
        description:
          'Catering, decor, AV system, and uplighting are available in all inclusive packages — plus centerpieces, draping, and a rose flowerwall for photo moments.',
      },
      {
        title: 'Photo-Ready Decor',
        description:
          'Luxury backdrops, draping, centerpieces, and a rose flowerwall are available so families can capture gift opening, games, and group photos in one setting.',
      },
      {
        title: 'Outside Vendors Welcome',
        description:
          'Outside bakers, photographers, and decorators are welcome with advance notice. Contact us before booking to confirm your vendor list and coordinate kitchen and setup access.',
      },
      {
        title: '10 Minutes from Downtown',
        description:
          "7107 Navigation Blvd in Houston's East End, with on site parking and valet. Guests drive in from Pasadena, Pearland, Sugar Land, Katy, and across the metro.",
      },
      {
        title: 'Owner-Operated',
        description:
          'Owner Anthony Johnson personally oversees every event. The team understands the baby shower schedule — games, gift opening, the catered meal, the photo moments.',
      },
    ],
    highlightsHeading: 'What Copacabana Hall Includes for Baby Showers',
    highlights: [
      'Intimate or large baby showers — 50 to 350 guests at Navigation Blvd',
      'Catering, decor, AV system, and uplighting in all inclusive packages',
      'Luxury backdrops, draping, centerpieces, and rose flowerwall available',
      'Outside bakers, photographers, and decorators welcome',
      '10 minutes from downtown Houston with on site parking and valet',
      'Owner Anthony Johnson personally oversees every event',
    ],
    extraEyebrow: 'Serving Greater Houston',
    extraHeading: 'Serving Houston Families Across the Metro',
    extraBody: [
      'Copacabana Hall at 7107 Navigation Blvd draws baby shower guests from across Greater Houston. Drive times: Pasadena 15 min via TX-225, Bellaire 20 min, Pearland 30 min via TX-288, Sugar Land 30 min via US-59, League City 35 min via I-45, Katy 35 min via I-10, Humble 30 min via US-59 North. On site parking handles guests arriving from all directions.',
    ],
    citiesHeading: 'Serving Houston Families Across the Metro',
    faqsHeading: 'Baby Shower Venue FAQs — Copacabana Hall',
    faqs: [
      {
        question:
          'What is the guest capacity for a baby shower at Copacabana Hall?',
        answer:
          'Copacabana Hall at 7107 Navigation Blvd accommodates baby showers from intimate 50-person gatherings to 350-guest celebrations. The 9,000 sq ft indoor and outdoor space scales to your guest list without a minimum head count requirement.',
      },
      {
        question: 'Does Copacabana Hall provide catering for baby showers?',
        answer:
          'Yes. Catering, decor, and AV services are available through all inclusive packages. Outside caterers are also welcome. Contact (713) 282-9194 for current 2026 package details and available dates.',
      },
      {
        question:
          'What decor is available for a baby shower at Copacabana Hall?',
        answer:
          'All inclusive packages include centerpieces, uplighting, draping, and custom decor coordination. A luxury backdrop and rose flowerwall are available for photo moment setups. Outside decorators are also welcome with advance coordination.',
      },
      {
        question: 'Is parking available at Copacabana Hall for baby showers?',
        answer:
          'Yes. On site parking at 7107 Navigation Blvd handles guest lists of all sizes. Valet service is available for larger events. The venue is 10 minutes from downtown Houston and accessible from I-10, I-45, and US-59.',
      },
      {
        question:
          'Can I bring my own baker and outside vendors to a baby shower at Copacabana Hall?',
        answer:
          'Yes. Outside vendors — bakers, photographers, decorators — are welcome with advance notice. Contact (713) 282-9194 before booking to confirm your vendor list and coordinate kitchen and setup access.',
      },
      {
        question: 'How do I book a baby shower venue at Copacabana Hall?',
        answer:
          'Call (713) 282-9194 or submit a request on the contact page. We respond within 24 hours with available dates and package pricing.',
      },
    ],
    gallery: [
      {
        src: p('copacabana-hall-baby-shower-venue-houston-tx-17.webp'),
        alt: 'Baby shower at Copacabana Hall',
      },
      {
        src: p('copacabana-hall-banquet-hall-navigation-blvd-houston-08.webp'),
        alt: 'Banquet hall Navigation Blvd Houston',
      },
      {
        src: p('copacabana-hall-event-space-houston-east-end-06.webp'),
        alt: 'Event space Houston East End',
      },
    ],
    metaTitle:
      'Baby Shower Venue Houston — Copacabana Hall | 7107 Navigation Blvd',
    metaDescription:
      'Houston baby shower venue at 7107 Navigation Blvd. Intimate 50-guest gatherings to 350-guest celebrations. Catering, decor, and rose flowerwall available.',
    ctaEyebrow: 'Check Availability',
    ctaHeading: 'Ready to Tour Copacabana Hall?',
    ctaBody:
      '9,000 sq ft at 7107 Navigation Blvd — available for tours Monday through Sunday. Call or submit a request and we will confirm within 24 hours.',
  },
];

export const SERVICE_NAV = SERVICES.map((service) => ({
  label: service.navLabel,
  href: `/${service.slug}`,
}));

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((service) => service.slug);
