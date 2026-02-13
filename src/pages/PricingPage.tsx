
import React from 'react';
import Pricing from '../components/Pricing';

const PricingPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="bg-[#0e1217] py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">Precios Transparentes</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sin comisiones ocultas. Solo pagas por lo que necesitas.
          </p>
        </div>
      </section>

      <Pricing />

      <section className="py-24 bg-[#111827] border-t border-[#2d333b]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white">Comparativa de Planes</h2>
          <div className="overflow-x-auto">
            <div className="bg-[#181b22] rounded-[2.5rem] border border-[#2d333b] p-8 min-w-[800px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#2d333b]">
                    <th className="py-6 px-6 font-bold text-gray-400 uppercase text-sm tracking-wider">Funcionalidad</th>
                    <th className="py-6 px-6 font-bold text-white text-lg">Básico</th>
                    <th className="py-6 px-6 font-bold text-[#8b5cf6] text-lg">Profesional</th>
                    <th className="py-6 px-6 font-bold text-white text-lg">Eventos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2d333b]">
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 font-medium text-gray-300">Límite de Boletos</td>
                    <td className="py-5 px-6 text-white">50</td>
                    <td className="py-5 px-6 text-[#fbbf24] font-bold">Ilimitados</td>
                    <td className="py-5 px-6 text-[#fbbf24] font-bold">Ilimitados</td>
                  </tr>
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 font-medium text-gray-300">WhatsApp Automático</td>
                    <td className="py-5 px-6 text-gray-600"><i className="fas fa-times"></i></td>
                    <td className="py-5 px-6 text-green-500"><i className="fas fa-check-circle text-xl"></i></td>
                    <td className="py-5 px-6 text-green-500"><i className="fas fa-check-circle text-xl"></i></td>
                  </tr>
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 font-medium text-gray-300">Dominio Personalizado</td>
                    <td className="py-5 px-6 text-gray-600"><i className="fas fa-times"></i></td>
                    <td className="py-5 px-6 text-green-500"><i className="fas fa-check-circle text-xl"></i></td>
                    <td className="py-5 px-6 text-green-500"><i className="fas fa-check-circle text-xl"></i></td>
                  </tr>
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 font-medium text-gray-300">Publicidad de RifasPlus</td>
                    <td className="py-5 px-6 text-white">Sí</td>
                    <td className="py-5 px-6 text-[#8b5cf6] font-bold">No</td>
                    <td className="py-5 px-6 text-[#8b5cf6] font-bold">No</td>
                  </tr>
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 font-medium text-gray-300">Soporte 24/7</td>
                    <td className="py-5 px-6 text-white">Email</td>
                    <td className="py-5 px-6 text-white">WhatsApp/Email</td>
                    <td className="py-5 px-6 text-[#fbbf24] font-bold">Manager Dedicado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
