import React from 'react';

interface TermsPageProps {
    navigate?: (path: string) => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ navigate }) => {
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
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Términos y Condiciones</h1>
                    <p className="text-xl text-gray-400">Última actualización: 14 de Febrero, 2026</p>
                </div>

                <div className="bg-[#181b22] p-8 md:p-12 rounded-[2rem] border border-[#2d333b] space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
                        <p>
                            Al registrarse y utilizar los servicios de <strong>RifasPlus</strong> ("la Plataforma"), usted acepta cumplir y estar sujeto a estos Términos y Condiciones de Uso. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Descripción del Servicio</h2>
                        <p>
                            RifasPlus provee una herramienta tecnológica (SaaS) para la gestión, administración y venta de boletos para rifas y sorteos. <strong>RifasPlus NO es un organizador de juegos de azar</strong>, sino un proveedor de software para organizadores independientes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Responsabilidades del Organizador</h2>
                        <p className="mb-4">El usuario organizador declara y garantiza que:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Tiene la capacidad legal para organizar sorteos en su jurisdicción.</li>
                            <li>Cumplirá con todas las leyes y regulaciones aplicables (incluyendo normativas de <strong>CONATEL</strong> y <strong>SUDEBAN</strong> en Venezuela).</li>
                            <li>Entregará los premios prometidos en la fecha y forma estipuladas.</li>
                            <li>Es el único responsable de la recaudación de fondos y el pago de impuestos correspondientes.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Pagos y Suscripciones</h2>
                        <p>
                            El servicio se ofrece bajo un modelo de suscripción mensual. Los pagos no son reembolsables. RifasPlus se reserva el derecho de modificar sus tarifas notificando a los usuarios con 30 días de antelación.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Propiedad Intelectual</h2>
                        <p>
                            Todo el contenido, diseño, logotipos y software de la Plataforma son propiedad exclusiva de RifasPlus. Se prohíbe la reproducción total o parcial sin autorización expresa.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Privacidad de Datos</h2>
                        <p>
                            RifasPlus respeta su privacidad. Los datos recopilados (tanto de organizadores como de participantes) se utilizan exclusivamente para el funcionamiento del servicio y no son compartidos con terceros, salvo requerimiento legal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Limitación de Responsabilidad</h2>
                        <p>
                            RifasPlus no será responsable por disputas entre organizadores y participantes, fallas en la entrega de premios, o interrupciones del servicio causadas por fuerza mayor o proveedores externos (ej. caídas de WhatsApp).
                        </p>
                    </section>

                    <div className="pt-8 border-t border-[#2d333b]">
                        <p className="text-sm text-gray-500">
                            Para consultas legales o reportes de abuso, contáctenos en <a href="mailto:legal@rifasplus.com" className="text-[#8b5cf6] hover:underline">legal@rifasplus.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
