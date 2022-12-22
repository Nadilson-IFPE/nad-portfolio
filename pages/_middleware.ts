import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.url.includes('en/blog')) {
    return NextResponse.rewrite(new URL('/underConstruction', req.url))
  }
}
