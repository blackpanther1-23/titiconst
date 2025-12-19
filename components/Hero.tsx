
import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Fundal Imagine - Fără opacitate 0 pentru a asigura vizibilitatea imediată */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
          alt="Șantier Titiconst"
          className="w-full h-full object-cover"
        />
        {/* Overlay întunecat pentru lizibilitate */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-brightness-75"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1 mb-6 border-l-4 border-orange-500 bg-slate-900/80 text-orange-400 font-semibold tracking-wider uppercase text-sm animate-in slide-in-from-left duration-700">
            Firma de construcții Bacău
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl animate-in slide-in-from-bottom duration-700 delay-100">
            Titiconst – Construim cu responsabilitate din 1998.
          </h1>
          <p className="text-lg md:text-2xl text-slate-100 mb-10 max-w-2xl leading-relaxed drop-shadow-lg animate-in slide-in-from-bottom duration-700 delay-200 font-medium">
            Peste 25 de ani de experiență în construcții civile, industriale și reabilitări în Bacău. 
            Nu promitem mai mult decât putem face, dar facem tot ce promitem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom duration-700 delay-300">
            <a
              href="#servicii"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-2xl"
            >
              Vezi Serviciile Noastre
              <ChevronRight size={20} />
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-md border-2 border-white/40 hover:border-white hover:bg-white/20 text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center"
            >
              Contactează-ne
            </a>
          </div>
        </div>
      </div>

      {/* Insignă Aniversară */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0 bg-white p-6 rounded-xl shadow-2xl flex items-center gap-4 animate-bounce z-20">
        <div className="text-orange-500 font-extrabold text-4xl">25+</div>
        <div className="text-slate-800 font-bold leading-tight uppercase text-xs tracking-tighter">
          Ani de<br />Experiență
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-pulse hidden md:block z-20">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
