import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary/90 text-white focus:ring-primary/50',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white focus:ring-secondary/50',
    accent: 'bg-accent hover:bg-accent/90 text-white focus:ring-accent/50',
    outline: 'border border-primary text-primary hover:bg-primary/10 focus:ring-primary/30',
    ghost: 'text-primary hover:bg-primary/10 focus:ring-primary/30',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Combine styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;
  
  // Render as Link if 'to' prop is provided (internal link)
  if (to) {
    return (
      <Link to={to} className={buttonStyles} {...props}>
        {children}
      </Link>
    );
  }
  
  // Render as anchor if 'href' prop is provided (external link)
  if (href) {
    return (
      <a href={href} className={buttonStyles} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  
  // Render as button by default
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;