import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-textPrimary text-textPrimary dark:text-white py-8 shadow-inner">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col">
            <Link to="/" className="font-poppins font-bold text-xl mb-4">
              <span className="text-accent">L</span>
              <span className="text-primary">H</span>
              <span className="text-secondary">Q</span>
            </Link>
            <p className="text-sm text-textSecondary dark:text-gray-400">
              {t('footer.copyright')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-4">{t('navigation.home')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-textSecondary dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-textSecondary dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  {t('navigation.projects')}
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-textSecondary dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  {t('navigation.skills')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-textSecondary dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-4">{t('contact.title')}</h3>
            <div className="flex space-x-4 mb-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/quan.le.hoang.779079/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:quanle210408@gmail.com"
                className="text-textSecondary dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
              {t('footer.backToTop')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;