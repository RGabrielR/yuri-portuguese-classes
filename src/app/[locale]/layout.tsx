import { getMessages } from "next-intl/server";
import IntlProviderWrapper from "@/components/IntlProviderWrapper";
import { routing } from "@/i18n/routing";


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const routingsToString = routing.locales.map((loc) => loc.toString());
  // Si no hay locale o no es válido, usa "es"
  const { locale} = await params;
  const localeParam =
    locale && routingsToString.includes(locale)
      ? locale
      : routing?.defaultLocale || "es";

  const messages = await getMessages({ locale });

  return (
    <IntlProviderWrapper messages={messages} locale={localeParam}>
      {children}
    </IntlProviderWrapper>
  );
}