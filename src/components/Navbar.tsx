// src/components/Navbar.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  navItems?: NavItem[];
  locale?: string;
}

const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ navItems = defaultNavItems, locale }: NavbarProps) {
  const router = useRouter();
  const isRTL = locale === 'ar';

  return (
    <nav
      className="glassmorphism sticky top-0 z-50 w-full px-6 py-4"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary magnetic-pull">
          website-v0
        </Link>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors hover:text-primary ${
                  router.pathname === item.href ? 'text-primary font-semibold' : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          {router.locales?.map((loc) => (
            <Link
              key={loc}
              href={router.pathname}
              locale={loc}
              className={`rounded px-2 py-1 text-sm transition-colors ${
                router.locale === loc
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {loc.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
