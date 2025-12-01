# ZentRedge - Quick Reference Guide

## 🚀 Common Tasks

### 1. Adding a New Page Section

```jsx
// 1. Create the section component
// src/components/sections/MyNewSection.jsx

import React from 'react';
import AnimatedSection from '../common/AnimatedSection';
import Button from '../common/Button';

const MyNewSection = ({ isDark, visibleSections }) => {
  return (
    <section id="my-section" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection
          animationId="my-section-content"
          animationType="slide-up"
          visibleSections={visibleSections}
        >
          <h2 className={`text-4xl font-bold ${isDark ? 'text-[#E6E6E6]' : 'text-[#1A1A1A]'}`}>
            My New Section
          </h2>
          {/* Your content here */}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MyNewSection;

// 2. Export it in src/components/index.js
export { default as MyNewSection } from './sections/MyNewSection';

// 3. Use it in InterfaceNew.jsx
import MyNewSection from './sections/MyNewSection';

const Interface = () => {
  const visibleSections = useScrollAnimation();
  
  return (
    <PageLayout>
      {/* ... other sections ... */}
      <MyNewSection visibleSections={visibleSections} />
    </PageLayout>
  );
};
```

### 2. Creating a Reusable Card Component

```jsx
// src/components/common/Card.jsx

import React from 'react';

const Card = ({ title, description, icon, isDark = true, className = '' }) => {
  return (
    <div className={`
      ${isDark ? 'bg-[#1A1A1C]' : 'bg-white'} 
      rounded-xl p-6 
      ${isDark ? 'border border-[#FF6B00]/20' : 'border-2 border-[#FF6B00]/30'}
      hover:border-[#FF6B00]/50 
      transition-all duration-300
      ${className}
    `}>
      {icon && (
        <div className={`w-12 h-12 ${isDark ? 'bg-[#FF6B00]/10' : 'bg-[#FF6B00]/20'} rounded-lg flex items-center justify-center mb-4`}>
          {icon}
        </div>
      )}
      {title && (
        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-[#E6E6E6]' : 'text-[#1A1A1A]'}`}>
          {title}
        </h3>
      )}
      {description && (
        <p className={`${isDark ? 'text-[#CCCCCC]' : 'text-[#4A4A4A]'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default Card;
```

### 3. Adding Custom Animations

```css
/* In src/globals.css */

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-bounce-in {
  animation: bounce-in 0.8s ease-out forwards;
}
```

```jsx
// Use in AnimatedSection
<AnimatedSection
  animationId="my-element"
  animationType="fade-in"  // Your custom animation
  visibleSections={visibleSections}
>
  <div>Content</div>
</AnimatedSection>
```

### 4. Customizing the Theme Toggle

```jsx
// In PageLayout.jsx, modify the toggle button:

<button
  onClick={() => setIsDark(!isDark)}
  className={`
    px-4 py-2 rounded-full
    ${isDark ? 'bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]' : 'bg-gradient-to-r from-[#FFD700] to-[#FFA500]'}
    text-white font-semibold
    transition-all duration-300
    hover:shadow-lg hover:scale-105
  `}
>
  {isDark ? '☀️ Light' : '🌙 Dark'}
</button>
```

### 5. Adding Navigation Links

```jsx
// In PageLayout.jsx, add new nav items:

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#portfolio', label: 'Portfolio' },  // New
  { href: '#team', label: 'Team' },           // New
  { href: '#contact', label: 'Contact' }
];

{navLinks.map(link => (
  <a 
    key={link.href}
    href={link.href} 
    className={`${isDark ? 'text-[#E6E6E6] hover:text-[#FF6B00]' : 'text-[#1A1A1A] hover:text-[#FF6B00]'} transition-colors duration-200`}
  >
    {link.label}
  </a>
))}
```

### 6. Creating a Custom Hook

```jsx
// src/hooks/useTheme.js

import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    // Get from localStorage or default to true
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    // Save to localStorage whenever it changes
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
};

// Use it:
const { isDark, toggleTheme } = useTheme();
```

### 7. Form Handling with Validation

```jsx
// In ContactSection.jsx or any form component

import React, { useState } from 'react';

const ContactSection = ({ isDark, visibleSections }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Your API call here
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      // Success
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      alert('Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields with error handling */}
      <div className="mb-4">
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};
```

### 8. Adding Staggered Animations to a List

```jsx
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

{items.map((item, index) => (
  <AnimatedSection
    key={item}
    animationId={`item-${index}`}
    animationType="slide-up"
    visibleSections={visibleSections}
    delay={`delay-${(index + 1) * 100}`}  // 100ms, 200ms, 300ms, 400ms
  >
    <div>{item}</div>
  </AnimatedSection>
))}
```

### 9. Responsive Grid Layouts

```jsx
{/* 1 column mobile, 2 tablet, 3 desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <div key={item.id}>{item.content}</div>
  ))}
</div>

{/* 1 column mobile, 2 tablet, 4 desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* ... */}
</div>

{/* Responsive with different gaps */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {/* ... */}
</div>
```

### 10. Adding Icons (Heroicons SVG)

```jsx
// Heroicons paths (from heroicons.com)

const icons = {
  check: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  user: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  mail: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
};

// Usage
<svg className="w-6 h-6 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icons.check} />
</svg>
```

## 📋 Checklist for New Features

- [ ] Create component file in appropriate directory
- [ ] Add JSDoc comments for props
- [ ] Export from index.js
- [ ] Add to ARCHITECTURE.md if it's a new pattern
- [ ] Test with dark and light modes
- [ ] Verify responsive design (mobile, tablet, desktop)
- [ ] Add animations if needed
- [ ] Check accessibility (ARIA labels, keyboard nav)

## 🎨 Color Palette Reference

```jsx
// Dark Mode
const darkColors = {
  background: '#0B0B0D',
  surface: '#1A1A1C',
  surfaceHover: '#2A2A2C',
  text: '#E6E6E6',
  textSecondary: '#CCCCCC',
  border: 'rgba(255, 107, 0, 0.2)',
  borderHover: 'rgba(255, 107, 0, 0.4)',
};

// Light Mode
const lightColors = {
  background: '#FFFFFF',
  backgroundGradient: 'from-[#FFFFFF] via-[#FFF5F0] to-[#FFE8DC]',
  surface: '#FFFFFF',
  text: '#1A1A1A',
  textSecondary: '#4A4A4A',
  border: 'rgba(255, 107, 0, 0.3)',
  borderHover: 'rgba(255, 107, 0, 0.5)',
};

// Brand
const brandColors = {
  primary: '#FF6B00',
  primaryHover: '#FF8C00',
  primaryLight: '#FFA500',
  gradient: 'from-[#FF6B00] to-[#FF8C00]',
};
```

## 🔍 Debugging Tips

1. **Animations not working?**
   - Check if `data-animate` attribute is set
   - Verify `visibleSections` is being passed
   - Ensure animation classes are in globals.css

2. **Theme not updating?**
   - Check if component receives `isDark` prop
   - Verify PageLayout is cloning children with props

3. **Components not importing?**
   - Check path in index.js
   - Verify export statement in component file

4. **Scroll animations only work once?**
   - Ensure you're using the updated `useScrollAnimation` hook
   - Check that elements are being removed from Set on exit
