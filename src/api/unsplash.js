/**
 * Unsplash API integration
 * Fetches high-quality images for the portfolio
 */

const UNSPLASH_API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

/**
 * Fetch random photos from Unsplash
 * @param {Object} options - Options for fetching photos
 * @param {number} options.count - Number of photos to fetch (max 30)
 * @param {string} options.query - Search query
 * @param {string} options.orientation - Photo orientation (landscape, portrait, squarish)
 * @returns {Promise<Array>} Array of photos
 */
export const fetchRandomPhotos = async ({
  count = 1,
  query = '',
  orientation = 'landscape'
} = {}) => {
  try {
    if (!ACCESS_KEY) {
      console.error('Unsplash access key is missing');
      return [];
    }

    const url = new URL(`${UNSPLASH_API_URL}/photos/random`);
    url.searchParams.append('client_id', ACCESS_KEY);
    url.searchParams.append('count', Math.min(count, 30)); // Unsplash limits to 30 per request
    
    if (query) url.searchParams.append('query', query);
    if (orientation) url.searchParams.append('orientation', orientation);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching Unsplash photos:', error);
    return [];
  }
};

/**
 * Search photos on Unsplash
 * @param {Object} options - Search options
 * @param {string} options.query - Search query (required)
 * @param {number} options.page - Page number
 * @param {number} options.perPage - Results per page (max 30)
 * @param {string} options.orientation - Photo orientation
 * @param {string} options.orderBy - Order by (relevant, latest)
 * @returns {Promise<Object>} Search results with photos and metadata
 */
export const searchPhotos = async ({
  query,
  page = 1,
  perPage = 10,
  orientation = null,
  orderBy = 'relevant'
} = {}) => {
  try {
    if (!ACCESS_KEY) {
      console.error('Unsplash access key is missing');
      return { results: [], total: 0, total_pages: 0 };
    }

    if (!query) {
      throw new Error('Search query is required');
    }

    const url = new URL(`${UNSPLASH_API_URL}/search/photos`);
    url.searchParams.append('client_id', ACCESS_KEY);
    url.searchParams.append('query', query);
    url.searchParams.append('page', page);
    url.searchParams.append('per_page', Math.min(perPage, 30));
    url.searchParams.append('order_by', orderBy);
    
    if (orientation) url.searchParams.append('orientation', orientation);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error searching Unsplash photos:', error);
    return { results: [], total: 0, total_pages: 0 };
  }
};

/**
 * Get photos from a specific collection
 * @param {string} collectionId - Collection ID
 * @param {Object} options - Options
 * @param {number} options.page - Page number
 * @param {number} options.perPage - Results per page (max 30)
 * @returns {Promise<Array>} Photos in the collection
 */
export const getCollectionPhotos = async (collectionId, { page = 1, perPage = 10 } = {}) => {
  try {
    if (!ACCESS_KEY) {
      console.error('Unsplash access key is missing');
      return [];
    }

    if (!collectionId) {
      throw new Error('Collection ID is required');
    }

    const url = new URL(`${UNSPLASH_API_URL}/collections/${collectionId}/photos`);
    url.searchParams.append('client_id', ACCESS_KEY);
    url.searchParams.append('page', page);
    url.searchParams.append('per_page', Math.min(perPage, 30));
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching collection photos for ${collectionId}:`, error);
    return [];
  }
};

export default {
  fetchRandomPhotos,
  searchPhotos,
  getCollectionPhotos
};