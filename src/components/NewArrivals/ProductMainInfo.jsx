import React, { useState } from 'react';
import { Heart, ShoppingBag, ShieldCheck, RefreshCw, Truck, ChevronRight } from 'lucide-react';

const ProductMainInfo = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('L');
  const [quantity, setQuantity] = useState(1);

  const images = [
    'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1000&q=80',
  ];

  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <section className="w-full bg-white py-8 lg:py-12 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Breadcrumb & Top Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 text-xs text-gray-500 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2 uppercase font-medium">
            <a href="/" className="hover:text-black">Home</a>
            <ChevronRight size={12} className="text-gray-400" />
            <a href="#outerwear" className="hover:text-black">Outerwear</a>
            <ChevronRight size={12} className="text-gray-400" />
            <span className="text-gray-900 font-bold">Vektor Asymmetric Shell Parka</span>
          </div>

          <div className="flex items-center gap-3 text-[10px] font-bold tracking-wider uppercase">
            <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-sm border border-blue-200">
              EDITION: SS25-08
            </span>
            <span className="text-emerald-600">● RESTOCK COMPLETE</span>
          </div>
        </div>

        {/* Main Grid: Left Gallery vs Right Buy Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Thumbnails + Main Showcase Image */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-4">
            
            {/* Vertical Thumbnails List */}
            <div className="flex sm:flex-col gap-3 order-2 sm:order-1 overflow-x-auto sm:overflow-visible">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition shrink-0 ${
                    selectedImage === index ? 'border-blue-600 ring-1 ring-blue-600' : 'border-gray-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Large Active Showcase Image */}
            <div className="relative flex-1 aspect-[4/5] rounded-2xl overflow-hidden bg-gray-900 order-1 sm:order-2 shadow-sm">
              <img
                src={images[selectedImage]}
                alt="Vektor Asymmetric Shell Parka"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Top Tag on Image */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-sm text-[10px] font-bold tracking-widest text-gray-900 uppercase border border-gray-200">
                3-LAYER WATERPROOF // JAPANESE NYLON
              </div>

              {/* Bottom Specs on Image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-4 py-2.5 rounded-lg border border-white/10">
                <span>SPEC: 20K/20K RET &lt; 4</span>
                <span>SERIAL #VN-9941</span>
              </div>
            </div>

          </div>

          {/* Right Column: Buy Box & Product Options */}
          <div className="lg:col-span-5 flex flex-col">
            
            <div className="flex items-center justify-between text-xs text-gray-400 font-bold uppercase mb-1">
              <span>URBANOVA LAB // SS25 EDITION</span>
              <span>LOT #44-BRD</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827] uppercase mb-2">
              VEKTOR ASYMMETRIC MODULAR SHELL PARKA
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-amber-500">★★★★★</div>
              <span className="text-xs font-bold text-gray-800">4.9</span>
              <span className="text-xs text-gray-400 underline cursor-pointer">(108 verified reviews)</span>
            </div>

            {/* Price & Klarna */}
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl mb-6">
              <div className="flex items-baseline justify-between mb-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-[#111827]">$380</span>
                  <span className="text-xs font-bold text-gray-400 uppercase">USD</span>
                </div>
                <span className="text-[10px] font-bold tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-sm">
                  COMPLIMENTARY EXPRESS DUTY-PAID
                </span>
              </div>
              <p className="text-xs text-gray-500">
                or 4 interest-free payments of <span className="font-bold text-gray-900">$95</span> with <span className="font-bold tracking-tighter text-black">Klarna.</span>
              </p>
            </div>

            {/* Color Palette Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-bold mb-2 uppercase">
                <span className="text-gray-900">Color: <span className="text-gray-500 font-normal">Onyx Black / Acid Reflective</span></span>
                <span className="text-gray-400">3 Palettes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <button aria-label="Onyx Black color" className="w-8 h-8 rounded-full bg-gray-900 ring-2 ring-offset-2 ring-blue-600 focus:outline-none"></button>
                <button aria-label="Stealth Gray color" className="w-8 h-8 rounded-full bg-gray-500 border border-gray-300 focus:outline-none"></button>
                <button aria-label="Olive Drab color" className="w-8 h-8 rounded-full bg-stone-700 border border-gray-300 focus:outline-none"></button>
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-bold mb-2 uppercase">
                <span className="text-gray-900">Select Size <span className="text-gray-400 font-normal">(Gender-Neutral)</span></span>
                <button className="text-blue-600 hover:underline flex items-center gap-1">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2.5 text-xs font-bold rounded-lg border transition uppercase ${
                      selectedSize === size
                        ? 'bg-[#111827] text-white border-[#111827]'
                        : 'bg-white text-gray-800 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between mt-2 text-[10px] font-bold">
                <span className="text-amber-600">⚡ ONLY 3 LEFT IN SIZE L — HIGH DEMAND</span>
                <span className="text-emerald-600">● Ships in 24h</span>
              </div>
            </div>

            {/* Quantity & Add to Cart + Wishlist */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 px-3 py-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-gray-600 hover:text-black font-bold px-2"
                >
                  -
                </button>
                <span className="w-8 text-center text-xs font-bold text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-gray-600 hover:text-black font-bold px-2"
                >
                  +
                </button>
              </div>

              <button
                className="flex-1 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold tracking-[0.1em] uppercase py-3.5 rounded-lg transition shadow-sm flex items-center justify-center gap-2"
              >
                <ShoppingBag size={16} />
                <span>ADD TO CART — ${380 * quantity}</span>
              </button>

              <button aria-label="Add to wishlist" className="p-3.5 border border-gray-200 rounded-lg text-gray-700 hover:text-red-500 hover:border-gray-300 transition">
                <Heart size={18} />
              </button>
            </div>

            {/* Buy with iPay Button */}
            <button className="w-full bg-[#111827] hover:bg-black text-white text-xs font-bold tracking-[0.12em] uppercase py-3.5 rounded-lg transition mb-6 shadow-sm">
              BUY WITH <span className="font-serif italic font-normal tracking-normal text-sm">i</span>PAY
            </button>

            {/* Guarantee Icons Bar */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200 text-center">
              <div className="flex flex-col items-center">
                <Truck size={18} className="text-blue-600 mb-1" />
                <span className="text-[9px] font-bold uppercase text-gray-700">Global Express</span>
                <span className="text-[8px] text-gray-400">Dhl, On-Demand 2-4d</span>
              </div>

              <div className="flex flex-col items-center border-x border-gray-200">
                <RefreshCw size={18} className="text-blue-600 mb-1" />
                <span className="text-[9px] font-bold uppercase text-gray-700">30-Day Returns</span>
                <span className="text-[8px] text-gray-400">Prepaid Return Label</span>
              </div>

              <div className="flex flex-col items-center">
                <ShieldCheck size={18} className="text-blue-600 mb-1" />
                <span className="text-[9px] font-bold uppercase text-gray-700">Carbon Neutral</span>
                <span className="text-[8px] text-gray-400">100% Recycled Pack</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductMainInfo;