import React from 'react';

const ManifestoSection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 font-sans border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Manifesto Text & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span className="text-[10px] font-bold tracking-[0.14em] text-blue-600 uppercase">
                MANIFESTO // PHILOSOPHY
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-[1.15] text-[#111827] uppercase mb-6">
              "WE REJECT THE DISPOSABLE CYCLE. WE CONSTRUCT GEAR CAPABLE OF WITHSTANDING METROPOLITAN WEATHER EXTREMES AND DESIGN CADENCES THAT TRANSCEND SEASONS."
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-10">
              URBANOVA was founded at the intersection of brutalist architecture and technical performance apparel. Every pocket placement is ergonomically mapped; every fabric is torture-tested for abrasion resistance and hydrostatic waterhead pressure.
            </p>

            {/* 3 Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2563EB] tracking-tight mb-1">
                  100%
                </p>
                <p className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                  RECYCLED SHELLS
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight mb-1">
                  20K
                </p>
                <p className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                  WATERPROOF RATING
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight mb-1">
                  LTD
                </p>
                <p className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                  SMALL-BATCH RUNS
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Workshop Image with Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl bg-gray-900">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Atelier Workshop"
                className="w-full h-full object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating Glass Card at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-4 flex items-center justify-between shadow-lg">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.12em] text-blue-600 uppercase mb-0.5">
                    ATELIER ARCHIVE NO. 4
                  </p>
                  <p className="text-xs font-bold text-gray-900">
                    Shibuya Design Workshop
                  </p>
                </div>
                <a
                  href="#workshop-notes"
                  className="text-[10px] font-bold tracking-wider text-[#2563EB] hover:underline uppercase"
                >
                  READ ATELIER NOTES
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ManifestoSection;