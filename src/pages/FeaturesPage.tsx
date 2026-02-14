
import React from 'react';
import Features from '../components/Features';

const FeaturesPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="bg-[#0e1217] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Características Detalladas</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre por qué RifasPlus es la plataforma preferida por miles de organizadores exitosos.
          </p>
        </div>
      </section>

      <Features />
    </div>
  );
};

export default FeaturesPage;
