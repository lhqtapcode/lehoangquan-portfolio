import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  animate = true,
  delay = 0,
  ...props
}) => {
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay * 0.1,
      }
    },
    hover: { 
      y: -10,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { duration: 0.3 }
    }
  };

  // Base styles
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden';
  
  // Add hover styles conditionally
  const hoverStyles = hover ? 'transition-all duration-300 hover:shadow-lg' : '';
  
  // Combine styles
  const cardStyles = `${baseStyles} ${hoverStyles} ${className}`;

  if (animate) {
    return (
      <motion.div
        className={cardStyles}
        initial="hidden"
        whileInView="visible"
        whileHover={hover ? "hover" : ""}
        viewport={{ once: true, margin: "-50px" }}
        variants={cardVariants}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cardStyles} {...props}>
      {children}
    </div>
  );
};

export default Card;