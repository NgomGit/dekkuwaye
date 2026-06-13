import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 1. Si l'URL commence exactement par /en ou /en/
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    // On extrait la suite de la route (ex: /en/concept devient /concept)
    const newPathname = pathname === '/en' ? '/' : pathname.replace('/en', '');
    
    // On crée la nouvelle URL cible
    const url = request.nextUrl.clone();
    url.pathname = newPathname;

    // On force une redirection propre vers l'URL sans le "/en"
    return NextResponse.redirect(url);
  }

  // Si la route n'a pas de "/en", on laisse passer normalement
  return NextResponse.next();
}

// Configuration pour cibler uniquement les routes applicatives
export const config = {
  matcher: [
    /*
     * Match toutes les routes sauf celles qui commencent par :
     * - api (routes d'API)
     * - _next/static (fichiers statiques)
     * - _next/image (optimisation d'images Next.js)
     * - favicon.ico, logo-gisgis.jpg, etc. (fichiers dans public/)
     */
    '/((?!api|_next/static|_next/image|.*\\..*).*)',
  ],
};