// src/components/sections/TrustedBySection.jsx
import React, { useState, useEffect, useRef } from 'react';
import AnimatedSection from '../common/AnimatedSection';
import toda from '/logos/toda.png';

/**
 * Trusted By section with client logos and animated counter metrics
 */
const TrustedBySection = ({ isDark, visibleSections }) => {
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    team: 0,
    experience: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const logos = [
    { 
      name: 'Alpha Tango Drone Services', 
      // For now using placeholder, will be replaced with actual logo
      text: 'ALPHA TANGO',
      subtitle: 'DRONE SERVICES',
      url: 'https://at-drone.com/',
      width: '200px' 
    },
    { 
      name: 'Texas Truck Owners and Drivers Association', 
      text: 'JOINTODA',
      subtitle: 'TRUCK OWNERS & DRIVERS',
      url: 'https://jointoda.com/',
      width: '200px' 
    }
  ];

  const stats = [
    { key: 'projects', target: 50, suffix: '+', label: 'Projects Delivered' },
    { key: 'satisfaction', target: 95, suffix: '%', label: 'Client Satisfaction' },
    { key: 'team', target: 20, suffix: '+', label: 'Team Members' },
    { key: 'experience', target: 8, suffix: '+', label: 'Years Experience' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat) => {
      let currentStep = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        currentStep++;
        const value = Math.min(Math.round(increment * currentStep), stat.target);
        
        setCounters((prev) => ({
          ...prev,
          [stat.key]: value
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  };

  return (
    <section 
      ref={sectionRef}
      className={`relative py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-[#0B0B0D]' : 'bg-[#F8F9FA]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Trusted By Header */}
        <AnimatedSection
          animationId="trusted-header"
          animationType="slide-up"
          visibleSections={visibleSections}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-[#1A1A1A]'
          }`}>
            Trusted by Startups Worldwide
          </h2>
        </AnimatedSection>

        {/* Logo Grid */}
        <AnimatedSection
          animationId="logos-grid"
          animationType="slide-up"
          visibleSections={visibleSections}
          delay="delay-100"
          className="flex flex-wrap items-center justify-center gap-12 mb-16 pb-16 border-b border-[#FF6B00]/20"
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              {/* Logo Icons */}
              {index === 0 ? (
                // Alpha Tango Drone Icon
                <div className="mb-2">
                  <svg width="120" height="120" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    {/* Drone propeller circles */}
                    <circle cx="50" cy="50" r="25" fill="none" stroke="#FF6B00" strokeWidth="4"/>
                    <circle cx="150" cy="50" r="25" fill="none" stroke="#FF6B00" strokeWidth="4"/>
                    <circle cx="50" cy="150" r="25" fill="none" stroke="#FF6B00" strokeWidth="4"/>
                    <circle cx="150" cy="150" r="25" fill="none" stroke="#FF6B00" strokeWidth="4"/>
                    
                    {/* Center body */}
                    <rect x="80" y="80" width="40" height="40" rx="5" fill="#FF6B00"/>
                    
                    {/* Connecting arms */}
                    <line x1="100" y1="100" x2="50" y2="50" stroke="#FF6B00" strokeWidth="6"/>
                    <line x1="100" y1="100" x2="150" y2="50" stroke="#FF6B00" strokeWidth="6"/>
                    <line x1="100" y1="100" x2="50" y2="150" stroke="#FF6B00" strokeWidth="6"/>
                    <line x1="100" y1="100" x2="150" y2="150" stroke="#FF6B00" strokeWidth="6"/>
                    
                    {/* Propeller blades */}
                    <line x1="40" y1="50" x2="60" y2="50" stroke="#FF6B00" strokeWidth="3"/>
                    <line x1="50" y1="40" x2="50" y2="60" stroke="#FF6B00" strokeWidth="3"/>
                    <line x1="140" y1="50" x2="160" y2="50" stroke="#FF6B00" strokeWidth="3"/>
                    <line x1="150" y1="40" x2="150" y2="60" stroke="#FF6B00" strokeWidth="3"/>
                    <line x1="40" y1="150" x2="60" y2="150" stroke="#FF6B00" strokeWidth="3"/>
                    <line x1="50" y1="140" x2="50" y2="160" stroke="#FF6B00" strokeWidth="3"/>
                    <line x1="140" y1="150" x2="160" y2="150" stroke="#FF6B00" strokeWidth="3"/>
                    <line x1="150" y1="140" x2="150" y2="160" stroke="#FF6B00" strokeWidth="3"/>
                  </svg>
                </div>
              ) : (
                // Join TODA Logo
                <div className="mb-2">
                  <img 
                    src={toda}
                    alt="Texas Truck Owners and Drivers Association" 
                    width="120"
                    height="120"
                    className="object-contain"
                  />
                </div>
              )}
              
              {/* Card */}
              <div
                className={`px-8 py-6 rounded-xl ${
                  isDark 
                    ? 'bg-[#1A1A1C]/50 border-2 border-[#FF6B00]/20' 
                    : 'bg-white border-2 border-gray-200'
                } hover:border-[#FF6B00] hover:shadow-lg hover:shadow-[#FF6B00]/20 transition-all duration-300 transform hover:scale-105`}
                style={{ minWidth: logo.width }}
              >
                <div className="text-center">
                  <div className={`text-xl font-bold mb-1 ${
                    isDark ? 'text-[#FF6B00]' : 'text-[#FF6B00]'
                  }`}>
                    {logo.text}
                  </div>
                  <div className={`text-xs font-semibold ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {logo.subtitle}
                  </div>
                </div>
              </div>
              
              {/* Website Link */}
              <a
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isDark 
                    ? 'text-gray-400 hover:text-[#FF6B00]' 
                    : 'text-gray-600 hover:text-[#FF6B00]'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Website
              </a>
            </div>
          ))}
        </AnimatedSection>

        {/* Stats Grid with Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              animationId={`stat-${index}`}
              animationType="scale-in"
              visibleSections={visibleSections}
              delay={`delay-${(index + 1) * 100}`}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-[#1A1A1A]'
              }`}>
                {counters[stat.key]}{stat.suffix}
              </div>
              <div className={`text-sm md:text-base ${
                isDark ? 'text-[#B3B3B3]' : 'text-[#4A4A4A]'
              }`}>
                {stat.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
