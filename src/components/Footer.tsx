
import React from 'react';


import Logo from '../assets/RifasPlus.png';

interface FooterProps {
  navigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-[#0a0a0c] text-white pt-24 pb-12 border-t border-[#2d333b]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div
              className="flex items-center space-x-3 mb-8 cursor-pointer group"
              onClick={() => navigate('home')}
            >
              <img src={Logo} alt="RifasPlus" className="h-12 object-contain" />
            </div>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              La infraestructura digital definitiva para sorteos profesionales en toda Venezuela. Seguridad, velocidad y éxito.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: 'fa-facebook-f', color: 'hover:bg-blue-600', link: 'https://facebook.com' },
                { icon: 'fa-instagram', color: 'hover:bg-pink-600', link: 'https://instagram.com' },
                { icon: 'fa-whatsapp', color: 'hover:bg-green-600', link: 'https://wa.me/584120000000' },
              ].map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 bg-[#181b22] rounded-2xl flex items-center justify-center transition-all duration-300 ${social.color}`}>
                  <i className={`fab ${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 text-[#8b5cf6]">Navegación</h4>
            <ul className="space-y-4 text-gray-400 font-bold">
              <li><button onClick={() => navigate('caracteristicas')} className="hover:text-white transition-colors">Características</button></li>
              <li><button onClick={() => navigate('como-funciona')} className="hover:text-white transition-colors">Cómo Funciona</button></li>
              <li><button onClick={() => navigate('precios')} className="hover:text-white transition-colors">Precios</button></li>
              <li><a href="mailto:soporte@rifasplus.com" className="hover:text-white transition-colors">Ayuda</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-xl font-black mb-8 text-[#8b5cf6]">Recursos</h4>
            <ul className="space-y-4 text-gray-400 font-bold">
              <li><button onClick={() => navigate('casos-de-exito')} className="hover:text-white transition-colors">Historias de Éxito</button></li>
              <li><button onClick={() => navigate('legal')} className="hover:text-white transition-colors">Guía Legal</button></li>
              <li><button onClick={() => navigate('terminos')} className="hover:text-white transition-colors">Términos</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 text-[#fbbf24]">Soporte Directo</h4>
            <p className="text-gray-400 mb-6 font-medium">Únete a nuestra comunidad de organizadores.</p>
            <div className="flex flex-col space-y-4">
              <input type="email" placeholder="Tu email" className="bg-[#181b22] border border-[#2d333b] rounded-2xl px-6 py-4 w-full focus:ring-2 focus:ring-[#8b5cf6] text-white font-bold" />
              <button
                onClick={() => alert('¡Gracias por suscribirte! Te mantendremos informado.')}
                className="bg-[#8b5cf6] hover:bg-[#7c3aed] py-4 rounded-2xl font-black transition-all shadow-xl shadow-purple-500/10"
              >
                Suscribirme
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-[#2d333b] flex flex-col md:flex-row items-center justify-between text-gray-500 font-bold text-sm">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <i className="fas fa-ticket-alt text-[#fbbf24]"></i>
            <p>© {new Date().getFullYear()} Rifas Plus. Desarrollado por Rúbel Maneiro y Sneider Araque</p>
          </div>
          <div className="flex space-x-8">
            <span>Privacidad</span>
            <span>Seguridad</span>
            <span>Cloud Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
