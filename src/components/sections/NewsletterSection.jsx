// src/components/sections/NewsletterSection.jsx
import React, { useState } from 'react';
import AnimatedSection from '../common/AnimatedSection';
import Button from '../common/Button';

/**
 * Newsletter subscription section
 */
const NewsletterSection = ({ isDark, visibleSections }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-[#0B0B0D]' : 'bg-white'
    }`}>
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection
          animationId="newsletter-content"
          animationType="scale-in"
          visibleSections={visibleSections}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-[#1A1A1A]'
          }`}>
            Stay Updated
          </h2>
          <p className={`text-lg mb-8 ${
            isDark ? 'text-[#B3B3B3]' : 'text-[#4A4A4A]'
          }`}>
            Subscribe to our newsletter for the latest insights on AI, SaaS, and software development.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className={`flex-1 px-6 py-3 rounded-lg ${
                isDark
                  ? 'bg-[#1A1A1C] border border-[#FF6B00]/20 text-white placeholder:text-[#6B6B6B]'
                  : 'bg-[#F8F9FA] border-2 border-[#FF6B00]/30 text-[#1A1A1A] placeholder:text-[#9E9E9E]'
              } focus:outline-none focus:border-[#FF6B00] transition-colors duration-300`}
            />
            <Button type="submit" variant="primary" size="md" isDark={isDark}>
              Subscribe
            </Button>
          </form>

          <p className={`text-sm mt-4 ${
            isDark ? 'text-[#6B6B6B]' : 'text-[#9E9E9E]'
          }`}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewsletterSection;
