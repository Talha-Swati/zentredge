// src/components/sections/MetricsSection.jsx
import React from 'react';
import MetricCard from '../common/MetricCard';
import AnimatedSection from '../common/AnimatedSection';

/**
 * Metrics/Stats showcase section
 */
const MetricsSection = ({ isDark, visibleSections }) => {
  const metrics = [
    {
      id: 'metric-projects',
      value: '500+',
      label: 'Projects Delivered',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      delay: 'delay-100'
    },
    {
      id: 'metric-satisfaction',
      value: '98%',
      label: 'Client Satisfaction',
      icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      delay: 'delay-200'
    },
    {
      id: 'metric-experience',
      value: '10+',
      label: 'Years Experience',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      delay: 'delay-300'
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric) => (
            <AnimatedSection
              key={metric.id}
              animationId={metric.id}
              animationType="slide-up"
              visibleSections={visibleSections}
              delay={metric.delay}
            >
              <MetricCard
                value={metric.value}
                label={metric.label}
                icon={metric.icon}
                isDark={isDark}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
