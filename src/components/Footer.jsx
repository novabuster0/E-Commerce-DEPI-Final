import React from 'react';

const Footer = ({ bgClass = "bg-white text-gray-900 border-gray-200", isDark = false }) => {
  return (
    <footer className={`w-full ${bgClass} border-t pt-16 pb-12 font-sans transition-colors duration-300`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          
          {/* Left Column: Brand & Newsletter Signup */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className={`text-[10px] font-bold tracking-[0.16em] uppercase mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                LIMITED DROPS & EDITORIAL
              </p>
              <h3 className={`text-2xl sm:text-3xl font-black tracking-tight uppercase mb-4 ${isDark ? 'text-white' : 'text-[#111827]'}`}>
                ACCESS THE VAULT
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed max-w-sm mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Subscribe to gain private access codes to seasonal drops, structural lookbooks, and nocturnal capsules before general release.
              </p>
            </div>

            {/* Newsletter Input Form */}
            <div className="flex items-center gap-2 max-w-md">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className={`border rounded-md px-4 py-3 text-xs focus:outline-none w-full uppercase ${
                  isDark 
                    ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500' 
                    : 'bg-[#F3F4F6] border-gray-200 text-gray-800 placeholder-gray-400 focus:border-gray-400'
                }`}
              />
              <button
                className="bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold tracking-[0.1em] uppercase px-6 py-3 rounded-md transition shrink-0 shadow-sm"
              >
                JOIN
              </button>
            </div>
          </div>

          {/* Right Columns: Navigation Links (Shop, Support, Brand) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Shop Links */}
            <div>
              <h4 className={`text-[11px] font-bold tracking-[0.14em] uppercase mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                SHOP
              </h4>
              <ul className="space-y-3">
                <li><a href="#men" className={`text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Men</a></li>
                <li><a href="#women" className={`text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Women</a></li>
                <li><a href="#footwear" className={`text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Footwear</a></li>
                <li><a href="#accessories" className={`text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Accessories</a></li>
                <li><a href="#archive" className={`text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Archive</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className={`text-[11px] font-bold tracking-[0.14em] uppercase mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                SUPPORT
              </h4>
              <ul className="space-y-3">
                <li><a href="#orders" className={`text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Orders</a></li>
                <li><a href="#shipping" className={`text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Shipping</a></li>
                <li><a href="#returns" className={`text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Returns</a></li>
                <li><a href="#size-guide" className={`text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Size Guide</a></li>
                <li><a href="#contact" className={`text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Contact</a></li>
              </ul>
            </div>

            {/* Brand Links */}
            <div>
              <h4 className={`text-[11px] font-bold tracking-[0.14em] uppercase mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                BRAND
              </h4>
              <ul className="space-y-3">
                <li><a href="#story" className={`text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Our Story</a></li>
                <li><a href="#sustainability" className={`text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Sustainability</a></li>
                <li><a href="#editorial" className={`text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Editorial</a></li>
                <li><a href="#careers" className={`text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Careers</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Payment Badges, Handle & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Payment Methods Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {['VISA', 'MASTERCARD', 'AMEX', 'APPLE PAY', 'PAYPAL'].map((method) => (
              <span
                key={method}
                className={`text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-sm uppercase border ${
                  isDark ? 'bg-gray-900 border-gray-800 text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-700'
                }`}
              >
                {method}
              </span>
            ))}
          </div>

          {/* Social Handle & Currency */}
          <div className={`flex items-center gap-4 text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <span>@urbanova</span>
            <span className={isDark ? 'text-gray-700' : 'text-gray-300'}>|</span>
            <span className={`inline-flex items-center gap-1.5 border px-2.5 py-1 rounded-full text-[10px] font-bold ${
              isDark ? 'bg-gray-900 border-gray-800 text-gray-200' : 'bg-gray-100 border-gray-200 text-gray-800'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}></span>
              USD ($)
            </span>
          </div>

          {/* Copyright */}
          <div className={`text-[11px] tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2024 URBANOVA. ALL RIGHTS RESERVED.
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;