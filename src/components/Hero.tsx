
import React from 'react';

interface HeroProps {
  navigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-[#0e1217]">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 py-2 px-5 mb-8 rounded-full bg-[#fbbf24]/10 border border-[#fbbf24]/20 text-[#fbbf24] font-bold text-xs uppercase tracking-widest shadow-lg shadow-yellow-500/5">
            <i className="fas fa-bolt text-[10px]"></i>
            <span>Plataforma de Rifas en Venezuela</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            Crea tu Rifa <br />
            <span className="gradient-text-purple">Digital y Pro</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            La solución profesional para gestionar sorteos masivos, digitalizar ventas y recaudar con total transparencia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="https://rifasplus.vercel.app" className="group relative w-full sm:w-auto px-8 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30 overflow-hidden">
              <span className="relative z-10">Gestionar mi Rifa</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <button
              onClick={() => navigate('how-it-works')}
              className="w-full sm:w-auto px-8 py-3 bg-[#181b22] border border-[#2d333b] text-white hover:bg-[#1f242d] rounded-xl font-bold text-lg transition-all"
            >
              Ver Demo <i className="fas fa-play ml-2 text-xs text-[#8b5cf6]"></i>
            </button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <i className="fas fa-check-circle text-[#8b5cf6]"></i>
              <span className="text-gray-400 font-medium">Gestión de Boletos</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-check-circle text-[#8b5cf6]"></i>
              <span className="text-gray-400 font-medium">Visualización Pública</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-check-circle text-[#8b5cf6]"></i>
              <span className="text-gray-400 font-medium">Resultados por Lotería</span>
            </div>
          </div>
        </div>
      </div>

      {/* Luces de fondo (Glow effects) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-orange-500/5 rounded-full blur-[140px]"></div>
      </div>
    </section>
  );
};

export default Hero;
