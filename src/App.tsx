
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
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

import SuccessStories from './components/SuccessStories';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('home');

  // Handle browser back/forward if needed, but for now simple state is cleaner
  const navigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPath) {
      case 'features':
        return <FeaturesPage />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'pricing':
        return <PricingPage />;
      case 'legal':
        return <LegalPage navigate={navigate} />;
      case 'terms':
        return <TermsPage navigate={navigate} />;
      case 'home':
      default:
        return (
          <>
            <Hero navigate={navigate} />
            <Features compact navigate={navigate} />
            <HowItWorks compact navigate={navigate} />
            <SuccessStories />
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
