// src/components/sections/PortfolioSection.jsx
import React, { useState } from 'react';
import AnimatedSection from '../common/AnimatedSection';

/**
 * Portfolio/Work showcase section with tabs - Erinite Style
 */
const PortfolioSection = ({ isDark, visibleSections }) => {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'AI', 'Web', 'SaaS', 'Mobile'];
  
  const projects = [
    {
      id: 1,
      title: 'Cold Outreach Automation Tool',
      description: 'Developed a low-code automation tool combining Google Sheets, ChatGPT, and Zapier to allow users to launch personalized campaigns with minimal setup.',
      category: 'AI',
      image: '/images/projects/cold-outreach.png',
      results: {
        metric1: '85%',
        label1: 'Response Rate Increase',
        metric2: '10x',
        label2: 'Faster Campaign Launch',
        metric3: '60%',
        label3: 'Cost Reduction'
      },
      technologies: ['ChatGPT API', 'Google Sheets', 'Zapier', 'Node.js'],
      testimonial: '"This tool transformed our outreach process. We saw immediate results and saved countless hours." - Marketing Director, TechStart Inc.'
    },
    {
      id: 2,
      title: 'Internal Workflow Automation Hub for SMBs',
      description: 'Created a lightweight MVP that offers drag-and-drop automation building, integrated app connections, and smart AI task handling.',
      category: 'AI',
      image: '/images/projects/automation-hub.png',
      results: {
        metric1: '40hrs',
        label1: 'Weekly Time Saved',
        metric2: '95%',
        label2: 'Task Accuracy',
        metric3: '50+',
        label3: 'Apps Integrated'
      },
      technologies: ['React', 'Python', 'OpenAI', 'PostgreSQL'],
      testimonial: '"The automation hub eliminated repetitive tasks and boosted our team productivity significantly." - CEO, GrowthHub'
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
      category: 'Web',
      image: '/images/projects/ecommerce.png',
      results: {
        metric1: '300%',
        label1: 'Sales Growth',
        metric2: '2.5s',
        label2: 'Page Load Time',
        metric3: '99.9%',
        label3: 'Uptime'
      },
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'AWS'],
      testimonial: '"Our online sales tripled within 6 months of launch. The platform is fast and reliable." - Founder, ShopLocal'
    },
    {
      id: 4,
      title: 'Project Management SaaS',
      description: 'Developed a collaborative project management tool with real-time updates and team communication features.',
      category: 'SaaS',
      image: '/images/projects/project-mgmt.png',
      results: {
        metric1: '500+',
        label1: 'Active Teams',
        metric2: '35%',
        label2: 'Productivity Boost',
        metric3: '4.8/5',
        label3: 'User Rating'
      },
      technologies: ['React', 'Socket.io', 'Node.js', 'Redis'],
      testimonial: '"Best project management tool we\'ve used. Real-time updates keep everyone aligned." - PM Lead, DevCorp'
    }
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className={`relative py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-[#0B0B0D]' : 'bg-[#F8F9FA]'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection
          animationId="portfolio-header"
          animationType="slide-up"
          visibleSections={visibleSections}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-[#1A1A1A]'
          }`}>
            Our Work
          </h2>
          <p className={`text-lg md:text-xl ${
            isDark ? 'text-[#B3B3B3]' : 'text-[#4A4A4A]'
          }`}>
            Explore our portfolio of successful projects and case studies.
          </p>
        </AnimatedSection>

        {/* Tabs - Erinite Style with Mobile Support */}
        <AnimatedSection
          animationId="portfolio-tabs"
          animationType="slide-up"
          visibleSections={visibleSections}
          delay="delay-100"
          className="flex justify-center mb-12 overflow-x-auto px-4"
        >
          <div className={`inline-flex backdrop-blur-sm p-1.5 rounded-xl gap-1 min-w-max ${
            isDark ? 'bg-gray-800/30' : 'bg-gray-300/50'
          }`}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white shadow-lg'
                    : isDark
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-400/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid - 2 Column Layout with Reduced Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animationId={`project-${project.id}`}
              animationType="scale-in"
              visibleSections={visibleSections}
              delay={`delay-${(index % 2 + 1) * 100}`}
              className="group"
            >
              <div className="bg-[#1a1d29] rounded-xl overflow-hidden border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                {/* Project Image Placeholder - Simple Black with Orange Glow */}
                <div className="h-40 sm:h-44 md:h-48 bg-black flex items-center justify-center relative overflow-hidden">
                  {/* Orange Glow Grid Pattern */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255, 107, 0, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 107, 0, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '30px 30px',
                      boxShadow: 'inset 0 0 100px rgba(255, 107, 0, 0.05)'
                    }}
                  ></div>
                  <span className="text-gray-600 text-xs sm:text-sm relative z-10">
                    {project.image}
                  </span>
                </div>
                
                {/* Project Info - Enhanced with Results */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-xs sm:text-sm">
                    {project.description}
                  </p>
                  
                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-800">
                    <div className="text-center">
                      <div className="text-[#FF6B00] font-bold text-sm sm:text-base">{project.results.metric1}</div>
                      <div className="text-gray-500 text-xs">{project.results.label1}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#FF6B00] font-bold text-sm sm:text-base">{project.results.metric2}</div>
                      <div className="text-gray-500 text-xs">{project.results.label2}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#FF6B00] font-bold text-sm sm:text-base">{project.results.metric3}</div>
                      <div className="text-gray-500 text-xs">{project.results.label3}</div>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-gray-800/50 text-gray-400 rounded border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Client Testimonial */}
                  <div className="mb-4 p-3 bg-gray-800/30 rounded-lg border-l-2 border-blue-500">
                    <p className="text-gray-400 text-xs italic">
                      {project.testimonial}
                    </p>
                  </div>
                  
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#FF6B00] text-[#FF6B00] hover:shadow-[0_4px_12px_rgba(255,107,0,0.4)] px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 group/btn">
                    View Full Case Study
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <AnimatedSection
          animationId="portfolio-cta"
          animationType="slide-up"
          visibleSections={visibleSections}
          delay="delay-300"
          className="text-center mt-16"
        >
          <div className={`max-w-3xl mx-auto p-8 rounded-2xl ${
            isDark ? 'bg-[#1c2536] border border-[#FF6B00]/20' : 'bg-gray-100 border border-gray-300'
          }`}>
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Start Your Success Story?
            </h3>
            <p className={`text-base md:text-lg mb-6 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Join 50+ companies that have transformed their business with our solutions. 
              Let's discuss your project and create measurable results together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-transparent border-2 border-[#FF6B00] text-[#FF6B00] hover:shadow-[0_4px_12px_rgba(255,107,0,0.4)] px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Free Consultation
              </button>
              <button className={`border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isDark 
                  ? 'border-gray-700 text-gray-300 hover:border-[#FF6B00] hover:text-[#FF6B00] hover:shadow-[0_4px_12px_rgba(255,107,0,0.3)]' 
                  : 'border-gray-400 text-gray-700 hover:border-[#FF6B00] hover:text-[#FF6B00] hover:shadow-[0_4px_12px_rgba(255,107,0,0.2)]'
              }`}>
                View All Projects
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PortfolioSection;
