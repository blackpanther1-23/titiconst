
import React from 'react';
import { Home, Factory, HardHat, Fence, PencilRuler, Construction } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Construcții Civile și Industriale',
      desc: 'Case la roșu, hale și structuri metalice proiectate pentru durabilitate maximă.',
      icon: <Home className="w-10 h-10" />,
    },
    {
      title: 'Reabilitări și Renovări',
      desc: 'Modernizarea clădirilor existente folosind soluții tehnice de ultimă oră.',
      icon: <Construction className="w-10 h-10" />,
    },
    {
      title: 'Lucrări de Beton și Fundații',
      desc: 'Expertiză în beton armat și platforme rezistente pentru orice tip de sarcină.',
      icon: <Factory className="w-10 h-10" />,
    },
    {
      title: 'Amenajări Exterioare',
      desc: 'Garduri, pavaje și platforme care îmbină estetica cu funcționalitatea industrială.',
      icon: <Fence className="w-10 h-10" />,
    },
    {
      title: 'Consultanță și Ofertare',
      desc: 'Suport tehnic specializat și devize corecte pentru controlul bugetului.',
      icon: <PencilRuler className="w-10 h-10" />,
    },
    {
      title: 'Management de Șantier',
      desc: 'Supervizare atentă și respectarea termenelor de execuție promise.',
      icon: <HardHat className="w-10 h-10" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Serviciile Noastre
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Oferim soluții complete de construcții, de la fundație până la finisaje, adaptate nevoilor tale specifice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-orange-500 hover:shadow-xl transition-all group"
            >
              <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
