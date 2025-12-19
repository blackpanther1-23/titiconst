
import React from 'react';

const Collaborators: React.FC = () => {
  const partners = [
    'Primăria Bacău',
    'Glencora',
    'Demeco',
    'Colegiul Național „Vasile Alecsandri”',
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-slate-400">
            Parteneri și Colaboratori de Încredere
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-xl md:text-2xl font-bold text-slate-300 opacity-60 hover:opacity-100 transition-opacity cursor-default hover:text-orange-400"
            >
              {partner}
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-slate-800 rounded-2xl border border-slate-700 max-w-4xl mx-auto text-center">
          <p className="text-xl italic text-slate-300 leading-relaxed">
            "Am colaborat cu Titiconst pentru multiple proiecte de infrastructură și reabilitare. Profesionalismul lor și respectarea termenelor limită i-au făcut partenerii noștri preferați de-a lungul anilor."
          </p>
          <div className="mt-6 font-bold text-orange-500">— Reprezentant Partener Strategic</div>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
