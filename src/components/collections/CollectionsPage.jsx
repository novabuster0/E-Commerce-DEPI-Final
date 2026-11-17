import React, { useState } from 'react';
import { Heart, SlidersHorizontal, ChevronRight, ChevronDown } from 'lucide-react';

const CollectionsPage = () => {
  const [priceRange, setPriceRange] = useState({ min: 50, max: 880 });

  const products = [
    {
      id: 1,
      name: 'VORTEX TECHNICAL STORM PARKA',
      category: 'OUTERWEAR',
      price: '$480',
      tag: 'NEW DROP',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
      colors: ['#111827', '#4B5563'],
    },
    {
      id: 2,
      name: 'MONOLITH HEAVYWEIGHT HOODIE (900GSM)',
      category: 'TOPS & HOODIES',
      price: '$220',
      tag: 'LIMITED DROP',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      colors: ['#1F2937', '#9CA3AF'],
    },
    {
      id: 3,
      name: 'ACROBAT ARTICULATED CARGO PANT',
      category: 'PANTS & CARGO',
      price: '$310',
      tag: 'MODULAR RIG',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
      colors: ['#374151', '#111827'],
    },
    {
      id: 4,
      name: 'CYBER - 01 READ ALL-TERRAIN RUNNER',
      category: 'FOOTWEAR',
      price: '$360',
      tag: 'NEW DROP',
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80',
      colors: ['#111827', '#84CC16'],
    },
    {
      id: 5,
      name: 'STEALTH ASYMMETRIC FLIGHT JACKET',
      category: 'OUTERWEAR',
      price: '$345',
      originalPrice: '$495',
      tag: 'SALE - 25%',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
      colors: ['#111827'],
    },
    {
      id: 6,
      name: 'SUB-ORBITAL BALLISTIC MODULAR SLING',
      category: 'ACCESSORIES',
      price: '$185',
      tag: 'ESSENTIAL RIG',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      colors: ['#111827', '#D1D5DB'],
    },
    {
      id: 7,
      name: 'ABCHIVIAL NOCTURNE STORM OVERCOAT',
      category: 'OUTERWEAR',
      price: '$620',
      tag: 'LIMITED EDITION',
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80',
      colors: ['#111827', '#4B5563'],
    },
    {
      id: 8,
      name: 'AERO-TACTICAL UTILITY HARNESS VEST',
      category: 'ACCESSORIES',
      price: '$290',
      tag: 'MODULAR GEAR',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      colors: ['#111827', '#1F2937'],
    },
  ];

  return (
    <div className="w-full bg-white font-sans">
      
      {/* Top Banner & Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-8 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-500 uppercase font-medium mb-3">
            <a href="/" className="hover:text-black">Home</a>
            <ChevronRight size={12} className="text-gray-400" />
            <a href="#collections" className="hover:text-black">Collections</a>
            <ChevronRight size={12} className="text-gray-400" />
            <span className="text-gray-900 font-bold">Autumn - Winter Technical 2025</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold tracking-[0.16em] text-blue-600 uppercase mb-1">
                // DROP 04 // NOCTURNAL CAPSULE
              </p>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111827] uppercase">
                ALL COLLECTIONS <span className="text-gray-400 font-light text-xl">(84 ITEMS)</span>
              </h1>
            </div>
            <p className="text-xs text-gray-600 max-w-md">
              Engineered modular silhouettes, 3L waterproof membranes, and heavy tactile knits structured for subterranean metropolitan climate resilience.
            </p>
          </div>

          {/* Active Tags Bar */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-gray-200 text-xs">
            <span className="text-gray-400 uppercase font-bold text-[10px]">Active Refinements:</span>
            <span className="bg-white border border-gray-200 px-3 py-1 rounded-md text-gray-800 font-medium flex items-center gap-1">
              Outerwear <span className="text-gray-400 cursor-pointer">×</span>
            </span>
            <span className="bg-white border border-gray-200 px-3 py-1 rounded-md text-gray-800 font-medium flex items-center gap-1">
              Black <span className="text-gray-400 cursor-pointer">×</span>
            </span>
            <button className="text-blue-600 font-bold tracking-wider uppercase text-[10px] ml-2 hover:underline">
              Clear All
            </button>
            <span className="ml-auto text-[10px] text-gray-400 uppercase font-bold">
              Archival Batch: 925-REV3
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Layout (Sidebar Filters + Products Grid) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Sidebar Filters */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Filters Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={16} className="text-blue-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-gray-900">Filters</span>
              </div>
              <button className="text-[10px] font-bold text-gray-400 uppercase hover:text-black">
                Reset
              </button>
            </div>

            {/* Category Filter */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase text-gray-900 mb-3">
                <span>Category</span>
                <ChevronDown size={14} className="text-gray-400" />
              </div>
              <div className="space-y-2.5 text-xs text-gray-600">
                {[
                  { name: 'All Silhouettes', count: 84 },
                  { name: 'Outerwear', count: 18, active: true },
                  { name: 'Tops & Hoodies', count: 24 },
                  { name: 'Pants & Cargo', count: 16 },
                  { name: 'Footwear', count: 9 },
                  { name: 'Accessories', count: 17 },
                ].map((cat, idx) => (
                  <label key={idx} className="flex items-center justify-between cursor-pointer hover:text-black">
                    <div className="flex items-center gap-2.5">
                      <input type="checkbox" defaultChecked={cat.active} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4" />
                      <span className={cat.active ? 'font-bold text-gray-900' : ''}>{cat.name}</span>
                    </div>
                    <span className="text-gray-400 text-[10px]">{cat.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size Fit */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs font-bold uppercase text-gray-900 mb-3">
                <span>Size Fit</span>
                <span className="text-[10px] text-gray-400 font-normal">Standard Fit</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((sz, idx) => (
                  <button
                    key={sz}
                    className={`py-2 text-xs font-bold rounded-md border uppercase transition ${
                      idx === 2 ? 'bg-[#2563EB] text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Chromatic Palette */}
            <div className="pt-6 border-t border-gray-200">
              <span className="text-xs font-bold uppercase text-gray-900 block mb-3">Chromatic Palette</span>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-900 ring-2 ring-offset-2 ring-blue-600 cursor-pointer"></span>
                <span className="w-6 h-6 rounded-full bg-stone-500 cursor-pointer"></span>
                <span className="w-6 h-6 rounded-full bg-stone-300 cursor-pointer"></span>
                <span className="w-6 h-6 rounded-full bg-lime-800 cursor-pointer"></span>
                <span className="w-6 h-6 rounded-full bg-zinc-800 cursor-pointer"></span>
              </div>
            </div>

            {/* Price Window */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs font-bold uppercase text-gray-900 mb-3">
                <span>Price Window</span>
                <span className="text-[10px] text-gray-400 font-normal">$50 - $880</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-center font-bold text-gray-800 focus:outline-none"
                />
                <span className="text-gray-400">-</span>
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-center font-bold text-gray-800 focus:outline-none"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Products Grid */}
          <div className="lg:col-span-9 flex flex-col">
            
            {/* Sort Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200 text-xs">
              <span className="text-gray-500 font-medium uppercase text-[10px]">
                Showing 1-8 of 84 Silhouettes
              </span>

              <div className="flex items-center gap-2">
                <span className="text-gray-400 uppercase text-[10px]">Sort By:</span>
                <button className="font-bold text-gray-900 uppercase flex items-center gap-1">
                  Featured Drops <ChevronDown size={14} />
                </button>
              </div>
            </div>

            {/* Products Grid (3 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.map((item) => (
                <div key={item.id} className="group cursor-pointer flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-4 shadow-2xs hover:shadow-md transition">
                  <div>
                    {/* Product Image */}
                    <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-gray-100 mb-3.5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                      />

                      {/* Tag */}
                      <span className="absolute top-3 left-3 bg-[#2563EB] text-white text-[9px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                        {item.tag}
                      </span>

                      {/* Wishlist Button */}
                      <button aria-label="Add to wishlist" className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:text-red-500 transition shadow-2xs">
                        <Heart size={15} />
                      </button>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-blue-600 transition mb-2">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-black text-gray-900">{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">{item.originalPrice}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {item.colors.map((c, idx) => (
                        <span
                          key={idx}
                          style={{ backgroundColor: c }}
                          className="w-2.5 h-2.5 rounded-full border border-gray-300"
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination & Load More */}
            <div className="flex flex-col items-center gap-6 pt-6 border-t border-gray-200">
              <div className="w-full max-w-xs bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 w-1/3 h-full rounded-full"></div>
              </div>

              <button className="bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold tracking-[0.1em] uppercase px-8 py-3.5 rounded-lg transition shadow-sm">
                LOAD MORE SILHOUETTES
              </button>

              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">1</button>
                <button className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold flex items-center justify-center">2</button>
                <button className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold flex items-center justify-center">3</button>
                <span className="text-gray-400 px-1">...</span>
                <button className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold uppercase">Next</button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default CollectionsPage;