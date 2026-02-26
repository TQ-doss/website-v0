import { ReactNode } from 'react';
import Navigation from './Navigation';
import { useTranslations } from 'next-intl';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const t = useTranslations('footer');

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-2">website-v0</h3>
              <p className="text-sm">{t('tagline')}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">{t('links')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/#pricing" className="hover:text-white transition-colors">{t('links')}</a></li>
                <li><a href="/#blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">{t('legal')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">{t('privacy')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('terms')}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
