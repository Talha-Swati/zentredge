# ZentRedge - Professional Component Architecture

## 📁 Project Structure

```
src/
├── hooks/
│   ├── useScrollAnimation.js    # Custom hook for scroll animations
│   └── index.js                 # Centralized hook exports
│
├── components/
│   ├── layout/
│   │   └── PageLayout.jsx       # Main layout with nav, theme toggle, background
│   │
│   ├── common/                  # Reusable UI components
│   │   ├── AnimatedSection.jsx  # Scroll animation wrapper
│   │   ├── MetricCard.jsx       # Stat/metric display card
│   │   └── Button.jsx           # Reusable button with variants
│   │
│   ├── sections/                # Page sections
│   │   ├── HeroSection.jsx      # Landing/hero section
│   │   ├── MetricsSection.jsx   # Stats showcase
│   │   ├── ServicesSection.jsx  # Services grid
│   │   └── ContactSection.jsx   # Contact form
│   │
│   ├── InterfaceNew.jsx         # Main composed interface
│   └── index.js                 # Centralized component exports
│
├── App.jsx                      # Root application
├── main.jsx                     # Entry point
└── globals.css                  # Global styles & animations
```

## 🎨 Component Usage Examples

### Using the Full Interface
```jsx
import { Interface } from './components';

function App() {
  return <Interface />;
}
```

### Using Individual Sections
```jsx
import { PageLayout, HeroSection, ServicesSection } from './components';
import { useScrollAnimation } from './hooks';

function CustomPage() {
  const visibleSections = useScrollAnimation();
  
  return (
    <PageLayout>
      <HeroSection visibleSections={visibleSections} />
      <ServicesSection visibleSections={visibleSections} />
    </PageLayout>
  );
}
```

### Using Common Components
```jsx
import { Button, MetricCard, AnimatedSection } from './components';
import { useScrollAnimation } from './hooks';

function MyComponent() {
  const visibleSections = useScrollAnimation();
  
  return (
    <div>
      <Button variant="primary" size="lg">
        Click Me
      </Button>
      
      <MetricCard 
        value="100+"
        label="Happy Clients"
        icon="M12 4v16m8-8H4"
      />
      
      <AnimatedSection
        animationId="my-section"
        animationType="slide-up"
        visibleSections={visibleSections}
      >
        <h1>Animated Content</h1>
      </AnimatedSection>
    </div>
  );
}
```

## 🔧 Component API Reference

### PageLayout
**Props:** None (manages isDark state internally)
**Description:** Main layout wrapper with navigation, theme toggle, and 3D grid background

### AnimatedSection
**Props:**
- `animationId` (string, required): Unique identifier
- `animationType` (string): 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in'
- `visibleSections` (Set, required): From useScrollAnimation hook
- `delay` (string): 'delay-100' | 'delay-200' | 'delay-300'
- `className` (string): Additional CSS classes
- `children` (ReactNode): Content to animate

### Button
**Props:**
- `variant` (string): 'primary' | 'secondary' | 'outline'
- `size` (string): 'sm' | 'md' | 'lg'
- `isDark` (boolean): Theme mode
- `onClick` (function): Click handler
- `type` (string): 'button' | 'submit' | 'reset'
- `className` (string): Additional CSS classes
- `children` (ReactNode): Button content

### MetricCard
**Props:**
- `value` (string, required): Metric value (e.g., "500+")
- `label` (string, required): Description
- `icon` (string, required): SVG path data
- `isDark` (boolean): Theme mode

### useScrollAnimation Hook
**Parameters:**
- `threshold` (number, optional): Intersection threshold (default: 0.1)
- `rootMargin` (string, optional): Margin around root (default: '0px 0px -100px 0px')

**Returns:** Set of visible section IDs

## 🎯 Key Features

### 1. **Modular Architecture**
- Each component is self-contained and reusable
- Easy to import and compose
- Centralized exports via index files

### 2. **Scroll Animations**
- Custom `useScrollAnimation` hook
- Intersection Observer-based
- Repeatable animations (triggers on every scroll)
- 4 animation types: slide-up, slide-left, slide-right, scale-in

### 3. **Theme System**
- Dark/Light mode toggle
- Theme state managed in PageLayout
- Automatically passed to all children via cloneElement

### 4. **Responsive Design**
- Mobile-first approach
- Tailwind CSS utility classes
- Flexible grid layouts

### 5. **3D Grid Background**
- Orange glowing grid lines
- Diagonal gradient overlays for depth
- Radial mask for atmospheric effect

## 🚀 Getting Started

1. **Import what you need:**
```jsx
import { Button, MetricCard } from './components';
import { useScrollAnimation } from './hooks';
```

2. **Use the hook for animations:**
```jsx
const visibleSections = useScrollAnimation();
```

3. **Compose your layout:**
```jsx
<PageLayout>
  <YourSection visibleSections={visibleSections} />
</PageLayout>
```

## 📝 Best Practices

1. **Always use unique `animationId`** for AnimatedSection
2. **Import from index files** for cleaner code
3. **Pass `visibleSections`** to all section components
4. **Use semantic HTML** within sections
5. **Keep components small** and focused on single responsibility

## 🎨 Customization

### Adding New Sections
```jsx
// src/components/sections/MyNewSection.jsx
import React from 'react';
import AnimatedSection from '../common/AnimatedSection';

const MyNewSection = ({ isDark, visibleSections }) => {
  return (
    <section className="py-20">
      <AnimatedSection
        animationId="my-new-section"
        animationType="slide-up"
        visibleSections={visibleSections}
      >
        {/* Your content */}
      </AnimatedSection>
    </section>
  );
};

export default MyNewSection;
```

### Creating Custom Buttons
```jsx
<Button 
  variant="primary" 
  size="lg"
  onClick={() => console.log('Clicked!')}
>
  Custom Action
</Button>
```

## 📦 Dependencies

- React 18+
- Tailwind CSS
- Vite (build tool)

## 🔄 Migration from Old Structure

The old `Interface.jsx` has been refactored into:
- Layout → `PageLayout.jsx`
- Hero → `HeroSection.jsx`
- Metrics → `MetricsSection.jsx`
- Services → `ServicesSection.jsx`
- Contact → `ContactSection.jsx`
- Animation logic → `useScrollAnimation.js`

All functionality is preserved, but now in a modular, maintainable structure!
