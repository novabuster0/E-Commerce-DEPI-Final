import React, { useState } from 'react';
import { Mail, Lock, ShieldCheck, ArrowRight } from 'lucide-react';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('signin'); // 'signin' | 'signup'
  const [email, setEmail] = useState('operative@nocturne.studio');
  const [password, setPassword] = useState('••••••••••••');

  return (
    <div className="w-full bg-white font-sans py-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Protocol Status Bar */}
        <div className="flex flex-wrap items-center justify-between text-[10px] font-bold tracking-widest text-gray-400 uppercase pb-6 mb-10 border-b border-gray-200 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-gray-900">GATEWAY_STATUS: ACTIVE</span>
          </div>
          <span>PROTOCOL: [V5]</span>
          <span>NODE: NYC_NORTH_EDGE_08</span>
          <span>SESSION: 0T8D_PERSISTENT</span>
          <span className="text-blue-600">VAULT_LOCK // VERIFIED</span>
        </div>

        {/* Main Grid: Left Banner vs Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Dark Technical Banner Card */}
          <div className="lg:col-span-5 relative bg-gray-900 rounded-2xl overflow-hidden p-8 sm:p-10 text-white min-h-[520px] flex flex-col justify-between shadow-xl">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80"
                alt="Vault Operative"
                className="w-full h-full object-cover object-center opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            </div>

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[9px] font-bold tracking-widest bg-blue-600/90 text-white px-2.5 py-1 rounded-sm uppercase">
                SPEC-NOCTURNE-04 // EDITION 2/04
              </span>
            </div>

            {/* Middle Manifesto Text */}
            <div className="relative z-10 my-auto py-6">
              <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase mb-2">
                MANIFESTO // 2026
              </p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight uppercase leading-snug">
                "ENGINEERED SILHOUETTES FOR SUBTERRANEAN METROPOLITAN CLIMATES."
              </h2>
              <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                Every release is capped in physical unit ceilings. Verified operatives receive automatic reservation windows 48 hours prior to public drop deployment.
              </p>
            </div>

            {/* Bottom Stats Grid */}
            <div className="relative z-10 grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <span className="text-[9px] text-gray-400 uppercase font-bold block">OPERATIVE FORCE</span>
                <span className="text-lg sm:text-xl font-black text-white">42.8K <span className="text-emerald-400 text-xs">● ACTIVE</span></span>
                <span className="text-[8px] text-gray-500 block">Global Vault Riders</span>
              </div>
              <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <span className="text-[9px] text-gray-400 uppercase font-bold block">DROP CLEARANCE</span>
                <span className="text-lg sm:text-xl font-black text-blue-400">T-48H <span className="text-xs text-white">(EARLY)</span></span>
                <span className="text-[8px] text-gray-500 block">Priority Allocator Pass</span>
              </div>
            </div>

            {/* Bottom System Sync Tag */}
            <div className="relative z-10 pt-4 flex items-center justify-between text-[9px] font-bold tracking-widest text-gray-400 uppercase border-t border-white/10 mt-4">
              <span>🔒 DIGITAL ARCHIVE PASS: INTEGRATED</span>
              <span className="text-emerald-400">SYNCHRONIZED</span>
            </div>
          </div>

          {/* Right Column: Authentication Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 shadow-sm">
            
            {/* Tabs Header */}
            <div className="flex items-center gap-4 border-b border-gray-200 mb-8 pb-4">
              <button
                onClick={() => setActiveTab('signin')}
                className={`text-xs font-bold tracking-widest uppercase transition pb-1 ${
                  activeTab === 'signin' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                [01] SIGN IN // VAULT ACCESS
              </button>
              <button
                onClick={() => setActiveTab('signup')}
                className={`text-xs font-bold tracking-widest uppercase transition pb-1 ${
                  activeTab === 'signup' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                [02] CREATE ACCOUNT [EANBLIP]
              </button>
            </div>

            <div className="mb-6">
              <span className="text-[9px] font-bold text-gray-400 uppercase block mb-1">VAULT CLEARANCE PROTOCOL // REKM_ID: #US-889-K</span>
              <h3 className="text-2xl font-black text-gray-900 uppercase">AUTHENTICATE CREDENTIALS</h3>
              <p className="text-xs text-gray-500 mt-1">Access your private drop reservations, order telemetry, and nocturnal tier access via verified credentials.</p>
            </div>

            {/* Instant Secure Gateway Buttons */}
            <div className="mb-6">
              <span className="text-[9px] font-bold text-gray-400 uppercase block mb-2">INSTANT SECURE GATEWAY</span>
              <div className="grid grid-cols-3 gap-3">
                <button className="bg-gray-50 hover:bg-gray-100 border border-gray-200 py-2.5 rounded-lg text-xs font-bold uppercase transition text-gray-800 flex items-center justify-center gap-1.5">
                   Apple ID
                </button>
                <button className="bg-gray-50 hover:bg-gray-100 border border-gray-200 py-2.5 rounded-lg text-xs font-bold uppercase transition text-gray-800 flex items-center justify-center gap-1.5">
                  G Google
                </button>
                <button className="bg-gray-50 hover:bg-gray-100 border border-gray-200 py-2.5 rounded-lg text-xs font-bold uppercase transition text-gray-800 flex items-center justify-center gap-1.5">
                  🌐 WEB3 WALLET
                </button>
              </div>
            </div>

            <div className="relative flex py-2 items-center mb-6">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-[9px] text-gray-400 font-bold uppercase tracking-wider">OR PROCEED WITH ENCRYPTED IDENTIFIER</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase mb-1.5 text-gray-700">
                  <span>Communication Identifier / Email</span>
                  <span className="text-gray-400 text-[10px]">[REF-99]</span>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400"><Mail size={16} /></span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-xs text-gray-900 uppercase font-medium focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold uppercase mb-1.5 text-gray-700">
                  <span>Access Passkey // Cipher</span>
                  <a href="#forgot" className="text-[10px] text-blue-600 hover:underline">Forgot Passkey?</a>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400"><Lock size={16} /></span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-xs text-gray-900 font-medium focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 w-4 h-4" />
                  <span>Remember this terminal (30-day session)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 w-4 h-4" />
                  <span>Passkey / TouchID Enabled</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold tracking-[0.1em] uppercase py-4 rounded-xl transition shadow-sm mb-4 flex items-center justify-center gap-2">
              <span>ACCESS VAULT // SIGN IN</span>
              <ArrowRight size={16} />
            </button>

            <div className="text-center text-xs text-gray-500 mb-6">
              New operative? <a href="#create" className="text-blue-600 font-bold hover:underline uppercase">ENLIST FOR VAULT ACCESS // CREATE ACCOUNT →</a>
            </div>

            {/* Bottom Security Badge */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center justify-center gap-2">
              <ShieldCheck size={16} className="text-blue-600" />
              <span>256-BIT QUANTUM SHIELD ENCRYPTED • ZERO-KNOWLEDGE AUTHENTICATION & NO IDENTIFIER LOGGING</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AuthPage;