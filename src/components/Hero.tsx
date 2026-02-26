import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl bg-[oklch(70%_0.15_250)]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl bg-[oklch(85%_0.2_145)]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 fade-in">
          ✨ Now available — version 0
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 fade-in">
          <span className="text-[oklch(45%_0.15_250)]">{t('headline')}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 fade-in">
          {t('subheadline')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in">
          <Link
            href="/#pricing"
            className="magnetic-pull px-8 py-4 rounded-xl font-semibold text-white bg-[oklch(70%_0.15_250)] hover:bg-[oklch(65%_0.18_250)] transition-all shadow-lg shadow-blue-200"
          >
            {t('cta')}
          </Link>
          <Link
            href="/#features"
            className="magnetic-pull px-8 py-4 rounded-xl font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-md border border-gray-200"
          >
            {t('ctaSecondary')}
          </Link>
        </div>
      </div>
    </section>
  );
}
