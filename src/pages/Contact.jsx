import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ContactForm from '../components/api-integrations/ContactForm';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-20">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-primary/10 to-transparent -z-10"></div>
      
      <div className="container-custom">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-textPrimary dark:text-white mb-4">
            {t('contact.title')}
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-textPrimary dark:text-white mb-6">
                Send a Message
              </h2>
              
              <ContactForm 
                onSubmitSuccess={() => {
                  // You can add additional success handling here if needed
                  console.log('Message sent successfully');
                }}
                onSubmitError={(error) => {
                  // You can add additional error handling here if needed
                  console.error('Error sending message:', error);
                }}
              />
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            {/* Get in touch */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-textPrimary dark:text-white mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary dark:text-gray-400 mb-1">Email</p>
                    <a 
                      href="mailto:quanle210408@gmail.com" 
                      className="text-textPrimary dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      quanle210408@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Facebook */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary dark:text-gray-400 mb-1">Facebook</p>
                    <a 
                      href="https://www.facebook.com/quan.le.hoang.779079/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-textPrimary dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      Lê Hoàng Quân
                    </a>
                  </div>
                </div>
                
                {/* Response Time */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary dark:text-gray-400 mb-1">Response Time</p>
                    <p className="text-textPrimary dark:text-white">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Connect more */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-textPrimary dark:text-white mb-6">
                Let's Collaborate
              </h2>
              
              <p className="text-textSecondary dark:text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-textPrimary dark:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Technology Projects</span>
                </div>
                
                <div className="flex items-center text-textPrimary dark:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Charity & Volunteer Work</span>
                </div>
                
                <div className="flex items-center text-textPrimary dark:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Learning Opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;