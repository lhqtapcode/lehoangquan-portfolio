import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container-custom">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <span className="text-9xl font-bold text-primary">404</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-textPrimary dark:text-white mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg text-textSecondary dark:text-gray-300 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button to="/" variant="primary">
              Go to Home
            </Button>
            <Button to="/contact" variant="outline">
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;