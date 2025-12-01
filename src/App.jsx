// ZentRedge - Professional Modular Architecture
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Interface, ServicesPage, PortfolioPage, AboutPage, ContactPage } from "./components";
import PageLayout from './components/layout/PageLayout';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function ServicesPageWrapper() {
  const visibleSections = useScrollAnimation();
  return (
    <PageLayout>
      <ServicesPage visibleSections={visibleSections} />
    </PageLayout>
  );
}

function PortfolioPageWrapper() {
  const visibleSections = useScrollAnimation();
  return (
    <PageLayout>
      <PortfolioPage visibleSections={visibleSections} />
    </PageLayout>
  );
}

function AboutPageWrapper() {
  const visibleSections = useScrollAnimation();
  return (
    <PageLayout>
      <AboutPage visibleSections={visibleSections} />
    </PageLayout>
  );
}

function ContactPageWrapper() {
  const visibleSections = useScrollAnimation();
  return (
    <PageLayout>
      <ContactPage visibleSections={visibleSections} />
    </PageLayout>
  );
}

export default function App() {
  return (
    <Router basename="/apifetch">
      <Routes>
        <Route path="/" element={<Interface />} />
        <Route path="/services" element={<ServicesPageWrapper />} />
        <Route path="/portfolio" element={<PortfolioPageWrapper />} />
        <Route path="/about" element={<AboutPageWrapper />} />
        <Route path="/contact" element={<ContactPageWrapper />} />
      </Routes>
    </Router>
  );
}