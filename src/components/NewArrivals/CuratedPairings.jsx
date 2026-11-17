import React from 'react';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';

const CuratedPairings = () => {
  const pairingItems = [
    {
      id: 1,
      name: 'AERO MODULAR CARGO TROUSER',
      category: 'PARTS // SS25',
      price: '$220',
      tag: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'STRATA HYPER-TRACTION SHOE',
      category: 'FOOTWEAR // LAB',
      price: '$295',
      tag: 'LIMITED DROP',
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'ECHO DISTORTION HEAVY TEE',
      category: 'TOPS // 900GSM',
      price: '$95',
      tag: 'ORGANIC COTTON',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      name: 'VECTOR MODULAR HOLSTER SLING',
      category: 'ACCESSORIES // GEAR',
      price: '$140',
      tag: 'FIDLOCK® SPEC',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20 border-t border-gray-200 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-gray-200">
          <div>
            <p className="text-[10px] font-bold tracking-[0.16em] text-blue-600 uppercase mb-1">
              TACTICAL ENSEMBLE // COMPLETE THE DROP
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827] uppercase">
              CURATED PAIRINGS
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button aria-label="Previous items" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition">
              <ArrowLeft size={16} />
            </button>
            <button aria-label="Next items" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 4-Column Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pairingItems.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-4 shadow-2xs hover:shadow-md transition">
              <div>
                {/* Product Image */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-gray-100 mb-3.5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  />

                  {/* Top Badge */}
                  <span className="absolute top-3 left-3 bg-[#111827] text-white text-[9px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                    {item.tag}
                  </span>
                </div>

                <span className="text-[10px] font-bold tracking-[0.12em] text-blue-600 uppercase block mb-1">
                  {item.category}
                </span>

                <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-blue-600 transition mb-2">
                  {item.name}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm font-black text-gray-900">{item.price}</span>
                <button aria-label="Add item" className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-800 flex items-center justify-center transition">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CuratedPairings;