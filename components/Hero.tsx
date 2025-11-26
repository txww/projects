import React from 'react';
import { ContentData } from '../types';
import { ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';

interface HeroProps {
  text: ContentData['hero'];
  lang: 'ar' | 'en';
}

const Hero: React.FC<HeroProps> = ({ text, lang }) => {
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Construction" 
          className="w-full h-full object-cover animate-pan-slow"
        />
        {/* Advanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-blue/80 to-brand-primary/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
           {/* Badge */}
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-brand-light rounded-full animate-pulse"></span>
              <span className="text-white text-sm font-medium tracking-wide uppercase">P.C.C Construction</span>
           </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl animate-fade-in-up delay-100">
            {text.headline}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-12 leading-relaxed font-light max-w-2xl animate-fade-in-up delay-200 border-l-4 border-brand-light pl-6 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-6">
            {text.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-300">
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="bg-brand-primary hover:bg-brand-blue text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:-translate-y-1">
              {text.cta}
              <Arrow size={20} />
            </button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:-translate-y-1">
              {text.learnMore}
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} className="opacity-70" />
      </div>
    </section>
  );
};

export default Hero;