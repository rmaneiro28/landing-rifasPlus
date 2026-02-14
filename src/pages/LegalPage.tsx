import React from 'react';

interface LegalPageProps {
    navigate?: (path: string) => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ navigate }) => {
    return (
        <div className="pt-32 pb-24 bg-[#0e1217] min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                <div className="mb-12">
                    <button
                        onClick={() => navigate?.('inicio')}
                        className="text-[#8b5cf6] font-bold hover:text-white transition-colors mb-6 flex items-center"
                    >
                        <i className="fas fa-arrow-left mr-2"></i> Volver al Inicio
                    </button>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Guía Legal y Normativa</h1>
                    <p className="text-xl text-gray-400">Todo lo que necesitas saber para operar tu rifa de forma legal y segura en Venezuela.</p>
                </div>

                <div className="space-y-12">
                    {/* Introducción */}
                    <section className="bg-[#181b22] p-8 rounded-[2rem] border border-[#2d333b]">
                        <h2 className="text-2xl font-bold text-white mb-4">¿Son legales las rifas digitales?</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Sí. En Venezuela, la actividad de juegos de envite y azar está permitida siempre que se cumpla con las normativas establecidas por la <strong>Comisión Nacional de Telecomunicaciones (CONATEL)</strong> y la <strong>Comisión Nacional de Lotería (CONALOT)</strong>.
                        </p>
                    </section>

                    {/* CONATEL Section */}
                    <section className="bg-[#181b22] p-8 rounded-[2rem] border border-[#fbbf24]/20 shadow-[0_0_50px_-12px_rgba(251,191,36,0.1)]">
                        <div className="flex items-start mb-6">
                            <i className="fas fa-balance-scale text-[#fbbf24] text-3xl mr-4 mt-1"></i>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">Normativa CONATEL</h2>
                                <p className="text-[#fbbf24] font-medium">Cumplimiento esencial para medios digitales</p>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                Al utilizar medios electrónicos (Internet, Redes Sociales, WhatsApp) para la promoción y gestión de tu sorteo, debes apegarte a la <strong>Ley de Responsabilidad Social en Radio, Televisión y Medios Electrónicos</strong>.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong className="text-white">Transparencia:</strong> Las condiciones del sorteo deben ser claras y accesibles para todos los participantes.
                                </li>
                                <li>
                                    <strong className="text-white">Veracidad:</strong> La publicidad no debe ser engañosa. Los premios prometidos deben existir y ser entregados.
                                </li>
                                <li>
                                    <strong className="text-white">Protección al Usuario:</strong> Los datos personales de los participantes deben ser resguardados y no utilizados para fines distintos al sorteo sin consentimiento.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Recomendaciones */}
                    <section className="bg-[#181b22] p-8 rounded-[2rem] border border-[#2d333b]">
                        <h2 className="text-2xl font-bold text-white mb-6">Nuestras Recomendaciones</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#0e1217] p-6 rounded-xl border border-[#2d333b]">
                                <h3 className="text-[#8b5cf6] font-bold mb-2">1. Bases y Condiciones</h3>
                                <p className="text-gray-400 text-sm">Redacta siempre un documento de "Términos y Condiciones" de tu sorteo. RifasPlus te ofrece una plantilla base.</p>
                            </div>
                            <div className="bg-[#0e1217] p-6 rounded-xl border border-[#2d333b]">
                                <h3 className="text-[#8b5cf6] font-bold mb-2">2. Permisos Municipales</h3>
                                <p className="text-gray-400 text-sm">Dependiendo de tu alcaldía, podrías requerir un permiso eventual para espectáculos públicos o rifas.</p>
                            </div>
                            <div className="bg-[#0e1217] p-6 rounded-xl border border-[#2d333b]">
                                <h3 className="text-[#8b5cf6] font-bold mb-2">3. Notaria Pública</h3>
                                <p className="text-gray-400 text-sm">Para premios de alto valor (vehículos, inmuebles), recomendamos notariar el sorteo para mayor credibilidad.</p>
                            </div>
                            <div className="bg-[#0e1217] p-6 rounded-xl border border-[#2d333b]">
                                <h3 className="text-[#8b5cf6] font-bold mb-2">4. Sorteo Público</h3>
                                <p className="text-gray-400 text-sm">Realiza el sorteo mediante transmisiones en vivo (Instagram/TikTok Live) para garantizar transparencia.</p>
                            </div>
                        </div>
                    </section>

                    <div className="bg-gradient-to-r from-[#8b5cf6]/10 to-[#ec4899]/10 p-8 rounded-[2rem] border border-[#8b5cf6]/30 text-center">
                        <h3 className="text-xl font-bold text-white mb-2">¿Tlènes dudas específicas?</h3>
                        <p className="text-gray-400 mb-6">Nuestro equipo legal puede asesorarte con los trámites específicos para tu rifa.</p>
                        <button className="bg-[#8b5cf6] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#7c3aed] transition-colors shadow-lg shadow-purple-500/20">
                            Contactar Soporte Legal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
