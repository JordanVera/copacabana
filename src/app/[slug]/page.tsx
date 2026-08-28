import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePage from '@/components/services/ServicePage';
import { COMPANY } from '@/lib/data';
import { getServiceBySlug, SERVICE_SLUGS } from '@/lib/services';

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

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

export default async function ServiceRoutePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServicePage service={service} />;
}
