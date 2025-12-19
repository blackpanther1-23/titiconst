
import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Collaborators from './components/Collaborators.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import AIConsultant from './components/AIConsultant.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header isScrolled={isScrolled} />
        <main className="flex-grow">
          <section id="home">
            <Hero />
          </section>
          <section id="despre">
            <About />
          </section>
          <section id="servicii">
            <Services />
          </section>
          <section id="colaboratori">
            <Collaborators />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
        <AIConsultant />
      </div>
    </Router>
  );
};

export default App;
