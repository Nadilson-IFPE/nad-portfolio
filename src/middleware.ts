import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: [
    '/',
    '/about',
    '/cv',
    '/projetos',
    '/contatos',
    '/blog',
    '/en/about',
    '/en/cv',
    '/en/projetos',
    '/en/contatos',
    '/en/blog',
    '/api/hello'
    //'/((?!api|_next/static|image|favicon.ico).*)',
  ], // paths on which middleware will work
}

const isProtectedRoute = (pathname: string) => {
  return pathname.startsWith('/api/hello');
}

export async function middleware(request: NextRequest) {
  const locale = request.cookies.get('NEXT_LOCALE')
  
  if (locale !== undefined && request.nextUrl.locale !== locale) {
    return NextResponse.redirect(
      new URL(`/${locale}${request.nextUrl.pathname}`, request.url)
    )
  }

  if(request.method != 'POST'){
    if (isProtectedRoute(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/401', request.url));
    }
   }

  if(request.method != 'POST'){
    if (isProtectedRoute(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/401', request.url));
    }
   }

  return NextResponse.next()
}
