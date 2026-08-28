import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePage from '@/components/services/ServicePage';
import ServiceAreaPage from '@/components/services/ServiceAreaPage';
import { COMPANY } from '@/lib/data';
import { getServiceBySlug, SERVICE_SLUGS } from '@/lib/services';
import { getServiceAreaBySlug, SERVICE_AREA_SLUGS } from '@/lib/service-areas';

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [...SERVICE_SLUGS, ...SERVICE_AREA_SLUGS].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (service) {
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      openGraph: {
        title: service.metaTitle,
        description: service.metaDescription,
        type: 'website',
        images: [{ url: service.heroImage, alt: service.heroAlt }],
      },
      keywords: `${service.navLabel}, ${COMPANY.name}, Houston event venue, 7107 Navigation Blvd`,
    };
  }

  const area = getServiceAreaBySlug(slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      type: 'website',
      images: [{ url: area.heroImage, alt: area.heroAlt }],
    },
    keywords: `${area.city} wedding venue, ${COMPANY.name}, Houston event venue, 7107 Navigation Blvd`,
  };
}

export default async function ServiceRoutePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (service) return <ServicePage service={service} />;

  const area = getServiceAreaBySlug(slug);
  if (!area) notFound();

  return <ServiceAreaPage area={area} />;
}
