/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether the email is valid
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  
  /**
   * Validate required field
   * @param {string} value - Value to validate
   * @returns {boolean} - Whether the field has a value
   */
  export const isRequired = (value) => {
    return !!value?.trim();
  };
  
  /**
   * Validate minimum length
   * @param {string} value - Value to validate
   * @param {number} minLength - Minimum length
   * @returns {boolean} - Whether the value meets the minimum length
   */
  export const hasMinLength = (value, minLength) => {
    return value?.trim().length >= minLength;
  };
  
  /**
   * Validate maximum length
   * @param {string} value - Value to validate
   * @param {number} maxLength - Maximum length
   * @returns {boolean} - Whether the value is within the maximum length
   */
  export const hasMaxLength = (value, maxLength) => {
    return value?.trim().length <= maxLength;
  };