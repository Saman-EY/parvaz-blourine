/**
 * Lorem Picsum Helper Functions
 * https://picsum.photos/ - Lorem Ipsum for photos
 */

export interface PicsumImageOptions {
  width?: number;
  height?: number;
  id?: string | number;
  seed?: string;
  grayscale?: boolean;
  blur?: number | boolean;
  random?: string | number;
  format?: 'jpg' | 'webp';
}

/**
 * Generate a Lorem Picsum image URL
 */
export function getPicsumImageUrl(options: PicsumImageOptions = {}): string {
  const {
    width = 400,
    height = 300,
    id,
    seed,
    grayscale = false,
    blur = false,
    random,
    format = 'jpg'
  } = options;

  let baseUrl = 'https://picsum.photos/';

  // Add ID or seed if specified
  if (id) {
    baseUrl += `id/${id}/`;
  } else if (seed) {
    baseUrl += `seed/${seed}/`;
  }

  // Add dimensions
  baseUrl += `${width}/${height}`;

  // Add format
  if (format !== 'jpg') {
    baseUrl += `.${format}`;
  }

  // Build query parameters
  const params = new URLSearchParams();

  if (grayscale) {
    params.append('grayscale', '');
  }

  if (blur) {
    if (typeof blur === 'number' && blur > 0 && blur <= 10) {
      params.append('blur', blur.toString());
    } else if (blur === true) {
      params.append('blur', '');
    }
  }

  if (random) {
    params.append('random', random.toString());
  }

  // Add query string if there are parameters
  if (params.toString()) {
    baseUrl += `?${params.toString()}`;
  }

  return baseUrl;
}

/**
 * Generate multiple random images for a gallery
 */
export function getRandomImages(count: number, options: Omit<PicsumImageOptions, 'random'> = {}): string[] {
  return Array.from({ length: count }, (_, index) => 
    getPicsumImageUrl({
      ...options,
      random: index + 1
    })
  );
}

/**
 * Generate images for different screen sizes
 */
export function getResponsiveImages(options: Omit<PicsumImageOptions, 'width' | 'height'> = {}) {
  return {
    small: getPicsumImageUrl({ ...options, width: 400, height: 300 }),
    medium: getPicsumImageUrl({ ...options, width: 800, height: 600 }),
    large: getPicsumImageUrl({ ...options, width: 1200, height: 900 }),
    xlarge: getPicsumImageUrl({ ...options, width: 1920, height: 1080 })
  };
}

/**
 * Generate a specific image by ID with different sizes
 */
export function getImageById(id: string | number, options: Omit<PicsumImageOptions, 'id'> = {}) {
  return {
    thumbnail: getPicsumImageUrl({ ...options, id, width: 150, height: 150 }),
    small: getPicsumImageUrl({ ...options, id, width: 400, height: 300 }),
    medium: getPicsumImageUrl({ ...options, id, width: 800, height: 600 }),
    large: getPicsumImageUrl({ ...options, id, width: 1200, height: 900 }),
    original: getPicsumImageUrl({ ...options, id, width: 1920, height: 1080 })
  };
}

/**
 * Generate a blurred placeholder image
 */
export function getBlurredPlaceholder(width: number = 400, height: number = 300): string {
  return getPicsumImageUrl({
    width,
    height,
    blur: 10,
    grayscale: true
  });
}

/**
 * Generate a square image
 */
export function getSquareImage(size: number, options: Omit<PicsumImageOptions, 'width' | 'height'> = {}): string {
  return getPicsumImageUrl({
    ...options,
    width: size,
    height: size
  });
}

/**
 * Generate a landscape image
 */
export function getLandscapeImage(width: number = 800, options: Omit<PicsumImageOptions, 'width' | 'height'> = {}): string {
  return getPicsumImageUrl({
    ...options,
    width,
    height: Math.round(width * 0.75) // 4:3 aspect ratio
  });
}

/**
 * Generate a portrait image
 */
export function getPortraitImage(height: number = 800, options: Omit<PicsumImageOptions, 'width' | 'height'> = {}): string {
  return getPicsumImageUrl({
    ...options,
    width: Math.round(height * 0.75), // 3:4 aspect ratio
    height
  });
}
