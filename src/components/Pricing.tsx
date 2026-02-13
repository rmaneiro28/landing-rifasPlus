
import React from 'react';
import { RafflePlan } from '../types';

interface PricingProps {
  compact?: boolean;
  navigate?: (path: string) => void;
}

const plans: RafflePlan[] = [
  {
    id: 'free',
    name: 'Inicial',
    price: '0',
    features: ['1 Rifa Activa', 'Hasta 100 Números', 'Gestión Manual de Pagos', 'Link Público de Rifa'],
  },
  {
    id: 'pro',
    name: 'Profesional',
    price: '29',
    features: ['Rifas Ilimitadas', 'Números Ilimitados (00-9999)', 'Generador de Ticket Digital', 'Conexión WhatsApp Directa', 'Resultados Triple Táchira'],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Agencia',
    price: '99',
    features: ['10 cuentas de vendedor', 'Panel de Auditoría', 'Dominio Personalizado', 'Soporte Prioritario', 'Exportación de Data'],
  }
];

const Pricing: React.FC<PricingProps> = ({ compact = false, navigate }) => {
  return (
    <section id="precios" className={`py-32 ${compact ? 'bg-[#111827]' : 'bg-[#0e1217]'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Planes para Ganadores</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">Invierte en profesionalismo y multiplica tus resultados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`p-12 rounded-[2.5rem] bg-[#181b22] border ${p.recommended ? 'border-[#fbbf24] shadow-[0_0_50px_-12px_rgba(251,191,36,0.2)] scale-105' : 'border-[#2d333b]'} flex flex-col transition-all duration-500 hover:translate-y-[-10px]`}
            >
              {p.recommended && (
                <div className="flex items-center space-x-2 bg-[#fbbf24] text-gray-900 text-xs font-black py-2 px-5 rounded-full uppercase self-center -mt-16 mb-10 shadow-xl">
                  <i className="fas fa-star"></i>
                  <span>Recomendado</span>
                </div>
              )}
              <h3 className={`text-3xl font-black mb-2 ${p.recommended ? 'text-[#fbbf24]' : 'text-white'}`}>{p.name}</h3>
              <div className="mb-10">
                <span className="text-5xl font-black text-white">${p.price}</span>
                <span className="text-gray-500 font-bold ml-2">/mes</span>
              </div>
              <ul className="space-y-5 mb-12 flex-grow">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-300 font-medium">
                    <i className="fas fa-check-circle text-[#8b5cf6] mr-4 text-xl"></i>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://rifasplus.vercel.app"
                className={`w-full py-5 rounded-2xl text-center font-black text-xl transition-all shadow-xl ${p.recommended ? 'bg-[#fbbf24] text-gray-900 hover:bg-[#f59e0b] shadow-yellow-500/20' : 'bg-[#2d333b] text-white hover:bg-[#374151]'}`}
              >
                Comenzar ya
              </a>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-32 max-w-7xl mx-auto hidden md:block">
          <h3 className="text-3xl font-black text-center mb-16 text-white">Comparativa de Funcionalidades</h3>
          <div className="bg-[#181b22] rounded-[2.5rem] border border-[#2d333b] overflow-hidden p-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-6 px-6 text-gray-400 font-bold border-b border-[#2d333b] w-1/4">FUNCIONALIDAD</th>
                  <th className="py-6 px-6 text-white font-bold text-center border-b border-[#2d333b] w-1/4 text-xl">Inicial</th>
                  <th className="py-6 px-6 text-[#8b5cf6] font-bold text-center border-b border-[#2d333b] w-1/4 text-xl">Profesional</th>
                  <th className="py-6 px-6 text-white font-bold text-center border-b border-[#2d333b] w-1/4 text-xl">Agencia</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Rifas Activas", basic: "1", pro: "Ilimitadas", agency: "Ilimitadas" },
                  { feature: "Números por Rifa", basic: "100", pro: "Ilimitados", agency: "Ilimitados" },
                  { feature: "Gestión de Pagos", basic: "Manual", pro: "Manual + Reportes", agency: "Auditoría Avanzada" },
                  { feature: "Ticket Digital", basic: false, pro: true, agency: true },
                  { feature: "Resultados Lotería", basic: false, pro: true, agency: true },
                  { feature: "WhatsApp Automático", basic: false, pro: true, agency: true },
                  { feature: "Dominio Propio", basic: false, pro: true, agency: true },
                  { feature: "Multi-Usuario", basic: false, pro: false, agency: true },
                  { feature: "Soporte", basic: "Email", pro: "WhatsApp", agency: "Prioritario 24/7" },
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-white/5 transition-colors">
                    <td className="py-6 px-6 text-gray-300 font-medium border-b border-[#2d333b]">{row.feature}</td>
                    <td className="py-6 px-6 text-center border-b border-[#2d333b]">
                      {typeof row.basic === 'boolean' ? (
                        row.basic ? <i className="fas fa-check-circle text-[#8b5cf6] text-xl"></i> : <i className="fas fa-times text-gray-600 text-xl"></i>
                      ) : (
                        <span className="text-white font-bold">{row.basic}</span>
                      )}
                    </td>
                    <td className="py-6 px-6 text-center border-b border-[#2d333b] bg-[#8b5cf6]/5">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? <i className="fas fa-check-circle text-[#8b5cf6] text-xl"></i> : <i className="fas fa-times text-gray-600 text-xl"></i>
                      ) : (
                        <span className="text-white font-bold">{row.pro}</span>
                      )}
                    </td>
                    <td className="py-6 px-6 text-center border-b border-[#2d333b]">
                      {typeof row.agency === 'boolean' ? (
                        row.agency ? <i className="fas fa-check-circle text-[#8b5cf6] text-xl"></i> : <i className="fas fa-times text-gray-600 text-xl"></i>
                      ) : (
                        <span className="text-white font-bold">{row.agency}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {!compact && (
          <div className="mt-32 max-w-4xl mx-auto">
            <h3 className="text-4xl font-black text-center mb-16 text-white">Preguntas de Organizadores</h3>
            <div className="space-y-6">
              {[
                { q: "¿Hay cargos por boleto vendido?", a: "No. Solo pagas tu suscripción mensual. El 100% del dinero lo recibes tú directamente." },
                { q: "¿Cómo recibo los pagos?", a: "Tú defines tus métodos (Transferencia, Pago Móvil, Zelle). El cliente reporta el pago y tú lo apruebas." },
                { q: "¿Cómo entrego los boletos?", a: "El sistema genera el boleto digital y permite enviarlo por WhatsApp/Email al verificar el pago." }
              ].map((faq, i) => (
                <div key={i} className="bg-[#181b22] p-8 rounded-[2rem] border border-[#2d333b] shadow-lg">
                  <h4 className="font-black text-xl text-[#8b5cf6] mb-4">{faq.q}</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">{faq.a}</p>
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
