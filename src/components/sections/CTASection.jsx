// src/components/sections/CTASection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import AnimatedSection from '../common/AnimatedSection';

/**
 * Call-to-Action section with blue gradient background
 */
const CTASection = ({ isDark, visibleSections }) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <AnimatedSection
        animationId="cta-section"
        animationType="scale-in"
        visibleSections={visibleSections}
        className="max-w-7xl mx-auto"
      >
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] p-12 md:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Let's discuss how we can help you achieve your business goals with our expertise in AI, SaaS, web, and mobile development.
            </p>
            <Link to="/contact">
              <Button 
                variant="secondary" 
                size="lg" 
                isDark={false}
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CTASection;
