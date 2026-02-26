// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fr', 'es', 'ar'],
    defaultLocale: 'en',
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
};

module.exports = nextConfig;
