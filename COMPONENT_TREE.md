# ZentRedge Component Tree

```
App.jsx
└── Interface (InterfaceNew.jsx)
    └── PageLayout
        ├── Header/Navigation
        │   ├── Logo
        │   ├── Nav Links
        │   └── Theme Toggle
        │
        ├── 3D Grid Background (Dark Mode)
        │
        └── Main Content
            ├── HeroSection
            │   ├── AnimatedSection (title)
            │   ├── AnimatedSection (subtitle)
            │   └── AnimatedSection (CTA buttons)
            │       ├── Button (primary)
            │       └── Button (secondary)
            │
            ├── MetricsSection
            │   └── Grid of 3
            │       ├── AnimatedSection → MetricCard (Projects)
            │       ├── AnimatedSection → MetricCard (Satisfaction)
            │       └── AnimatedSection → MetricCard (Experience)
            │
            ├── ServicesSection
            │   ├── AnimatedSection (header)
            │   └── Grid of 6
            │       ├── AnimatedSection → Service Card (Web Dev)
            │       ├── AnimatedSection → Service Card (Mobile)
            │       ├── AnimatedSection → Service Card (UI/UX)
            │       ├── AnimatedSection → Service Card (Cloud)
            │       ├── AnimatedSection → Service Card (AI)
            │       └── AnimatedSection → Service Card (Consulting)
            │
            └── ContactSection
                ├── AnimatedSection (header)
                └── AnimatedSection (form)
                    ├── Input (name)
                    ├── Input (email)
                    ├── Textarea (message)
                    └── Button (submit)
```

## Data Flow

```
useScrollAnimation Hook
    ↓
visibleSections (Set)
    ↓
Passed to all Section components
    ↓
Passed to AnimatedSection wrappers
    ↓
Triggers CSS animations when ID is in Set
```

## Theme Flow

```
PageLayout (manages isDark state)
    ↓
React.cloneElement passes isDark to children
    ↓
All section components receive isDark prop
    ↓
Components conditionally render dark/light styles
```

## File Organization

```
📁 src/
│
├── 📁 hooks/
│   ├── useScrollAnimation.js  ← Intersection Observer logic
│   └── index.js               ← Hook exports
│
├── 📁 components/
│   │
│   ├── 📁 layout/
│   │   └── PageLayout.jsx     ← Wrapper with nav & background
│   │
│   ├── 📁 common/             ← Reusable UI primitives
│   │   ├── AnimatedSection.jsx
│   │   ├── MetricCard.jsx
│   │   └── Button.jsx
│   │
│   ├── 📁 sections/           ← Page sections
│   │   ├── HeroSection.jsx
│   │   ├── MetricsSection.jsx
│   │   ├── ServicesSection.jsx
│   │   └── ContactSection.jsx
│   │
│   ├── InterfaceNew.jsx       ← Composed main page
│   ├── Interface.jsx          ← Old monolithic version (backup)
│   └── index.js               ← Component exports
│
├── App.jsx                    ← Root component
├── main.jsx                   ← Entry point
└── globals.css                ← Animations & global styles
```

## Import Examples

### Centralized Imports (Recommended)
```jsx
import { 
  Button, 
  MetricCard, 
  AnimatedSection,
  HeroSection,
  ServicesSection 
} from './components';

import { useScrollAnimation } from './hooks';
```

### Direct Imports (Also works)
```jsx
import Button from './components/common/Button';
import HeroSection from './components/sections/HeroSection';
import { useScrollAnimation } from './hooks/useScrollAnimation';
```

## Component Reusability Matrix

| Component | Reusable? | Where to Use |
|-----------|-----------|--------------|
| PageLayout | ✅ Yes | Any page that needs nav + background |
| AnimatedSection | ✅ Yes | Any content that needs scroll animation |
| Button | ✅ Yes | Anywhere you need a styled button |
| MetricCard | ✅ Yes | Stats, achievements, metrics |
| HeroSection | 🔄 Customizable | Landing pages |
| MetricsSection | 🔄 Customizable | Stats showcase pages |
| ServicesSection | 🔄 Customizable | Service listing pages |
| ContactSection | 🔄 Customizable | Contact/form pages |

## Animation Types

| Animation | Effect | Use Case |
|-----------|--------|----------|
| slide-up | Slides from bottom + fade | Cards, sections entering |
| slide-left | Slides from right + fade | Side content, images |
| slide-right | Slides from left + fade | Opposite side content |
| scale-in | Scales from 90% + fade | CTAs, important elements |

## Styling System

- **Framework:** Tailwind CSS
- **Theme Colors:**
  - Primary: `#FF6B00` (Orange)
  - Dark BG: `#0B0B0D`
  - Light BG: `#FFFFFF`
- **Gradients:** Orange (`#FF6B00` → `#FF8C00`)
- **Animations:** CSS @keyframes in globals.css
- **Responsive:** Mobile-first breakpoints
