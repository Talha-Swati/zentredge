// src/components/pages/AboutPage.jsx
import React from 'react';
import AnimatedSection from '../common/AnimatedSection';
import dp3 from '/logos/dp3.png';

/**
 * About Us Page - Professional & Beautiful
 * Includes: Hero, Story, Values, Team, CTA
 */
const AboutPage = ({ isDark, visibleSections }) => {
  const values = [
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to solve complex problems.'
    },
    {
      icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      title: 'Excellence',
      description: 'We are committed to delivering high-quality solutions that exceed expectations.'
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their vision is realized.'
    },
    {
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      title: 'Integrity',
      description: 'We operate with transparency and honesty in all our interactions.'
    },
    {
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      title: 'Adaptability',
      description: 'We embrace change and continuously evolve our skills and processes.'
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Impact',
      description: 'We measure our success by the positive impact our solutions have on client businesses.'
    }
  ];

  const coreTeam = [
    {
      name: 'Talha Riaz',
      position: 'Co-Founder',
      image: dp3,
      bio: 'Visionary strategic leader focused on business growth and long-term company direction. Drives innovation and strategic partnerships to expand ZentRedge\'s market presence.'
    },
    {
      name: 'Hammad Ashraf',
      position: 'Co-Founder',
      image: null,
      bio: 'Operations and finance expert managing daily team performance, company budgets, and strategic deals. Ensures operational excellence and financial sustainability across all business initiatives.'
    },
    {
      name: 'Muhammad Saeed',
      position: 'Co-Founder',
      image: null,
      bio: 'Provides strategic technical leadership, converting vision into robust, future-ready solutions. Drives Zentredge’s tech vision by guiding engineering teams and overseeing architecture decisions.'
    }
  ];

  const teamMembers = [
    {
      name: 'Ahmed Khan',
      position: 'Senior Developer',
      image: null,
      bio: 'Full-stack expert specializing in modern web technologies'
    },
    {
      name: 'Sara Ali',
      position: 'UI/UX Designer',
      image: null,
      bio: 'Creative designer crafting beautiful user experiences'
    },
    {
      name: 'Bilal Hassan',
      position: 'AI Engineer',
      image: null,
      bio: 'Machine learning specialist building intelligent solutions'
    },
    {
      name: 'Fatima Malik',
      position: 'Project Manager',
      image: null,
      bio: 'Organized leader ensuring timely project delivery'
    },
    {
      name: 'Usman Tariq',
      position: 'DevOps Engineer',
      image: null,
      bio: 'Infrastructure expert optimizing deployment pipelines'
    },
    {
      name: 'Ayesha Noor',
      position: 'QA Engineer',
      image: null,
      bio: 'Quality champion ensuring flawless software delivery'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-[#1c2536]' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection
            animationId="about-hero"
            animationType="slide-up"
            visibleSections={visibleSections}
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              About ZentRedge
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              We're a team of passionate developers, designers, and AI specialists building the future of software with cutting-edge technology solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-[#0B0B0D]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Story Text */}
            <AnimatedSection
              animationId="story-text"
              animationType="slide-right"
              visibleSections={visibleSections}
            >
              <div className={`inline-block px-4 py-2 rounded-full mb-6 ${
                isDark ? 'bg-[#FF6B00]/10' : 'bg-[#FF6B00]/20'
              }`}>
                <span className="text-[#FF6B00] font-semibold text-sm">Our Story</span>
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Building the Future of Software
              </h2>
              <div className={`space-y-4 text-base md:text-lg ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <p>
                  Founded in 2020, ZentRedge emerged from a simple vision: to create software solutions that truly make a difference in businesses and people's lives.
                </p>
                <p>
                  What started as a small team of developers has grown into a full-service software development company specializing in AI integrations, SaaS platforms, and cutting-edge web and mobile applications.
                </p>
                <p>
                  Today, we're proud to have delivered 50+ successful projects, maintaining a 95% client satisfaction rate, and building long-term partnerships with startups and enterprises worldwide.
                </p>
              </div>
            </AnimatedSection>

            {/* Right - Visual Element */}
            <AnimatedSection
              animationId="story-visual"
              animationType="slide-left"
              visibleSections={visibleSections}
              className="relative"
            >
              <div className={`rounded-2xl p-8 ${isDark ? 'bg-[#1c2536]' : 'bg-gray-100'} relative overflow-hidden`}>
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className={`p-6 rounded-xl ${isDark ? 'bg-[#0d1117]' : 'bg-white'}`}>
                      <div className="text-4xl font-bold text-[#FF6B00] mb-2">50+</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Projects Delivered</div>
                    </div>
                    <div className={`p-6 rounded-xl ${isDark ? 'bg-[#0d1117]' : 'bg-white'}`}>
                      <div className="text-4xl font-bold text-[#FF6B00] mb-2">95%</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Client Satisfaction</div>
                    </div>
                    <div className={`p-6 rounded-xl ${isDark ? 'bg-[#0d1117]' : 'bg-white'}`}>
                      <div className="text-4xl font-bold text-[#FF6B00] mb-2">20+</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Team Members</div>
                    </div>
                    <div className={`p-6 rounded-xl ${isDark ? 'bg-[#0d1117]' : 'bg-white'}`}>
                      <div className="text-4xl font-bold text-[#FF6B00] mb-2">8+</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-[#1c2536]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection
            animationId="values-header"
            animationType="slide-up"
            visibleSections={visibleSections}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Our Values
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              The principles that guide our work and define our culture.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                animationId={`value-${index}`}
                animationType="scale-in"
                visibleSections={visibleSections}
                delay={`delay-${(index % 3 + 1) * 100}`}
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-[#0d1117]' : 'bg-white'
                } border ${isDark ? 'border-gray-800' : 'border-gray-200'} hover:border-[#FF6B00]/50 transition-all duration-300`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#FF6B00]/10 mb-4">
                  <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {value.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {value.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-[#0B0B0D]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Core Team */}
          <AnimatedSection
            animationId="core-team-header"
            animationType="slide-up"
            visibleSections={visibleSections}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Core Team
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              The founders driving ZentRedge's vision.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
            {coreTeam.map((member, index) => (
              <AnimatedSection
                key={index}
                animationId={`core-${index}`}
                animationType="slide-up"
                visibleSections={visibleSections}
                delay={`delay-${(index + 1) * 100}`}
                className="text-center"
              >
                {/* Avatar */}
                <div className={`w-full aspect-square rounded-2xl mb-4 overflow-hidden relative group ${
                  isDark ? 'bg-[#1c2536]' : 'bg-gray-100'
                }`}>
                  {member.image ? (
                    <>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient Overlay - Always visible */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B00]/20 via-transparent to-transparent"></div>
                      {/* Bottom Glow - Appears on hover */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#FF6B00]/40 via-[#FF6B00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Border Glow Effect - Always visible, intensifies on hover */}
                      <div className="absolute inset-0 border-2 border-[#FF6B00]/50 group-hover:border-[#FF6B00]/80 transition-all duration-500 rounded-2xl"></div>
                      {/* Shine Effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-[#FF6B00]/20 flex items-center justify-center">
                        <svg className="w-16 h-16 text-[#FF6B00]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className={`text-xl font-bold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {member.name}
                </h3>
                <p className="text-[#FF6B00] text-sm font-medium mb-2">
                  {member.position}
                </p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {member.bio}
                </p>
              </AnimatedSection>
            ))}
          </div>

          {/* Team Members */}
          <AnimatedSection
            animationId="team-members-header"
            animationType="slide-up"
            visibleSections={visibleSections}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Team Members
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              The talented professionals making it happen.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection
                key={index}
                animationId={`team-${index}`}
                animationType="slide-up"
                visibleSections={visibleSections}
                delay={`delay-${(index % 3 + 1) * 100}`}
                className="text-center"
              >
                {/* Avatar Placeholder */}
                <div className={`w-full aspect-square rounded-2xl mb-4 flex items-center justify-center ${
                  isDark ? 'bg-[#1c2536]' : 'bg-gray-100'
                } overflow-hidden`}>
                  <div className="w-32 h-32 rounded-full bg-[#FF6B00]/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-[#FF6B00]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {member.name}
                </h3>
                <p className="text-[#FF6B00] text-sm font-medium mb-2">
                  {member.position}
                </p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {member.bio}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-[#1c2536]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection
            animationId="credentials-header"
            animationType="slide-up"
            visibleSections={visibleSections}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Certified Excellence & Recognition
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Our commitment to quality is backed by industry certifications and client success.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Certifications */}
            <AnimatedSection
              animationId="cert-1"
              animationType="slide-up"
              visibleSections={visibleSections}
              delay="delay-100"
              className={`p-6 rounded-xl text-center ${
                isDark ? 'bg-[#0d1117] border border-[#FF6B00]/20' : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FF6B00]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                AWS Certified
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Solutions Architect & Cloud Practitioner certified team
              </p>
            </AnimatedSection>

            <AnimatedSection
              animationId="cert-2"
              animationType="slide-up"
              visibleSections={visibleSections}
              delay="delay-200"
              className={`p-6 rounded-xl text-center ${
                isDark ? 'bg-[#0d1117] border border-[#FF6B00]/20' : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FF6B00]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                OpenAI Partner
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Official partner for AI integration and implementation
              </p>
            </AnimatedSection>

            <AnimatedSection
              animationId="cert-3"
              animationType="slide-up"
              visibleSections={visibleSections}
              delay="delay-300"
              className={`p-6 rounded-xl text-center ${
                isDark ? 'bg-[#0d1117] border border-[#FF6B00]/20' : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FF6B00]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ISO 9001:2015
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Quality management system certified for excellence
              </p>
            </AnimatedSection>
          </div>

          {/* Client Success Stories */}
          <AnimatedSection
            animationId="success-stories"
            animationType="slide-up"
            visibleSections={visibleSections}
            delay="delay-100"
          >
            <h3 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Client Success Stories
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${
                isDark ? 'bg-[#0d1117] border border-gray-800' : 'bg-gray-50 border border-gray-200'
              }`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      AD
                    </div>
                  </div>
                  <div>
                    <h4 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      At-Drone
                    </h4>
                    <p className="text-sm text-[#FF6B00]">FAA Drone Certification Platform</p>
                  </div>
                </div>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  "ZentRedge built our comprehensive e-learning platform for FAA Part 107 drone certification courses. The system handles student enrollment, course delivery, practice exams, and certification tracking seamlessly. Student pass rates increased by 78%!"
                </p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="text-[#FF6B00] font-bold">78%</span>
                    <span className={`ml-1 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Pass Rate Increase</span>
                  </div>
                  <div>
                    <span className="text-[#FF6B00] font-bold">5,000+</span>
                    <span className={`ml-1 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Students Trained</span>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${
                isDark ? 'bg-[#0d1117] border border-gray-800' : 'bg-gray-50 border border-gray-200'
              }`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                      JT
                    </div>
                  </div>
                  <div>
                    <h4 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Jointoda
                    </h4>
                    <p className="text-sm text-[#FF6B00]">Truck Owners & Drivers Association</p>
                  </div>
                </div>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  "ZentRedge developed our association management platform connecting truck owners and drivers. Features include member registration, job matching, load board, and community forums. We now serve 2,500+ active members with 95% satisfaction!"
                </p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="text-[#FF6B00] font-bold">2,500+</span>
                    <span className={`ml-1 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Active Members</span>
                  </div>
                  <div>
                    <span className="text-[#FF6B00] font-bold">95%</span>
                    <span className={`ml-1 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Satisfaction Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-[#0B0B0D]' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection
            animationId="cta-about"
            animationType="scale-in"
            visibleSections={visibleSections}
          >
            <div className={`p-8 rounded-2xl ${
              isDark ? 'bg-[#1c2536] border border-[#FF6B00]/20' : 'bg-gray-100 border border-gray-300'
            }`}>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Let's Build Something Amazing Together
              </h2>
              <p className={`text-lg mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Join 50+ successful companies who trust ZentRedge for their software development needs.
              </p>
              <p className={`text-base mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Get a free consultation and project estimate within 24 hours. No commitments, just expert advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={`px-8 py-4 rounded-lg font-bold transition-all duration-300 text-lg border-2 ${
                  isDark 
                    ? 'bg-transparent border-[#FF6B00] text-[#FF6B00] hover:shadow-[0_4px_12px_rgba(255,107,0,0.4)]' 
                    : 'bg-transparent border-[#FF6B00] text-[#FF6B00] hover:shadow-[0_4px_12px_rgba(255,107,0,0.3)]'
                }`}>
                  Start Your Project Today →
                </button>
                <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 ${
                  isDark 
                    ? 'bg-transparent border-gray-700 text-gray-300 hover:border-[#FF6B00] hover:text-[#FF6B00] hover:shadow-[0_4px_12px_rgba(255,107,0,0.3)]' 
                    : 'bg-transparent border-gray-400 text-gray-700 hover:border-[#FF6B00] hover:text-[#FF6B00] hover:shadow-[0_4px_12px_rgba(255,107,0,0.2)]'
                }`}>
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
