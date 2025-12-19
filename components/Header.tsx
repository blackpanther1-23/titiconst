
import React, { useState } from 'react';
import { Menu, X, Hammer, Phone } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Acasă', href: '#home' },
    { name: 'Despre Noi', href: '#despre' },
    { name: 'Servicii', href: '#servicii' },
    { name: 'Colaboratori', href: '#colaboratori' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-orange-500 p-2 rounded-lg transition-transform group-hover:rotate-12">
            <Hammer className="text-white h-6 w-6" />
          </div>
          <span className="text-white font-bold text-2xl tracking-tighter uppercase font-display">
            Titi<span className="text-orange-500">const</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-200 hover:text-orange-400 font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-md font-bold transition-all transform hover:scale-105 accent-glow flex items-center gap-2"
          >
            <Phone size={18} />
            Cere Ofertă
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 absolute top-full left-0 w-full border-t border-slate-800 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-orange-400 font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-orange-500 text-white p-4 rounded-md font-bold text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Cere Ofertă
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
