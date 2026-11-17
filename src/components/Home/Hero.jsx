import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[760px] lg:min-h-[840px] bg-[#E5E7EB] overflow-hidden flex flex-col justify-between font-sans">
      
      {/* Background Image with Left-to-Right Fade Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1920&q=80"
          alt="Architectural Utility Outerwear"
          className="w-full h-full object-cover object-center lg:object-right grayscale contrast-110 opacity-85"
        />
        {/* Gradient overlay to match Figma's bright left/bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F3F4F6] via-[#F3F4F6]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-10 flex-1 flex flex-col justify-between">
        
        {/* Top Technical Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 lg:pt-16">
          {/* Left Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 px-3 py-1.5 rounded-sm shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span className="text-[10px] font-bold tracking-[0.12em] text-gray-800 uppercase">
              DROP 06 AVAILABLE GLOBALLY // SERIAL 00-9941
            </span>
          </div>

          {/* Right Coordinates Badge */}
          <div className="hidden sm:inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 px-3 py-1.5 rounded-sm text-[10px] font-semibold tracking-[0.1em] text-gray-600 uppercase">
            <span>COORD: 35.6762° N, 139.6503° E</span>
            <span className="text-gray-300">|</span>
            <span className="text-blue-600 font-bold">EDITION / 300 PIECES</span>
          </div>
        </div>

        {/* Center-Left Main Typography & CTA Buttons */}
        <div className="my-12 lg:my-auto max-w-2xl">
          <p className="text-[11px] font-bold tracking-[0.16em] text-blue-600 uppercase mb-3">
            AUTUMN / WINTER 2024 DROP 06
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.02] text-[#111827] uppercase mb-6">
            ARCHITECTURAL <br />
            <span className="text-[#2563EB]">UTILITY</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg mb-8 font-normal">
            Engineered silhouettes, modular weather-resistant outerwear, and raw minimal tailoring designed for the high-density metropolis. Crafted from 3-layer bonded Japanese ripstop and micro-welded seams.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#shop"
              className="inline-flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold tracking-[0.1em] uppercase px-7 py-4 rounded-sm transition shadow-sm"
            >
              <span>SHOP THE DROP</span>
              <ArrowRight size={15} />
            </a>

            <a
              href="#lookbook"
              className="inline-flex items-center justify-center bg-white/90 hover:bg-white text-[#111827] border border-gray-300 text-xs font-bold tracking-[0.1em] uppercase px-7 py-4 rounded-sm transition"
            >
              EXPLORE LOOKBOOK
            </a>
          </div>
        </div>

        {/* Bottom 4-Column Specs Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6">
          <div className="bg-white/85 backdrop-blur-sm border border-gray-200 p-4 rounded-sm">
            <p className="text-[10px] font-bold tracking-[0.12em] text-gray-400 uppercase mb-1">
              300 PIECES
            </p>
            <p className="text-xs sm:text-sm font-bold text-gray-900">
              Strictly Limited
            </p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm border border-gray-200 p-4 rounded-sm">
            <p className="text-[10px] font-bold tracking-[0.12em] text-gray-400 uppercase mb-1">
              48H DISPATCH
            </p>
            <p className="text-xs sm:text-sm font-bold text-gray-900">
              Global Express
            </p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm border border-gray-200 p-4 rounded-sm">
            <p className="text-[10px] font-bold tracking-[0.12em] text-gray-400 uppercase mb-1">
              JP NYLON
            </p>
            <p className="text-xs sm:text-sm font-bold text-gray-900">
              Cordura® Weave
            </p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm border border-gray-200 p-4 rounded-sm">
            <p className="text-[10px] font-bold tracking-[0.12em] text-gray-400 uppercase mb-1">
              MODULAR
            </p>
            <p className="text-xs sm:text-sm font-bold text-gray-900">
              Magnetic Snap-Ins
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;