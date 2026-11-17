import React from 'react';

const MarqueeTicker = () => {
  const items = [
    "DROP 06 NOW LIVE",
    "MODULAR WEATHERPROOF COATS",
    "ALL ORDERS CARBON NEUTRAL",
    "COMPLIMENTARY TACTICAL STRAP ON $300+",
    "GLOBAL COURIER",
  ];

  // نكرر العناصر مرتين عشان الحركة تفضل مستمرة من غير فراغ
  const repeatedItems = [...items, ...items];

  return (
    <div className="w-full bg-[#2563EB] text-white py-3 overflow-hidden border-y border-blue-700 select-none font-sans">
      <div className="animate-marquee flex items-center">
        {repeatedItems.map((text, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase px-6">
              {text}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/80 inline-block"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;