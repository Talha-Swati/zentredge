// src/components/common/AnimatedSection.jsx
import React from 'react';

/**
 * Wrapper component for scroll-triggered animations
 * @param {string} animationId - Unique ID for this animated section
 * @param {string} animationType - Type of animation (slide-up, slide-left, slide-right, scale-in)
 * @param {Set} visibleSections - Set of currently visible section IDs
 * @param {string} delay - Animation delay (delay-100, delay-200, delay-300)
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Child components to animate
 */
const AnimatedSection = ({ 
  animationId, 
  animationType = 'slide-up', 
  visibleSections, 
  delay = '', 
  className = '', 
  children,
  ...restProps
}) => {
  const isVisible = visibleSections.has(animationId);
  const animationClass = `animate-${animationType}`;
  
  return (
    <div
      data-animate={animationId}
      className={`${className} ${isVisible ? `${animationClass} ${delay}` : ''}`}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
