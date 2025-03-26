/**
 * EmailJS API integration
 * Handles sending emails from the contact form
 */
import emailjs from 'emailjs-com';

// Initialize EmailJS with the public key
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

/**
 * Send an email using EmailJS
 * @param {Object} formData - Form data
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.message - Message content
 * @param {Object} options - Additional options
 * @param {string} options.serviceId - EmailJS service ID (defaults to env var)
 * @param {string} options.templateId - EmailJS template ID (defaults to env var)
 * @returns {Promise<Object>} Response from EmailJS
 */
export const sendEmail = async (formData, { serviceId = SERVICE_ID, templateId = TEMPLATE_ID } = {}) => {
  try {
    if (!PUBLIC_KEY || !serviceId || !templateId) {
      throw new Error('EmailJS configuration is incomplete');
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('Required form fields are missing');
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Lê Hoàng Quân',
      reply_to: formData.email,
      ...formData // Include any additional fields
    };

    const response = await emailjs.send(serviceId, templateId, templateParams);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default {
  sendEmail,
};