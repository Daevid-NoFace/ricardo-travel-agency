import type { APIRoute } from 'astro';

const UNSPLASH_ACCESS_KEY = import.meta.env.UNSPLASH_ACCESS_KEY;

// Cuba-related search queries for each gallery item
const cubaSearchQueries = [
  'havana colorful buildings',
  'classic cars cuba malecón',
  'varadero beach caribbean',
  'viñales tobacco fields',
  'cuban street musicians trinidad',
  'trinidad cobblestone streets',
  'havana malecón sunset',
  'cuban food traditional',
  'cienfuegos architecture',
  'varadero beach paradise',
  'cuban salsa dancing',
  'viñales valley landscape'
];

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const index = parseInt(url.searchParams.get('index') || '0');
    const query = cubaSearchQueries[index % cubaSearchQueries.length];

    // Fetch a random photo from Unsplash based on the query
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=squarish&content_filter=high`,
      {
        headers: {
          'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          'Accept-Version': 'v1'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    const data = await response.json();

    // Return the photo URL and metadata
    return new Response(
      JSON.stringify({
        url: data.urls.regular,
        thumb: data.urls.small,
        alt: data.alt_description || query,
        photographer: data.user.name,
        photographerUrl: data.user.links.html
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=86400' // Cache for 24 hours
        }
      }
    );
  } catch (error) {
    console.error('Error fetching Unsplash photo:', error);
    
    // Return a fallback placeholder image
    return new Response(
      JSON.stringify({
        url: `https://placehold.co/800x800/4ECDC4/FFFFFF?text=Cuba+Gallery`,
        thumb: `https://placehold.co/400x400/4ECDC4/FFFFFF?text=Cuba+Gallery`,
        alt: 'Cuba gallery placeholder',
        photographer: 'Placeholder',
        photographerUrl: '#'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
