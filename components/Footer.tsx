
import React from 'react';
import { Hammer, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-500 p-1.5 rounded-lg">
                <Hammer className="text-white h-5 w-5" />
              </div>
              <span className="text-white font-bold text-xl uppercase tracking-tighter">
                Titi<span className="text-orange-500">const</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Lideri în construcții de peste 25 de ani în regiunea Bacău. Expertiza noastră este fundația pe care îți poți clădi viitorul.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6 text-sm tracking-widest">Link-uri Rapide</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-orange-400 transition-colors">Acasă</a></li>
              <li><a href="#despre" className="hover:text-orange-400 transition-colors">Despre Noi</a></li>
              <li><a href="#servicii" className="hover:text-orange-400 transition-colors">Servicii</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Cere Ofertă</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6 text-sm tracking-widest">Informații</h4>
            <ul className="space-y-4 text-sm">
              <li>Strada Militari nr. 35A,</li>
              <li>Birou 1–2, Etaj P,</li>
              <li>Bacău, 600233</li>
              <li>CUI: ROxxxxxxxx</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6 text-sm tracking-widest">Abonare Noutăți</h4>
            <p className="text-sm mb-4">Primește cele mai noi proiecte și sfaturi de construcție.</p>
            <form className="flex" onClick={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Emailul tău"
                className="bg-slate-800 border-none rounded-l-lg px-4 py-2 text-sm w-full outline-none focus:ring-1 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-lg font-bold text-sm transition-colors">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Titiconst. Toate drepturile rezervate.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Politică de Confidențialitate</a>
            <a href="#" className="hover:text-white transition-colors">Termeni și Condiții</a>
            <a href="#" className="hover:text-white transition-colors">ANPC</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
