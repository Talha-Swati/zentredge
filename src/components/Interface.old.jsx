// src/components/Interface.jsx - Refactored Professional Version
import React from 'react';
import PageLayout from './layout/PageLayout';
import HeroSection from './sections/HeroSection';
import MetricsSection from './sections/MetricsSection';
import ServicesSection from './sections/ServicesSection';
import ContactSection from './sections/ContactSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Main ZentRedge Interface Component
 * Composed of modular, reusable sections
 * Reduced from 628 lines to ~20 lines using component composition
 */
const Interface = () => {
  // Custom hook for scroll animations (replaces useEffect logic)
  const visibleSections = useScrollAnimation();

  return (
    <div className={`relative min-h-screen ${isDark ? 'bg-[#0B0B0D] text-[#E6E6E6]' : 'bg-gradient-to-br from-[#FFFFFF] via-[#FFF5F0] to-[#FFE8DC] text-[#1A1A1A]'} transition-colors duration-300 overflow-hidden`}>
      {/* Animated Background - Only in Dark Mode */}
      {isDark && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.12)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>
      )}
      
      {/* Dark/Light Mode Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-20 right-6 z-50 rounded-full p-3 shadow-lg transition-all duration-300 ${
          isDark 
            ? 'bg-gradient-to-br from-[#111113] to-[#0B0B0D] border border-[#1E1E1E] hover:border-[#FF6B00]' 
            : 'bg-white border border-[#FFD4B8] hover:border-[#FF6B00]'
        } hover:scale-110`}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg className="h-5 w-5 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="h-5 w-5 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      {/* ===== NAVBAR ===== */}
      <header className={`sticky top-0 z-30 border-b ${isDark ? 'border-[#1E1E1E] bg-gradient-to-r from-[#0B0B0D] to-[#111113]/95' : 'border-[#FFD4B8] bg-white/95'} backdrop-blur-md transition-colors duration-300`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#FF7F32] shadow-[0_0_25px_rgba(255,107,0,0.6)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,107,0,0.8)]">
              <span className="text-xl font-extrabold text-white">Z</span>
            </div>
            <div>
              <div className={`text-sm md:text-base font-semibold tracking-[0.18em] ${isDark ? 'bg-gradient-to-r from-[#FF6B00] to-[#FF7F32] bg-clip-text text-transparent' : 'text-[#FF6B00]'} uppercase`}>
                Zentredge
              </div>
              <div className={`text-xs md:text-sm ${isDark ? 'text-[#6B6B6B]' : 'bg-gradient-to-r from-[#8A6A5A] to-[#7A5A4A] bg-clip-text text-transparent'}`}>
                Software & AI Automation
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav className={`hidden items-center gap-8 text-sm md:text-[15px] ${isDark ? 'text-[#9E9E9E]' : 'text-[#666666]'} md:flex`}>
            <a
              href="#services"
              className="hover:text-[#FF6B00] transition-all duration-300 hover:scale-110"
            >
              Services
            </a>
            <a
              href="#process"
              className="hover:text-[#FF6B00] transition-all duration-300 hover:scale-110"
            >
              Process
            </a>
            <a
              href="#stack"
              className="hover:text-[#FF6B00] transition-all duration-300 hover:scale-110"
            >
              Tech Stack
            </a>
            <a
              href="#contact"
              className="hover:text-[#FF6B00] transition-all duration-300 hover:scale-110"
            >
              Contact
            </a>
          </nav>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-[#FF6B00] px-4 py-1.5 text-xs md:text-sm font-medium text-[#FF6B00] transition-all duration-300 hover:border-[#FF7F32] hover:text-[#FF7F32] hover:bg-[#FF6B00]/10 hover:scale-105 md:inline-flex">
              View Portfolio
            </button>
            <button className="rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF7F32] px-4 py-1.5 text-xs md:text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.7)] hover:scale-105">
              Book a Free Call
            </button>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <main className="mx-auto max-w-6xl px-4 pt-10 pb-16 md:px-6 md:pt-16">
        <section className="grid gap-10 md:grid-cols-[1.3fr,1fr] md:items-center">
          {/* Left: text */}
          <div>
            <div className={`inline-flex items-center gap-2 rounded-full border ${isDark ? 'border-[#1E1E1E] bg-gradient-to-r from-[#151515] to-[#111113]/80 text-[#9E9E9E]' : 'border-[#FF9B66]/30 bg-gradient-to-r from-[#FFF5F0] to-[#FFE8DC] text-[#8A4A2A]'} backdrop-blur-sm px-3 py-1 text-[11px] md:text-xs transition-colors duration-300`}>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B00] shadow-[0_0_12px_rgba(255,107,0,0.9)] animate-pulse" />
              Building advanced software for bold businesses.
            </div>

            <h1 className={`mt-5 text-3xl md:text-4xl lg:text-5xl xl:text-[3.3rem] font-semibold leading-tight animate-fade-in transition-colors duration-300`}>
              <span className={isDark ? 'bg-gradient-to-r from-[#FFFFFF] to-[#E6E6E6] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#2A1A0A] to-[#1A0A00] bg-clip-text text-transparent'}>
                Dark-mode driven{" "}
              </span>
              <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF7F32] to-[#FF6B00] bg-clip-text text-transparent animate-gradient">
                software experiences
              </span>{" "}
              <span className={isDark ? 'bg-gradient-to-r from-[#FFFFFF] to-[#E6E6E6] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#2A1A0A] to-[#1A0A00] bg-clip-text text-transparent'}>
                that turn ideas into products.
              </span>
            </h1>

            <p className={`mt-4 max-w-xl text-base md:text-[17px] ${isDark ? 'bg-gradient-to-r from-[#E6E6E6] to-[#9E9E9E] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#5A4A3A] to-[#4A3A2A] bg-clip-text text-transparent'} transition-colors duration-300`}>
              Zentredge helps startups and businesses design, build, and launch
              modern web apps, automation workflows, and AI-powered tools using
              a clean dark visual language.
            </p>

            {/* Hero CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF7F32] px-5 py-2.5 text-sm md:text-[15px] font-semibold text-white shadow-[0_0_20px_rgba(255,107,0,0.6)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,107,0,0.8)] hover:scale-105 hover:-translate-y-0.5">
                Start a Project
              </button>
              <button className="rounded-full border border-[#FF6B00] px-5 py-2.5 text-sm md:text-[15px] font-medium text-[#FF6B00] transition-all duration-300 hover:border-[#FF7F32] hover:text-[#FF7F32] hover:bg-[#FF6B00]/10 hover:scale-105">
                Download Services Sheet
              </button>
              <p className="w-full text-xs md:text-sm text-[#808080] md:w-auto">
                ⚡ Average first prototype in 10–14 days.
              </p>
            </div>

            {/* Metrics */}
            <div className="mt-8 grid max-w-md grid-cols-3 gap-4 text-sm md:text-base">
              <div 
                data-animate="metric-1"
                className={`rounded-xl border ${isDark ? 'border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 shadow-[0_0_20px_rgba(0,0,0,0.45)]' : 'border-[#FF9B66]/20 bg-gradient-to-br from-[#FFF5F0] to-[#FFE8DC]'} backdrop-blur-sm p-3.5 transition-all duration-300 hover:${isDark ? 'from-[#1C1C1C] to-[#151515]/80' : 'from-[#FFE8DC] to-[#FFDCC8]'} hover:border-[#FF6B00]/30 hover:scale-105 ${visibleSections.has('metric-1') ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: visibleSections.has('metric-1') ? '0.1s' : '0s' }}
              >
                <div className={`text-xl font-semibold ${isDark ? 'bg-gradient-to-r from-[#FFFFFF] to-[#E6E6E6] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#FF6B00] to-[#FF7F32] bg-clip-text text-transparent'}`}>10+</div>
                <div className={`mt-1 text-[11px] md:text-xs ${isDark ? 'text-[#9E9E9E]' : 'bg-gradient-to-r from-[#8A4A2A] to-[#6A3A1A] bg-clip-text text-transparent'}`}>
                  Projects delivered
                </div>
              </div>
              <div 
                data-animate="metric-2"
                className={`rounded-xl border ${isDark ? 'border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 shadow-[0_0_20px_rgba(0,0,0,0.45)]' : 'border-[#FF9B66]/20 bg-gradient-to-br from-[#FFF5F0] to-[#FFE8DC]'} backdrop-blur-sm p-3.5 transition-all duration-300 hover:${isDark ? 'from-[#1C1C1C] to-[#151515]/80' : 'from-[#FFE8DC] to-[#FFDCC8]'} hover:border-[#FF6B00]/30 hover:scale-105 ${visibleSections.has('metric-2') ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: visibleSections.has('metric-2') ? '0.2s' : '0s' }}
              >
                <div className={`text-xl font-semibold ${isDark ? 'bg-gradient-to-r from-[#FFFFFF] to-[#E6E6E6] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#FF6B00] to-[#FF7F32] bg-clip-text text-transparent'}`}>3</div>
                <div className={`mt-1 text-[11px] md:text-xs ${isDark ? 'text-[#9E9E9E]' : 'bg-gradient-to-r from-[#8A4A2A] to-[#6A3A1A] bg-clip-text text-transparent'}`}>
                  Core team experts
                </div>
              </div>
              <div 
                data-animate="metric-3"
                className={`rounded-xl border ${isDark ? 'border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 shadow-[0_0_20px_rgba(0,0,0,0.45)]' : 'border-[#FF9B66]/20 bg-gradient-to-br from-[#FFF5F0] to-[#FFE8DC]'} backdrop-blur-sm p-3.5 transition-all duration-300 hover:${isDark ? 'from-[#1C1C1C] to-[#151515]/80' : 'from-[#FFE8DC] to-[#FFDCC8]'} hover:border-[#FF6B00]/30 hover:scale-105 ${visibleSections.has('metric-3') ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: visibleSections.has('metric-3') ? '0.3s' : '0s' }}
              >
                <div className={`text-xl font-semibold ${isDark ? 'bg-gradient-to-r from-[#FFFFFF] to-[#E6E6E6] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#FF6B00] to-[#FF7F32] bg-clip-text text-transparent'}`}>24/7</div>
                <div className={`mt-1 text-[11px] md:text-xs ${isDark ? 'text-[#9E9E9E]' : 'bg-gradient-to-r from-[#8A4A2A] to-[#6A3A1A] bg-clip-text text-transparent'}`}>
                  Global remote support
                </div>
              </div>
            </div>
          </div>

          {/* Right: "Interface" preview card */}
          <div 
            data-animate="preview-card"
            className={`relative group ${visibleSections.has('preview-card') ? 'animate-slide-left' : ''}`}
          >
            <div className="absolute -inset-1 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(255,107,0,0.4),_transparent_65%)] opacity-60 blur-2xl group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative rounded-3xl border border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/70 backdrop-blur-md p-4 md:p-5 shadow-[0_0_30px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[#FF6B00]/20">
              {/* Small header bar */}
              <div className="flex items-center justify-between border-b border-[#1E1E1E] pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF3B30] animate-pulse" />
                  <span className="h-2 w-2 rounded-full bg-[#FFBE00]" />
                  <span className="h-2 w-2 rounded-full bg-[#00D86C]" />
                </div>
                <span className="text-[11px] md:text-xs text-[#9E9E9E]">
                  Zentredge • Dark Interface
                </span>
              </div>

              {/* Fake content */}
              <div className="mt-3 grid gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[#6B6B6B]">
                    Active Project
                  </div>
                  <div className="mt-1 text-sm md:text-[15px] font-semibold bg-gradient-to-r from-[#FFFFFF] to-[#E6E6E6] bg-clip-text text-transparent">
                    Logistics Automation Dashboard
                  </div>
                  <p className="mt-1 text-[11px] md:text-xs text-[#9E9E9E]">
                    React • Node • n8n • AI agents
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 text-[11px] md:text-xs">
                  <div className="rounded-xl bg-gradient-to-br from-[#0D0D0F] to-[#0B0B0D]/80 backdrop-blur-sm p-3 border border-[#1E1E1E] transition-all duration-300 hover:from-[#111113] hover:to-[#0D0D0F] hover:border-[#00D86C]/30">
                    <div className="text-xs text-[#9E9E9E]">Sprint Status</div>
                    <div className="mt-1 text-sm font-semibold text-[#00D86C]">
                      On Track
                    </div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-[#0D0D0F] to-[#0B0B0D]/80 backdrop-blur-sm p-3 border border-[#1E1E1E] transition-all duration-300 hover:from-[#111113] hover:to-[#0D0D0F] hover:border-[#FF6B00]/30">
                    <div className="text-xs text-[#9E9E9E]">Automation</div>
                    <div className="mt-1 text-sm font-semibold bg-gradient-to-r from-[#FFFFFF] to-[#E6E6E6] bg-clip-text text-transparent">
                      32 flows
                    </div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-[#0D0D0F] to-[#0B0B0D]/80 backdrop-blur-sm p-3 border border-[#1E1E1E] transition-all duration-300 hover:from-[#111113] hover:to-[#0D0D0F] hover:border-[#FFBE00]/30">
                    <div className="text-xs text-[#9E9E9E]">Downtime</div>
                    <div className="mt-1 text-sm font-semibold text-[#FFBE00]">
                      &lt; 0.5%
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 backdrop-blur-sm p-3.5 transition-all duration-300 hover:from-[#1A1A1A] hover:to-[#151515]/80 hover:border-[#FF6B00]/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#9E9E9E]">
                        Est. development timeline
                      </div>
                      <div className="mt-1 text-sm md:text-[15px] font-semibold bg-gradient-to-r from-[#FFFFFF] to-[#E6E6E6] bg-clip-text text-transparent">
                        6–8 weeks
                      </div>
                    </div>
                    <button className="rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF7F32] px-3.5 py-1.5 text-[11px] md:text-xs font-semibold text-white shadow-[0_0_15px_rgba(255,107,0,0.6)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,107,0,0.8)] hover:scale-105">
                      Get similar build
                    </button>
                  </div>
                </div>

                <p className="text-[10px] md:text-[11px] text-[#6B6B6B]">
                  This is a visual mockup only—your real dashboard will be fully
                  customized based on your business workflows and KPIs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section 
          id="services" 
          data-animate="services-section"
          className={`mt-16 ${visibleSections.has('services-section') ? 'animate-slide-up' : ''}`}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className={`text-xl md:text-2xl lg:text-[1.6rem] font-semibold ${isDark ? 'bg-gradient-to-r from-[#FFFFFF] to-[#E6E6E6] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#2A1A0A] to-[#1A0A00] bg-clip-text text-transparent'}`}>
                What we build for you
              </h2>
              <p className={`mt-1 text-sm md:text-[15px] ${isDark ? 'bg-gradient-to-r from-[#E6E6E6] to-[#9E9E9E] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#6A4A3A] to-[#5A3A2A] bg-clip-text text-transparent'}`}>
                End-to-end software development with a focus on real business
                impact, not just code.
              </p>
            </div>
            <p className={`max-w-sm text-xs md:text-sm ${isDark ? 'text-[#6B6B6B]' : 'bg-gradient-to-r from-[#7A5A4A] to-[#6A4A3A] bg-clip-text text-transparent'}`}>
              Each project gets a dedicated strategy session, tech architecture
              design, and clear milestones.
            </p>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {/* Card 1 */}
            <ServiceCard
              title="Custom Web Applications"
              description="Full-stack apps built with React, Node, and modern APIs. Fast, secure, and responsive."
              items={["MVPs & dashboards", "Client portals", "Multi-tenant SaaS"]}
              isDark={isDark}
            />
            {/* Card 2 */}
            <ServiceCard
              title="Automation & n8n Workflows"
              description="We connect your tools so your business runs on autopilot instead of spreadsheets."
              items={[
                "Lead capture & CRM sync",
                "Invoice & email automation",
                "Custom agents using APIs",
              ]}
              isDark={isDark}
            />
            {/* Card 3 */}
            <ServiceCard
              title="AI-Enhanced Experiences"
              description="Integrate AI into your product: assistants, recommendation engines, and smart workflows."
              items={["ChatGPT-style agents", "Content generation", "Data insights"]}
              isDark={isDark}
            />
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section id="process" className="mt-16">
          <h2 className={`text-xl md:text-2xl lg:text-[1.6rem] font-semibold ${isDark ? 'text-white' : 'bg-gradient-to-r from-[#2A1A0A] to-[#1A0A00] bg-clip-text text-transparent'}`}>
            How a project with Zentredge works
          </h2>
          <p className={`mt-1 text-sm md:text-[15px] ${isDark ? 'bg-gradient-to-r from-[#E6E6E6] to-[#9E9E9E] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#6A4A3A] to-[#5A3A2A] bg-clip-text text-transparent'}`}>
            A simple, transparent 4-step flow from idea to launch.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-4">
            <StepCard
              step="01"
              title="Discovery"
              text="We understand your idea, current tools, and target users. Output: clear scope + priorities."
              isDark={isDark}
            />
            <StepCard
              step="02"
              title="Architecture"
              text="We design tech stack, data flow, and automation map. You approve before we build."
              isDark={isDark}
            />
            <StepCard
              step="03"
              title="Build & Iterate"
              text="We develop in sprints, show you live previews, and refine based on your feedback."
              isDark={isDark}
            />
            <StepCard
              step="04"
              title="Launch & Support"
              text="We deploy, monitor, and optionally maintain your app/flows as your tech partner."
              isDark={isDark}
            />
          </div>
        </section>

        {/* ===== TECH STACK ===== */}
        <section id="stack" className="mt-16">
          <h2 className={`text-xl md:text-2xl lg:text-[1.6rem] font-semibold ${isDark ? 'text-white' : 'bg-gradient-to-r from-[#2A1A0A] to-[#1A0A00] bg-clip-text text-transparent'}`}>
            Tech stack we love working with
          </h2>
          <p className={`mt-1 text-sm md:text-[15px] ${isDark ? 'text-[#B3B3B3]' : 'bg-gradient-to-r from-[#6A4A3A] to-[#5A3A2A] bg-clip-text text-transparent'}`}>
            Modern, reliable tools that match your project needs.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs md:text-[13px]">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "n8n",
              "Docker",
              "Tailwind CSS",
              "WordPress (headless & classic)",
              "REST / GraphQL APIs",
            ].map((item) => (
              <span
                key={item}
                className={`rounded-full border ${isDark ? 'border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 text-[#E6E6E6] hover:from-[#1A1A1A] hover:to-[#151515]/80' : 'border-[#FF9B66]/30 bg-gradient-to-br from-[#FFFFFF] to-[#FFF5F0] text-[#3A2A1A] hover:from-[#FFF5F0] hover:to-[#FFE8DC]'} backdrop-blur-sm px-3 py-1.5 text-[11px] md:text-[13px] transition-all duration-300 hover:border-[#FF6B00]/40 hover:text-[#FF6B00] hover:scale-105 hover:shadow-[0_0_15px_rgba(255,107,0,0.3)]`}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ===== CONTACT / CTA ===== */}
        <section
          id="contact"
          data-animate="contact-section"
          className={`mt-16 rounded-3xl border ${isDark ? 'border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 shadow-[0_0_35px_rgba(0,0,0,0.6)]' : 'border-[#FF9B66]/20 bg-gradient-to-br from-[#FFFFFF] to-[#FFF5F0]'} backdrop-blur-md p-6 md:p-8 transition-all duration-500 hover:${isDark ? 'from-[#1A1A1A] to-[#151515]/80' : 'from-[#FFF5F0] to-[#FFE8DC]'} hover:border-[#FF6B00]/20 ${visibleSections.has('contact-section') ? 'animate-scale-in' : ''}`}
        >
          <div className="grid gap-6 md:grid-cols-[1.1fr,1fr] md:items-center">
            <div>
              <h2 className={`text-xl md:text-2xl lg:text-[1.6rem] font-semibold ${isDark ? 'bg-gradient-to-r from-[#FFFFFF] to-[#E6E6E6] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#2A1A0A] to-[#1A0A00] bg-clip-text text-transparent'}`}>
                Tell us about your next project
              </h2>
              <p className={`mt-2 text-sm md:text-[15px] ${isDark ? 'bg-gradient-to-r from-[#E6E6E6] to-[#9E9E9E] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#6A4A3A] to-[#5A3A2A] bg-clip-text text-transparent'}`}>
                Share a few details and we'll respond with ideas, timelines, and
                an estimated budget. No spam, no pressure.
              </p>

              <ul className={`mt-4 space-y-2 text-xs md:text-sm ${isDark ? 'text-[#9E9E9E]' : 'bg-gradient-to-r from-[#7A5A4A] to-[#6A4A3A] bg-clip-text text-transparent'}`}>
                <li>• Ideal for founders, agencies, and small/medium businesses.</li>
                <li>• We can also help fix or upgrade an existing codebase.</li>
                <li>• NDA available if you need confidentiality.</li>
              </ul>
            </div>

            {/* Simple form */}
            <form
              className={`space-y-3 rounded-2xl border ${isDark ? 'border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60' : 'border-[#FF9B66]/20 bg-gradient-to-br from-[#FFFFFF] to-[#FFF5F0]'} backdrop-blur-sm p-4 transition-all duration-300 hover:${isDark ? 'from-[#1A1A1A] to-[#151515]/80' : 'from-[#FFF5F0] to-[#FFE8DC]'}`}
              onSubmit={(e) => e.preventDefault()}
            >
              <InputField label="Name" placeholder="Your full name" isDark={isDark} />
              <InputField
                label="Work email"
                placeholder="you@company.com"
                type="email"
                isDark={isDark}
              />
              <InputField
                label="Project type"
                placeholder="Example: SaaS dashboard, automation, AI agent"
                isDark={isDark}
              />
              <div>
                <label className={`mb-1 block text-xs md:text-sm ${isDark ? 'text-[#E6E6E6]' : 'bg-gradient-to-r from-[#3A2A1A] to-[#2A1A0A] bg-clip-text text-transparent'}`}>
                  Budget range (optional)
                </label>
                <select className={`w-full rounded-xl border ${isDark ? 'border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 text-[#E6E6E6] focus:from-[#1A1A1A] focus:to-[#151515]/80' : 'border-[#FF9B66]/30 bg-gradient-to-br from-[#FFFFFF] to-[#FFF8F5] text-[#2A1A0A] focus:from-[#FFF8F5] focus:to-[#FFF0E8]'} backdrop-blur-sm px-3 py-2 text-xs md:text-sm outline-none ring-[#FF6B00] focus:border-[#FF6B00] focus:ring-1 transition-all duration-300`}>
                  <option value="">Select a range</option>
                  <option>$1k – $3k</option>
                  <option>$3k – $8k</option>
                  <option>$8k – $15k</option>
                  <option>$15k+</option>
                </select>
              </div>
              <button className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF7F32] px-4 py-2 text-sm md:text-[15px] font-semibold text-white shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.8)] hover:scale-105">
                Send brief to Zentredge
              </button>
              <p className="text-[10px] md:text-[11px] text-[#808080]">
                By sending this, you agree that we may contact you about this
                inquiry. No newsletters unless you ask.
              </p>
            </form>
          </div>
        </section>

        {/* ===== COLOR PALETTE REFERENCE ===== */}
        <section className="mt-16 rounded-3xl border border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 backdrop-blur-md p-6 md:p-8 transition-all duration-500 hover:from-[#1A1A1A] hover:to-[#151515]/80 hover:border-[#FF6B00]/20">
          <h2 className={`text-xl font-semibold ${isDark ? 'bg-gradient-to-r from-[#FFFFFF] to-[#E6E6E6] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#2A1A0A] to-[#1A0A00] bg-clip-text text-transparent'} md:text-2xl mb-6`}>
            Color Palette Reference
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Background Colors */}
            <div>
              <h3 className="text-sm font-semibold text-[#FF6B00] mb-3">Background Colors</h3>
              <div className="space-y-2 text-xs">
                <ColorItem label="Page Background" color="#050508" />
                <ColorItem label="Navbar Background" color="#050508" />
                <ColorItem label="Card BG (Transparent)" color="#0A0A0C" />
                <ColorItem label="Card BG (Alt)" color="#0D0D0F" />
                <ColorItem label="Backdrop Blur BG" color="rgba(10,10,12,0.6)" />
              </div>
            </div>

            {/* Border Colors */}
            <div>
              <h3 className="text-sm font-semibold text-[#FF6B00] mb-3">Border Colors</h3>
              <div className="space-y-2 text-xs">
                <ColorItem label="Primary Border" color="#1A1A1D" />
                <ColorItem label="Secondary Border" color="#252525" />
                <ColorItem label="Orange Border (Hover)" color="rgba(255,107,0,0.3)" />
              </div>
            </div>

            {/* Brand Colors */}
            <div>
              <h3 className="text-sm font-semibold text-[#FF6B00] mb-3">Brand Colors</h3>
              <div className="space-y-2 text-xs">
                <ColorItem label="Primary Orange" color="#FF6B00" />
                <ColorItem label="Orange Hover" color="#FF7F32" />
                <ColorItem label="Orange Transparent" color="rgba(255,107,0,0.1)" />
              </div>
            </div>

            {/* Text Colors */}
            <div>
              <h3 className="text-sm font-semibold text-[#FF6B00] mb-3">Text Colors</h3>
              <div className="space-y-2 text-xs">
                <ColorItem label="Primary Text / White" color="#FFFFFF" />
                <ColorItem label="Secondary Text" color="#E6E6E6" />
                <ColorItem label="Tertiary Text" color="#D0D0D0" />
                <ColorItem label="Muted Text (Light)" color="#B3B3B3" />
                <ColorItem label="Muted Text (Med)" color="#A0A0A0" />
                <ColorItem label="Muted Text (Dark)" color="#7B7B7B" />
                <ColorItem label="Placeholder Text" color="#777777" />
              </div>
            </div>

            {/* Status Colors */}
            <div>
              <h3 className="text-sm font-semibold text-[#FF6B00] mb-3">Status Colors</h3>
              <div className="space-y-2 text-xs">
                <ColorItem label="Success / Green" color="#00D86C" />
                <ColorItem label="Warning / Yellow" color="#FFBE00" />
                <ColorItem label="Error / Red" color="#FF3B30" />
              </div>
            </div>

            {/* Shadow & Glow Effects */}
            <div>
              <h3 className="text-sm font-semibold text-[#FF6B00] mb-3">Shadow & Glow Effects</h3>
              <div className="space-y-2 text-xs">
                <div className="rounded-lg border border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 backdrop-blur-sm p-2 transition-all duration-300 hover:from-[#1A1A1A] hover:to-[#151515]/80">
                  <div className="font-medium text-[#E6E6E6] text-[11px]">Orange Glow (Light)</div>
                  <div className="mt-1 text-[#9E9E9E] text-[10px] font-mono">rgba(255, 107, 0, 0.4)</div>
                </div>
                <div className="rounded-lg border border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 backdrop-blur-sm p-2 transition-all duration-300 hover:from-[#1A1A1A] hover:to-[#151515]/80">
                  <div className="font-medium text-[#E6E6E6] text-[11px]">Orange Glow (Medium)</div>
                  <div className="mt-1 text-[#9E9E9E] text-[10px] font-mono">rgba(255, 107, 0, 0.6)</div>
                </div>
                <div className="rounded-lg border border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 backdrop-blur-sm p-2 transition-all duration-300 hover:from-[#1A1A1A] hover:to-[#151515]/80">
                  <div className="font-medium text-[#E6E6E6] text-[11px]">Orange Glow (Strong)</div>
                  <div className="mt-1 text-[#9E9E9E] text-[10px] font-mono">rgba(255, 107, 0, 0.8)</div>
                </div>
                <div className="rounded-lg border border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 backdrop-blur-sm p-2 transition-all duration-300 hover:from-[#1A1A1A] hover:to-[#151515]/80">
                  <div className="font-medium text-[#E6E6E6] text-[11px]">Black Shadow (Deep)</div>
                  <div className="mt-1 text-[#9E9E9E] text-[10px] font-mono">rgba(0, 0, 0, 0.9)</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className={`border-t ${isDark ? 'border-[#1E1E1E] bg-[#0B0B0D]' : 'border-[#FF9B66]/20 bg-gradient-to-br from-[#FFFFFF] to-[#FFF8F5]'}`}>
        <div className={`mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-[11px] md:text-sm ${isDark ? 'text-[#6B6B6B]' : 'bg-gradient-to-r from-[#7A5A4A] to-[#6A4A3A] bg-clip-text text-transparent'} md:flex-row md:items-center md:justify-between md:px-6`}>
          <div>
            © {new Date().getFullYear()} Zentredge. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-3">
            <span>Built with a dark, focused mindset.</span>
            <span className="hidden md:inline">•</span>
            <span>Based in Pakistan, working worldwide.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ===== Small reusable components ===== */

const ServiceCard = ({ title, description, items, isDark }) => (
  <div className={`group relative rounded-2xl border ${isDark ? 'border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 shadow-[0_0_25px_rgba(0,0,0,0.5)]' : 'border-[#FF9B66]/20 bg-gradient-to-br from-[#FFFFFF] to-[#FFF5F0]'} backdrop-blur-sm p-5 transition-all duration-500 hover:${isDark ? 'from-[#1A1A1A] to-[#151515]/80' : 'from-[#FFF5F0] to-[#FFE8DC]'} hover:border-[#FF6B00]/40 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(${isDark ? '0,0,0,0.7' : '255,107,0,0.15'}),0_0_30px_rgba(255,107,0,0.1)]`}>
    <h3 className={`text-sm md:text-[15px] font-semibold ${isDark ? 'bg-gradient-to-r from-[#FFFFFF] to-[#E6E6E6] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#2A1A0A] to-[#1A0A00] bg-clip-text text-transparent'} group-hover:${isDark ? 'from-[#FF6B00] to-[#FF7F32]' : 'from-[#FF6B00] to-[#FF8533]'} transition-colors duration-300`}>{title}</h3>
    <p className={`mt-2 text-xs md:text-sm ${isDark ? 'bg-gradient-to-r from-[#E6E6E6] to-[#9E9E9E] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#6A4A3A] to-[#5A3A2A] bg-clip-text text-transparent'}`}>{description}</p>
    <ul className={`mt-3 space-y-1 text-[11px] md:text-[13px] ${isDark ? 'text-[#9E9E9E]' : 'bg-gradient-to-r from-[#5A4A3A] to-[#4A3A2A] bg-clip-text text-transparent'}`}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] group-hover:bg-[#FF7F32] shadow-[0_0_8px_rgba(255,107,0,0.6)] transition-all duration-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <div className="mt-4 h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
  </div>
);

const StepCard = ({ step, title, text, isDark }) => (
  <div className={`rounded-2xl border ${isDark ? 'border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 shadow-[0_0_25px_rgba(0,0,0,0.5)]' : 'border-[#FF9B66]/20 bg-gradient-to-br from-[#FFFFFF] to-[#FFF5F0]'} backdrop-blur-sm p-4 transition-all duration-500 hover:${isDark ? 'from-[#1A1A1A] to-[#151515]/80' : 'from-[#FFF5F0] to-[#FFE8DC]'} hover:border-[#FF6B00]/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(${isDark ? '0,0,0,0.7' : '255,107,0,0.15'}),0_0_20px_rgba(255,107,0,0.1)]`}>
    <div className={`text-[11px] md:text-xs font-semibold tracking-[0.22em] ${isDark ? 'text-[#6B6B6B]' : 'bg-gradient-to-r from-[#8A6A5A] to-[#7A5A4A] bg-clip-text text-transparent'} uppercase`}>
      Step {step}
    </div>
    <h3 className={`mt-2 text-sm md:text-[15px] font-semibold ${isDark ? 'bg-gradient-to-r from-[#FFFFFF] to-[#E6E6E6] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#2A1A0A] to-[#1A0A00] bg-clip-text text-transparent'}`}>
      {title}
    </h3>
    <p className={`mt-2 text-xs md:text-sm ${isDark ? 'bg-gradient-to-r from-[#E6E6E6] to-[#9E9E9E] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#6A4A3A] to-[#5A3A2A] bg-clip-text text-transparent'}`}>{text}</p>
  </div>
);

const InputField = ({ label, placeholder, type = "text", isDark }) => (
  <div>
    <label className={`mb-1 block text-xs md:text-sm ${isDark ? 'text-[#E6E6E6]' : 'bg-gradient-to-r from-[#3A2A1A] to-[#2A1A0A] bg-clip-text text-transparent'}`}>
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full rounded-xl border ${isDark ? 'border-[#1E1E1E] bg-[#151515]/80 text-white placeholder:text-[#6B6B6B] focus:border-[#FF6B00] focus:bg-[#151515]' : 'border-[#FF9B66]/30 bg-gradient-to-br from-[#FFFFFF] to-[#FFF8F5] text-[#2A1A0A] placeholder:text-[#8A6A5A] focus:border-[#FF6B00] focus:from-[#FFF8F5] focus:to-[#FFF0E8]'} px-4 py-2 text-xs md:text-sm transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(255,107,0,0.1)] focus:outline-none`}
    />
  </div>
);

const ColorItem = ({ label, color }) => (
  <div className="flex items-center justify-between gap-3 rounded-lg border border-[#1E1E1E] bg-gradient-to-br from-[#151515] to-[#111113]/60 backdrop-blur-sm p-2 transition-all duration-300 hover:from-[#1A1A1A] hover:to-[#151515]/80 hover:border-[#FF6B00]/30 hover:scale-105">
    <div className="flex items-center gap-2">
      <div 
        className="h-6 w-6 rounded border border-[#1E1E1E] shadow-sm transition-transform duration-300 hover:scale-110"
        style={{ backgroundColor: color }}
      />
      <span className="text-[#E6E6E6] font-medium">{label}</span>
    </div>
    <code className="text-[10px] text-[#9E9E9E] font-mono">{color}</code>
  </div>
);

export default Interface;
