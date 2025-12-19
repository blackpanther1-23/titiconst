
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase">
              Hai să construim împreună
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Fie că ai un proiect mic sau o investiție industrială majoră, echipa Titiconst este gata să îți ofere expertiza necesară. Completează formularul sau contactează-ne direct.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="bg-orange-100 p-4 rounded-full text-orange-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Telefon</p>
                  <p className="text-xl font-bold text-slate-900">0740807947</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-orange-100 p-4 rounded-full text-orange-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-xl font-bold text-slate-900">titiconst@yahoo.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-orange-100 p-4 rounded-full text-orange-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Adresă</p>
                  <p className="text-xl font-bold text-slate-900">Strada Militari nr. 35A, Bacău</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-orange-100 p-4 rounded-full text-orange-600">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Program</p>
                  <p className="text-xl font-bold text-slate-900">Luni - Vineri: 08:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl shadow-inner border border-slate-200">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase">Nume Complet</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="Popescu Ion"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase">Telefon</label>
                    <input
                      type="tel"
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="07xx xxx xxx"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase">Subiect</label>
                  <select className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none">
                    <option>Construcție Casă</option>
                    <option>Hală Industrială</option>
                    <option>Renovare / Reabilitare</option>
                    <option>Lucrări Beton</option>
                    <option>Altceva</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase">Mesaj / Detalii Proiect</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Descrieți scurt ce doriți să construim..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg"
                  onClick={(e) => e.preventDefault()}
                >
                  <Send size={20} />
                  Trimite Cererea de Ofertă
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
