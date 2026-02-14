
import React, { useState } from 'react';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}


import Logo from '../assets/RifasPlus.png';

const Header: React.FC<HeaderProps> = ({ currentPath, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Características', path: 'caracteristicas' },
    { label: 'Cómo Funciona', path: 'como-funciona' },
    { label: 'Precios', path: 'precios' },
  ];

  const handleNav = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0e1217]/80 backdrop-blur-xl border-b border-[#2d333b]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => handleNav('inicio')}
        >
          <img src={Logo} alt="RifasPlus" className="h-12 object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <button
              key={item.path}
              onClick={() => handleNav(item.path)}
              className={`text-sm font-semibold transition tracking-wide ${currentPath === item.path ? 'text-[#8b5cf6]' : 'text-gray-400 hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
          <a href="https://rifasplus.vercel.app" className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-6 py-2.5 rounded-xl text-sm font-bold transition shadow-lg shadow-purple-500/20 active:scale-95">
            Iniciar Sesión
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#181b22] border-t border-[#2d333b] p-4 space-y-4 shadow-2xl animate-fadeIn">
          {navItems.map(item => (
            <button
              key={item.path}
              onClick={() => handleNav(item.path)}
              className={`block w-full text-left font-bold p-3 rounded-xl transition ${currentPath === item.path ? 'bg-purple-500/10 text-[#8b5cf6]' : 'text-gray-400 hover:bg-white/5'}`}
            >
              {item.label}
            </button>
          ))}
          <a href="https://rifasplus.vercel.app" className="block bg-[#8b5cf6] text-white px-6 py-4 rounded-2xl text-center font-black shadow-xl shadow-purple-500/20">
            Comenzar Ahora
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
