// src/components/sections/ServicesSection.jsx
import React from 'react';
import AnimatedSection from '../common/AnimatedSection';

/**
 * Services showcase section - Updated layout with better visuals
 */
const ServicesSection = ({ isDark, visibleSections }) => {
  const services = [
    {
      id: 'service-ai',
      title: 'AI Integrations',
      description: 'Enhance your applications with powerful AI capabilities',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      features: ['Custom AI models', 'Natural language processing', 'Predictive analytics']
    },
    {
      id: 'service-web',
      title: 'Web Development',
      description: 'Create stunning, responsive websites and web applications',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      features: ['Responsive design', 'Progressive web apps', 'E-commerce solutions']
    },
    {
      id: 'service-saas',
      title: 'SaaS Development',
      description: 'Build scalable cloud-based software solutions',
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      features: ['Custom SaaS platforms', 'Subscription management', 'Multi-tenant architecture']
    },
    {
      id: 'service-mobile',
      title: 'Mobile Apps',
      description: 'Create engaging mobile experiences for iOS and Android',
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      features: ['Native app development', 'Cross-platform solutions', 'App store optimization']
    }
  ];

  return (
    <section id="services" className={`relative py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-[#1c2536]' : 'bg-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection
          animationId="services-header"
          animationType="slide-up"
          visibleSections={visibleSections}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-[#1A1A1A]'
          }`}>
            Our Services
          </h2>
          <p className={`text-lg md:text-xl ${
            isDark ? 'text-[#B3B3B3]' : 'text-[#4A4A4A]'
          } max-w-3xl mx-auto`}>
            We offer comprehensive software development solutions tailored to your business needs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              animationId={service.id}
              animationType="slide-up"
              visibleSections={visibleSections}
              delay={`delay-${(index % 4 + 1) * 100}`}
              className={`group relative rounded-2xl p-6 ${
                isDark 
                  ? 'bg-[#0d1117] border border-[#FF6B00]/20' 
                  : 'bg-[#F8F9FA] border-2 border-[#FF6B00]/30'
              } hover:border-[#FF6B00]/50 transition-all duration-300 hover:shadow-lg ${
                isDark ? 'hover:shadow-[#FF6B00]/10' : 'hover:shadow-[#FF6B00]/20'
              } hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                isDark ? 'bg-[#FF6B00]/10' : 'bg-[#FF6B00]/20'
              } group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-8 h-8 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-3 ${
                isDark ? 'text-white' : 'text-[#1A1A1A]'
              }`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`text-sm mb-4 ${
                isDark ? 'text-[#B3B3B3]' : 'text-[#4A4A4A]'
              }`}>
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={isDark ? 'text-[#CCCCCC]' : 'text-[#4A4A4A]'}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <button className="mt-6 text-[#FF6B00] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
