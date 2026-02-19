import React from 'react';
import LogoJocar from '../assets/logo-jocar.png';
import LogoMeza from '../assets/Logo Rifas Meza Cars.png';

const TrustedBy: React.FC = () => {
    return (
        <section className="py-10 bg-[#0e1217] border-b border-[#1f2937]">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                    Marcas que crecen con Rifas Plus
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    {/* Rifas JoCar */}
                    <div className="group flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 cursor-pointer">
                        <img
                            src={LogoJocar}
                            alt="Rifas JoCar"
                            className="h-20 w-auto object-contain drop-shadow-lg"
                        />
                    </div>

                    {/* Divider for mobile/desktop */}
                    <div className="hidden md:block w-px h-12 bg-[#2d333b]"></div>

                    {/* Rifas Meza Cars */}
                    <div className="group flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 cursor-pointer">
                        <img
                            src={LogoMeza}
                            alt="Rifas Meza Cars"
                            className="h-24 w-auto object-contain drop-shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
