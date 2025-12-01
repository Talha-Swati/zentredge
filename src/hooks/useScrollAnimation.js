// src/hooks/useScrollAnimation.js
import { useState, useEffect } from 'react';

/**
 * Custom hook for scroll-based animations using Intersection Observer
 * Animations trigger once and stay permanent (no blinking)
 * @param {number} threshold - Visibility threshold (0-1)
 * @param {string} rootMargin - Margin around root element
 * @returns {Set} - Set of visible section IDs
 */
export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px 0px -100px 0px') => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const animateId = entry.target.dataset.animate;
          if (entry.isIntersecting) {
            // Add to visible sections when entering viewport
            // Once added, it stays (prevents blinking)
            setVisibleSections((prev) => new Set([...prev, animateId]));
          }
          // Removed the else block that was causing blinking
          // Elements stay visible once animated
        });
      },
      { threshold, rootMargin }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return visibleSections;
};
