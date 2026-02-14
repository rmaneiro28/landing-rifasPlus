import React from 'react';
import SuccessStories from '../components/SuccessStories';

interface SuccessStoriesPageProps {
    navigate?: (path: string) => void;
}

const SuccessStoriesPage: React.FC<SuccessStoriesPageProps> = ({ navigate }) => {
    return (
        <div className="pt-32 pb-24 bg-[#0e1217] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
                <button
                    onClick={() => navigate?.('inicio')}
                    className="text-[#8b5cf6] font-bold hover:text-white transition-colors mb-8 inline-flex items-center"
                >
                    <i className="fas fa-arrow-left mr-2"></i> Volver al Inicio
                </button>
                <div className="inline-flex items-center space-x-2 py-2 px-5 mb-8 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/20 text-[#ec4899] font-bold text-xs uppercase tracking-widest">
                    <i className="fas fa-heart text-[10px]"></i>
                    <span>Comunidad RifasPlus</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Galería de Éxito</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Historias reales de personas y organizaciones que transformaron sus metas en realidad usando nuestra plataforma.
                </p>
            </div>

            <SuccessStories compact={false} navigate={navigate} />

            <div className="bg-[#181b22] border-t border-[#2d333b] py-24 mt-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-6">¿Listo para escribir tu propia historia?</h2>
                    <p className="text-gray-400 text-lg mb-8">Únete a miles de organizadores que ya confían en RifasPlus.</p>
                    <a href="https://rifasplus.vercel.app" className="inline-block px-10 py-4 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-2xl font-black text-xl transition-all shadow-xl shadow-purple-500/20">
                        Comenzar mi Rifa
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SuccessStoriesPage;
