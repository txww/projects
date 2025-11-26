import React from 'react';
import { ContentData } from '../types';
import { Target, Eye, Users } from 'lucide-react';

interface AboutProps {
  text: ContentData['about'];
}

const About: React.FC<AboutProps> = ({ text }) => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[30%] bg-brand-light/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[5%] w-[20%] h-[20%] bg-brand-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-bold mb-4">
            {text.title}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            {text.slogan}
          </h2>
        </div>

        {/* Vision, Mission, Who We Are Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Who We Are */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-primary hover:shadow-2xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-brand-light/20 text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <Users size={30} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{text.whoWeAreTitle}</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              {text.whoWeAreText}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-accent hover:shadow-2xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-brand-accent/20 text-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <Eye size={30} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{text.visionTitle}</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              {text.visionText}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-blue hover:shadow-2xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-brand-blue/20 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Target size={30} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{text.missionTitle}</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              {text.missionText}
            </p>
          </div>

        </div>

        {/* Bottom Image Banner */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-xl h-64 md:h-80 relative">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
            alt="Engineering Plans" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent flex items-end p-8">
            <p className="text-white text-lg md:text-xl font-medium opacity-90 max-w-2xl">
              P.C.C. - بلوميريا للتعهدات والمقاولات
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;