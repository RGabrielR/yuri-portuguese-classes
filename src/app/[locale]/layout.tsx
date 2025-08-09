import { getMessages } from "next-intl/server";
import IntlProviderWrapper from "@/components/IntlProviderWrapper";
import { routing } from "@/i18n/routing";
import { Locale } from "../../../messages/type";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: Locale };
}) {
  // Si no hay locale o no es válido, usa "es"
  const locale =
    params.locale && routing.locales.includes(params.locale)
      ? params.locale
      : routing.defaultLocale || "es";

  const messages = await getMessages({ locale });

  return (
    <IntlProviderWrapper messages={messages} locale={locale}>
      {children}
    </IntlProviderWrapper>
  );
}