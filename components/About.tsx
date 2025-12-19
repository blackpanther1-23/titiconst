
import React from 'react';
import { CheckCircle2, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/building/800/600"
                alt="Echipa la lucru"
                className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-slate-900 rounded-2xl -z-0 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-8 border-orange-500/20 rounded-full -z-0"></div>
            
            <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg flex items-center gap-3">
               <div className="bg-orange-500 p-2 rounded-full">
                 <Award className="text-white" />
               </div>
               <span className="font-bold text-slate-800">Specialiști Certificați</span>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1 mb-4 bg-orange-100 text-orange-600 font-bold rounded-full text-sm uppercase">
              Cine suntem
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Peste un sfert de secol de construcții durabile.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Titiconst este o firmă de construcții din Bacău, cu peste 25 de ani de experiență în execuția de case la roșu, reabilitări, hale industriale și lucrări din beton armat. Realizăm construcții civile și industriale, garduri, platforme și amenajări exterioare — toate executate corect, cu materiale de calitate și oameni dedicați.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Din 1998</h4>
                  <p className="text-sm text-slate-500">Experiență solidă în piața locală din Bacău.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Oameni Dedicați</h4>
                  <p className="text-sm text-slate-500">Echipă de profesioniști orientați către calitate.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8 border-t border-slate-100 pt-8">
              <div>
                <p className="text-4xl font-black text-slate-900">100+</p>
                <p className="text-sm text-slate-500 font-medium">Proiecte Finalizate</p>
              </div>
              <div className="h-12 w-[1px] bg-slate-200"></div>
              <div>
                <p className="text-4xl font-black text-slate-900">25+</p>
                <p className="text-sm text-slate-500 font-medium">Ani de Activitate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
