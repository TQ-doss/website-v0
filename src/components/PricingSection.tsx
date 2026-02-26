import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { PricingTier } from '@/types';

const TIERS_DATA: Omit<PricingTier, 'tierName'>[] = [
  { price: 0, features: [] },
  { price: 29, features: [] },
  { price: 99, features: [] },
];

export default function PricingSection() {
  const t = useTranslations('pricing');
  const [annual, setAnnual] = useState(false);

  const tiers: PricingTier[] = [
    {
      tierName: t('tier1Name'),
      price: TIERS_DATA[0].price,
      features: [t('tier1Features.0'), t('tier1Features.1'), t('tier1Features.2')],
    },
    {
      tierName: t('tier2Name'),
      price: TIERS_DATA[1].price,
      features: [t('tier2Features.0'), t('tier2Features.1'), t('tier2Features.2'), t('tier2Features.3')],
    },
    {
      tierName: t('tier3Name'),
      price: TIERS_DATA[2].price,
      features: [t('tier3Features.0'), t('tier3Features.1'), t('tier3Features.2'), t('tier3Features.3'), t('tier3Features.4')],
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-gray-500 text-lg mb-8">{t('subtitle')}</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full p-1 border border-gray-200 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !annual ? 'bg-[oklch(70%_0.15_250)] text-white shadow' : 'text-gray-500'
              }`}
            >
              {t('monthly')}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                annual ? 'bg-[oklch(70%_0.15_250)] text-white shadow' : 'text-gray-500'
              }`}
            >
              {t('annually')}
              <span className="ml-1.5 text-xs text-green-600 font-semibold">{t('saveLabel')}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => {
            const displayPrice = annual && tier.price > 0
              ? Math.round(tier.price * 0.8)
              : tier.price;
            const isPopular = i === 1;

            return (
              <div
                key={tier.tierName}
                className={`scroll-reveal relative rounded-2xl p-8 ${
                  isPopular
                    ? 'bg-[oklch(70%_0.15_250)] text-white shadow-2xl scale-105'
                    : 'bg-white border border-gray-200 shadow-md'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[oklch(85%_0.2_145)] text-gray-800 text-xs font-bold px-4 py-1.5 rounded-full shadow">
                    {t('popular')}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.tierName}</h3>
                <div className="flex items-end gap-1 my-4">
                  <span className="text-4xl font-extrabold">${displayPrice}</span>
                  <span className={`text-sm mb-1 ${isPopular ? 'text-blue-100' : 'text-gray-400'}`}>/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <span className={isPopular ? 'text-blue-200' : 'text-green-500'}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all magnetic-pull ${
                    isPopular
                      ? 'bg-white text-[oklch(70%_0.15_250)] hover:bg-blue-50'
                      : 'bg-[oklch(70%_0.15_250)] text-white hover:bg-[oklch(65%_0.18_250)]'
                  }`}
                >
                  {t('cta')}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
