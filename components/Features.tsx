import React from 'react';
import { ContentData } from '../types';
import * as Icons from 'lucide-react';

interface FeaturesProps {
  text: ContentData['features'];
}

const Features: React.FC<FeaturesProps> = ({ text }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase mb-3">{text.title}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{text.subtitle}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {text.items.map((item, index) => {
            const IconComponent = (Icons as any)[item.iconName] || Icons.Check;
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-white text-brand-primary rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <IconComponent size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
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

export default Features;