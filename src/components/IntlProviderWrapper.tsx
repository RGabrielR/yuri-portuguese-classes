'use client';

import { Locale, NextIntlClientProvider } from 'next-intl';
import Navbar from '@/components/layout/Navbar';

interface IntlProviderWrapperProps {
  locale?: Locale;
  messages: Record<string, any>;
  children: React.ReactNode;
}

export default function IntlProviderWrapper({ messages, children, locale }: IntlProviderWrapperProps) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Navbar />
      {children}
    </NextIntlClientProvider>
  );
}
