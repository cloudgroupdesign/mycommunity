import { NextRequest, NextResponse } from "next/server"

// All pages in the app — update when adding new routes
const KNOWN_ROUTES = new Set(["/", "/prices", "/integrations"])

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip Next.js internals, static files and assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/sw.js") ||
    /\.\w+$/.test(pathname) // has file extension
  ) {
    return NextResponse.next()
  }

  // Normalize to lowercase — redirect if changed
  const lower = pathname.toLowerCase()
  if (lower !== pathname) {
    const url = request.nextUrl.clone()
    url.pathname = lower
    return NextResponse.redirect(url, 308)
  }

  // Remove trailing slash (except root)
  if (pathname !== "/" && pathname.endsWith("/")) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 308)
  }

  // Unknown route — let Next.js render not-found.tsx
  // (no redirect needed; Next.js handles it automatically)
  if (!KNOWN_ROUTES.has(pathname)) {
    // Allow Next.js to handle it (will render not-found.tsx for unknown routes)
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|logo-icon.png).*)"],
}
