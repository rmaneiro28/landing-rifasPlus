import React from 'react';
import { stories } from '../data/stories';

interface SuccessStoriesProps {
    compact?: boolean;
    navigate?: (path: string) => void;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ compact = false, navigate }) => {
    // Show only first 2 items if compact
    const visibleStories = compact ? stories.slice(0, 2) : stories;

    return (
        <section className={`py-24 ${compact ? 'bg-[#111827]' : 'bg-[#0e1217]'} overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <span className="text-[#8b5cf6] font-black tracking-widest uppercase text-sm mb-2 block">Casos Reales</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ellos ya alcanzaron su meta</h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">Estas son algunas de las miles de historias de éxito impulsadas por nuestra tecnología.</p>
                </div>

                <div className="space-y-24">
                    {visibleStories.map((story, index) => (
                        <div key={story.id} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'flex-row-reverse md:flex-row-reverse' : ''}`}>
                            <div className={`relative group ${index % 2 !== 0 ? 'order-1 md:order-2' : ''} cursor-pointer`} onClick={() => navigate?.(`caso/${story.id}`)}>
                                <div className={`absolute inset-0 ${story.color} rounded-[2.5rem] ${index % 2 !== 0 ? '-rotate-3' : 'rotate-3'} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`}></div>
                                <img
                                    src={story.image}
                                    alt={`Caso de Éxito - ${story.title}`}
                                    className="relative rounded-[2.5rem] shadow-2xl w-full h-96 object-cover border-4 border-[#181b22] transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                                <div className="absolute bottom-8 left-8 right-8 bg-[#181b22]/90 backdrop-blur-md p-6 rounded-2xl border border-[#2d333b]">
                                    <p className="text-[#fbbf24] font-black text-sm uppercase tracking-wider mb-1">Recaudado: {story.raised}</p>
                                    <h3 className="text-white font-bold text-xl">{story.title}</h3>
                                </div>
                            </div>
                            <div className={`${index % 2 !== 0 ? 'order-2 md:order-1' : ''}`}>
                                <div className="flex items-center mb-6">
                                    <img src={story.avatar} alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-[#8b5cf6]" />
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{story.name}</h4>
                                        <p className="text-gray-500 text-sm">{story.role}</p>
                                    </div>
                                </div>
                                <h3 className="text-3xl font-black text-white mb-6 leading-tight">"{story.quote}"</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    "{story.description}"
                                </p>
                                {story.stats.length > 0 && (
                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        {story.stats.map((stat, i) => (
                                            <div key={i} className={`bg-[#181b22] p-4 rounded-xl border-l-4 ${stat.color}`}>
                                                <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                                                <p className="text-gray-500 text-sm">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <button
                                    onClick={() => navigate?.(`caso/${story.id}`)}
                                    className="text-[#8b5cf6] font-bold text-lg hover:text-white transition-colors flex items-center group/btn"
                                >
                                    Leer historia completa
                                    <i className="fas fa-arrow-right ml-2 transform group-hover/btn:translate-x-1 transition-transform"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {compact && navigate && (
                    <div className="text-center mt-20">
                        <button
                            onClick={() => navigate('casos-de-exito')}
                            className="inline-flex items-center space-x-2 text-white bg-[#2d333b] hover:bg-[#374151] font-bold text-lg py-4 px-8 rounded-xl transition-all"
                        >
                            <span>Ver más historias de éxito</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SuccessStories;
