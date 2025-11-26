import React, { useState, useEffect } from 'react';
import { Language, ContentData } from '../types';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  text: ContentData['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center gap-2">
                {/* Logo text adapts color based on background/scroll state */}
                <span className={`text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-primary bg-clip-text text-transparent ${lang === 'ar' ? 'font-cairo' : 'font-inter'} ${!scrolled && 'md:text-white md:from-white md:to-white'}`}>
                    {lang === 'ar' ? 'بلوميريا' : 'Plumeria'}
                </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
                <button 
                    key={item}
                    onClick={() => scrollToSection(item)} 
                    className={`transition-colors font-medium text-sm lg:text-base ${scrolled ? 'text-gray-600 hover:text-brand-primary' : 'text-white/90 hover:text-white'}`}
                >
                    {text[item as keyof typeof text]}
                </button>
            ))}
            
            <button 
                onClick={() => scrollToSection('contact')}
                className={`px-5 py-2 rounded-full transition-all duration-300 shadow-lg font-medium text-sm ${scrolled ? 'bg-brand-blue hover:bg-brand-primary text-white shadow-brand-blue/20' : 'bg-white text-brand-blue hover:bg-gray-100'}`}
            >
              {text.quote}
            </button>

            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className={`flex items-center gap-1 transition-colors ${scrolled ? 'text-gray-500 hover:text-brand-primary' : 'text-white/80 hover:text-white'}`}
            >
              <Globe size={18} />
              <span className="uppercase text-sm font-semibold">{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className={`${scrolled ? 'text-gray-500' : 'text-white'}`}
            >
              <span className="uppercase text-sm font-bold">{lang === 'ar' ? 'En' : 'ع'}</span>
            </button>
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${scrolled ? 'text-gray-600 hover:text-brand-primary' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out absolute w-full left-0 ${isOpen ? 'max-h-[500px] opacity-100 shadow-xl' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3 flex flex-col">
            {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
                <button 
                    key={item}
                    onClick={() => scrollToSection(item)} 
                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 rounded-md text-start border-b border-gray-50 last:border-0"
                >
                    {text[item as keyof typeof text]}
                </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="w-full mt-4 bg-brand-blue text-white px-5 py-3 rounded-lg font-medium text-center shadow-md">{text.quote}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;