
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

      <section className="py-24 bg-[#0e1217]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Integraciones que potencian tu alcance</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-[#181b22] rounded-2xl flex items-center justify-center mb-4 border border-[#2d333b] group-hover:border-green-500/50 transition-colors">
                <i className="fab fa-whatsapp text-4xl text-green-500"></i>
              </div>
              <span className="text-gray-400 font-bold">WhatsApp</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-[#181b22] rounded-2xl flex items-center justify-center mb-4 border border-[#2d333b] group-hover:border-blue-600/50 transition-colors">
                <i className="fab fa-facebook text-4xl text-blue-600"></i>
              </div>
              <span className="text-gray-400 font-bold">Facebook</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-[#181b22] rounded-2xl flex items-center justify-center mb-4 border border-[#2d333b] group-hover:border-pink-500/50 transition-colors">
                <i className="fab fa-instagram text-4xl text-pink-500"></i>
              </div>
              <span className="text-gray-400 font-bold">Instagram</span>
            </div>
          </div>
          <p className="mt-12 text-gray-500 text-sm">
            Nota: Las integraciones de pago directo (Stripe, Mercado Pago) han sido reemplazadas por verificación manual para mayor control.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
