import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Categories = () => {
  const categoriesList = [
    {
      title: "MEN'S OUTERWEAR & HEAVY KNITS",
      subtitle: "CURATED DIVISIONS",
      description: "Engineered with storm-proof membrane shells, bonded wool, and thermal insulating layers built for harsh urban environments.",
      image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=1000&q=80",
      // الكارت الأول عريض (7 أعمدة من 12)
      gridClasses: "lg:col-span-7 h-[380px] lg:h-[460px]",
    },
    {
      title: "WOMEN'S UTILITY & TAILORING",
      subtitle: "ARCHITECTURAL FIT",
      description: "Precision-cut silhouettes featuring modular structural elements and weather-resistant performance fabrics.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      // الكارت الثاني أضيق (5 أعمدة من 12)
      gridClasses: "lg:col-span-5 h-[380px] lg:h-[460px]",
    },
    {
      title: "FOOTWEAR & LUG BOOTS",
      subtitle: "ALL-WEATHER TRACTION",
      description: "Hand-crafted rugged boots built with waterproof full-grain leathers and reinforced Vibram lug outsoles.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      // الكارت الثالث أضيق (5 أعمدة من 12)
      gridClasses: "lg:col-span-5 h-[380px] lg:h-[418px]",
    },
    {
      title: "ACCESSORIES & MODULAR BAGS",
      subtitle: "TECHNICAL GEAR",
      description: "Versatile tactical backpacks, magnetic chest rigs, and weather-sealed utility components.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80",
      // الكارت الرابع عريض (7 أعمدة من 12)
      gridClasses: "lg:col-span-7 h-[380px] lg:h-[418px]",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-gray-200">
          <div>
            <p className="text-[11px] font-bold tracking-[0.16em] text-blue-600 uppercase mb-1">
              CURATED DIVISIONS
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827] uppercase">
              CATEGORIES & MODULES
            </h2>
          </div>
          
          <a
            href="#all-categories"
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.1em] text-gray-800 hover:text-blue-600 uppercase transition"
          >
            <span>VIEW ALL SILHOUETTES</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* 12-Column Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {categoriesList.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between p-6 sm:p-8 bg-gray-900 ${item.gridClasses}`}
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700 ease-out opacity-85"
                />
                {/* Dark Gradient Overlay matching Figma (#000000 85% -> 40% -> 0%) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
              </div>

              {/* Top Tag & Action Circle */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.12em] text-white bg-blue-600/90 backdrop-blur-md px-2.5 py-1 rounded-sm uppercase">
                  {item.subtitle}
                </span>

                <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 max-w-md">
                <h3 className="text-lg sm:text-xl font-black tracking-tight text-white uppercase mb-1.5 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;