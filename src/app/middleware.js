// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const session = request.cookies.get('user_session');
  const { pathname } = request.nextUrl;

  // 1. If user is NOT logged in and trying to access protected routes
  if (!session && pathname.startsWith('/items')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 2. If user IS logged in and trying to access login/signup
  if (session && (pathname === '/login' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/items/lists', request.url));
  }

  return NextResponse.next();
}

// Config to match only relevant paths
export const config = {
  matcher: ['/items/:path*', '/login', '/signup'],
};