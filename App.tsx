
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Collaborators from './components/Collaborators';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';

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
