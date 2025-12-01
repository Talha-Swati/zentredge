// src/components/sections/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import AnimatedSection from '../common/AnimatedSection';

/**
 * Hero/Landing section component - Inspired by Erinite Softwares
 */
const HeroSection = ({ isDark, visibleSections }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-left">
          <AnimatedSection
            animationId="hero-badge"
            animationType="slide-up"
            visibleSections={visibleSections}
            className="mb-6"
          >
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              isDark 
                ? 'bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20' 
                : 'bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30'
            }`}>
              Premium Software Development
            </span>
          </AnimatedSection>

          <AnimatedSection
            animationId="hero-title"
            animationType="slide-up"
            visibleSections={visibleSections}
            delay="delay-100"
            className="mb-6"
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
              isDark ? 'text-[#E6E6E6]' : 'text-[#1A1A1A]'
            }`}>
              Build Future-Ready Software with{' '}
              <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] bg-clip-text text-transparent">
                AI & Scalability
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection
            animationId="hero-subtitle"
            animationType="slide-up"
            visibleSections={visibleSections}
            delay="delay-200"
            className="mb-8"
          >
            <p className={`text-lg md:text-xl ${isDark ? 'text-[#B3B3B3]' : 'text-[#4A4A4A]'} max-w-2xl`}>
              We craft SaaS products, AI agents, web applications, and mobile apps that drive growth. Transform your business with cutting-edge technology solutions.
            </p>
          </AnimatedSection>

          <AnimatedSection
            animationId="hero-cta"
            animationType="slide-up"
            visibleSections={visibleSections}
            delay="delay-300"
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link to="/contact">
              <Button variant="primary" size="lg" isDark={isDark}>
                Book a Free Consultation →
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" isDark={isDark}>
                View Our Work
              </Button>
            </Link>
          </AnimatedSection>
        </div>

        {/* Right Visual */}
        <AnimatedSection
          animationId="hero-visual"
          animationType="scale-in"
          visibleSections={visibleSections}
          delay="delay-400"
          className="relative"
        >
          <div className={`relative rounded-2xl p-8 ${
            isDark 
              ? 'bg-gradient-to-br from-[#1A1A1C] to-[#0B0B0D] border border-[#FF6B00]/20' 
              : 'bg-gradient-to-br from-white to-[#FFF5F0] border-2 border-[#FF6B00]/30'
          } shadow-2xl backdrop-blur-sm`}>
            {/* Tech Icons/Illustration */}
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <div className={`w-48 h-48 rounded-full flex items-center justify-center overflow-hidden ${
                  isDark ? 'bg-[#2A2A2C]' : 'bg-[#F5F5F5]'
                } border-4 border-[#FF6B00]/40 shadow-lg shadow-[#FF6B00]/20 transition-transform duration-300 hover:scale-110 cursor-pointer`}>
                  <img 
                    src="/apifetch/logos/z3.png" 
                    alt="ZentRedge Cloud" 
                    className="w-52 h-52 object-cover"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  ZENTREDGE
                </h3>
                <p className={`text-xl mb-4 ${isDark ? 'text-[#B3B3B3]' : 'text-[#4A4A4A]'}`}>
                  Innovative Solutions for Your Business
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {['AI', 'Cloud', 'Web', 'Mobile'].map((tech) => (
                    <div key={tech} className={`py-3 px-4 rounded-lg ${
                      isDark ? 'bg-[#FF6B00]/5 border border-[#FF6B00]/20' : 'bg-[#FF6B00]/10 border border-[#FF6B00]/30'
                    }`}>
                      <span className="text-[#FF6B00] font-semibold">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
