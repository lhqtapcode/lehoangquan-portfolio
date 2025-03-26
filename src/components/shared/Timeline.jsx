import { motion } from 'framer-motion';

// Timeline container component
export const Timeline = ({ children, className = '', ...props }) => {
  return (
    <div className={`relative ${className}`} {...props}>
      <div className="absolute left-4 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
      <div className="space-y-12">
        {children}
      </div>
    </div>
  );
};

// Timeline item component
export const TimelineItem = ({
  date,
  title,
  subtitle,
  icon,
  children,
  iconBackground = 'bg-primary',
  delay = 0,
  ...props
}) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay * 0.2,
      }
    }
  };

  return (
    <motion.div
      className="relative pl-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={itemVariants}
      {...props}
    >
      {/* Icon */}
      <div className={`absolute left-0 p-1 rounded-full ${iconBackground} text-white`}>
        {icon || (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
        {date && (
          <p className="text-sm font-medium text-primary dark:text-primary mb-1">{date}</p>
        )}
        {title && (
          <h3 className="text-lg font-bold text-textPrimary dark:text-white mb-1">{title}</h3>
        )}
        {subtitle && (
          <p className="text-sm text-textSecondary dark:text-gray-400 mb-3">{subtitle}</p>
        )}
        <div className="text-textPrimary dark:text-gray-300">
          {children}
        </div>
      </div>
    </motion.div>
  );
};