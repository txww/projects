import React from 'react';
import { ContentData } from '../types';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight, ArrowLeft } from 'lucide-react';

interface FooterProps {
  text: ContentData['footer'];
  navText: ContentData['nav'];
  contactText: ContentData['contact'];
  lang: 'ar' | 'en';
}

const Footer: React.FC<FooterProps> = ({ text, navText, contactText, lang }) => {
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;
  
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
                 <div className="text-3xl font-bold font-inter bg-gradient-to-r from-brand-light to-brand-primary bg-clip-text text-transparent">
                    PCC
                 </div>
                 <span className="text-xl font-bold tracking-tight">Plumeria</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              {text.aboutText}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-primary flex items-center justify-center transition-all duration-300"><Facebook size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-primary flex items-center justify-center transition-all duration-300"><Instagram size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-primary flex items-center justify-center transition-all duration-300"><Linkedin size={18}/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">{text.linksTitle}</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollTo('home')} className="text-gray-400 hover:text-brand-light transition-colors flex items-center gap-2 group"><Arrow size={14} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"/>{navText.home}</button></li>
              <li><button onClick={() => scrollTo('about')} className="text-gray-400 hover:text-brand-light transition-colors flex items-center gap-2 group"><Arrow size={14} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"/>{navText.about}</button></li>
              <li><button onClick={() => scrollTo('services')} className="text-gray-400 hover:text-brand-light transition-colors flex items-center gap-2 group"><Arrow size={14} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"/>{navText.services}</button></li>
              <li><button onClick={() => scrollTo('projects')} className="text-gray-400 hover:text-brand-light transition-colors flex items-center gap-2 group"><Arrow size={14} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"/>{navText.projects}</button></li>
              <li><button onClick={() => scrollTo('contact')} className="text-gray-400 hover:text-brand-light transition-colors flex items-center gap-2 group"><Arrow size={14} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"/>{navText.contact}</button></li>
            </ul>
          </div>

          {/* Services Quick View (Using nav logic mostly or static) */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">{navText.services}</h4>
             <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Building Construction</li>
                <li className="hover:text-white transition-colors cursor-pointer">Road Paving</li>
                <li className="hover:text-white transition-colors cursor-pointer">Excavation & Demolition</li>
                <li className="hover:text-white transition-colors cursor-pointer">Material Supply</li>
             </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">{text.contactTitle}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-brand-primary mt-1 flex-shrink-0" />
                <span>{contactText.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="text-brand-primary flex-shrink-0" />
                <span className="dir-ltr">{contactText.phones[0]}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="text-brand-primary flex-shrink-0" />
                <span>info@1plumeria.com</span>
                <span>salse@1plumeria.com</span>
                <span>sppurte@1plumeria.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-start text-gray-500 text-sm">
          <p>{text.rights}</p>
          <div className="flex gap-4 justify-center md:justify-end mt-4 md:mt-0">
             <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
             <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;