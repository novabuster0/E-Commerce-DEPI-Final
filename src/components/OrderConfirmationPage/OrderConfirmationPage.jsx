import React, { useState } from 'react';
import {
  CheckCircle2, Copy, Download, Navigation, ArrowRight,
  Plane, MapPin, Truck, CreditCard, ShieldCheck,
  Sparkles, Headphones, Phone, RefreshCw, ChevronDown, ChevronUp
} from 'lucide-react';

const OrderConfirmationPage = () => {
  const [copiedId, setCopiedId] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [radarExpanded, setRadarExpanded] = useState(false);

  const transactionId = '#URB-8492-NOCT';
  const dropCode = 'NOCTURNE-VIP';

  const handleCopy = (text, setter) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  const garments = [
    {
      id: 1,
      badge: 'VAULT-07',
      name: 'VEKTOR ASYMMETRIC MODULAR SHELL PARKA',
      size: 'L',
      color: 'ONYX BLACK',
      qty: 1,
      price: 380.00,
      techSpec: '3-LAYER GORE-TEX® // WATERPROOF 28,000MM',
      serial: 'SERIAL: #VKT-0042-BLK',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      badge: 'RESTOCK',
      name: 'KURO WIDE-LEG PLEATED CARGO',
      size: 'M',
      color: 'GHOST BONE',
      qty: 1,
      price: 240.00,
      techSpec: 'JAPANESE RECYCLED NYLON // ARTICULATED KNEE',
      serial: 'SERIAL: #KR-0129-BNE',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      badge: 'SEASON 04',
      name: 'TACTICAL RIBBED ZIP KNIT',
      size: 'L',
      color: 'PITCH BLACK',
      qty: 1,
      price: 210.00,
      techSpec: '100% MERINO WOOL // MATTE COATED HARDWARE',
      serial: 'SERIAL: #TK-0881-BLK',
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <div className="w-full bg-[#F8FAFC] font-sans py-8 px-4 sm:px-8 lg:px-12 text-[#111827]">
      <div className="max-w-[1440px] mx-auto space-y-6">

        {/* 1. شريط الحالة العلوي (Protocol Status Header) */}
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 text-[10px] font-bold tracking-widest uppercase shadow-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              PROTOCOL CONCLUDED
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">SEQUENCE 04_FINAL</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <span className="text-emerald-600 flex items-center gap-1"><CheckCircle2 size={12} /> 01 CART</span>
            <span className="text-emerald-600 flex items-center gap-1"><CheckCircle2 size={12} /> 02 SHIPPING</span>
            <span className="text-emerald-600 flex items-center gap-1"><CheckCircle2 size={12} /> 03 PAYMENT</span>
            <span className="text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> 04 CONFIRMATION
            </span>
          </div>
        </div>

        {/* 2. كارت تأكيد الطلب الرئيسي (Order Secured Hero Card) */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold tracking-widest uppercase mb-3">
            <span className="text-blue-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              DISPATCH SEQUENCE INITIATED // ENCRYPTED & CONFIRMED
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-400">NODE: LAX-CENTRAL-04</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight uppercase text-gray-900 mb-4">
            ORDER SECURED // ARCHIVE MANIFEST DISPATCHED
          </h1>

          {/* شريط رقم العملية وزر النسخ */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">TRANSACTION ID:</span>
            <span className="bg-gray-100 border border-gray-200 text-blue-600 font-mono text-xs font-bold px-3 py-1 rounded-md">
              {transactionId}
            </span>
            <button
              onClick={() => handleCopy(transactionId, setCopiedId)}
              className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-gray-600 hover:text-gray-900 bg-white border border-gray-200 px-2.5 py-1 rounded-md transition"
            >
              <Copy size={11} />
              {copiedId ? 'COPIED!' : 'COPY REF'}
            </button>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed mb-7">
            Thank you, <strong className="text-gray-900">Alexander</strong>. Your allocation has been vault-locked and scheduled for encrypted priority air drop to <strong className="text-gray-900">Los Angeles, CA</strong>. An authenticated digital receipt and encrypted tracking credentials have been transmitted to <a href="mailto:alexander.vance@nocturne.studio" className="text-blue-600 font-medium hover:underline">alexander.vance@nocturne.studio</a>.
          </p>

          {/* أزرار الإجراءات */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-xl transition shadow-xs inline-flex items-center gap-2">
              <Download size={14} />
              <span>DOWNLOAD ARCHIVAL INVOICE (PDF)</span>
            </button>
            <button className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-xl transition inline-flex items-center gap-2">
              <Navigation size={14} className="text-blue-600" />
              <span>TRACK DISPATCH TELEMETRY</span>
            </button>
            <button className="text-xs font-bold tracking-wider uppercase text-gray-600 hover:text-black px-4 py-3 transition inline-flex items-center gap-1.5">
              <span>CONTINUE SHOPPING</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* 3. كارت تتبع الشحنة الجوي (Dispatch Tracking // Expedited Air Route) */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-100">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase flex items-center gap-1.5 mb-1">
                <Plane size={13} /> LIVE CARRIER TELEMETRY
              </span>
              <h2 className="text-lg sm:text-xl font-black uppercase text-gray-900">
                DISPATCH TRACKING // EXPEDITED AIR ROUTE
              </h2>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex flex-wrap items-center gap-6">
              <div>
                <span className="text-[9px] font-bold text-gray-400 uppercase block">CARRIER ID</span>
                <span className="text-xs font-black text-gray-900 uppercase">NOVA LOGISTICS // FLIGHT #NV-902</span>
              </div>
              <div className="hidden sm:block h-7 w-px bg-gray-200"></div>
              <div>
                <span className="text-[9px] font-bold text-gray-400 uppercase block">ESTIMATED DROP</span>
                <span className="text-xs font-black text-emerald-600 uppercase">TOMORROW // PRIORITY AIR DROP (GUARANTEED)</span>
              </div>
            </div>
          </div>

          {/* 4 مراحل الشحن (Tracking Phases Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Phase 01 */}
            <div className="bg-gray-50/70 border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between text-[9px] font-bold uppercase mb-2">
                <span className="text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 size={12} /> PHASE 01: COMPLETED
                </span>
                <span className="text-gray-400">14:18 PST</span>
              </div>
              <h4 className="text-xs font-black uppercase text-gray-900 mb-1.5">ORDER VERIFIED & VAULT CLEARED</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Allocations verified against cold storage vault inventory. High-frequency digital signature signed.
              </p>
            </div>

            {/* Phase 02 (Active) */}
            <div className="bg-blue-50/30 border-2 border-blue-600 rounded-xl p-4 relative shadow-xs">
              <div className="flex items-center justify-between text-[9px] font-bold uppercase mb-2">
                <span className="text-blue-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                  PHASE 02: IN PROGRESS
                </span>
                <span className="text-blue-600">EST. 18:00 PST</span>
              </div>
              <h4 className="text-xs font-black uppercase text-gray-900 mb-1.5">PRECISION SORTING & TAMPER-SEALING</h4>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                Garments vacuum-packed in nitrogen-infused anti-static bags and tagged with cryptographic RFID seal #RFID-99421A.
              </p>
            </div>

            {/* Phase 03 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 opacity-75">
              <div className="flex items-center justify-between text-[9px] font-bold uppercase text-gray-400 mb-2">
                <span>○ PHASE 03: SCHEDULED</span>
                <span>TOMORROW 06:30 PST</span>
              </div>
              <h4 className="text-xs font-black uppercase text-gray-700 mb-1.5">HANDED TO PRIORITY AIRBORNE COURIER</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Direct tarmac flight departure from JFK Hub direct to LAX Nocturne Fulfillment Center.
              </p>
            </div>

            {/* Phase 04 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 opacity-75">
              <div className="flex items-center justify-between text-[9px] font-bold uppercase text-gray-400 mb-2">
                <span>○ PHASE 04: SCHEDULED</span>
                <span>BY 20:00 PST</span>
              </div>
              <h4 className="text-xs font-black uppercase text-gray-700 mb-1.5">FINAL NOCTURNAL DELIVERY</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Dedicated stealth courier arrival with signature verification and GPS lock at 744 S San Pedro St.
              </p>
            </div>
          </div>

          {/* شريط الرادار القابل للفتح */}
          <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-[10px] font-bold tracking-widest uppercase">
            <button
              onClick={() => setRadarExpanded(!radarExpanded)}
              className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1.5 transition"
            >
              <span>LIVE FLIGHT RADAR & PACKET TELEMETRY ({radarExpanded ? 'COLLAPSE' : 'EXPAND'})</span>
              {radarExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>
            <span className="text-gray-400">AUTHENTICATION: SHA-512 SECURE</span>
          </div>

          {radarExpanded && (
            <div className="mt-3 bg-gray-900 text-gray-300 rounded-xl p-4 font-mono text-[11px] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-gray-500 block text-[9px]">ORIGIN TERMINAL</span>
                <span>JFK_CARGO_VAULT_02 [40.6413° N, 73.7781° W]</span>
              </div>
              <div>
                <span className="text-gray-500 block text-[9px]">DESTINATION HUB</span>
                <span>LAX_NOCTURNE_NODE [33.9416° N, 118.4085° W]</span>
              </div>
              <div>
                <span className="text-gray-500 block text-[9px]">CONTAINER INTEGRITY</span>
                <span className="text-emerald-400">SEALED // TEMP: 18.4°C // HUMIDITY: 32%</span>
              </div>
            </div>
          )}
        </div>

        {/* 4. الشبكة الوسطى: بيانات الشحن والأمان (يسار) + ملخص المنتجات المخصصة (يمين) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* العمود الأيسر (5 أعمدة): Dispatch & Security */}
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-xs space-y-5">
            <div>
              <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase block">DOSSIER // DATA LOG</span>
              <h3 className="text-sm font-black uppercase text-gray-900">DISPATCH & SECURITY</h3>
            </div>

            {/* Delivery Destination */}
            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase flex items-center gap-1.5">
                  <MapPin size={12} className="text-blue-600" /> DELIVERY DESTINATION
                </span>
                <span className="bg-gray-100 text-gray-600 text-[8px] font-bold px-2 py-0.5 rounded uppercase">RESIDENTIAL</span>
              </div>
              <p className="text-xs font-black text-gray-900">Alexander Vance</p>
              <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                744 S San Pedro St<br />
                Floor 4, Studio 400<br />
                Los Angeles, CA 90014<br />
                United States
              </p>
              <p className="text-[11px] text-gray-500 mt-2 font-mono">📱 SMS Logistics: +1 (213) 555-0194</p>
            </div>

            {/* Logistics Protocol */}
            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase flex items-center gap-1.5">
                  <Truck size={12} className="text-blue-600" /> LOGISTICS PROTOCOL
                </span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[8px] font-bold px-2 py-0.5 rounded uppercase">COMPLIMENTARY</span>
              </div>
              <p className="text-xs font-bold text-gray-900">Priority Air Drop (Guaranteed Airborne Release)</p>
              <p className="text-[11px] text-gray-500 mt-0.5">Direct tarmac cargo routing. Insured against loss, ambient humidity and atmospheric pressure monitored enclosure.</p>
            </div>

            {/* Payment Settlement */}
            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase flex items-center gap-1.5">
                  <CreditCard size={12} className="text-blue-600" /> PAYMENT SETTLEMENT
                </span>
                <span className="bg-blue-50 text-blue-600 border border-blue-200 text-[8px] font-bold px-2 py-0.5 rounded uppercase">AUTHORIZED</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="bg-gray-900 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">VISA</span>
                  Archival Charge Card •••• 9011
                </span>
                <span className="text-[10px] font-mono text-gray-400">EXP: 08/28</span>
              </div>
              <p className="text-[10px] text-gray-500 mt-1.5 flex items-center gap-1">
                <CheckCircle2 size={11} className="text-emerald-500" /> 256-Bit Quantum Shield Authenticated // Zero-Knowledge Settlement
              </p>
            </div>

            {/* Security Seal Applied */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5">
              <span className="text-[9px] font-bold text-blue-600 uppercase flex items-center gap-1.5 mb-1">
                <ShieldCheck size={12} /> SECURITY SEAL APPLIED
              </span>
              <p className="text-[11px] text-gray-700 font-medium">
                Serialized RFID Tamper-Evident Tag <span className="font-mono font-bold">#RFID-99421A</span> verified. Do not accept if seal integrity is fractured.
              </p>
            </div>
          </div>

          {/* العمود الأيمن (7 أعمدة): Garments Allocated (3) */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200">
              <div>
                <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase block">PURCHASED MANIFEST</span>
                <h3 className="text-sm font-black uppercase text-gray-900">GARMENTS ALLOCATED (3)</h3>
              </div>
              <span className="bg-gray-100 border border-gray-200 text-gray-700 text-[9px] font-bold tracking-wider px-2.5 py-1 rounded uppercase">
                STATUS: VAULT LOCKED
              </span>
            </div>

            {/* قائمة القطع المشتراة */}
            <div className="space-y-4 pb-6 mb-6 border-b border-gray-200">
              {garments.map((item) => (
                <div key={item.id} className="flex items-start gap-4 bg-gray-50/60 border border-gray-100 rounded-xl p-3.5">
                  <div className="w-20 h-24 bg-gray-200 rounded-lg overflow-hidden shrink-0 relative border border-gray-200">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 left-1 bg-black/85 text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-xs sm:text-sm font-black uppercase text-gray-900 leading-snug">{item.name}</h4>
                      <span className="text-xs sm:text-sm font-black text-gray-900 shrink-0">${item.price.toFixed(2)}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold text-gray-500 uppercase mt-1">
                      <span>SIZE: <strong className="text-gray-800">{item.size}</strong></span>
                      <span>•</span>
                      <span>COLOR: <strong className="text-gray-800">{item.color}</strong></span>
                      <span>•</span>
                      <span>QTY: <strong className="text-gray-800">{item.qty}</strong></span>
                    </div>

                    <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
                      <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                        {item.techSpec}
                      </span>
                      <span className="text-[9px] font-mono text-gray-400">{item.serial}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* تفاصيل التسوية المالية (Financial Breakdown) */}
            <div className="space-y-2 text-xs pb-5 mb-5 border-b border-gray-200">
              <div className="flex justify-between text-gray-600">
                <span>GARMENT SUBTOTAL (3 PIECES)</span>
                <span className="font-bold text-gray-900">$830.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>PRIORITY AIRBORNE DISPATCH</span>
                <span className="font-bold text-emerald-600">FREE ($0.00)</span>
              </div>
              <div className="flex justify-between text-blue-600 font-medium">
                <span>VAULT PASS DEDUCTION (NOVA24 -10%)</span>
                <span className="font-bold">-$83.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>ESTIMATED SALES TAX (8.00% CA)</span>
                <span className="font-bold text-gray-900">$66.40</span>
              </div>
            </div>

            {/* الإجمالي النهائي المدفوع */}
            <div className="flex items-end justify-between">
              <div>
                <span className="text-xs font-black uppercase text-gray-900 block">TOTAL SETTLED</span>
                <span className="text-[10px] text-gray-400 uppercase">PAID // ALL APPLICABLE IMPORT & REGIONAL TAXES INCLUDED</span>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black tracking-tight text-gray-900">$813.40</span>
                <span className="text-[10px] font-bold text-gray-400 block uppercase">USD CURRENCY</span>
              </div>
            </div>
          </div>

        </div>

        {/* 5. بانر ترقية العضوية (Tier 02: Nocturnal Access Activated) */}
        <div className="bg-white border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase flex items-center gap-1.5">
              <Sparkles size={13} /> VAULT MEMBER STATUS UNLOCKED
            </span>
            <h3 className="text-lg sm:text-xl font-black uppercase text-gray-900">
              TIER 02: NOCTURNAL ACCESS ACTIVATED
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              This checkout cleared your qualifying spend tier. Your digital wallet pass has been minted with unreleased drop reservations for <strong className="text-gray-900">DROP 09: SYNTHETIC HORIZON</strong>. Use your private key at zero-hour.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-[10px] font-bold uppercase">
              <span className="text-gray-400">PRIVATE DROP CODE:</span>
              <button
                onClick={() => handleCopy(dropCode, setCopiedCode)}
                className="bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-mono px-2.5 py-1 rounded inline-flex items-center gap-1.5 transition"
              >
                <span>{dropCode}</span>
                <Copy size={11} />
              </button>
              <span className="text-emerald-600">{copiedCode ? '✓ COPIED' : '24HR EARLY ARCHIVE ACCESS'}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
            <button className="bg-black hover:bg-gray-900 text-white text-[11px] font-bold tracking-wider uppercase px-5 py-3 rounded-xl transition flex items-center justify-center gap-2">
              <span> ADD TO APPLE WALLET PASS</span>
            </button>
            <button className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 text-[11px] font-bold tracking-wider uppercase px-5 py-3 rounded-xl transition flex items-center justify-center gap-2">
              <span>G ADD TO GOOGLE WALLET</span>
            </button>
          </div>
        </div>

        {/* 6. بطاقات الدعم والاستبدال السفلية */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Immediate Dispatch Inquiry */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between gap-4">
            <div>
              <span className="text-[9px] font-bold tracking-widest text-blue-600 uppercase flex items-center gap-1.5 mb-1">
                <Headphones size={12} /> NOCTURNE CLIENTELE CONCIERGE
              </span>
              <h4 className="text-sm font-black uppercase text-gray-900 mb-1.5">IMMEDIATE DISPATCH INQUIRY?</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our encrypted concierge line handles address routing adjustments, courier holds, and physical inspection requests until 17:30 PST today.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button className="bg-[#2563EB] hover:bg-blue-700 text-white text-[10px] font-bold tracking-wider uppercase px-4 py-2.5 rounded-lg transition inline-flex items-center gap-1.5">
                <Headphones size={13} /> 24/7 CONCIERGE LIVE CHAT
              </button>
              <span className="text-xs font-mono font-bold text-gray-700 inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg">
                <Phone size={12} className="text-blue-600" /> +1 (800) 555-0199
              </span>
            </div>
          </div>

          {/* 14-Day Complimentary Vault Exchange */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between gap-4">
            <div>
              <span className="text-[9px] font-bold tracking-widest text-emerald-600 uppercase flex items-center gap-1.5 mb-1">
                <RefreshCw size={12} /> ARCHIVE RETURN GUARANTEE
              </span>
              <h4 className="text-sm font-black uppercase text-gray-900 mb-1.5">14-DAY COMPLIMENTARY VAULT EXCHANGE</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Every garment arrives with prepaid return courier credentials inside the delivery canister. Retain serialized tags and tamper seals for instant exchange or return credit.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[10px] font-bold uppercase">
              <span className="text-gray-400">✓ PRE-PRINTED RETURN SLIP INCLUDED</span>
              <a href="#policy" className="text-blue-600 hover:underline">READ POLICY</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderConfirmationPage;