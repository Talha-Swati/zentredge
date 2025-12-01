// src/components/pages/ServicesPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../common/AnimatedSection';

/**
 * Dedicated Services Page with Tabbed Interface - Erinite Style
 * Shows detailed service information with tech stack and pricing
 */
const ServicesPage = ({ isDark, visibleSections }) => {
  const [activeService, setActiveService] = useState('AI Integrations');

  const services = {
    'AI Integrations': {
      title: 'AI Integrations',
      description: 'Enhance your applications with powerful AI capabilities that drive innovation and efficiency. Our AI integration services help businesses leverage the latest advancements in artificial intelligence.',
      features: [
        {
          title: 'Custom AI Models',
          description: 'Tailored AI solutions designed specifically for your business needs and use cases.'
        },
        {
          title: 'Natural Language Processing',
          description: 'Enable your applications to understand, interpret, and respond to human language.'
        },
        {
          title: 'Predictive Analytics',
          description: 'Leverage data to forecast trends and make informed business decisions.'
        },
        {
          title: 'Computer Vision',
          description: 'Implement image and video analysis capabilities for object detection and recognition.'
        }
      ],
      techStack: [
        {
          name: 'TensorFlow',
          description: 'Open-source machine learning framework'
        },
        {
          name: 'PyTorch',
          description: 'Deep learning platform for research and production'
        },
        {
          name: 'Hugging Face',
          description: 'State-of-the-art NLP models and libraries'
        },
        {
          name: 'OpenAI API',
          description: 'Advanced language models and capabilities'
        }
      ],
      pricing: [
        { tier: 'Basic AI Integration', price: '$10,000+' },
        { tier: 'Custom AI Model Development', price: '$25,000+' },
        { tier: 'Enterprise AI Solutions', price: '$50,000+' }
      ],
      cta: 'Get Started with AI'
    },
    'Web Development': {
      title: 'Web Development',
      description: 'Create stunning, responsive websites and web applications that engage users and drive conversions. Our web development services focus on performance, usability, and modern design.',
      features: [
        {
          title: 'Responsive Design',
          description: 'Websites that look and function perfectly on all devices and screen sizes.'
        },
        {
          title: 'Progressive Web Apps',
          description: 'Web applications that offer native-like experiences with offline capabilities.'
        },
        {
          title: 'E-commerce Solutions',
          description: 'Custom online stores with secure payment processing and inventory management.'
        },
        {
          title: 'Performance Optimization',
          description: 'Fast-loading websites optimized for search engines and user experience.'
        }
      ],
      techStack: [
        {
          name: 'Next.js',
          description: 'React framework for production-grade applications'
        },
        {
          name: 'Tailwind CSS',
          description: 'Utility-first CSS framework for rapid UI development'
        },
        {
          name: 'TypeScript',
          description: 'Typed JavaScript for more reliable code'
        },
        {
          name: 'Framer Motion',
          description: 'Production-ready animation library'
        }
      ],
      pricing: [
        { tier: 'Basic Website', price: '$5,000+' },
        { tier: 'Custom Web Application', price: '$15,000+' },
        { tier: 'E-commerce Platform', price: '$20,000+' }
      ],
      cta: 'Get Started with Web Development'
    },
    'SaaS Development': {
      title: 'SaaS Development',
      description: 'Build scalable cloud-based software solutions that grow with your business. Our SaaS development services help you create subscription-based applications with robust features.',
      features: [
        {
          title: 'Custom SaaS Platforms',
          description: 'End-to-end development of cloud-based software tailored to your business model.'
        },
        {
          title: 'Subscription Management',
          description: 'Robust billing and subscription systems with multiple pricing tiers.'
        },
        {
          title: 'Multi-tenant Architecture',
          description: 'Secure and scalable infrastructure that serves multiple customers efficiently.'
        },
        {
          title: 'API Development',
          description: 'Create robust APIs for third-party integrations and extensibility.'
        }
      ],
      techStack: [
        {
          name: 'Next.js',
          description: 'React framework for production-grade applications'
        },
        {
          name: 'Node.js',
          description: 'JavaScript runtime for scalable backend services'
        },
        {
          name: 'PostgreSQL',
          description: 'Powerful, open-source relational database'
        },
        {
          name: 'AWS/Azure',
          description: 'Cloud infrastructure for reliable hosting'
        }
      ],
      pricing: [
        { tier: 'MVP Development', price: '$15,000+' },
        { tier: 'Full-featured SaaS', price: '$30,000+' },
        { tier: 'Enterprise SaaS Solutions', price: '$60,000+' }
      ],
      cta: 'Get Started with SaaS'
    },
    'Mobile Apps': {
      title: 'Mobile Apps',
      description: 'Create engaging mobile experiences for iOS and Android that delight users and drive engagement. Our mobile development services deliver high-quality native and cross-platform applications.',
      features: [
        {
          title: 'Native App Development',
          description: 'iOS and Android apps built with platform-specific technologies for optimal performance.'
        },
        {
          title: 'Cross-platform Solutions',
          description: 'Build once, deploy everywhere with React Native or Flutter.'
        },
        {
          title: 'App Store Optimization',
          description: 'Maximize visibility and downloads with strategic ASO implementation.'
        },
        {
          title: 'Push Notifications',
          description: 'Engage users with timely, relevant notifications and messaging.'
        }
      ],
      techStack: [
        {
          name: 'React Native',
          description: 'Cross-platform mobile framework'
        },
        {
          name: 'Flutter',
          description: 'Google\'s UI toolkit for beautiful apps'
        },
        {
          name: 'Swift/Kotlin',
          description: 'Native iOS and Android development'
        },
        {
          name: 'Firebase',
          description: 'Backend services and analytics'
        }
      ],
      pricing: [
        { tier: 'Basic Mobile App', price: '$12,000+' },
        { tier: 'Advanced Features App', price: '$25,000+' },
        { tier: 'Enterprise Mobile Solution', price: '$50,000+' }
      ],
      cta: 'Get Started with Mobile'
    },
    'AI Agents': {
      title: 'AI Agents',
      description: 'Deploy intelligent AI agents that automate tasks, provide customer support, and enhance business operations. Our AI agent solutions leverage cutting-edge technology to deliver autonomous capabilities.',
      features: [
        {
          title: 'Conversational AI',
          description: 'Build chatbots and virtual assistants that understand and respond naturally.'
        },
        {
          title: 'Task Automation',
          description: 'Automate repetitive tasks and workflows with intelligent agents.'
        },
        {
          title: 'Customer Support Bots',
          description: '24/7 automated customer service with human-like interactions.'
        },
        {
          title: 'Integration Capabilities',
          description: 'Connect AI agents with your existing systems and databases.'
        }
      ],
      techStack: [
        {
          name: 'LangChain',
          description: 'Framework for building AI agent applications'
        },
        {
          name: 'OpenAI GPT',
          description: 'Advanced language models for conversations'
        },
        {
          name: 'Pinecone',
          description: 'Vector database for semantic search'
        },
        {
          name: 'Anthropic Claude',
          description: 'AI assistant for complex reasoning'
        }
      ],
      pricing: [
        { tier: 'Basic AI Agent', price: '$8,000+' },
        { tier: 'Advanced AI Assistant', price: '$20,000+' },
        { tier: 'Enterprise AI Platform', price: '$45,000+' }
      ],
      cta: 'Get Started with AI Agents'
    }
  };

  const tabs = Object.keys(services);
  const currentService = services[activeService];

  return (
    <section>
      {/* Header Section */}
      <div className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-[#1c2536]' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection
            animationId="services-page-header"
            animationType="slide-up"
            visibleSections={visibleSections}
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Our Expertise
            </h1>
            <p className={`text-lg md:text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              We offer comprehensive software development solutions tailored to your business needs.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className={`sticky top-16 z-40 ${isDark ? 'bg-[#0B0B0D]/95' : 'bg-white/95'} backdrop-blur-md border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveService(tab)}
                className={`px-6 py-4 font-medium whitespace-nowrap transition-all duration-300 border-b-2 ${
                  activeService === tab
                    ? 'border-[#FF6B00] text-[#FF6B00]'
                    : isDark
                    ? 'border-transparent text-gray-400 hover:text-white'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Service Details */}
          <div>
            <AnimatedSection
              animationId={`service-${activeService}-title`}
              animationType="slide-up"
              visibleSections={visibleSections}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {currentService.title}
              </h2>
              <p className={`text-base md:text-lg mb-8 leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {currentService.description}
              </p>
            </AnimatedSection>

            {/* Features List */}
            <div className="space-y-6">
              {currentService.features.map((feature, index) => (
                <AnimatedSection
                  key={index}
                  animationId={`feature-${activeService}-${index}`}
                  animationType="slide-right"
                  visibleSections={visibleSections}
                  delay={`delay-${(index + 1) * 100}`}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* CTA Button */}
            <AnimatedSection
              animationId={`cta-${activeService}`}
              animationType="scale-in"
              visibleSections={visibleSections}
              className="mt-8"
            >
              <Link to="/contact">
                <button className="bg-[#FF6B00] hover:bg-[#FF8C00] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-[#FF6B00]/20 group">
                  Start Your Project Today
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </AnimatedSection>

            {/* Our Guarantee Card - More Prominent */}
            <AnimatedSection
              animationId={`guarantee-${activeService}`}
              animationType="scale-in"
              visibleSections={visibleSections}
              delay="delay-100"
              className={`mt-8 p-8 rounded-2xl border-2 shadow-xl ${
                isDark 
                  ? 'bg-gradient-to-br from-[#0d1117] to-[#1a1d29] border-[#00FF00]/40' 
                  : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-400'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Our Guarantee to You
                  </h4>
                  <ul className={`space-y-3.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                      <span className="text-base">On-time delivery or your money back</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                      <span className="text-base">90-day bug-free guarantee</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                      <span className="text-base">95% client satisfaction rate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                      <span className="text-base">Transparent pricing - no hidden costs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Tech Stack & Pricing */}
          <div>
            {/* Tech Stack */}
            <AnimatedSection
              animationId={`techstack-${activeService}`}
              animationType="slide-left"
              visibleSections={visibleSections}
              className={`rounded-2xl p-6 mb-8 ${
                isDark ? 'bg-[#1c2536]' : 'bg-gray-50'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Our {activeService} Tech Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentService.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl ${
                      isDark ? 'bg-[#0d1117]' : 'bg-white'
                    } border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
                  >
                    <h4 className={`font-bold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {tech.name}
                    </h4>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Pricing */}
            <AnimatedSection
              animationId={`pricing-${activeService}`}
              animationType="slide-left"
              visibleSections={visibleSections}
              delay="delay-200"
              className={`rounded-2xl p-6 ${
                isDark ? 'bg-[#1c2536]' : 'bg-gray-50'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Pricing
              </h3>
              <div className="space-y-4">
                {currentService.pricing.map((tier, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className={`font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {tier.tier}
                    </span>
                    <span className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {tier.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className={`text-sm mt-6 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Prices vary based on project complexity and requirements. Contact us for a custom quote.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
