import React from 'react';

interface HowItWorksProps {
  compact?: boolean;
  navigate?: (path: string) => void;
}

const steps = [
  {
    number: '01',
    icon: 'fa-user-plus',
    title: 'Crea tu Cuenta',
    desc: 'Regístrate gratis y configura tu perfil de administrador en segundos.'
  },
  {
    number: '02',
    icon: 'fa-pen-to-square',
    title: 'Personaliza',
    desc: 'Sube fotos de tus premios, define precios y cantidad de números.'
  },
  {
    number: '03',
    icon: 'fa-share-nodes',
    title: 'Comparte y Vende',
    desc: 'Envía tu link. El cliente registra sus datos de Pago Móvil, tú verificas el dinero en cuenta y apruebas el ticket.'
  },
  {
    number: '04',
    icon: 'fa-trophy',
    title: 'Sorteo Oficial',
    desc: 'El ganador se define con la Lotería Triple Táchira. ¡Transparencia total!'
  }
];

const HowItWorks: React.FC<HowItWorksProps> = ({ compact = false, navigate }) => {
  return (
    <section id="como-funciona" className={`py-32 ${compact ? 'bg-[#0a0a0c]' : 'bg-[#0e1217]'} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 -left-64 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-2 py-2 px-5 mb-8 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6] font-bold text-xs uppercase tracking-widest">
            <i className="fas fa-list-check text-[10px]"></i>
            <span>Paso a Paso</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Proceso 100% Digital</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Olvídate de los talonarios de papel. Gestiona todo desde tu celular de forma <span className="text-[#fbbf24] font-bold">rápida y segura</span>.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#2d333b] to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                <div className="flex flex-col items-center text-center relative z-10">
                  {/* Step Number Badge */}
                  <div className="w-24 h-24 rounded-[2rem] bg-[#181b22] border-[4px] border-[#0e1217] flex items-center justify-center mb-8 relative group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] opacity-0 group-hover:opacity-20 rounded-[2rem] transition-opacity duration-500"></div>
                    <i className={`fas ${s.icon} text-3xl text-gray-400 group-hover:text-white transition-colors duration-300`}></i>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#fbbf24] text-[#0e1217] font-black flex items-center justify-center text-sm border-2 border-[#0e1217]">
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#8b5cf6] transition-colors duration-300">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {compact && navigate && (
          <div className="text-center">
            <button
              onClick={() => navigate('how-it-works')}
              className="px-12 py-5 bg-[#181b22] border border-[#2d333b] hover:border-[#8b5cf6]/50 text-white rounded-2xl font-bold transition-all text-lg hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.2)] group"
            >
              <span className="group-hover:text-[#8b5cf6] transition-colors">Ver Guía detallada</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
