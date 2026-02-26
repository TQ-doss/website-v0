import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import BlogSection from '@/components/BlogSection';
import { generateMetadata } from '@/lib/metadata';
import { professionalService } from '@/lib/schema';

export default function HomePage() {
  const meta = generateMetadata(
    'website-v0 — Build Faster, Ship Smarter',
    'A modern platform for teams who care about quality and speed.',
    'https://website-v0.example.com',
    'https://website-v0.example.com/og-image.png'
  );

  const schemaJson = JSON.stringify({
    ...professionalService,
    name: 'website-v0',
    serviceType: 'Software Development',
    areaServed: 'Worldwide',
    provider: 'website-v0 Team',
  });

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonicalUrl} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.canonicalUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaJson }}
        />
      </Head>
      <Layout>
        <Hero />
        <FeaturesSection />
        <PricingSection />
        <BlogSection />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`../../messages/${locale ?? 'en'}.json`)).default;
  return {
    props: { messages },
  };
};
