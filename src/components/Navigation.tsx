import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const LOCALES = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
];

export default function Navigation() {
  const t = useTranslations('nav');
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          website-v0
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li><Link href="/" className="hover:text-primary transition-colors">{t('home')}</Link></li>
          <li><Link href="/#features" className="hover:text-primary transition-colors">{t('about')}</Link></li>
          <li><Link href="/#pricing" className="hover:text-primary transition-colors">{t('pricing')}</Link></li>
          <li><Link href="/#blog" className="hover:text-primary transition-colors">{t('blog')}</Link></li>
          <li><Link href="/#contact" className="hover:text-primary transition-colors">{t('contact')}</Link></li>
        </ul>

        <div className="hidden md:flex items-center gap-2">
          {LOCALES.map((loc) => (
            <button
              key={loc.code}
              onClick={() => switchLocale(loc.code)}
              className={`px-2 py-1 text-xs rounded transition-colors ${
                router.locale === loc.code
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {loc.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-white/20">
          <ul className="flex flex-col gap-3 pt-4 px-4 text-sm font-medium">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>{t('home')}</Link></li>
            <li><Link href="/#features" onClick={() => setMenuOpen(false)}>{t('about')}</Link></li>
            <li><Link href="/#pricing" onClick={() => setMenuOpen(false)}>{t('pricing')}</Link></li>
            <li><Link href="/#blog" onClick={() => setMenuOpen(false)}>{t('blog')}</Link></li>
            <li><Link href="/#contact" onClick={() => setMenuOpen(false)}>{t('contact')}</Link></li>
          </ul>
          <div className="flex items-center gap-2 px-4 pt-4">
            {LOCALES.map((loc) => (
              <button
                key={loc.code}
                onClick={() => { switchLocale(loc.code); setMenuOpen(false); }}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  router.locale === loc.code
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
