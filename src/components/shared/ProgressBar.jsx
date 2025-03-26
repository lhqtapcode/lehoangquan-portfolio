import { motion } from 'framer-motion';

const ProgressBar = ({
  value = 0,
  label = '',
  color = 'primary',
  showValue = true,
  className = '',
  ...props
}) => {
  // Ensure value is between 0 and 100
  const normalizedValue = Math.min(Math.max(value, 0), 100);
  
  // Color variants
  const colorVariants = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    gray: 'bg-gray-400',
  };
  
  // Choose color from variants or default to primary
  const barColor = colorVariants[color] || colorVariants.primary;
  
  return (
    <div className={`w-full ${className}`} {...props}>
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-textPrimary dark:text-white">{label}</span>
          {showValue && (
            <span className="text-sm font-medium text-textSecondary dark:text-gray-400">{normalizedValue}%</span>
          )}
        </div>
      )}
      <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${barColor}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${normalizedValue}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;