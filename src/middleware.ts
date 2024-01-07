import { COOKIES } from '@constants/cookies'
import { ROUTES } from '@constants/routes'
import { ObjectValues } from '@customTypes/constants'
import { NextRequest, NextResponse } from 'next/server'

const redirect = (request: NextRequest, path: ObjectValues<typeof ROUTES>) => {
  return NextResponse.redirect(new URL(path, request.nextUrl))
}

const matchPath = (request: NextRequest, path: ObjectValues<typeof ROUTES>) => {
  return request.nextUrl.pathname.startsWith(path)
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIES.token)

  if (!token && !matchPath(request, ROUTES.login)) {
    return redirect(request, ROUTES.login)
  }

  if (token && matchPath(request, ROUTES.login)) {
    return redirect(request, ROUTES.home)
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - img (public images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|img).*)',
  ],
}
