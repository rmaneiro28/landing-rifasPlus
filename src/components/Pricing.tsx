
import React from 'react';

interface PricingProps {
  compact?: boolean;
  navigate?: (path: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ compact = false }) => {
  return (
    <section id="precios" className={`py-24 relative overflow-hidden ${compact ? 'bg-[#111827]' : 'bg-[#0e1217]'}`}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-medium text-sm mb-4">
            Modelo de Negocio
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Solo pagas <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">si vendes</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Sin mensualidades ni letras pequeñas. Nuestro éxito depende del tuyo.
          </p>
        </div>

        {/* The Main Deal Card */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="rounded-[2.5rem] bg-gradient-to-b from-[#1f2937] to-[#111827] border border-gray-800 p-8 md:p-12 text-center relative overflow-hidden shadow-2xl group hover:border-purple-500/30 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>

            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-800 pb-8 md:pb-0 md:pr-8">
                <p className="text-gray-400 font-medium mb-2 uppercase tracking-wider text-xs">Comisión Estándar</p>
                <div className="text-8xl font-black text-white tracking-tighter leading-none mb-2">
                  2<span className="text-5xl text-purple-500">%</span>
                </div>
                <p className="text-lg text-gray-400">por ticket vendido</p>
                <div className="mt-6 inline-block bg-purple-500/10 text-purple-400 px-4 py-2 rounded-lg text-sm font-semibold border border-purple-500/20">
                  ¡La más baja del mercado!
                </div>
              </div>

              <div className="md:col-span-7 text-left space-y-8 pl-0 md:pl-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-chart-line text-purple-400 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Escalabilidad</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">El porcentaje es ajustable a la baja dependiendo del volumen o valor del boleto. A mayor venta, menor comisión.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-wallet text-green-400 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Sin Costos Fijos</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">No pagas nada por empezar. El costo se deduce únicamente de la actividad real de tu sorteo.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-shield-alt text-blue-400 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Riesgo Cero</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Herramienta perfecta para emprendedores, causas benéficas o marcas. Si no vendes, no pagas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features Grid */}
        <div className="mb-24">
          <h3 className="text-3xl font-black text-white text-center mb-16">
            Todo lo que necesitas para <span className="text-purple-500">triunfar</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Selección Visual", desc: "Cuadrícula interactiva de 100 hasta 9999 números.", icon: "fa-th" },
              { title: "Gestión de Estados", desc: "Control total: Disponibles, Apartados y Vendidos en tiempo real.", icon: "fa-traffic-light" },
              { title: "Buscador por Teléfono", desc: "Tus clientes pueden consultar sus números comprados fácilmente.", icon: "fa-search" },
              { title: "Panel Administrativo", desc: "Herramientas para confirmar pagos y métricas de recaudación.", icon: "fa-cogs" },
              { title: "Optimización Móvil", desc: "Diseño 100% responsivo ideal para compartir en WhatsApp.", icon: "fa-mobile-alt" },
              { title: "Liquidación Transparente", desc: "Cálculo automático de comisiones sobre ventas reales.", icon: "fa-file-invoice-dollar" },
            ].map((f, i) => (
              <div key={i} className="bg-[#1f2937]/30 backdrop-blur-sm border border-gray-800/50 p-8 rounded-2xl hover:bg-[#1f2937] hover:border-purple-500/30 transition-all duration-300 group">
                <i className={`fas ${f.icon} text-3xl text-gray-500 group-hover:text-purple-400 mb-6 transition-colors`}></i>
                <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="mb-24 relative">
          <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full"></div>
          <div className="relative bg-[#111827] rounded-[3rem] p-8 md:p-16 border border-gray-800 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <h3 className="text-3xl font-black text-white text-center mb-16">¿Cómo empezar tu sorteo?</h3>
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "1", title: "Configura", desc: "Define premio, fecha y valor del ticket." },
                { step: "2", title: "Difunde", desc: "Comparte tu enlace único en todas tus redes." },
                { step: "3", title: "Recauda", desc: "Los pagos van directo a tus cuentas." },
                { step: "4", title: "Liquida", desc: "Pagas la comisión solo de lo vendido." },
              ].map((s, i) => (
                <div key={i} className="text-center relative group">
                  <div className="w-20 h-20 rounded-2xl bg-gray-800 text-white font-black text-3xl flex items-center justify-center mx-auto mb-6 border border-gray-700 group-hover:border-purple-500 group-hover:text-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
                    {s.step}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-800 to-gray-800/0 -z-10 ml-10"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="https://wa.me/584123397066" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-gray-900 font-bold py-4 px-10 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all shadow-xl">
                Crear mi Rifa Ahora
              </a>
            </div>
          </div>
        </div>

        {/* FAQ - Updated */}
        {!compact && (
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-black text-center mb-12 text-white">Preguntas de Organizadores</h3>
            <div className="space-y-4">
              {[
                { q: "¿Tengo que pagar una mensualidad?", a: "No. En Rifas Plus no existen las mensualidades obligatorias. Solo cobramos una pequeña comisión del 2% cuando vendes un ticket." },
                { q: "¿El dinero de las ventas pasa por ustedes?", a: "No. El dinero va directamente del comprador a tus cuentas bancarias. Tú tienes el control total de tu flujo de caja." },
                { q: "¿Qué pasa si no vendo todos los números?", a: "No hay penalización ni costos ocultos. Nuestra comisión se calcula únicamente sobre los tickets que efectivamente hayas vendido." },
                { q: "¿Cómo verifico los pagos?", a: "Tus clientes suben el comprobante y tú lo validas desde tu panel administrativo. Al validarlo, el ticket cambia a estado Vendido y se le notifica al cliente." }
              ].map((faq, i) => (
                <div key={i} className="bg-[#1f2937] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                    <i className="fas fa-question-circle text-purple-500 mr-3 text-sm"></i>
                    {faq.q}
                  </h4>
                  <p className="text-gray-400 pl-7 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Pricing;
