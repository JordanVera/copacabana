import Hero from '@/components/home/Hero';
import StatsStrip from '@/components/home/StatsStrip';
import Welcome from '@/components/home/Welcome';
import CelebrationsMosaic from '@/components/home/CelebrationsMosaic';
import GalleryTeaser from '@/components/home/GalleryTeaser';
import VenueExperience from '@/components/home/VenueExperience';
import PricingPreview from '@/components/home/PricingPreview';
import VideosSection from '@/components/home/VideosSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaStrip from '@/components/home/CtaStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <StatsStrip /> */}
      <Welcome />
      <CelebrationsMosaic />
      <GalleryTeaser />
      <VenueExperience />
      <PricingPreview />
      <VideosSection />
      <TestimonialsSection />
      <CtaStrip
        imageSrc="/photos/events-2026/copacabana-hall-ballroom-wedding-copacabana-hall-28.webp"
        imageAlt="Copacabana Hall ballroom ready for an elegant wedding reception"
        eyebrow="Your date · your vision · your celebration"
        heading={
          <>
            See it in person.
            <em className="block text-accent italic">Imagine it as yours.</em>
          </>
        }
        body="Tour the ballroom and outdoor ceremony grounds, meet the team, and picture your celebration at 7107 Navigation Blvd."
      />
    </>
  );
}
