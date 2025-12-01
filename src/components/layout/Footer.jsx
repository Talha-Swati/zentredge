// src/components/layout/Footer.jsx
import React from 'react';

/**
 * Footer component with links and copyright
 */
const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ['About', 'Services', 'Portfolio', 'Contact'],
    Services: ['AI Integration', 'Web Development', 'SaaS Development', 'Mobile Apps'],
    Resources: ['Blog', 'Case Studies', 'Documentation', 'Support'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  };

  return (
    <footer className={`relative ${
      isDark ? 'bg-[#0B0B0D] border-t border-[#FF6B00]/20' : 'bg-[#F8F9FA] border-t-2 border-[#FF6B00]/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/logos/Z2.png" 
                alt="ZentRedge" 
                className="h-24 sm:h-28 md:h-32 w-auto object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
            <p className={`text-sm ${isDark ? 'text-[#B3B3B3]' : 'text-[#4A4A4A]'} max-w-xs`}>
              Building advanced software for bold businesses. Transform your ideas into reality with cutting-edge technology.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-[#1A1A1A]'}`}>
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className={`text-sm ${
                        isDark ? 'text-[#B3B3B3] hover:text-[#FF6B00]' : 'text-[#4A4A4A] hover:text-[#FF6B00]'
                      } transition-colors duration-300`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t ${
          isDark ? 'border-[#FF6B00]/10' : 'border-[#FF6B00]/20'
        } flex flex-col md:flex-row justify-between items-center gap-4`}>
          <p className={`text-sm ${isDark ? 'text-[#6B6B6B]' : 'text-[#9E9E9E]'}`}>
            © {currentYear} ZentRedge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className={`text-sm ${isDark ? 'text-[#6B6B6B] hover:text-[#FF6B00]' : 'text-[#9E9E9E] hover:text-[#FF6B00]'} transition-colors`}
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className={`text-sm ${isDark ? 'text-[#6B6B6B] hover:text-[#FF6B00]' : 'text-[#9E9E9E] hover:text-[#FF6B00]'} transition-colors`}
            >
              Terms of Service
            </a>
            <a
              href="#contact"
              className={`text-sm ${isDark ? 'text-[#6B6B6B] hover:text-[#FF6B00]' : 'text-[#9E9E9E] hover:text-[#FF6B00]'} transition-colors`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
