// next.config.js

/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'page.mjs'],
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
};
