# 🎨 What You Can Build Now

## 🏗️ Ready-to-Use Building Blocks

```
┌─────────────────────────────────────────────────────────────┐
│                        PageLayout                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Navigation + Theme Toggle + 3D Background          │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ AnimatedSec  │  │    Button    │  │  MetricCard  │     │
│  │  (wrapper)   │  │  (3 styles)  │  │   (stats)    │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  HeroSection | MetricsSection | ServicesSection     │   │
│  │  ContactSection (Ready-made page sections)          │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Example Pages You Can Build

### 1. Landing Page (Default)
```
┌───────────────────────────────┐
│      Navigation Bar            │
├───────────────────────────────┤
│                                │
│      Hero Section              │
│   "Welcome to ZentRedge"       │
│     [CTA Buttons]              │
│                                │
├───────────────────────────────┤
│   ┌─────┐ ┌─────┐ ┌─────┐    │
│   │500+ │ │ 98% │ │ 10+ │    │
│   │Proj │ │Sats │ │Yrs  │    │
│   └─────┘ └─────┘ └─────┘    │
│      Metrics Section           │
├───────────────────────────────┤
│   ┌──┐ ┌──┐ ┌──┐             │
│   │WB│ │MB│ │UI│             │
│   └──┘ └──┘ └──┘             │
│   ┌──┐ ┌──┐ ┌──┐             │
│   │CD│ │AI│ │CS│             │
│   └──┘ └──┘ └──┘             │
│      Services Grid             │
├───────────────────────────────┤
│      Contact Form              │
│   [Name] [Email] [Message]     │
│         [Submit]               │
└───────────────────────────────┘
```

### 2. Services Page (Custom)
```jsx
import { 
  PageLayout, 
  HeroSection, 
  ServicesSection 
} from './components';
import { useScrollAnimation } from './hooks';

function ServicesPage() {
  const visibleSections = useScrollAnimation();
  
  return (
    <PageLayout>
      <HeroSection visibleSections={visibleSections} />
      <ServicesSection visibleSections={visibleSections} />
      {/* Add pricing section */}
      {/* Add testimonials */}
      <ContactSection visibleSections={visibleSections} />
    </PageLayout>
  );
}
```

### 3. About Page (Custom)
```jsx
import { 
  PageLayout, 
  MetricsSection,
  AnimatedSection,
  Button 
} from './components';
import { useScrollAnimation } from './hooks';

function AboutPage() {
  const visibleSections = useScrollAnimation();
  
  return (
    <PageLayout>
      {/* Custom hero for about page */}
      <section className="py-20">
        <AnimatedSection 
          animationId="about-hero" 
          animationType="slide-up"
          visibleSections={visibleSections}
        >
          <h1>About ZentRedge</h1>
          <p>Our story...</p>
          <Button variant="primary">Learn More</Button>
        </AnimatedSection>
      </section>
      
      {/* Reuse metrics */}
      <MetricsSection visibleSections={visibleSections} />
      
      {/* Custom team section */}
      <section className="py-20">
        {/* Your team grid */}
      </section>
    </PageLayout>
  );
}
```

### 4. Portfolio Page
```jsx
function PortfolioPage() {
  const visibleSections = useScrollAnimation();
  const projects = [...]; // Your projects data
  
  return (
    <PageLayout>
      <section className="py-20">
        <h1>Our Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection
              key={project.id}
              animationId={`project-${i}`}
              animationType="scale-in"
              visibleSections={visibleSections}
              delay={`delay-${(i % 3 + 1) * 100}`}
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
```

## 🎯 Component Combinations

### Pricing Cards
```jsx
import { AnimatedSection, Button } from './components';

const plans = [
  { name: 'Basic', price: '$99', features: [...] },
  { name: 'Pro', price: '$299', features: [...] },
  { name: 'Enterprise', price: 'Custom', features: [...] }
];

{plans.map((plan, i) => (
  <AnimatedSection
    key={plan.name}
    animationId={`plan-${i}`}
    animationType="slide-up"
    visibleSections={visibleSections}
    delay={`delay-${(i + 1) * 100}`}
  >
    <div className="pricing-card">
      <h3>{plan.name}</h3>
      <p className="text-4xl font-bold text-[#FF6B00]">{plan.price}</p>
      <ul>{plan.features.map(f => <li>{f}</li>)}</ul>
      <Button variant="primary" size="lg">Choose Plan</Button>
    </div>
  </AnimatedSection>
))}
```

### Team Member Grid
```jsx
import { AnimatedSection } from './components';

const team = [
  { name: 'John Doe', role: 'CEO', image: '...' },
  { name: 'Jane Smith', role: 'CTO', image: '...' },
  // ...
];

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {team.map((member, i) => (
    <AnimatedSection
      key={member.name}
      animationId={`team-${i}`}
      animationType="scale-in"
      visibleSections={visibleSections}
    >
      <div className="team-card">
        <img src={member.image} alt={member.name} />
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </AnimatedSection>
  ))}
</div>
```

### Feature Highlights
```jsx
import { AnimatedSection, Button } from './components';

const features = [
  { title: 'Fast', description: 'Lightning fast performance', icon: '⚡' },
  { title: 'Secure', description: 'Bank-level security', icon: '🔒' },
  { title: 'Scalable', description: 'Grows with your business', icon: '📈' }
];

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {features.map((feature, i) => (
    <AnimatedSection
      key={feature.title}
      animationId={`feature-${i}`}
      animationType="slide-up"
      visibleSections={visibleSections}
      delay={`delay-${(i + 1) * 100}`}
    >
      <div className="text-center">
        <div className="text-5xl mb-4">{feature.icon}</div>
        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </AnimatedSection>
  ))}
</div>
```

### Call-to-Action Section
```jsx
import { AnimatedSection, Button } from './components';

<AnimatedSection
  animationId="cta"
  animationType="scale-in"
  visibleSections={visibleSections}
>
  <div className="text-center py-20 px-4">
    <h2 className="text-4xl font-bold mb-4">
      Ready to Get Started?
    </h2>
    <p className="text-xl mb-8">
      Join hundreds of satisfied clients
    </p>
    <div className="flex gap-4 justify-center">
      <Button variant="primary" size="lg">
        Start Free Trial
      </Button>
      <Button variant="secondary" size="lg">
        Schedule Demo
      </Button>
    </div>
  </div>
</AnimatedSection>
```

### Newsletter Signup
```jsx
import { Button } from './components';

function Newsletter({ isDark }) {
  const [email, setEmail] = useState('');
  
  return (
    <div className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className={`px-4 py-3 rounded-lg ${
          isDark 
            ? 'bg-[#1A1A1C] border border-[#FF6B00]/20' 
            : 'bg-white border-2 border-[#FF6B00]/30'
        }`}
      />
      <Button variant="primary">Subscribe</Button>
    </div>
  );
}
```

## 🎨 Layout Patterns

### Two-Column Layout
```jsx
<section className="py-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <AnimatedSection
      animationId="left-content"
      animationType="slide-right"
      visibleSections={visibleSections}
    >
      <div>
        <h2>Feature Title</h2>
        <p>Description...</p>
        <Button variant="primary">Learn More</Button>
      </div>
    </AnimatedSection>
    
    <AnimatedSection
      animationId="right-image"
      animationType="slide-left"
      visibleSections={visibleSections}
    >
      <img src="feature.jpg" alt="Feature" />
    </AnimatedSection>
  </div>
</section>
```

### Centered Content
```jsx
<section className="py-20 px-4">
  <div className="max-w-3xl mx-auto text-center">
    <AnimatedSection
      animationId="centered"
      animationType="scale-in"
      visibleSections={visibleSections}
    >
      <h2>Centered Content</h2>
      <p>Your message here</p>
    </AnimatedSection>
  </div>
</section>
```

### Full-Width Banner
```jsx
<section className="py-32 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]">
  <div className="max-w-7xl mx-auto px-4 text-center text-white">
    <AnimatedSection
      animationId="banner"
      animationType="slide-up"
      visibleSections={visibleSections}
    >
      <h2 className="text-5xl font-bold mb-4">Big Announcement</h2>
      <p className="text-2xl mb-8">Something exciting</p>
      <Button variant="secondary">Take Action</Button>
    </AnimatedSection>
  </div>
</section>
```

## 🔥 Advanced Patterns

### Modal/Dialog (Custom Component)
```jsx
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-[#1A1A1C] rounded-xl p-8 max-w-2xl">
        <button onClick={onClose} className="absolute top-4 right-4">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
```

### Tabs (Custom Component)
```jsx
function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div>
      <div className="flex gap-4 border-b border-[#FF6B00]/20">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-4 py-2 ${
              activeTab === tab.id 
                ? 'border-b-2 border-[#FF6B00] text-[#FF6B00]' 
                : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-8">
        {tabs.find(t => t.id === activeTab)?.content}
      </div>
    </div>
  );
}
```

## 💡 Mix & Match Examples

```jsx
// Landing + Blog
<PageLayout>
  <HeroSection />
  <MetricsSection />
  <BlogPreviewSection />
  <ContactSection />
</PageLayout>

// Services + Pricing + Testimonials
<PageLayout>
  <HeroSection />
  <ServicesSection />
  <PricingSection />
  <TestimonialsSection />
  <ContactSection />
</PageLayout>

// About + Team + Partners
<PageLayout>
  <AboutHeroSection />
  <MetricsSection />
  <TeamSection />
  <PartnersSection />
  <ContactSection />
</PageLayout>
```

---

**The possibilities are endless! 🚀**

With these building blocks, you can create any page layout you need for ZentRedge.
Each component is designed to work together seamlessly while being fully independent.
