import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const AtelierLocations = () => {
  const [activeCity, setActiveCity] = useState('TOKYO');

  const locations = [
    {
      id: 'tokyo',
      code: 'TOKYO // SHIBUYA DUPLEX',
      status: 'OPEN TODAY',
      coords: '35.6762° N, 139.6503° E',
    },
    {
      id: 'berlin',
      code: 'BERLIN // MITTE LAB',
      status: 'OPEN TODAY',
      coords: '52.5200° N, 13.4050° E',
    },
    {
      id: 'nyc',
      code: 'NYC // SOHO VAULT',
      status: 'OPEN TODAY',
      coords: '40.7128° N, 74.0060° W',
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 font-sans border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="bg-[#F3F4F6] border border-gray-200 rounded-2xl p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Info & Locations List */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-[10px] font-bold tracking-[0.16em] text-blue-600 uppercase mb-2">
              FLAGSHIP SPACES
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#111827] uppercase mb-4">
              EXPERIENCE THE ATELIER IN PERSON
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-8">
              Visit our experiential retail concept spaces in Tokyo, Berlin, and New York. Touch the fabrics, explore customized fit consultations, and collect physical release access cards.
            </p>

            {/* Locations List */}
            <div className="space-y-3">
              {locations.map((loc) => (
                <div
                  key={loc.id}
                  onClick={() => setActiveCity(loc.id)}
                  className={`bg-white border rounded-xl p-4 flex items-center justify-between cursor-pointer transition shadow-2xs ${
                    activeCity === loc.id
                      ? 'border-blue-600 ring-1 ring-blue-600'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 tracking-wider">
                        {loc.code}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-semibold tracking-wider">
                        {loc.coords}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-sm">
                    {loc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Simulated Map Graphic / UI */}
          <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
            {/* Styled Map Image representation */}
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
              alt="Atelier Global Map Location"
              className="w-full h-full object-cover object-center grayscale contrast-125 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-transparent"></div>

            {/* Floating Tag on Map */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-gray-200 px-3.5 py-1.5 rounded-md shadow-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-wider text-gray-900 uppercase">
                FLAGSHIP 01: {activeCity}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AtelierLocations;