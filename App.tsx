import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import { CONTENT } from './constants';
import { Language } from './types';

const MainSite: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const currentText = CONTENT[lang];

  return (
    <div className={`min-h-screen bg-white ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
      <Navbar lang={lang} setLang={setLang} text={currentText.nav} />
      <main>
        <Hero text={currentText.hero} lang={lang} />
        <Stats items={currentText.stats} />
        <About text={currentText.about} />
        <Features text={currentText.features} />
        <Services text={currentText.services} />
        <Portfolio text={currentText.portfolio} lang={lang} />
        <Contact text={currentText.contact} />
      </main>
      <Footer text={currentText.footer} navText={currentText.nav} contactText={currentText.contact} lang={lang} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;