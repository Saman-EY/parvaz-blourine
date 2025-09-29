import { NextRequest, NextResponse } from 'next/server';
import { log } from '@/lib/logger';

export function middleware(request: NextRequest) {
  const requestId = generateRequestId();
  
  // Log incoming request
  log.info('Middleware Request', {
    requestId,
    method: request.method,
    url: request.url,
    userAgent: request.headers.get('user-agent'),
    ip:request.headers.get('x-forwarded-for'),
    context: 'Middleware'
  });
  
  // Create response
  const response = NextResponse.next();
  
  // Add request ID to response headers
  response.headers.set('X-Request-ID', requestId);
  
  // Log response
  log.info('Middleware Response', {
    requestId,
    status: response.status,
    context: 'Middleware'
  });
  
  return response;
}

function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
