import React, { useEffect, useState } from 'react';
import { ContentData } from '../types';
import { ArrowUpRight, Loader } from 'lucide-react';

interface PortfolioProps {
  text: ContentData['portfolio'];
  lang: 'ar' | 'en';
}

interface Project {
  id?: number;
  title: string;
  category: string;
  image: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ text, lang }) => {
  const [items, setItems] = useState<Project[]>(text.items);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/projects');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setItems(data);
          }
        }
      } catch (error) {
        console.warn("Could not fetch projects from API, using static data");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-brand-light font-bold tracking-wide uppercase mb-2">{text.title}</h2>
                <h3 className="text-3xl md:text-4xl font-bold">{text.subtitle}</h3>
            </div>
        </div>

        {loading ? (
            <div className="flex justify-center items-center h-64">
                <Loader className="animate-spin text-brand-primary" size={40} />
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, index) => (
                <div key={item.id || index} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {(e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=No+Image'}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-brand-light text-sm font-bold uppercase tracking-wider mb-2">{item.category}</div>
                    <div className="flex justify-between items-end">
                        <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100 hover:bg-white hover:text-brand-dark">
                            <ArrowUpRight size={20} className={lang === 'ar' ? 'rotate-90' : ''} />
                        </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;