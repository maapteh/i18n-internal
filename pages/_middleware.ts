import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.includes('.') || // exclude all files in the public folder
    pathname.startsWith('/api') // exclude all API routes
  ) {
    return undefined;
  }

  // Get hostname (e.g. vercel.com, test.vercel.app, etc.)
  // const hostname = req.headers.get('host')

  // Prevent security issues – users should not be able to canonically access
  if (pathname.startsWith(`/locales`)) {
    return new Response(null, { status: 404 })
  }

  // left out Tenant and their CountryCode check, simplified now into nl-NL only, for sample not using hostname
  return NextResponse.rewrite(`/locales/nl-NL${pathname}`);

}
