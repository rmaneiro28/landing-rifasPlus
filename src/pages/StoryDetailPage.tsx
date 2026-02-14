import React, { useEffect } from 'react';
import { stories } from '../data/stories';

interface StoryDetailPageProps {
    storyId: number;
    navigate: (path: string) => void;
}

const StoryDetailPage: React.FC<StoryDetailPageProps> = ({ storyId, navigate }) => {
    const story = stories.find(s => s.id === storyId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [storyId]);

    if (!story) {
        return (
            <div className="min-h-screen bg-[#0e1217] flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-black mb-4">Historia no encontrada</h2>
                    <button onClick={() => navigate('casos-de-exito')} className="text-[#8b5cf6] hover:underline">
                        Volver a la galería
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#0e1217] min-h-screen pt-32 pb-24">
            {/* Header / Hero */}
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <button
                    onClick={() => navigate('casos-de-exito')}
                    className="text-[#8b5cf6] font-bold hover:text-white transition-colors mb-8 inline-flex items-center"
                >
                    <i className="fas fa-arrow-left mr-2"></i> Volver a Historias
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className={`inline-block px-4 py-2 rounded-lg ${story.color.replace('bg-', 'bg-')}/20 border ${story.color.replace('bg-', 'border-')}/30 text-white font-bold mb-6`}>
                            Caso de Éxito
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                            {story.title}
                        </h1>
                        <p className="text-2xl text-gray-300 font-medium leading-relaxed mb-8">
                            "{story.quote}"
                        </p>

                        <div className="flex items-center mb-8 bg-[#181b22] p-4 rounded-2xl border border-[#2d333b] inline-flex">
                            <img src={story.avatar} alt={story.name} className="w-14 h-14 rounded-full mr-4 border-2 border-[#8b5cf6]" />
                            <div>
                                <h4 className="text-white font-bold text-lg">{story.name}</h4>
                                <p className="text-gray-500 text-sm">{story.role}</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className={`absolute inset-0 ${story.color} rounded-[3rem] rotate-3 opacity-20 blur-2xl`}></div>
                        <img
                            src={story.image}
                            alt={story.title}
                            className="relative rounded-[3rem] shadow-2xl border-4 border-[#181b22] w-full object-cover"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-[#181b22] p-6 rounded-2xl border border-[#2d333b] shadow-xl">
                            <p className="text-gray-400 text-sm uppercase font-bold mb-1">Total Recaudado</p>
                            <p className="text-4xl font-black text-[#fbbf24]">{story.raised}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-[#181b22] border border-[#2d333b] rounded-[2.5rem] p-8 md:p-12 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h3 className="text-2xl font-black text-white mb-4 flex items-center">
                                <i className="fas fa-exclamation-circle text-red-500 mr-3"></i> El Desafío
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {story.challenge || story.description}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white mb-4 flex items-center">
                                <i className="fas fa-check-circle text-green-500 mr-3"></i> La Solución
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {story.solution || "Gracias a RifasPlus, pudieron automatizar el proceso y alcanzar sus objetivos."}
                            </p>
                        </div>
                    </div>

                    {story.stats.length > 0 && (
                        <div className="border-t border-[#2d333b] pt-12">
                            <h3 className="text-xl font-bold text-center text-white mb-8">Resultados Clave</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {story.stats.map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className={`text-3xl font-black text-white mb-1`}>{stat.value}</div>
                                        <div className="text-sm text-gray-500 font-bold uppercase">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-[#8b5cf6]/10 to-[#ec4899]/10 rounded-[2.5rem] p-12 border border-[#8b5cf6]/30">
                    <h2 className="text-3xl font-bold text-white mb-6">¿Quieres resultados como estos?</h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                        No importa si eres una fundación, una escuela o un emprendedor. RifasPlus tiene las herramientas para ti.
                    </p>
                    <a
                        href="https://rifasplus.vercel.app"
                        className="inline-block px-8 py-4 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-xl font-black text-lg transition-all shadow-lg shadow-purple-500/20"
                    >
                        Comenzar Ahora
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StoryDetailPage;
