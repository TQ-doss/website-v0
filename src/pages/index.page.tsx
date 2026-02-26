// src/pages/index.page.tsx
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import BentoGrid from '@/components/BentoGrid';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';
import { BentoItemConfig } from '@/types';

const bentoItems: BentoItemConfig[] = [
  { itemName: 'Web Development', itemType: 'Service', isAvailable: true },
  { itemName: 'UI/UX Design', itemType: 'Service', isAvailable: true },
  { itemName: 'SEO Optimization', itemType: 'Service', isAvailable: true },
  { itemName: 'Mobile Apps', itemType: 'Service', isAvailable: false },
  { itemName: 'API Integration', itemType: 'Service', isAvailable: true },
  { itemName: 'Analytics', itemType: 'Service', isAvailable: false },
];

interface HomeProps {
  locale: string;
}

export default function Home({ locale }: HomeProps) {
  const metadata = generateMetadata(
    'website-v0 – Professional Services',
    'We provide the best professional services in web development, design, and more.',
    'https://example.com',
  );

  const isRTL = locale === 'ar';

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonicalUrl} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex min-h-screen flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
        <Navbar locale={locale} />
        <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12">
          {/* Hero Section */}
          <section className="mb-16 text-center fade-in">
            <h1 className="mb-4 text-5xl font-bold">
              {isRTL ? 'مرحبًا بك في موقعنا' : 'Welcome to Our Website'}
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              {isRTL
                ? 'نقدم لك أفضل الخدمات المهنية'
                : 'We provide the best professional services'}
            </p>
            <a
              href="#services"
              className="magnetic-pull inline-block rounded-xl bg-primary px-8 py-3 text-white transition-colors hover:opacity-90"
            >
              {isRTL ? 'ابدأ الآن' : 'Get Started'}
            </a>
          </section>

          {/* Bento Grid Services */}
          <section id="services" className="mb-16">
            <h2 className="mb-8 text-3xl font-semibold">
              {isRTL ? 'خدماتنا' : 'Our Services'}
            </h2>
            <BentoGrid items={bentoItems} />
          </section>
        </main>
        <Footer rights={isRTL ? 'جميع الحقوق محفوظة' : 'All rights reserved'} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale: locale ?? 'en',
    },
  };
};
