
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

// Full Page Components
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import LegalPage from './pages/LegalPage';
import TermsPage from './pages/TermsPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('inicio');

  // Handle initial URL and browser back/forward
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path === '/' || path === '/index.html') {
        setCurrentPath('inicio');
      } else {
        // Strip leading slash
        const route = path.substring(1);
        if (['caracteristicas', 'como-funciona', 'precios', 'legal', 'terminos'].includes(route)) {
          setCurrentPath(route);
        } else {
          setCurrentPath('inicio');
        }
      }
    };

    handleLocationChange();

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path: string) => {
    setCurrentPath(path);
    // If path is home, clear URL
    const url = path === 'inicio' ? '/' : `/${path}`;
    window.history.pushState({}, '', url);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPath) {
      case 'caracteristicas':
        return <FeaturesPage />;
      case 'como-funciona':
        return <HowItWorksPage />;
      case 'precios':
        return <PricingPage />;
      case 'legal':
        return <LegalPage navigate={navigate} />;
      case 'terminos':
        return <TermsPage navigate={navigate} />;
      case 'inicio':
      default:
        return (
          <>
            <Hero navigate={navigate} />
            <TrustedBy />
            <Features compact navigate={navigate} />
            <HowItWorks compact navigate={navigate} />
            <Pricing compact navigate={navigate} />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPath={currentPath} navigate={navigate} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;
