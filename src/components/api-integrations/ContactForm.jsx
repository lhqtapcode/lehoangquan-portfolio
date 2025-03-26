import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Form, FormInput, FormTextarea } from '../shared/Form';
import Button from '../shared/Button';
import { sendEmail } from '../../api/emailjs';
import { isValidEmail, isRequired } from '../../utils/validators';

/**
 * A contact form component that integrates with EmailJS
 * 
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onSubmitSuccess - Callback after successful form submission
 * @param {Function} props.onSubmitError - Callback after failed form submission
 */
const ContactForm = ({ 
  className = '',
  onSubmitSuccess,
  onSubmitError
}) => {
  const { t } = useTranslation();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Form errors
  const [errors, setErrors] = useState({});
  
  // Form status
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  // Loading state
  const [isLoading, setIsLoading] = useState(false);
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!isRequired(formData.name)) {
      newErrors.name = t('contact.form.required');
    }
    
    // Validate email
    if (!isRequired(formData.email)) {
      newErrors.email = t('contact.form.required');
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = t('contact.form.invalidEmail');
    }
    
    // Validate message
    if (!isRequired(formData.message)) {
      newErrors.message = t('contact.form.required');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Send email through EmailJS
      await sendEmail(formData);
      
      // Update status
      setStatus({
        submitted: true,
        success: true,
        message: t('contact.success')
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Call success callback if provided
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Update status with error
      setStatus({
        submitted: true,
        success: false,
        message: t('contact.error')
      });
      
      // Call error callback if provided
      if (onSubmitError) {
        onSubmitError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      <Form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label={t('contact.name')}
          name="name"
          placeholder={t('contact.form.namePlaceholder')}
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        
        <FormInput
          label={t('contact.email')}
          name="email"
          type="email"
          placeholder={t('contact.form.emailPlaceholder')}
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        
        <FormTextarea
          label={t('contact.message')}
          name="message"
          placeholder={t('contact.form.messagePlaceholder')}
          rows={5}
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required
        />
        
        <div>
          <Button 
            type="submit" 
            variant="primary"
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : t('contact.send')}
          </Button>
        </div>
        
        {/* Form Status */}
        {status.submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-md ${
              status.success 
                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' 
                : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
            }`}
          >
            {status.message}
          </motion.div>
        )}
      </Form>
    </div>
  );
};

export default ContactForm;