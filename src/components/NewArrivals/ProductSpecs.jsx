import React, { useState } from 'react';
import { ShieldCheck, Check } from 'lucide-react';

const ProductSpecs = () => {
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'fit' | 'reviews'

  return (
    <section className="w-full bg-white py-12 lg:py-16 border-t border-gray-200 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-8 border-b border-gray-200 mb-10 overflow-x-auto">
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-4 text-xs font-bold tracking-[0.12em] uppercase transition relative ${
              activeTab === 'specs' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            01 // SPECS & BLUEPRINT
            {activeTab === 'specs' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>}
          </button>

          <button
            onClick={() => setActiveTab('fit')}
            className={`pb-4 text-xs font-bold tracking-[0.12em] uppercase transition relative ${
              activeTab === 'fit' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            02 // FIT & DIMENSIONS
            {activeTab === 'fit' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>}
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-4 text-xs font-bold tracking-[0.12em] uppercase transition relative ${
              activeTab === 'reviews' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            03 // CUSTOMER FEEDBACK (108)
            {activeTab === 'reviews' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>}
          </button>
        </div>

        {/* Tab Content 1: Specs & Blueprint */}
        {activeTab === 'specs' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Architecture details & Ratings */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827] uppercase mb-4">
                THE ARCHITECTURE OF PROTECTION
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-8">
                Engineered for volatile atmospheric transitions, the Vektor Asymmetric Parka harmonizes tactical utility with post-industrial brutalism. Crafted from high-density Japanese 3-layer micro-ripstop nylon, this outer garment exhibits maximum breathability while generating an impenetrable barricade against horizontal rainfall and gale-force city winds.
              </p>

              {/* Waterproof & Moisture Cards Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#F3F4F6] border border-gray-200 p-4 rounded-xl">
                  <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase block mb-1">
                    WATERPROOF RATING
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#111827] block mb-1">
                    20,000 mm
                  </span>
                  <span className="text-[9px] text-gray-500 font-medium">
                    JIS L 1092B Extreme Rain standard
                  </span>
                </div>

                <div className="bg-[#F3F4F6] border border-gray-200 p-4 rounded-xl">
                  <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase block mb-1">
                    MOISTURE RET RATING
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#111827] block mb-1">
                    &lt; 4.0 $m^2$Pa/W
                  </span>
                  <span className="text-[9px] text-gray-500 font-medium">
                    Hyper-breathable active vapor release
                  </span>
                </div>
              </div>

              {/* Bullet Features list */}
              <ul className="space-y-3">
                {[
                  'Full perimeter heat-welded micro-taped interior seams',
                  'Dual-direction matte black YKK® AquaGuard waterproof zippers',
                  'Six-pocket modular layout including concealed anti-theft RFID pass slot',
                  'Acid-reactive micro-dots providing 360° nocturnal roadway visibility',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                    <Check size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Schematic & Fabric Weight Card */}
            <div className="lg:col-span-6 bg-[#F3F4F6] border border-gray-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase mb-6">
                <span>CROSS-SECTION SCHEMATIC // T-08</span>
                <span>FABRIC WEIGHT: 145 GSM</span>
              </div>

              {/* Layer Boxes */}
              <div className="space-y-3 mb-8">
                <div className="bg-white border border-gray-200 p-3.5 rounded-lg text-xs font-bold text-gray-800 uppercase flex items-center justify-between shadow-2xs">
                  <span>01. DWR RIPSTOP NYLON (EXTERIOR SHIELD)</span>
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                </div>

                <div className="bg-white border border-blue-600 p-3.5 rounded-lg text-xs font-bold text-blue-600 uppercase flex items-center justify-between shadow-sm">
                  <span>02. MICRO-POROUS PTFE MEMBRANE (20K/20K)</span>
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                </div>

                <div className="bg-white border border-gray-200 p-3.5 rounded-lg text-xs font-bold text-gray-800 uppercase flex items-center justify-between shadow-2xs">
                  <span>03. 150 ULTRA-LIGHT CIRCULAR KNIT BACKER</span>
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                </div>
              </div>

              <div className="text-center py-3 border-y border-gray-200 mb-6">
                <span className="text-[10px] font-black tracking-[0.14em] text-blue-600 uppercase">
                  ZERO COMPROMISE WEATHER ARMOR
                </span>
              </div>

              <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 uppercase">
                <span>CARE: COLD WASH // HANG DRY // DO NOT IRON TAPED SEAMS</span>
                <span className="bg-white border border-gray-200 px-2.5 py-1 rounded text-gray-900">MADE IN OSAKA</span>
              </div>
            </div>

          </div>
        )}

        {/* Tab Content 2: Fit & Dimensions */}
        {activeTab === 'fit' && (
          <div className="py-10 text-center text-gray-600">
            <h3 className="text-xl font-bold text-gray-900 uppercase mb-2">FIT & SIZING SPECIFICATIONS</h3>
            <p className="text-xs">Oversized architectural drape engineered to accommodate modular internal layering.</p>
          </div>
        )}

        {/* Tab Content 3: Customer Feedback */}
        {activeTab === 'reviews' && (
          <div className="py-10 text-center text-gray-600">
            <h3 className="text-xl font-bold text-gray-900 uppercase mb-2">VERIFIED OWNER REVIEWS (108)</h3>
            <p className="text-xs">Rated 4.9 / 5.0 by metropolitan collectors worldwide.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductSpecs;