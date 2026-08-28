export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const VENUE_PACKAGES: PricingPackage[] = [
  {
    id: 'wedding',
    name: 'Wedding Packages',
    price: 'Contact Us',
    description: 'All-inclusive wedding packages with ceremony and reception at 7107 Navigation Blvd.',
    highlighted: true,
    features: ["Indoor + outdoor ceremony options", "Up to 350 guests", "Catering packages available", "Owner-operated planning support"],
  },
  {
    id: 'quince',
    name: 'Quinceañera Packages',
    price: 'Contact Us',
    description: 'Full-service quinceañera celebrations in Houston\'s East End.',
    features: ["Ballroom + outdoor space", "Flexible decor", "All-inclusive options", "Large guest capacity"],
  },
  {
    id: 'corporate',
    name: 'Corporate & Private Events',
    price: 'Contact Us',
    description: 'Corporate events, birthdays, bar mitzvahs, baby showers, and more.',
    features: ["9,000 sq ft flexible layout", "AV-ready space", "Catering coordination", "Central Houston location"],
  },
];

export const ADD_ONS: PricingPackage[] = [];

export const PRICING_NOTES = ["Pricing varies by date, guest count, and package tier \u2014 contact Anthony Johnson for current rates.", "Wedding and events pricing pamphlets available upon request.", "Ceremony and reception at one address \u2014 no venue shuttles required.", "Tours available Monday through Sunday \u00b7 7107 Navigation Blvd, Houston TX 77011."];
