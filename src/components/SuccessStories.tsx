import React from 'react';

const SuccessStories: React.FC = () => {
    return (
        <section className="py-24 bg-[#111827]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <span className="text-[#8b5cf6] font-black tracking-widest uppercase text-sm mb-2 block">Casos Reales</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ellos ya alcanzaron su meta</h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">Estas son algunas de las miles de historias de éxito impulsadas por nuestra tecnología.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#8b5cf6] rounded-[2.5rem] rotate-3 opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5d7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Caso de Éxito - Fundación Esperanza"
                            className="relative rounded-[2.5rem] shadow-2xl w-full h-96 object-cover border-4 border-[#181b22]"
                        />
                        <div className="absolute bottom-8 left-8 right-8 bg-[#181b22]/90 backdrop-blur-md p-6 rounded-2xl border border-[#2d333b]">
                            <p className="text-[#fbbf24] font-black text-sm uppercase tracking-wider mb-1">Recaudado: $15,400</p>
                            <h3 className="text-white font-bold text-xl">Fundación Esperanza Venezuela</h3>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-6">
                            <img src="https://picsum.photos/50/50?random=10" alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-[#8b5cf6]" />
                            <div>
                                <h4 className="text-white font-bold text-lg">María Rodríguez</h4>
                                <p className="text-gray-500 text-sm">Directora de Fundación Esperanza</p>
                            </div>
                        </div>
                        <h3 className="text-3xl font-black text-white mb-6 leading-tight">"Logramos financiar la operación de 5 niños en tiempo récord"</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            "Antes de RifasPlus, perdíamos el 30% de los interesados porque el proceso de pago manual era muy lento. Con la automatización de WhatsApp, cerramos ventas al instante. La transparencia que le dimos a nuestros donantes con el ticket digital fue clave."
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-[#181b22] p-4 rounded-xl border-l-4 border-[#8b5cf6]">
                                <p className="text-3xl font-black text-white mb-1">3.5k</p>
                                <p className="text-gray-500 text-sm">Boletos Vendidos</p>
                            </div>
                            <div className="bg-[#181b22] p-4 rounded-xl border-l-4 border-[#ec4899]">
                                <p className="text-3xl font-black text-white mb-1">100%</p>
                                <p className="text-gray-500 text-sm">Transparencia</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center flex-row-reverse">
                    <div className="order-2 md:order-1">
                        <div className="flex items-center mb-6">
                            <img src="https://picsum.photos/50/50?random=11" alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-[#8b5cf6]" />
                            <div>
                                <h4 className="text-white font-bold text-lg">Carlos 'El Turco'</h4>
                                <p className="text-gray-500 text-sm">Influencer & Rifa de Motos</p>
                            </div>
                        </div>
                        <h3 className="text-3xl font-black text-white mb-6 leading-tight">"Vendí mi moto en 48 horas y me sobró para comprar otra"</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            "Yo no sabía nada de tecnología. Configuré mi rifa en 10 minutos desde el celular. La gente confiaba porque el sistema les daba el ticket automático. Es la herramienta definitiva para cualquiera que quiera hacer dinero extra."
                        </p>
                        <button className="text-[#fbbf24] font-bold text-lg hover:underline flex items-center">
                            Ver entrevista completa <i className="fas fa-play-circle ml-2 text-2xl"></i>
                        </button>
                    </div>
                    <div className="relative group order-1 md:order-2">
                        <div className="absolute inset-0 bg-[#ec4899] rounded-[2.5rem] -rotate-3 opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                        <img
                            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Caso de Éxito - Moto Rifa"
                            className="relative rounded-[2.5rem] shadow-2xl w-full h-96 object-cover border-4 border-[#181b22]"
                        />
                        <div className="absolute bottom-8 left-8 right-8 bg-[#181b22]/90 backdrop-blur-md p-6 rounded-2xl border border-[#2d333b]">
                            <p className="text-[#fbbf24] font-black text-sm uppercase tracking-wider mb-1">Recaudado: $3,200</p>
                            <h3 className="text-white font-bold text-xl">Sorteo Bera SBR</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
