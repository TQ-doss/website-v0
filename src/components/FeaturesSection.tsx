import { useTranslations } from 'next-intl';

const ICONS = ['⚡', '🎨', '🌍', '🔒'];

export default function FeaturesSection() {
  const t = useTranslations('features');

  const features = [
    { icon: ICONS[0], title: t('item1Title'), desc: t('item1Desc') },
    { icon: ICONS[1], title: t('item2Title'), desc: t('item2Desc') },
    { icon: ICONS[2], title: t('item3Title'), desc: t('item3Desc') },
    { icon: ICONS[3], title: t('item4Title'), desc: t('item4Desc') },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t('subtitle')}</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-bento gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="scroll-reveal glassmorphism p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
