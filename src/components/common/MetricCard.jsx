// src/components/common/MetricCard.jsx
import React from 'react';

/**
 * Reusable metric/stat card component
 * @param {string} value - The metric value (e.g., "500+", "98%")
 * @param {string} label - The metric label
 * @param {string} icon - SVG path for the icon
 * @param {boolean} isDark - Dark mode flag
 */
const MetricCard = ({ value, label, icon, isDark = true }) => {
  return (
    <div className={`${isDark ? 'bg-[#1A1A1C]' : 'bg-white'} rounded-xl p-6 ${isDark ? 'border border-[#FF6B00]/20' : 'border-2 border-[#FF6B00]/30'} ${isDark ? 'hover:border-[#FF6B00]/40' : 'hover:border-[#FF6B00]/50'} transition-all duration-300 ${isDark ? 'hover:shadow-lg hover:shadow-[#FF6B00]/10' : 'hover:shadow-xl hover:shadow-[#FF6B00]/20'}`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${isDark ? 'bg-[#FF6B00]/10' : 'bg-[#FF6B00]/20'} rounded-lg flex items-center justify-center`}>
          <svg className="w-6 h-6 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
          </svg>
        </div>
      </div>
      <h3 className="text-3xl font-bold text-[#FF6B00] mb-2">{value}</h3>
      <p className={`${isDark ? 'text-[#CCCCCC]' : 'text-[#4A4A4A]'}`}>{label}</p>
    </div>
  );
};

export default MetricCard;
