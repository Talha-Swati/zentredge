// src/components/layout/PageLayout.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

/**
 * Main layout wrapper with background, theme toggle, and navigation
 * Provides dark/light mode context and animated background
 */
const PageLayout = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  // Pass isDark to all children components
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { isDark });
    }
    return child;
  });

  return (
    <div className={`relative min-h-screen ${isDark ? 'bg-[#0B0B0D] text-[#E6E6E6]' : 'bg-gradient-to-br from-[#FFFFFF] via-[#FFF5F0] to-[#FFE8DC] text-[#1A1A1A]'} transition-colors duration-300 overflow-hidden`}>
      {/* Animated 3D Grid Background - Only in Dark Mode */}
      {isDark && (
        <div className="fixed inset-0 pointer-events-none">
          {/* Simple Dark Squares with Orange Glow */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,107,0,0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,107,0,0.15) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              backgroundColor: '#000000',
              boxShadow: 'inset 0 0 100px rgba(255,107,0,0.1)'
            }}
          />
        </div>
      )}

      {/* Header/Navigation */}
      <header className="relative z-50">
        <nav className={`${isDark ? 'bg-[#0B0B0D]/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDark ? 'border-[#FF6B00]/20' : 'border-[#FF6B00]/30'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center py-2">
                  <img 
                    src="/logos/Z1.png" 
                    alt="ZentRedge" 
                    className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain transition-transform duration-300 hover:scale-110"
                  />
                </Link>
              </div>

              {/* Navigation Links - Hidden on mobile, visible on md+ */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <Link to="/" className={`${isDark ? 'text-[#E6E6E6] hover:text-[#FF6B00]' : 'text-[#1A1A1A] hover:text-[#FF6B00]'} transition-colors duration-200 text-sm lg:text-base`}>
                  Home
                </Link>
                <Link to="/services" className={`${isDark ? 'text-[#E6E6E6] hover:text-[#FF6B00]' : 'text-[#1A1A1A] hover:text-[#FF6B00]'} transition-colors duration-200 text-sm lg:text-base`}>
                  Services
                </Link>
                <Link to="/portfolio" className={`${isDark ? 'text-[#E6E6E6] hover:text-[#FF6B00]' : 'text-[#1A1A1A] hover:text-[#FF6B00]'} transition-colors duration-200 text-sm lg:text-base`}>
                  Portfolio
                </Link>
                <Link to="/about" className={`${isDark ? 'text-[#E6E6E6] hover:text-[#FF6B00]' : 'text-[#1A1A1A] hover:text-[#FF6B00]'} transition-colors duration-200 text-sm lg:text-base`}>
                  About
                </Link>
                <Link to="/contact" className={`${isDark ? 'text-[#E6E6E6] hover:text-[#FF6B00]' : 'text-[#1A1A1A] hover:text-[#FF6B00]'} transition-colors duration-200 text-sm lg:text-base`}>
                  Contact
                </Link>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${isDark ? 'bg-[#1A1A1C] hover:bg-[#2A2A2C]' : 'bg-[#FFE8DC] hover:bg-[#FFD4C0]'} transition-colors duration-200`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {childrenWithProps}
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />
    </div>
  );
};

export default PageLayout;
