import React from 'react';
import { Star, ShoppingBag, Eye } from 'lucide-react';

const CommunityEssentials = () => {
  const products = [
    {
      id: 1,
      name: 'OBSIDIAN HEAVYWEIGHT HOODIE',
      category: '900 GSM FLEECE',
      price: '$185',
      rating: '4.9 (480 REVIEWS)',
      status: 'IN STOCK // FAST SHIP',
      statusColor: 'text-emerald-600',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      description: 'Ultra-dense custom woven French terry with double-lined structural drop-hood that maintains form in heavy...',
    },
    {
      id: 2,
      name: 'AEGIS MODULAR CROSSBODY RIG',
      category: 'CORDURA® BALLISTIC',
      price: '$145',
      rating: '5.0 (310 REVIEWS)',
      status: 'LOW STOCK // 14 LEFT',
      statusColor: 'text-amber-600',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      description: 'Equipped with German Fidlock® V-buckles, waterproof YKK Aquaguard zippers, and detachable pouch canisters.',
    },
    {
      id: 3,
      name: 'APEX TAILORED COMMUTER COAT',
      category: '3-LAYER COMPOSITE',
      price: '$340',
      rating: '4.8 (190 REVIEWS)',
      status: 'IN STOCK // FAST SHIP',
      statusColor: 'text-emerald-600',
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80',
      description: 'Sleek trench profile enhanced with taped seams, internal carrying harness, and magnetic throat latches.',
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 font-sans border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-gray-200">
          <div>
            <p className="text-[10px] font-bold tracking-[0.16em] text-blue-600 uppercase mb-1">
              PROVEN METROPOLITAN GEAR
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827] uppercase">
              COMMUNITY ESSENTIALS
            </h2>
          </div>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 px-3.5 py-1.5 rounded-md">
            <div className="flex items-center text-amber-500">
              <Star size={14} fill="currentColor" />
            </div>
            <span className="text-xs font-bold text-gray-800">4.9 / 5.0 RATING</span>
            <span className="text-gray-300">|</span>
            <span className="text-[10px] text-gray-500 uppercase font-semibold">OVER 2,400 VERIFIED OWNERS</span>
          </div>
        </div>

        {/* 3-Column Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item.id} className="group flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-2xs hover:shadow-md transition">
              <div>
                {/* Product Image & Quick View Button */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  />

                  {/* Rating Tag on Image */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-gray-200 px-2.5 py-1 rounded-sm flex items-center gap-1.5">
                    <Star size={12} className="text-amber-500" fill="currentColor" />
                    <span className="text-[10px] font-bold text-gray-800">{item.rating}</span>
                  </div>

                  {/* Quick View Pill */}
                  <button className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-gray-900 text-[10px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-md backdrop-blur-md shadow-sm transition flex items-center gap-1.5">
                    <Eye size={13} />
                    <span>QUICK VIEW</span>
                  </button>
                </div>

                {/* Category & Price */}
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold tracking-[0.12em] text-blue-600 uppercase">
                    {item.category}
                  </span>
                  <span className="font-black text-gray-900 text-sm">
                    {item.price}
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="text-base font-black tracking-tight text-gray-900 uppercase mb-2 group-hover:text-blue-600 transition">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4">
                  {item.description}
                </p>
              </div>

              {/* Footer status & cart button */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className={`text-[10px] font-bold tracking-wider uppercase ${item.statusColor}`}>
                  {item.status}
                </span>

                <button
                  aria-label="Add to cart"
                  className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-[#2563EB] hover:text-white text-gray-800 flex items-center justify-center transition"
                >
                  <ShoppingBag size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommunityEssentials;