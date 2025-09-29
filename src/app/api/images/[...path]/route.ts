import { NextRequest, NextResponse } from 'next/server';
import { env } from '@/env';
import { log } from '@/lib/logger';

// Cache for image responses
const imageCache = new Map<string, { data: Buffer; contentType: string; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  let resolvedParams: { path: string[] } | undefined;
  
  try {
    resolvedParams = await params;
    const imagePath = resolvedParams.path.join('/');
    const { searchParams } = new URL(request.url);
    const width = searchParams.get('w');
    const height = searchParams.get('h');
    const quality = searchParams.get('q') || '80';
    const format = searchParams.get('f') || 'auto';
    const storage = searchParams.get('storage') || 'public'; // public, private, etc.

    // Log the image request
    log.info('Image API Request', {
      width,
      height,
      quality,
      format,
      storage,
      userAgent: request.headers.get('user-agent'),
    });

    // Check cache first
    const cacheKey = `${imagePath}-${width}-${height}-${quality}-${format}-${storage}`;
    const cached = imageCache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      log.debug('Image served from cache', { cacheKey, context: 'ImageAPI' });
      return new NextResponse(cached.data as BodyInit, {
        status: 200,
        headers: {
          'Content-Type': cached.contentType,
          'Cache-Control': 'public, max-age=300, s-maxage=300',
          'X-Cache': 'HIT',
        },
      });
    }

    // Build Laravel storage URL
    const baseUrl = env.NEXT_PUBLIC_API_PATH;
    let targetUrl = `${baseUrl}/api/storage/${storage}/${imagePath}`;

    // Add query parameters for image optimization
    const urlParams = new URLSearchParams();
    if (width) urlParams.set('w', width);
    if (height) urlParams.set('h', height);
    if (quality) urlParams.set('q', quality);
    if (format && format !== 'auto') urlParams.set('f', format);

    if (urlParams.toString()) {
      targetUrl += `?${urlParams.toString()}`;
    }

    log.debug('Fetching image from Laravel storage', { targetUrl, context: 'ImageAPI' });

    // Fetch the image from Laravel storage
    const upstreamRes = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Parvaz-Shirdal-Front/1.0',
        'Accept': 'image/*',
        'Authorization': `Bearer ${process.env.LARAVEL_API_TOKEN || ''}`, // If you have API authentication
      },
    });

    if (!upstreamRes.ok) {
      log.error('Failed to fetch image from Laravel storage', {
        status: upstreamRes.status,
        statusText: upstreamRes.statusText,
        targetUrl,
        storage,
        imagePath,
        context: 'ImageAPI'
      });
      
      // Try fallback to direct file access if Laravel API fails
      const fallbackUrl = `${baseUrl}/storage/${storage}/${imagePath}`;
      log.debug('Trying fallback URL', { fallbackUrl, context: 'ImageAPI' });
      
      const fallbackRes = await fetch(fallbackUrl, {
        headers: {
          'User-Agent': 'Parvaz-Shirdal-Front/1.0',
          'Accept': 'image/*',
        },
      });

      if (!fallbackRes.ok) {
        return NextResponse.json(
          { 
            error: 'Image not found', 
            status: upstreamRes.status,
            message: `Image not found in ${storage} storage: ${imagePath}`,
            fallbackAttempted: true
          },
          { status: upstreamRes.status }
        );
      }

      // Use fallback response
      const fallbackBuffer = await fallbackRes.arrayBuffer();
      const fallbackContentType = fallbackRes.headers.get('content-type') || 'image/jpeg';
      const fallbackData = Buffer.from(fallbackBuffer);

      log.info('Image API Response (Fallback)', {
        size: fallbackData.length,
        contentType: fallbackContentType,
        cached: false,
        fallback: true,
        context: 'ImageAPI'
      });

      return new NextResponse(fallbackData, {
        status: 200,
        headers: {
          'Content-Type': fallbackContentType,
          'Cache-Control': 'public, max-age=300, s-maxage=300',
          'X-Cache': 'MISS',
          'X-Fallback': 'true',
          'X-Image-Size': fallbackData.length.toString(),
          'X-Image-Format': fallbackContentType,
        },
      });
    }

    // Get image data from Laravel
    const imageBuffer = await upstreamRes.arrayBuffer();
    const contentType = upstreamRes.headers.get('content-type') || 'image/jpeg';
    const buffer = Buffer.from(imageBuffer);

    // Cache the response
    imageCache.set(cacheKey, {
      data: buffer,
      contentType,
      timestamp: Date.now(),
    });

    // Clean old cache entries
    if (imageCache.size > 100) {
      const now = Date.now();
      for (const [key, value] of imageCache.entries()) {
        if (now - value.timestamp > CACHE_DURATION) {
          imageCache.delete(key);
        }
      }
    }

    log.info('Image API Response (Upstream)', {
      size: buffer.length,
      contentType,
      cached: false,
      storage,
      laravel: true,
      context: 'ImageAPI'
    });

    // Return the image with proper headers
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=300, s-maxage=300',
        'X-Cache': 'MISS',
        'X-Storage': storage,
        'X-Image-Size': buffer.length.toString(),
        'X-Image-Format': contentType,
      },
    });

  } catch (error) {
    log.error('Image API error', {
      error: error instanceof Error ? error.message : 'Unknown error',
      imagePath: resolvedParams?.path.join('/') || 'unknown',
      context: 'ImageAPI'
    });

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
