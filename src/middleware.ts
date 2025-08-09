import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const DEFAULT_LOCALE = routing?.defaultLocale || 'es';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Si la ruta es "/" (sin locale), redirige a "/es"
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url));
  }

  // Si no, usa el middleware de next-intl normalmente
  return createMiddleware(routing)(request);
}

export const config = {
  matcher: [
    '/', // para la raíz
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)', // para todas las demás rutas de la app
  ],
};