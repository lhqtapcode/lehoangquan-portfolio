import { useState, useEffect, useCallback } from 'react';

/**
 * A custom hook for making API requests with loading and error states
 * 
 * @param {Function} apiFunction - The API function to call
 * @param {Array} dependencies - Dependencies to trigger the API call (default: [])
 * @param {boolean} skipInitialCall - Whether to skip the initial API call (default: false)
 * @param {any} initialData - Initial data before the API call (default: null)
 * @returns {Object} - { data, loading, error, execute }
 */
const useApi = (
  apiFunction, 
  dependencies = [], 
  skipInitialCall = false,
  initialData = null
) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(!skipInitialCall);
  const [error, setError] = useState(null);

  // Execute function that can be called manually
  const execute = useCallback(async (...args) => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await apiFunction(...args);
      setData(result);
      return result;
    } catch (err) {
      console.error('API error:', err);
      setError(err.message || 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  // Effect for automatic API call on mount or when dependencies change
  useEffect(() => {
    if (skipInitialCall) return;
    
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { data, loading, error, execute };
};

export default useApi;