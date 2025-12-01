// src/components/common/Button.jsx
import React from 'react';

/**
 * Reusable button component with variants
 * @param {string} variant - Button style variant (primary, secondary, outline)
 * @param {string} size - Button size (sm, md, lg)
 * @param {boolean} isDark - Dark mode flag
 * @param {function} onClick - Click handler
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Button content
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  isDark = true, 
  onClick, 
  className = '', 
  children,
  type = 'button'
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantStyles = {
    primary: isDark 
      ? 'bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white hover:from-[#FF8C00] hover:to-[#FFA500] shadow-lg shadow-[#FF6B00]/30 hover:shadow-xl hover:shadow-[#FF6B00]/40'
      : 'bg-gradient-to-r from-[#FF6B00] to-[#FF4500] text-white hover:from-[#FF8C00] hover:to-[#FF6B00] shadow-lg shadow-[#FF6B00]/40 hover:shadow-xl hover:shadow-[#FF6B00]/50',
    
    secondary: isDark
      ? 'bg-[#1A1A1C] text-[#E6E6E6] border-2 border-[#FF6B00]/30 hover:border-[#FF6B00]/50 hover:bg-[#2A2A2C]'
      : 'bg-white text-[#1A1A1A] border-2 border-[#FF6B00]/40 hover:border-[#FF6B00]/60 hover:bg-[#FFF5F0]',
    
    outline: isDark
      ? 'bg-transparent text-[#FF6B00] border-2 border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white'
      : 'bg-transparent text-[#FF6B00] border-2 border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
