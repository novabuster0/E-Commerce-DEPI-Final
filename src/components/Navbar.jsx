import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-4">
        
        {/* Left Section: Mobile Menu Button + Logo + Links */}
        <div className="flex items-center gap-6 lg:gap-10">
          {/* Hamburger Button for Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 text-gray-800 hover:bg-gray-100 rounded-md transition"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Brand Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-6 h-6 bg-[#111827] text-white flex items-center justify-center text-[7px] font-bold tracking-tighter">
              NOVA
            </div>
            <span className="text-base sm:text-lg font-bold tracking-[0.08em] text-[#111827] uppercase">
              URBANOVA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#new-arrivals" className="text-xs font-semibold tracking-[0.06em] text-gray-700 hover:text-black transition uppercase">
              NEW ARRIVALS
            </a>
            <a href="#men" className="text-xs font-semibold tracking-[0.06em] text-gray-700 hover:text-black transition uppercase">
              MEN
            </a>
            <a href="#women" className="text-xs font-semibold tracking-[0.06em] text-gray-700 hover:text-black transition uppercase">
              WOMEN
            </a>
            <a href="#collections" className="text-xs font-semibold tracking-[0.06em] text-gray-700 hover:text-black transition uppercase">
              COLLECTIONS
            </a>
            <a href="#sale" className="text-xs font-semibold tracking-[0.06em] text-gray-700 hover:text-black transition flex items-center gap-1.5 uppercase">
              SALE
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block"></span>
            </a>
          </nav>
        </div>

        {/* Right Section: Search + Icons + Profile */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center bg-[#F3F4F6] border border-gray-200 rounded-md px-3 py-1.5 w-60 xl:w-72 focus-within:border-gray-400 focus-within:bg-white transition">
            <Search size={15} className="text-gray-400 shrink-0 mr-2" />
            <input
              type="text"
              placeholder="Search drops, pieces..."
              className="bg-transparent text-xs text-gray-800 placeholder-gray-400 focus:outline-none w-full"
            />
            <kbd className="text-[10px] font-medium text-gray-400 bg-white border border-gray-200 rounded px-1.5 py-0.5 ml-2 shrink-0">
              ⌘K
            </kbd>
          </div>

          {/* Wishlist Icon */}
          <button
            className="p-1.5 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full transition"
            aria-label="Wishlist"
          >
            <Heart size={20} strokeWidth={1.75} />
          </button>

          {/* Clean Shopping Bag Icon */}
          <button
            className="p-1.5 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full transition"
            aria-label="Shopping Bag"
          >
            <ShoppingBag size={20} strokeWidth={1.75} />
          </button>

          {/* User Avatar */}
          <button className="w-8 h-8 rounded-full overflow-hidden border border-gray-300 shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 pt-3 pb-6 space-y-4 shadow-lg">
          {/* Mobile Search Bar */}
          <div className="flex md:hidden items-center bg-[#F3F4F6] border border-gray-200 rounded-md px-3 py-2">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search drops, pieces..."
              className="bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none w-full"
            />
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col space-y-3">
            <a href="#new-arrivals" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold tracking-wider text-gray-800 hover:text-blue-600 py-1.5 border-b border-gray-100 uppercase">
              NEW ARRIVALS
            </a>
            <a href="#men" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold tracking-wider text-gray-800 hover:text-blue-600 py-1.5 border-b border-gray-100 uppercase">
              MEN
            </a>
            <a href="#women" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold tracking-wider text-gray-800 hover:text-blue-600 py-1.5 border-b border-gray-100 uppercase">
              WOMEN
            </a>
            <a href="#collections" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold tracking-wider text-gray-800 hover:text-blue-600 py-1.5 border-b border-gray-100 uppercase">
              COLLECTIONS
            </a>
            <a href="#sale" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold tracking-wider text-gray-800 hover:text-blue-600 py-1.5 border-b border-gray-100 flex items-center justify-between uppercase">
              <span>SALE</span>
              <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">HOT</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;