// src/components/sections/ContactSection.jsx
import React, { useState } from 'react';
import Button from '../common/Button';
import AnimatedSection from '../common/AnimatedSection';

/**
 * Contact form section
 */
const ContactSection = ({ isDark, visibleSections }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection
          animationId="contact-header"
          animationType="slide-up"
          visibleSections={visibleSections}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-[#E6E6E6]' : 'text-[#1A1A1A]'}`}>
            Get In <span className="text-[#FF6B00]">Touch</span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-[#CCCCCC]' : 'text-[#4A4A4A]'}`}>
            Let's discuss your next project
          </p>
        </AnimatedSection>

        <AnimatedSection
          animationId="contact-form"
          animationType="scale-in"
          visibleSections={visibleSections}
          delay="delay-100"
        >
          <form onSubmit={handleSubmit} className={`${isDark ? 'bg-[#1A1A1C]' : 'bg-white'} rounded-xl p-8 ${isDark ? 'border border-[#FF6B00]/20' : 'border-2 border-[#FF6B00]/30'} ${isDark ? 'shadow-lg shadow-[#FF6B00]/5' : 'shadow-xl shadow-[#FF6B00]/10'}`}>
            <div className="mb-6">
              <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-[#E6E6E6]' : 'text-[#1A1A1A]'}`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-[#0B0B0D] border border-[#FF6B00]/20 text-[#E6E6E6]' : 'bg-[#FFF5F0] border-2 border-[#FF6B00]/30 text-[#1A1A1A]'} focus:outline-none focus:border-[#FF6B00] transition-colors duration-200`}
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-[#E6E6E6]' : 'text-[#1A1A1A]'}`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-[#0B0B0D] border border-[#FF6B00]/20 text-[#E6E6E6]' : 'bg-[#FFF5F0] border-2 border-[#FF6B00]/30 text-[#1A1A1A]'} focus:outline-none focus:border-[#FF6B00] transition-colors duration-200`}
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-[#E6E6E6]' : 'text-[#1A1A1A]'}`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-[#0B0B0D] border border-[#FF6B00]/20 text-[#E6E6E6]' : 'bg-[#FFF5F0] border-2 border-[#FF6B00]/30 text-[#1A1A1A]'} focus:outline-none focus:border-[#FF6B00] transition-colors duration-200 resize-none`}
                placeholder="Tell us about your project..."
              />
            </div>

            <Button type="submit" variant="primary" size="lg" isDark={isDark} className="w-full">
              Send Message
            </Button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
