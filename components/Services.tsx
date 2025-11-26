import React from 'react';
import { ContentData } from '../types';
import * as Icons from 'lucide-react';

interface ServicesProps {
  text: ContentData['services'];
}

const Services: React.FC<ServicesProps> = ({ text }) => {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
       {/* Background Patterns */}
       <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12">
        <Icons.Hammer size={300} />
       </div>
       <div className="absolute bottom-0 left-0 p-12 opacity-5 -rotate-12">
        <Icons.Truck size={300} />
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase mb-2">{text.title}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{text.subtitle}</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid adjusted for 4 items mainly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {text.items.map((item, index) => {
            // Dynamically get icon component
            const IconComponent = (Icons as any)[item.iconName] || Icons.HardHat;

            return (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col items-center text-center md:items-start md:text-start"
              >
                <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <IconComponent size={36} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;