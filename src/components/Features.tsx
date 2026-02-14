
import React from 'react';
import MockupTablet from '../assets/mockup-tablet.png';

interface FeaturesProps {
  compact?: boolean;
  navigate?: (path: string) => void;
}

const features = [
  {
    icon: 'fa-bolt',
    title: 'Creación Instantánea',
    desc: 'Configura tu sorteo en menos de 5 minutos con nuestro panel intuitivo.',
    color: 'text-[#fbbf24]'
  },
  {
    icon: 'fa-clipboard-check',
    title: 'Control de Ventas',
    desc: 'Registra y gestiona cada boleto vendido manualmente. Mantén tus cuentas claras y organizadas.',
    color: 'text-[#8b5cf6]'
  },
  {
    icon: 'fa-bell',
    title: 'Notificaciones Pro',
    desc: 'Aviso automático de boletos comprados directamente al WhatsApp del cliente.',
    color: 'text-green-500'
  },
  {
    icon: 'fa-chart-line',
    title: 'Dashboard Analítico',
    desc: 'Estadísticas en tiempo real de ventas, visitas y recaudación total.',
    color: 'text-blue-500'
  },
  {
    icon: 'fa-mobile-screen',
    title: 'Diseño Mobile-First',
    desc: 'Tus clientes pueden ver los números disponibles y reservados desde cualquier dispositivo.',
    color: 'text-pink-500'
  },
  {
    icon: 'fa-users-gear',
    title: 'Multiusuario',
    desc: 'Asigna administradores y vendedores para gestionar tu éxito.',
    color: 'text-[#8b5cf6]'
  }
];

const Features: React.FC<FeaturesProps> = ({ compact = false, navigate }) => {
  return (
    <section id="caracteristicas" className={`py-32 ${compact ? 'bg-[#0e1217]' : 'bg-[#111827]'} overflow-hidden`}>
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-2 py-2 px-5 mb-8 rounded-full bg-[#fbbf24]/10 border border-[#fbbf24]/20 text-[#fbbf24] font-bold text-xs uppercase tracking-widest shadow-lg shadow-yellow-500/5">
            <i className="fas fa-star text-[10px]"></i>
            <span>Potencia tu Recaudación</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Todo lo que necesitas para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]">Triunfar en tu Sorteo</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Herramientas profesionales diseñadas para que te enfoques en vender, nosotros nos encargamos de la técnica.
          </p>
        </div>

        {/* Hero Feature with Mockup */}
        <div className="mb-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#8b5cf6]/20 blur-[120px] rounded-full -z-10"></div>
          <div className="relative z-10 bg-[#181b22] border border-[#2d333b] rounded-[3rem] p-4 md:p-12 shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-eye text-[#8b5cf6] text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Vista Pública Atractiva</h3>
                      <p className="text-gray-400 text-lg">Tus clientes verán los números disponibles en tiempo real, diseñados para incentivar la compra impulsiva.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-[#fbbf24]/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-hand-pointer text-[#fbbf24] text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Selección Intuitiva</h3>
                      <p className="text-gray-400 text-lg">Interfaz optimizada para móviles donde elegir un número es tan fácil como tocar la pantalla.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center relative">
                {/* Mockup Container */}
                <div className="relative group perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] rounded-[2rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <img
                    src={MockupTablet}
                    alt="Interfaz de RifasPlus"
                    className="relative z-10 w-full max-w-lg transform group-hover:scale-[1.02] group-hover:rotate-y-2 transition-all duration-700 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-[#181b22] border border-[#2d333b] hover:border-[#8b5cf6]/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#1f2937] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8b5cf6] transition-colors duration-300">
                <i className={`fas ${f.icon} text-2xl ${f.color} group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {compact && navigate && (
          <div className="text-center pt-8">
            <button
              onClick={() => navigate('caracteristicas')}
              className="inline-flex items-center space-x-2 text-[#fbbf24] font-bold text-lg hover:text-[#f59e0b] transition-colors p-4 rounded-xl hover:bg-[#fbbf24]/5"
            >
              <span>Explorar todas las funcionalidades</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
