
import React from 'react';
import HowItWorks from '../components/HowItWorks';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="bg-[#0e1217] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6">¿Cómo funciona RifasPlus?</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Desde la creación hasta la entrega del premio, te acompañamos en cada paso del camino.
          </p>
        </div>
      </section>

      <HowItWorks />

      <section className="py-24 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fbbf24]/5 blur-[120px] rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white">Preguntas del Organizador</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#181b22] p-8 rounded-[2rem] border border-[#2d333b] hover:border-[#8b5cf6]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl group">
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#8b5cf6] transition-colors">¿Cómo recibo mi dinero?</h3>
              <p className="text-gray-400 leading-relaxed">
                Tú decides. Puedes configurar pagos directos a tu cuenta bancaria mediante transferencias, o utilizar pasarelas de pago automáticas. El dinero nunca pasa por RifasPlus, va directo a ti.
              </p>
            </div>
            <div className="bg-[#181b22] p-8 rounded-[2rem] border border-[#2d333b] hover:border-[#8b5cf6]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl group">
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#8b5cf6] transition-colors">¿El sorteo es legal?</h3>
              <p className="text-gray-400 leading-relaxed">
                Nuestra plataforma ofrece herramientas de transparencia, pero la legalidad depende de las regulaciones de tu país/región. Recomendamos consultar las leyes locales de juegos y sorteos.
              </p>
            </div>
            <div className="bg-[#181b22] p-8 rounded-[2rem] border border-[#2d333b] hover:border-[#8b5cf6]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl group">
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#8b5cf6] transition-colors">¿Puedo usar mi propio dominio?</h3>
              <p className="text-gray-400 leading-relaxed">
                ¡Sí! En los planes Profesional y Eventos puedes vincular tu propio dominio (ej: misorteo.com) para una marca 100% personalizada.
              </p>
            </div>
            <div className="bg-[#181b22] p-8 rounded-[2rem] border border-[#2d333b] hover:border-[#8b5cf6]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl group">
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#8b5cf6] transition-colors">¿Cómo se elige al ganador?</h3>
              <p className="text-gray-400 leading-relaxed">
                Ofrecemos un generador aleatorio integrado que selecciona un boleto entre los vendidos. Puedes realizar el sorteo en vivo y grabarlo para máxima transparencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0e1217]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-white">¿Listo para lanzar tu primera rifa?</h2>
          <a href="https://rifasplus.vercel.app" className="inline-block px-12 py-5 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0e1217] rounded-2xl font-black text-xl transition transform hover:scale-105 shadow-[0_0_30px_-5px_rgba(251,191,36,0.3)]">
            Empezar Ahora - ¡Es Gratis!
          </a>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
