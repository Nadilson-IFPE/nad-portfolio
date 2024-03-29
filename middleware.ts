import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/about', '/cv', '/projetos', '/blog'], // paths on which middleware will work
}

export function middleware(request: NextRequest) {
  const locale = request.cookies.get('NEXT_LOCALE')
  if (locale !== undefined && request.nextUrl.locale !== locale) {
    return NextResponse.redirect(
      new URL(`/${locale}${request.nextUrl.pathname}`, request.url)
    )
  }

  return NextResponse.next()
}
