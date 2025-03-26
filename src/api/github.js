/**
 * GitHub API integration
 * Fetches user repositories and information
 */

const GITHUB_API_BASE_URL = 'https://api.github.com';
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'lhqtapcode';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const headers = GITHUB_TOKEN
  ? {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    }
  : { Accept: 'application/vnd.github.v3+json' };

/**
 * Fetch user repositories
 * @param {Object} options - Options for filtering repositories
 * @param {number} options.limit - Maximum number of repositories to fetch
 * @param {string} options.sort - Sort criteria (updated, created, pushed, full_name)
 * @param {string} options.direction - Sort direction (asc, desc)
 * @param {string} options.language - Filter by language
 * @returns {Promise<Array>} Array of repositories
 */
export const fetchRepositories = async ({
  limit = 10,
  sort = 'updated',
  direction = 'desc',
  language = null
} = {}) => {
  try {
    const url = new URL(`${GITHUB_API_BASE_URL}/users/${GITHUB_USERNAME}/repos`);
    url.searchParams.append('sort', sort);
    url.searchParams.append('direction', direction);
    url.searchParams.append('per_page', limit);
    
    const response = await fetch(url, { headers });
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    let repos = await response.json();
    
    // Filter by language if specified
    if (language) {
      repos = repos.filter(repo => repo.language === language);
    }
    
    return repos;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};

/**
 * Fetch user profile information
 * @returns {Promise<Object>} User profile data
 */
export const fetchUserProfile = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE_URL}/users/${GITHUB_USERNAME}`, { headers });
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub user profile:', error);
    return null;
  }
};

/**
 * Fetch repository details including README
 * @param {string} repoName - Repository name
 * @returns {Promise<Object>} Repository details
 */
export const fetchRepositoryDetails = async (repoName) => {
  try {
    // Fetch repository info
    const repoResponse = await fetch(
      `${GITHUB_API_BASE_URL}/repos/${GITHUB_USERNAME}/${repoName}`,
      { headers }
    );
    
    if (!repoResponse.ok) {
      throw new Error(`GitHub API error: ${repoResponse.status}`);
    }
    
    const repoData = await repoResponse.json();
    
    // Fetch README content
    const readmeResponse = await fetch(
      `${GITHUB_API_BASE_URL}/repos/${GITHUB_USERNAME}/${repoName}/readme`,
      { headers }
    );
    
    // Include README if available
    if (readmeResponse.ok) {
      const readmeData = await readmeResponse.json();
      repoData.readme = {
        content: atob(readmeData.content), // Decode base64 content
        url: readmeData.html_url
      };
    }
    
    return repoData;
  } catch (error) {
    console.error(`Error fetching repository details for ${repoName}:`, error);
    return null;
  }
};

export default {
  fetchRepositories,
  fetchUserProfile,
  fetchRepositoryDetails
};