import React, { useState } from 'react';
import { 
  CheckCircle2, Lock, ShieldCheck, Truck, CreditCard, 
  Sparkles, ArrowRight, Headphones, RefreshCw, Tag 
} from 'lucide-react';

const CheckoutPage = () => {
  // حالات تفاعلية للنموذج
  const [email, setEmail] = useState('alexander.vance@nocturne.studio');
  const [shippingMethod, setShippingMethod] = useState('priority'); // 'standard' | 'priority' | 'saturday'
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'afterpay' | 'web3' | 'concierge'
  const [promoCode, setPromoCode] = useState('NOVA24');
  const [promoApplied, setPromoApplied] = useState(true);

  // بيانات المنتجات في السلة
  const manifestItems = [
    {
      id: 1,
      name: 'VEKTOR MODULAR SHELL PARKA',
      spec: 'Onyx Black // Size L // 3-Layer Gore-Tex',
      badge: 'DROP // VAULT-07',
      price: 380.00,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'KURO WIDE-LEG PLEATED CARGO',
      spec: 'Ghost Bone // Size 32 // Heavy Cordura',
      badge: 'RESTOCK ARCHIVE',
      price: 240.00,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'TACTICAL RIBBED ZIP KNIT',
      spec: 'Pitch Black // Size L // Merino Wool',
      badge: 'SEASON 04',
      price: 210.00,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=200&q=80'
    }
  ];

  // حساب الأسعار ديناميكياً
  const subtotal = 830.00;
  const shippingCost = shippingMethod === 'saturday' ? 25.00 : 0.00;
  const discount = promoApplied ? 83.00 : 0.00;
  const taxes = 66.40;
  const totalAllocation = subtotal + shippingCost - discount + taxes;

  return (
    <div className="w-full bg-[#F8FAFC] font-sans py-8 px-4 sm:px-8 lg:px-12 text-[#111827]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* 1. شريط خطوات الشراء العلوي (Steps Header) */}
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-4 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-xs">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] font-bold tracking-wider uppercase">
            <span className="flex items-center gap-1.5 text-emerald-600">
              <CheckCircle2 size={14} /> 01 CART
            </span>
            <span className="text-gray-300">/</span>
            <span className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span> 02 SHIPPING & DISPATCH
            </span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400">03 PAYMENT MATRIX</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400">04 CONFIRMATION</span>
          </div>

          <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase">
            <span className="flex items-center gap-1.5 text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span>
              VAULT HOLD ACTIVE: 14:58
            </span>
            <span className="hidden sm:inline-block text-gray-400">SECURE ID: #URB-8492</span>
          </div>
        </div>

        {/* 2. الشبكة الرئيسية (العمود الأيسر للبيانات + العمود الأيمن لملخص الطلب) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= العمود الأيسر (7 أعمدة): البيانات والدفع ================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* أ. الدفع السريع (Express Checkout Matrix) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase flex items-center gap-1.5">
                  <Sparkles size={13} className="text-blue-600" /> EXPRESS CHECKOUT MATRIX
                </span>
                <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">ONE-TOUCH DISPATCH</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button className="bg-black hover:bg-gray-900 text-white py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition">
                   PAY
                </button>
                <button className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition">
                  G PAY
                </button>
                <button className="bg-[#5A31F4] hover:bg-[#4c26d8] text-white py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition">
                  SHOP PAY
                </button>
                <button className="bg-[#FFC439] hover:bg-[#f4b82a] text-gray-900 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition">
                  PAYPAL
                </button>
              </div>
              <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-3 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                  OR CONTINUE WITH ENCRYPTED FORM
                </span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
            </div>

            {/* ب. بيانات التواصل (Contact Dossier) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-black tracking-wider uppercase text-gray-900">
                  <span className="text-blue-600 mr-1.5">[01]</span> CONTACT DOSSIER
                </h3>
                <a href="#login" className="text-[10px] font-bold text-blue-600 hover:underline uppercase">
                  HAVE A VAULT ACCOUNT? LOG IN
                </a>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">
                  COMMUNICATION ADDRESS *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-xs font-medium text-gray-900 focus:outline-none focus:border-blue-600"
                  />
                  <CheckCircle2 size={16} className="text-emerald-500 absolute right-3.5 top-3" />
                </div>
                <label className="flex items-start gap-2.5 mt-3 cursor-pointer text-[11px] text-gray-600">
                  <input type="checkbox" defaultChecked className="mt-0.5 rounded border-gray-300 text-blue-600 w-4 h-4" />
                  <span>Transcribe this terminal for priority nocturnal access keys, secret lookbook drops, and unlisted archive drops.</span>
                </label>
              </div>
            </div>

            {/* ج. عنوان الشحن (Dispatch Destination) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xs font-black tracking-wider uppercase text-gray-900">
                  <span className="text-blue-600 mr-1.5">[02]</span> DISPATCH DESTINATION
                </h3>
                <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">GLOBAL TACTICAL CARGO</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">TERRITORY / HUB</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-xs font-bold text-gray-900 uppercase focus:outline-none focus:border-blue-600">
                    <option>UNITED STATES (CONUS & APO HUBS)</option>
                    <option>UNITED KINGDOM // LONDON NODE</option>
                    <option>JAPAN // TOKYO ARCHIVE</option>
                    <option>EGYPT // ALEXANDRIA & CAIRO HUB</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">FIRST NAME</label>
                    <input type="text" defaultValue="Alexander" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs font-medium focus:outline-none focus:border-blue-600" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">LAST NAME</label>
                    <input type="text" defaultValue="Vance" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs font-medium focus:outline-none focus:border-blue-600" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">STREET ADDRESS / RESIDENCE</label>
                  <input type="text" defaultValue="744 S San Pedro St" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs font-medium focus:outline-none focus:border-blue-600" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">APT / SUITE / SECURITY GATE CODE (OPTIONAL)</label>
                  <input type="text" defaultValue="Floor 4, Studio 400" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs font-medium focus:outline-none focus:border-blue-600" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">METRO / CITY</label>
                    <input type="text" defaultValue="Los Angeles" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs font-medium focus:outline-none focus:border-blue-600" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">STATE / PROVINCE</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-xs font-medium focus:outline-none focus:border-blue-600">
                      <option>California (CA)</option>
                      <option>New York (NY)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">POSTAL CODE</label>
                    <input type="text" defaultValue="90014" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs font-medium focus:outline-none focus:border-blue-600" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">SMS LOGISTICS DISPATCH LINE</label>
                  <div className="flex gap-2">
                    <span className="bg-gray-100 border border-gray-200 rounded-lg px-3 py-2.5 text-xs font-bold text-gray-700">+1 (US)</span>
                    <input type="text" defaultValue="213-555-0194" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs font-medium focus:outline-none focus:border-blue-600" />
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1.5">Direct courier telemetry updates transmitted via encrypted SMS prior to handoff.</p>
                </div>
              </div>
            </div>

            {/* د. خيارات الشحن (Logistics Frequency) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-black tracking-wider uppercase text-gray-900">
                  <span className="text-blue-600 mr-1.5">[03]</span> LOGISTICS FREQUENCY
                </h3>
                <span className="text-[9px] font-bold tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">INSURED CARGO</span>
              </div>

              <div className="space-y-3">
                {/* Standard */}
                <div 
                  onClick={() => setShippingMethod('standard')}
                  className={`border rounded-xl p-4 cursor-pointer transition flex items-center justify-between ${
                    shippingMethod === 'standard' ? 'border-blue-600 bg-blue-50/30' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input type="radio" checked={shippingMethod === 'standard'} readOnly className="text-blue-600 w-4 h-4" />
                    <div>
                      <span className="text-xs font-bold uppercase text-gray-900 block">STANDARD VAULT COURIER <span className="text-gray-400 font-normal ml-1">3-5 DAYS</span></span>
                      <span className="text-[11px] text-gray-500">Carbon-neutral transit in tamper-proof matte black archival packaging.</span>
                    </div>
                  </div>
                  <span className="text-xs font-black uppercase text-gray-900">FREE</span>
                </div>

                {/* Priority Air Drop */}
                <div 
                  onClick={() => setShippingMethod('priority')}
                  className={`border rounded-xl p-4 cursor-pointer transition flex items-center justify-between ${
                    shippingMethod === 'priority' ? 'border-blue-600 bg-blue-50/40' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input type="radio" checked={shippingMethod === 'priority'} readOnly className="text-blue-600 w-4 h-4" />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase text-gray-900">PRIORITY AIR DROP</span>
                        <span className="bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">PROMO APPLIED</span>
                        <span className="text-[10px] font-bold text-blue-600">1-2 DAYS</span>
                      </div>
                      <span className="text-[11px] text-gray-500 block mt-0.5">Guaranteed airborne release within 12h. Direct tarmac transfer.</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 line-through block">$25.00</span>
                    <span className="text-xs font-black uppercase text-blue-600">FREE</span>
                  </div>
                </div>

                {/* Saturday Nocturnal */}
                <div 
                  onClick={() => setShippingMethod('saturday')}
                  className={`border rounded-xl p-4 cursor-pointer transition flex items-center justify-between ${
                    shippingMethod === 'saturday' ? 'border-blue-600 bg-blue-50/30' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input type="radio" checked={shippingMethod === 'saturday'} readOnly className="text-blue-600 w-4 h-4" />
                    <div>
                      <span className="text-xs font-bold uppercase text-gray-900 block">SATURDAY NOCTURNAL HAND DELIVERY <span className="text-gray-400 font-normal ml-1">NYC / TYO / LDN</span></span>
                      <span className="text-[11px] text-gray-500">Dedicated uniformed operative drop between 20:00 - 02:00 local time.</span>
                    </div>
                  </div>
                  <span className="text-xs font-black uppercase text-gray-900">+$25.00</span>
                </div>
              </div>
            </div>

            {/* هـ. بروتوكول الدفع (Payment Protocol) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-black tracking-wider uppercase text-gray-900">
                  <span className="text-blue-600 mr-1.5">[04]</span> PAYMENT PROTOCOL
                </h3>
                <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase flex items-center gap-1">
                  <Lock size={11} /> 256-BIT QUANTUM LEVEL ENCRYPTION
                </span>
              </div>

              <div className="space-y-3">
                {/* Credit Card Option */}
                <div className={`border rounded-xl p-4 transition ${paymentMethod === 'card' ? 'border-blue-600 bg-gray-50/50' : 'border-gray-200'}`}>
                  <div onClick={() => setPaymentMethod('card')} className="flex items-center justify-between cursor-pointer mb-4">
                    <div className="flex items-center gap-2.5">
                      <input type="radio" checked={paymentMethod === 'card'} readOnly className="text-blue-600 w-4 h-4" />
                      <span className="text-xs font-bold uppercase text-gray-900">CREDIT / ARCHIVAL CHARGE CARD</span>
                    </div>
                    <div className="flex gap-1.5 text-[9px] font-bold text-gray-500">
                      <span className="border border-gray-200 bg-white px-2 py-0.5 rounded">VISA</span>
                      <span className="border border-gray-200 bg-white px-2 py-0.5 rounded">MC</span>
                      <span className="border border-gray-200 bg-white px-2 py-0.5 rounded">AMEX</span>
                    </div>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-3 pt-2 border-t border-gray-200">
                      <div>
                        <label className="block text-[9px] font-bold text-gray-500 uppercase mb-1">CARD NUMBER</label>
                        <div className="relative">
                          <input type="text" defaultValue="4242  8819  0293  9011" className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs font-mono font-bold focus:outline-none focus:border-blue-600" />
                          <CreditCard size={16} className="text-gray-400 absolute right-3.5 top-2.5" />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[9px] font-bold text-gray-500 uppercase mb-1">EXPIRATION</label>
                          <input type="text" defaultValue="08/28" className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-blue-600" />
                        </div>
                        <div>
                          <label className="block text-[9px] font-bold text-gray-500 uppercase mb-1">CVC / CVV</label>
                          <input type="text" defaultValue="842" className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-blue-600" />
                        </div>
                        <div>
                          <label className="block text-[9px] font-bold text-gray-500 uppercase mb-1">ISSUING HUB</label>
                          <input type="text" defaultValue="US / CA" className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold uppercase focus:outline-none focus:border-blue-600" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-gray-500 uppercase mb-1">CARDHOLDER ENTITY NAME</label>
                        <input type="text" defaultValue="ALEXANDER VANCE" className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2 text-xs font-bold uppercase focus:outline-none focus:border-blue-600" />
                      </div>
                      <label className="flex items-center gap-2 pt-1 text-[11px] text-gray-600 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-blue-600 w-3.5 h-3.5" />
                        <span>Billing matches dispatch address automatically</span>
                      </label>
                    </div>
                  )}
                </div>

                {/* Afterpay / Klarna */}
                <div onClick={() => setPaymentMethod('afterpay')} className={`border rounded-xl p-4 cursor-pointer flex items-center justify-between ${paymentMethod === 'afterpay' ? 'border-blue-600 bg-blue-50/20' : 'border-gray-200'}`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" checked={paymentMethod === 'afterpay'} readOnly className="text-blue-600 w-4 h-4" />
                    <div>
                      <span className="text-xs font-bold uppercase text-gray-900 block">AFTERPAY // KLARNA SPLIT</span>
                      <span className="text-[10px] text-gray-500">4 zero-interest fractional installments of $203.35</span>
                    </div>
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-bold px-2 py-0.5 rounded uppercase">0% APR</span>
                </div>

                {/* Web3 Vault Pay */}
                <div onClick={() => setPaymentMethod('web3')} className={`border rounded-xl p-4 cursor-pointer flex items-center justify-between ${paymentMethod === 'web3' ? 'border-blue-600 bg-blue-50/20' : 'border-gray-200'}`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" checked={paymentMethod === 'web3'} readOnly className="text-blue-600 w-4 h-4" />
                    <div>
                      <span className="text-xs font-bold uppercase text-gray-900 block">WEB3 VAULT PAY (USDC / ETH / BTC)</span>
                      <span className="text-[10px] text-gray-500">Instant non-custodial wallet signature via WalletConnect or MetaMask.</span>
                    </div>
                  </div>
                  <span className="bg-blue-50 text-blue-600 border border-blue-200 text-[9px] font-bold px-2 py-0.5 rounded uppercase">ON-CHAIN</span>
                </div>

                {/* Concierge */}
                <div onClick={() => setPaymentMethod('concierge')} className={`border rounded-xl p-4 cursor-pointer flex items-center justify-between ${paymentMethod === 'concierge' ? 'border-blue-600 bg-blue-50/20' : 'border-gray-200'}`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" checked={paymentMethod === 'concierge'} readOnly className="text-blue-600 w-4 h-4" />
                    <div>
                      <span className="text-xs font-bold uppercase text-gray-900 block">VAULT CONCIERGE SETTLEMENT</span>
                      <span className="text-[10px] text-gray-500">In-person biometric or physical handoff settlement at arrival (NYC / Tokyo).</span>
                    </div>
                  </div>
                  <span className="bg-gray-100 text-gray-600 text-[9px] font-bold px-2 py-0.5 rounded uppercase">FLAGSHIP ONLY</span>
                </div>
              </div>
            </div>

            {/* و. شارات الأمان السفلية */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                <ShieldCheck size={20} className="text-blue-600 shrink-0" />
                <div>
                  <span className="text-[10px] font-black uppercase block">256-BIT QUANTUM SHIELD</span>
                  <span className="text-[9px] text-gray-400">Military grade data encryption</span>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                <Lock size={20} className="text-blue-600 shrink-0" />
                <div>
                  <span className="text-[10px] font-black uppercase block">TAMPER-EVIDENT SEALS</span>
                  <span className="text-[9px] text-gray-400">Serialized RFID security labels</span>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                <CheckCircle2 size={20} className="text-blue-600 shrink-0" />
                <div>
                  <span className="text-[10px] font-black uppercase block">ARCHIVAL AUTHENTICITY</span>
                  <span className="text-[9px] text-gray-400">Certificate with NFC verification</span>
                </div>
              </div>
            </div>

          </div>

          {/* ================= العمود الأيمن (5 أعمدة): ملخص الطلب الثابت ================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              
              {/* عنوان الملخص */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200">
                <span className="text-xs font-black tracking-wider uppercase flex items-center gap-2">
                  📋 MANIFEST // 03 ITEMS
                </span>
                <a href="#cart" className="text-[10px] font-bold text-blue-600 hover:underline uppercase">
                  EDIT CART
                </a>
              </div>

              {/* قائمة المنتجات */}
              <div className="space-y-4 pb-5 mb-5 border-b border-gray-200">
                {manifestItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-3.5">
                    <div className="w-16 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200 relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <span className="absolute top-1 right-1 bg-black/80 text-white text-[8px] font-bold px-1.5 rounded">1</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs font-black uppercase text-gray-900 leading-tight">{item.name}</h4>
                        <span className="text-xs font-black text-gray-900">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 mt-1">{item.spec}</p>
                      <span className="inline-block mt-1.5 bg-gray-100 text-gray-700 text-[8px] font-bold tracking-wider px-2 py-0.5 rounded uppercase">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* كود الخصم */}
              <div className="pb-5 mb-5 border-b border-gray-200">
                <label className="block text-[9px] font-bold tracking-widest text-gray-500 uppercase mb-2">
                  VAULT PASS / PROMOTIONAL CODES
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="ENTER CODE"
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs font-bold uppercase focus:outline-none focus:border-blue-600"
                  />
                  <button 
                    onClick={() => setPromoApplied(true)}
                    className="bg-gray-900 hover:bg-black text-white text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-lg transition"
                  >
                    APPLY
                  </button>
                </div>

                {promoApplied && (
                  <div className="mt-2.5 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 flex items-center justify-between text-[10px]">
                    <span className="font-bold text-blue-700 flex items-center gap-1.5 uppercase">
                      <Tag size={12} /> APPLIED: {promoCode} (-10%)
                    </span>
                    <button onClick={() => setPromoApplied(false)} className="text-gray-400 hover:text-red-500 font-bold uppercase">
                      REMOVE
                    </button>
                  </div>
                )}
              </div>

              {/* تفاصيل الحساب */}
              <div className="space-y-2.5 text-xs pb-5 mb-5 border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Garment Manifest Subtotal</span>
                  <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Priority Airborne Dispatch <span className="text-[10px] text-blue-600 font-bold">(OVER $250)</span></span>
                  <span className="font-bold text-emerald-600 uppercase">{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-blue-600 font-medium">
                    <span>Vault Pass Deduction ({promoCode})</span>
                    <span className="font-bold">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Estimated Sales Tax & Import Duties</span>
                  <span className="font-bold text-gray-900">${taxes.toFixed(2)}</span>
                </div>
              </div>

              {/* الإجمالي النهائي */}
              <div className="flex items-end justify-between mb-6">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block">TOTAL ALLOCATION</span>
                  <span className="text-3xl font-black tracking-tight text-gray-900">${totalAllocation.toFixed(2)}</span>
                  <span className="text-[10px] font-bold text-gray-400 ml-1">USD</span>
                </div>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-bold px-2.5 py-1 rounded uppercase">
                  ALL TAXES INCLUDED
                </span>
              </div>

              {/* زر إتمام الدفع */}
              <button className="w-full bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold tracking-[0.1em] uppercase py-4 rounded-xl transition shadow-md flex items-center justify-center gap-2 mb-3">
                <Lock size={15} />
                <span>COMPLETE ORDER // PAY ${totalAllocation.toFixed(2)}</span>
                <ArrowRight size={16} />
              </button>

              <p className="text-center text-[10px] text-gray-400 mb-5">
                ⏱ Stock reservations are locked for <strong className="text-gray-700">15 minutes</strong>
              </p>

              {/* سياسة الاستبدال */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-[10px] text-gray-500 leading-relaxed">
                <span className="font-bold text-gray-800 uppercase flex items-center gap-1.5 mb-1">
                  <RefreshCw size={12} className="text-blue-600" /> NOCTURNAL EXCHANGE PROTOCOL
                </span>
                Enjoy 30-day effortless trial with prepaid digital return labels included in physical cargo box. Archival pieces must retain intact serialized tamper seals.
              </div>

            </div>

            {/* كارت الدعم السريع أسفل الملخص */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Headphones size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase text-gray-900 block">DISPATCH DESK ACTIVE</span>
                  <span className="text-[10px] text-gray-500">Priority concierge live chat available 24/7.</span>
                </div>
              </div>
              <button className="border border-gray-300 hover:bg-gray-100 text-[10px] font-bold uppercase px-3.5 py-2 rounded-lg transition">
                CONNECT
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;