// src/components/Interface.jsx - Refactored Professional Version
import React from 'react';
import PageLayout from './layout/PageLayout';
import HeroSection from './sections/HeroSection';
import TrustedBySection from './sections/TrustedBySection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CTASection from './sections/CTASection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Main ZentRedge Interface Component
 * 
 * Layout inspired by Erinite Softwares with ZentRedge branding
 * Features: Hero, Trusted By, Services, Portfolio, Testimonials, CTA
 */
const Interface = () => {
  const visibleSections = useScrollAnimation();

  return (
    <PageLayout>
      <HeroSection visibleSections={visibleSections} />
      <TrustedBySection visibleSections={visibleSections} />
      <ServicesSection visibleSections={visibleSections} />
      <PortfolioSection visibleSections={visibleSections} />
      <TestimonialsSection visibleSections={visibleSections} />
      <CTASection visibleSections={visibleSections} />
    </PageLayout>
  );
};

export default Interface;
