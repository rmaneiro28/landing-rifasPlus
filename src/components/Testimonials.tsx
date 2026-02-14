
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    role: 'Organizador Independiente',
    avatar: 'https://ui-avatars.com/api/?name=Carlos+Mendoza&background=random&color=fff',
    content: 'RifasPlus cambió la forma en que recaudo fondos para mi fundación. Lo que antes tomaba semanas de papeleo, ahora lo hago en minutos.'
  },
  {
    id: 2,
    name: 'Ana García',
    role: 'Emprendedora',
    avatar: 'https://ui-avatars.com/api/?name=Ana+Garcia&background=random&color=fff',
    content: 'La integración con WhatsApp es increíble. Mis clientes reciben su boleto al instante y eso genera muchísima confianza.'
  },
  {
    id: 3,
    name: 'Roberto Salas',
    role: 'Club Deportivo',
    avatar: 'https://ui-avatars.com/api/?name=Roberto+Salas&background=random&color=fff',
    content: 'Pudimos vender 10,000 boletos sin un solo error. El panel de administración es muy intuitivo incluso para personas no técnicas.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Lo que dicen nuestros usuarios</h2>
          <div className="flex justify-center text-[#fbbf24] space-x-1 mb-8">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[#181b22] p-8 rounded-[2rem] border border-[#2d333b] hover:border-[#8b5cf6]/40 transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <p className="text-gray-300 italic mb-8 text-lg leading-relaxed">"{t.content}"</p>
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] rounded-full blur-[2px]"></div>
                  <img src={t.avatar} alt={t.name} className="relative w-14 h-14 rounded-full mr-4 border-2 border-[#181b22] object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{t.name}</h4>
                  <p className="text-sm text-[#8b5cf6] uppercase font-bold tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
