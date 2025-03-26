/**
 * Format date to a readable string
 * @param {string|Date} date - Date to format
 * @param {string} locale - Locale to use for formatting (default: 'en-US')
 * @returns {string} - Formatted date string
 */
export const formatDate = (date, locale = 'en-US') => {
    const dateObj = date instanceof Date ? date : new Date(date);
    
    return dateObj.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  /**
   * Truncate a string to a specified length
   * @param {string} str - String to truncate
   * @param {number} maxLength - Maximum length (default: 100)
   * @returns {string} - Truncated string
   */
  export const truncateString = (str, maxLength = 100) => {
    if (!str || str.length <= maxLength) return str;
    
    return `${str.slice(0, maxLength)}...`;
  };
  
  /**
   * Convert kebab-case to Title Case
   * @param {string} str - String to convert
   * @returns {string} - Title cased string
   */
  export const kebabToTitleCase = (str) => {
    if (!str) return '';
    
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  /**
   * Format a number with a thousands separator
   * @param {number} num - Number to format
   * @param {string} locale - Locale to use (default: 'en-US')
   * @returns {string} - Formatted number
   */
  export const formatNumber = (num, locale = 'en-US') => {
    return new Intl.NumberFormat(locale).format(num);
  };