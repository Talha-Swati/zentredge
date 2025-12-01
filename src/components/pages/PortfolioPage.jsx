// src/components/pages/PortfolioPage.jsx
import React from 'react';
import PortfolioSection from '../sections/PortfolioSection';

/**
 * Dedicated Portfolio Page
 * Reuses the PortfolioSection component from home page
 */
const PortfolioPage = ({ isDark, visibleSections }) => {
  return (
    <div className="pt-0">
      <PortfolioSection isDark={isDark} visibleSections={visibleSections} />
    </div>
  );
};

export default PortfolioPage;
