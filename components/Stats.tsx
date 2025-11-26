import React from 'react';
import { ContentData } from '../types';
import * as Icons from 'lucide-react';

interface StatsProps {
  items: ContentData['stats'];
}

const Stats: React.FC<StatsProps> = ({ items }) => {
  return (
    <div className="bg-brand-primary text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark/10 pattern-grid-lg opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10 rtl:divide-x-reverse">
          {items.map((item, index) => {
             const IconComponent = (Icons as any)[item.iconName] || Icons.Star;
             return (
              <div key={index} className="p-4 group">
                <div className="flex justify-center mb-4 text-brand-light opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <IconComponent size={40} />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 font-inter tracking-tight">{item.value}</div>
                <div className="text-sm md:text-base font-medium text-brand-light/90 uppercase tracking-wider">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;