/**
 * Meta (Facebook) API integration
 * Fetches posts, events, and other content from Facebook
 */

const GRAPH_API_URL = 'https://graph.facebook.com/v17.0';
const ACCESS_TOKEN = import.meta.env.VITE_FACEBOOK_ACCESS_TOKEN;

/**
 * Fetch Facebook page feed (posts)
 * @param {Object} options - Options for fetching posts
 * @param {string} options.pageId - Facebook page ID
 * @param {number} options.limit - Maximum number of posts to fetch
 * @param {string} options.fields - Comma-separated list of fields to fetch
 * @returns {Promise<Array>} Array of posts
 */
export const fetchPageFeed = async ({
  pageId,
  limit = 5,
  fields = 'id,message,created_time,full_picture,permalink_url'
} = {}) => {
  try {
    if (!ACCESS_TOKEN) {
      console.error('Facebook access token is missing');
      return [];
    }

    if (!pageId) {
      throw new Error('Page ID is required');
    }

    const url = new URL(`${GRAPH_API_URL}/${pageId}/feed`);
    url.searchParams.append('access_token', ACCESS_TOKEN);
    url.searchParams.append('limit', limit);
    url.searchParams.append('fields', fields);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Facebook API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching Facebook page feed:', error);
    return [];
  }
};

/**
 * Fetch Facebook page events
 * @param {Object} options - Options for fetching events
 * @param {string} options.pageId - Facebook page ID
 * @param {number} options.limit - Maximum number of events to fetch
 * @param {string} options.fields - Comma-separated list of fields to fetch
 * @param {string} options.timeFilter - Time filter (upcoming, past)
 * @returns {Promise<Array>} Array of events
 */
export const fetchPageEvents = async ({
  pageId,
  limit = 5,
  fields = 'id,name,description,start_time,end_time,place,cover',
  timeFilter = 'upcoming'
} = {}) => {
  try {
    if (!ACCESS_TOKEN) {
      console.error('Facebook access token is missing');
      return [];
    }

    if (!pageId) {
      throw new Error('Page ID is required');
    }

    const url = new URL(`${GRAPH_API_URL}/${pageId}/events`);
    url.searchParams.append('access_token', ACCESS_TOKEN);
    url.searchParams.append('limit', limit);
    url.searchParams.append('fields', fields);
    
    // Add time filter if specified
    if (timeFilter === 'upcoming') {
      url.searchParams.append('time_filter', 'upcoming');
    } else if (timeFilter === 'past') {
      url.searchParams.append('time_filter', 'past');
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Facebook API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching Facebook page events:', error);
    return [];
  }
};

/**
 * Fetch basic page information
 * @param {string} pageId - Facebook page ID
 * @param {string} fields - Comma-separated list of fields to fetch
 * @returns {Promise<Object>} Page information
 */
export const fetchPageInfo = async (
  pageId,
  fields = 'id,name,about,description,fan_count,link,picture{url}'
) => {
  try {
    if (!ACCESS_TOKEN) {
      console.error('Facebook access token is missing');
      return null;
    }

    if (!pageId) {
      throw new Error('Page ID is required');
    }

    const url = new URL(`${GRAPH_API_URL}/${pageId}`);
    url.searchParams.append('access_token', ACCESS_TOKEN);
    url.searchParams.append('fields', fields);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Facebook API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching Facebook page info:', error);
    return null;
  }
};

export default {
  fetchPageFeed,
  fetchPageEvents,
  fetchPageInfo
};