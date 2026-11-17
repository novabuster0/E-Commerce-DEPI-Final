import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const ArchiveSaleBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    mins: 38,
    secs: 40,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <section className="w-full bg-white py-8 lg:py-12 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="rounded-2xl overflow-hidden border border-gray-200 bg-[#F3F4F6] grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Text + Countdown + CTA */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span className="text-[10px] font-bold tracking-[0.14em] text-blue-600 uppercase">
                PRIVATE ARCHIVE EVENT // 48H CLEARANCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.05] text-[#111827] uppercase mb-4">
              MID-SEASON <br />
              <span className="text-[#2563EB]">ARCHIVE SALE</span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mb-8">
              Rare vault access to previous capsule prototypes and past-season silhouettes at up to 40% reduction. Once units sell out, tooling molds and fabric runs are permanently archived.
            </p>

            {/* Countdown Boxes */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-8">
              {[
                { label: 'DAYS', value: pad(timeLeft.days) },
                { label: 'HOURS', value: pad(timeLeft.hours) },
                { label: 'MINS', value: pad(timeLeft.mins) },
                { label: 'SECS', value: pad(timeLeft.secs) },
              ].map((item, index) => (
                <React.Fragment key={item.label}>
                  <div className="bg-white border border-gray-200 rounded-lg w-14 sm:w-16 py-2.5 text-center shadow-2xs">
                    <div className="text-base sm:text-lg font-black text-[#111827]">
                      {item.value}
                    </div>
                    <div className="text-[8px] font-bold tracking-wider text-gray-400 uppercase">
                      {item.label}
                    </div>
                  </div>
                  {index < 3 && (
                    <span className="text-gray-400 font-bold text-sm">:</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#archive-sale"
                className="inline-flex items-center gap-2.5 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold tracking-[0.1em] uppercase px-6 py-3.5 rounded-md transition shadow-sm"
              >
                <span>CLAIM ARCHIVE ACCESS</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase + Floating Promo Card */}
          <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[440px] bg-gray-900 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1000&q=80"
              alt="Archive Techwear Jacket"
              className="w-full h-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Floating Glass Card at Bottom */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-4 shadow-lg">
              <p className="text-[9px] font-bold tracking-[0.12em] text-blue-600 uppercase mb-1">
                VAULT UNLOCKED // CODE: ARCHIVE40
              </p>
              <p className="text-xs font-bold text-gray-900">
                Extra 10% discount automatically applied at checkout when 2+ archive pieces are added.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ArchiveSaleBanner;