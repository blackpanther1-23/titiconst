
import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/construction/1920/1080"
          alt="Construcție industrială"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70 backdrop-brightness-75"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1 mb-6 border-l-4 border-orange-500 bg-slate-800/50 text-orange-400 font-semibold tracking-wider uppercase text-sm animate-in slide-in-from-left duration-700">
            Firma de construcții Bacău
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-in slide-in-from-bottom duration-700 delay-100">
            Titiconst – Construim cu responsabilitate din 1998.
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed animate-in slide-in-from-bottom duration-700 delay-200">
            Peste 25 de ani de experiență în construcții civile, industriale și reabilitări în Bacău. 
            Nu promitem mai mult decât putem face, dar facem tot ce promitem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom duration-700 delay-300">
            <a
              href="#servicii"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:translate-x-1"
            >
              Vezi Serviciile Noastre
              <ChevronRight size={20} />
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center"
            >
              Contactează-ne
            </a>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0 bg-white p-6 rounded-xl shadow-2xl flex items-center gap-4 animate-bounce">
        <div className="text-orange-500 font-extrabold text-4xl">25+</div>
        <div className="text-slate-800 font-bold leading-tight">
          Ani de<br />Excelență
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-pulse hidden md:block">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
