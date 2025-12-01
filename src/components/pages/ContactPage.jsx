// src/components/pages/ContactPage.jsx
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedSection from '../common/AnimatedSection';

/**
 * Professional Contact Us Page
 * Supports individual and company contacts
 * Locations: US and Pakistan
 */
const ContactPage = ({ isDark, visibleSections }) => {
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('NTAXYgwkYqoNSYeG4');
    console.log('EmailJS initialized');
  }, []);
  const [formData, setFormData] = useState({
    contactType: 'individual', // individual or company
    name: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'US',
    projectType: 'AI Integrations',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS Configuration
      const serviceID = 'service_pi13x1y';
      const templateID = 'template_ydk4w8d';

      console.log('Sending email with data:', formData);

      // Prepare template parameters matching EmailJS template variables
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
        contact_type: formData.contactType === 'individual' ? 'Individual' : 'Company',
        company_name: formData.companyName || 'N/A',
        phone: formData.phone || 'Not provided',
        country: formData.country === 'US' ? 'United States' : 'Pakistan',
        project_type: formData.projectType,
        budget: formData.budget || 'Not specified'
      };

      console.log('Template params:', templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          contactType: 'individual',
          name: '',
          companyName: '',
          email: '',
          phone: '',
          country: 'US',
          projectType: 'AI Integrations',
          budget: '',
          message: ''
        });
        setSubmitStatus(null);
      }, 3000);

    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error details:', {
        status: error.status,
        text: error.text,
        message: error.message
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const locations = [
    {
      country: 'United States',
      flag: '🇺🇸',
      office: 'New York Office',
      address: '123 Broadway Avenue, Suite 500',
      city: 'New York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'zentredge@gmail.com'
    },
    {
      country: 'Pakistan',
      flag: '🇵🇰',
      office: 'Islamabad Office',
      address: 'F-7 Markaz, Blue Area',
      city: 'Islamabad, 44000',
      phone: '+92 328 5000209',
      email: 'zentredge@gmail.com'
    }
  ];

  const projectTypes = [
    'AI Integrations',
    'Web Development',
    'SaaS Development',
    'Mobile Apps',
    'AI Agents',
    'Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'Not sure yet'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-[#1c2536]' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection
            animationId="contact-hero"
            animationType="slide-up"
            visibleSections={visibleSections}
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Build Something Amazing Together
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Whether you're an individual or a company, we're here to help bring your ideas to life. Get in touch with us today.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-[#0B0B0D]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection
                animationId="contact-form"
                animationType="slide-right"
                visibleSections={visibleSections}
              >
                <div className={`rounded-2xl p-8 ${
                  isDark ? 'bg-[#1c2536]' : 'bg-gray-50'
                }`}>
                  <h2 className={`text-3xl font-bold mb-6 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Type Toggle */}
                    <div>
                      <label className={`block text-sm font-medium mb-3 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        I am a/an
                      </label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, contactType: 'individual' }))}
                          className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                            formData.contactType === 'individual'
                              ? 'bg-[#FF6B00] text-white shadow-lg'
                              : isDark
                              ? 'bg-[#0d1117] text-gray-400 hover:text-white border border-gray-700'
                              : 'bg-white text-gray-700 hover:text-gray-900 border-2 border-gray-200'
                          }`}
                        >
                          Individual
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, contactType: 'company' }))}
                          className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                            formData.contactType === 'company'
                              ? 'bg-[#FF6B00] text-white shadow-lg'
                              : isDark
                              ? 'bg-[#0d1117] text-gray-400 hover:text-white border border-gray-700'
                              : 'bg-white text-gray-700 hover:text-gray-900 border-2 border-gray-200'
                          }`}
                        >
                          Company
                        </button>
                      </div>
                    </div>

                    {/* Name and Company Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {formData.contactType === 'individual' ? 'Full Name' : 'Contact Person'} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg ${
                            isDark
                              ? 'bg-[#0d1117] border border-gray-700 text-white placeholder:text-gray-500'
                              : 'bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400'
                          } focus:outline-none focus:border-[#FF6B00] transition-colors`}
                          placeholder="John Doe"
                        />
                      </div>

                      {formData.contactType === 'company' && (
                        <div>
                          <label className={`block text-sm font-medium mb-2 ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            Company Name *
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required={formData.contactType === 'company'}
                            className={`w-full px-4 py-3 rounded-lg ${
                              isDark
                                ? 'bg-[#0d1117] border border-gray-700 text-white placeholder:text-gray-500'
                                : 'bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400'
                            } focus:outline-none focus:border-[#FF6B00] transition-colors`}
                            placeholder="Acme Inc."
                          />
                        </div>
                      )}
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg ${
                            isDark
                              ? 'bg-[#0d1117] border border-gray-700 text-white placeholder:text-gray-500'
                              : 'bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400'
                          } focus:outline-none focus:border-[#FF6B00] transition-colors`}
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-2 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg ${
                            isDark
                              ? 'bg-[#0d1117] border border-gray-700 text-white placeholder:text-gray-500'
                              : 'bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400'
                          } focus:outline-none focus:border-[#FF6B00] transition-colors`}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Country Selection */}
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Preferred Location *
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg ${
                          isDark
                            ? 'bg-[#0d1117] border border-gray-700 text-white'
                            : 'bg-white border-2 border-gray-200 text-gray-900'
                        } focus:outline-none focus:border-[#FF6B00] transition-colors`}
                      >
                        <option value="US">🇺🇸 United States</option>
                        <option value="PK">🇵🇰 Pakistan</option>
                      </select>
                    </div>

                    {/* Project Type and Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg ${
                            isDark
                              ? 'bg-[#0d1117] border border-gray-700 text-white'
                              : 'bg-white border-2 border-gray-200 text-gray-900'
                          } focus:outline-none focus:border-[#FF6B00] transition-colors`}
                        >
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-2 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg ${
                            isDark
                              ? 'bg-[#0d1117] border border-gray-700 text-white'
                              : 'bg-white border-2 border-gray-200 text-gray-900'
                          } focus:outline-none focus:border-[#FF6B00] transition-colors`}
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className={`w-full px-4 py-3 rounded-lg resize-none ${
                          isDark
                            ? 'bg-[#0d1117] border border-gray-700 text-white placeholder:text-gray-500'
                            : 'bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400'
                        } focus:outline-none focus:border-[#FF6B00] transition-colors`}
                        placeholder="Tell us about your project, requirements, and goals..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg ${
                        isSubmitting 
                          ? 'bg-gray-500 cursor-not-allowed' 
                          : 'bg-[#FF6B00] hover:bg-[#FF8C00] hover:shadow-xl hover:shadow-[#FF6B00]/30'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-500 text-center">
                        ✓ Message sent successfully! We'll get back to you within 24 hours.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-500 text-center">
                        ✗ Failed to send message. Please try again or email us directly at zentredge@gmail.com
                      </div>
                    )}
                  </form>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Contact Info & Locations */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <AnimatedSection
                animationId="quick-contact"
                animationType="slide-left"
                visibleSections={visibleSections}
              >
                <div className={`rounded-2xl p-6 ${
                  isDark ? 'bg-[#1c2536]' : 'bg-gray-50'
                }`}>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                        <a href="mailto:zentredge@gmail.com" className={`font-semibold hover:text-[#FF6B00] transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          zentredge@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Phone (Pakistan)</p>
                        <a href="tel:+923285000209" className={`font-semibold hover:text-[#FF6B00] transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          +92 328 5000209
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Business Hours</p>
                        <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Mon - Sat: 9AM - 6PM PKT</p>
                      </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="pt-4 border-t border-gray-700">
                      <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Follow Us</p>
                      <div className="flex gap-3">
                        <a 
                          href="https://www.linkedin.com/company/zentredge-sols/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 hover:bg-[#FF6B00]/20 flex items-center justify-center transition-colors"
                        >
                          <svg className="w-5 h-5 text-[#FF6B00]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a 
                          href="https://www.facebook.com/share/1KbC9nwusz/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 hover:bg-[#FF6B00]/20 flex items-center justify-center transition-colors"
                        >
                          <svg className="w-5 h-5 text-[#FF6B00]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                        <a 
                          href="https://www.instagram.com/zentredge?igsh=ZWEwNnZld3d3ZWRn" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 hover:bg-[#FF6B00]/20 flex items-center justify-center transition-colors"
                        >
                          <svg className="w-5 h-5 text-[#FF6B00]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Office Locations */}
              {locations.map((location, index) => (
                <AnimatedSection
                  key={index}
                  animationId={`location-${index}`}
                  animationType="slide-left"
                  visibleSections={visibleSections}
                  delay={`delay-${(index + 1) * 100}`}
                >
                  <div className={`rounded-2xl p-6 ${
                    isDark ? 'bg-[#1c2536]' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{location.flag}</span>
                      <h3 className={`text-xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {location.office}
                      </h3>
                    </div>
                    <div className={`space-y-2 text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <p>{location.address}</p>
                      <p>{location.city}</p>
                      <p className="pt-2 font-semibold text-[#FF6B00]">{location.phone}</p>
                      <p className="text-[#FF6B00]">{location.email}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us - Benefits Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-[#0B0B0D]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection
            animationId="benefits-header"
            animationType="slide-up"
            visibleSections={visibleSections}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              What You Get When You Contact Us
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              More than just a consultation - a partnership for success
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Flip Card 1 - 24-Hour Response */}
            <AnimatedSection
              animationId="benefit-1"
              animationType="scale-in"
              visibleSections={visibleSections}
              delay="delay-100"
              className="h-56 perspective-1000"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group hover:rotate-x-180">
                {/* Front Face */}
                <div className={`absolute w-full h-full rounded-xl flex flex-col items-center justify-center p-6 backface-hidden ${
                  isDark ? 'bg-gradient-to-br from-[#1c2536] to-[#2a3546] border border-[#FF6B00]/20' : 'bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200'
                }`}>
                  <div className="w-16 h-16 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={`text-2xl font-bold text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    24-Hour Response Guarantee
                  </h3>
                </div>
                
                {/* Back Face */}
                <div className={`absolute w-full h-full rounded-xl flex flex-col items-center justify-center p-6 backface-hidden rotate-x-180 ${
                  isDark ? 'bg-gradient-to-br from-[#FF6B00] to-[#FF8C00]' : 'bg-gradient-to-br from-[#FF6B00] to-[#FF8C00]'
                }`}>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-white text-center text-base leading-relaxed">
                    Get a detailed response to your inquiry within 24 hours, including initial project assessment and timeline.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Flip Card 2 - Free Consultation */}
            <AnimatedSection
              animationId="benefit-2"
              animationType="scale-in"
              visibleSections={visibleSections}
              delay="delay-200"
              className="h-56 perspective-1000"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group hover:rotate-x-180">
                {/* Front Face */}
                <div className={`absolute w-full h-full rounded-xl flex flex-col items-center justify-center p-6 backface-hidden ${
                  isDark ? 'bg-gradient-to-br from-[#1c2536] to-[#2a3546] border border-[#FF6B00]/20' : 'bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200'
                }`}>
                  <div className="w-16 h-16 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={`text-2xl font-bold text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Free Project Consultation
                  </h3>
                </div>
                
                {/* Back Face */}
                <div className={`absolute w-full h-full rounded-xl flex flex-col items-center justify-center p-6 backface-hidden rotate-x-180 ${
                  isDark ? 'bg-gradient-to-br from-[#FF6B00] to-[#FF8C00]' : 'bg-gradient-to-br from-[#FF6B00] to-[#FF8C00]'
                }`}>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-white text-center text-base leading-relaxed">
                    30-minute strategy session to discuss your goals, challenges, and how we can help - absolutely free, no strings attached.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Flip Card 3 - Project Proposal */}
            <AnimatedSection
              animationId="benefit-3"
              animationType="scale-in"
              visibleSections={visibleSections}
              delay="delay-300"
              className="h-56 perspective-1000"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group hover:rotate-x-180">
                {/* Front Face */}
                <div className={`absolute w-full h-full rounded-xl flex flex-col items-center justify-center p-6 backface-hidden ${
                  isDark ? 'bg-gradient-to-br from-[#1c2536] to-[#2a3546] border border-purple-500/20' : 'bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200'
                }`}>
                  <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className={`text-2xl font-bold text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Detailed Project Proposal
                  </h3>
                </div>
                
                {/* Back Face */}
                <div className="absolute w-full h-full rounded-xl flex flex-col items-center justify-center p-6 backface-hidden rotate-x-180 bg-gradient-to-br from-purple-500 to-purple-600">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-white text-center text-base leading-relaxed">
                    Receive a comprehensive proposal with timeline, tech stack, milestones, and transparent pricing.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-[#1c2536]' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection
            animationId="faq-header"
            animationType="slide-up"
            visibleSections={visibleSections}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                q: "How quickly can you start my project?",
                a: "We can typically start within 1-2 weeks after project kickoff. For urgent projects, we offer expedited onboarding to begin within 3-5 business days."
              },
              {
                q: "What's your typical project timeline?",
                a: "Simple projects (MVPs, landing pages): 2-4 weeks. Medium complexity (SaaS, web apps): 2-3 months. Enterprise solutions: 3-6 months. We provide detailed timelines during consultation."
              },
              {
                q: "Do you offer ongoing support after launch?",
                a: "Yes! We provide 30 days of free support post-launch. We also offer monthly maintenance packages including updates, monitoring, and priority support."
              },
              {
                q: "How do you ensure project quality?",
                a: "We follow industry best practices with code reviews, automated testing, QA processes, and iterative client feedback. Our 95% client satisfaction rate speaks for itself."
              },
              {
                q: "Can I hire you for just consultation or audit?",
                a: "Absolutely! We offer standalone consulting, code audits, architecture reviews, and strategic planning sessions. Contact us to discuss your specific needs."
              }
            ].map((faq, index) => (
              <AnimatedSection
                key={index}
                animationId={`faq-${index}`}
                animationType="slide-up"
                visibleSections={visibleSections}
                delay={`delay-${(index + 1) * 50}`}
                className={`rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-[#0d1117] border-gray-800 hover:border-[#FF6B00]/50 hover:shadow-lg hover:shadow-[#FF6B00]/10' 
                    : 'bg-white border-gray-200 hover:border-[#FF6B00]/50 hover:shadow-lg hover:shadow-[#FF6B00]/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <h3 className={`text-lg font-bold pr-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {faq.q}
                  </h3>
                  <svg 
                    className={`w-6 h-6 text-[#FF6B00] flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className={`px-6 pb-6 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-[#0B0B0D]' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection
            animationId="response-time"
            animationType="scale-in"
            visibleSections={visibleSections}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg className="w-6 h-6 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                We typically respond within 24 hours
              </span>
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              For urgent inquiries, please call us directly at our office numbers listed above.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
