import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState('ALL DROP');

  const tabs = ['ALL DROP', 'OUTERWEAR', 'BOTTOMS', 'FOOTWEAR'];

  const products = [
    {
      id: 1,
      name: 'Vektor Asymmetric Shell Parka',
      category: 'OUTERWEAR',
      badge: 'NEW DROP',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
      colors: ['#111827', '#4B5563', '#2563EB'],
    },
    {
      id: 2,
      name: 'Kuro Wide-Leg Pleated Cargo',
      category: 'BOTTOMS',
      badge: null,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
      colors: ['#111827', '#9CA3AF'],
    },
    {
      id: 3,
      name: 'Tactical Ribbed Zip Knit',
      category: 'OUTERWEAR',
      badge: null,
      image: 'https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&w=800&q=80',
      colors: ['#1F2937', '#D1D5DB'],
    },
    {
      id: 4,
      name: 'Monolith Lug-Sole Boot',
      category: 'FOOTWEAR',
      badge: null,
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80',
      colors: ['#111827'],
    },
  ];

  const filteredProducts =
    activeTab === 'ALL DROP'
      ? products
      : products.filter((item) => item.category === activeTab);

  return (
    <section className="w-full bg-white py-14 lg:py-20 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header + Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[10px] font-bold tracking-[0.16em] text-blue-600 uppercase mb-1">
              FRESH ARTIFACTS
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827] uppercase">
              NEW ARRIVALS // DROP 08
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[10px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full transition ${
                  activeTab === tab
                    ? 'bg-[#2563EB] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col">
              {/* Product Image Container */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-gray-100 mb-3.5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />

                {/* Top Left Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#2563EB] text-white text-[9px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                    {product.badge}
                  </span>
                )}

                {/* Top Right Wishlist Button */}
                <button
                  aria-label="Add to wishlist"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:text-red-500 transition shadow-2xs"
                >
                  <Heart size={15} />
                </button>
              </div>

              {/* Product Title */}
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-blue-600 transition mb-2">
                {product.name}
              </h3>

              {/* Color Swatches */}
              <div className="flex items-center gap-1.5">
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    style={{ backgroundColor: color }}
                    className={`w-2.5 h-2.5 rounded-full border border-gray-300 ${
                      idx === 0 ? 'ring-1 ring-offset-1 ring-gray-800' : ''
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewArrivals;