import type { AppProps } from 'next/app';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import '@/styles/animations.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale ?? 'en'}
      timeZone="UTC"
      messages={pageProps.messages ?? {}}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
