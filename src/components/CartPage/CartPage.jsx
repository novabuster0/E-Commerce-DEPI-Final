import React, { useState } from 'react';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, RefreshCw, Truck, ChevronRight } from 'lucide-react';

const CartPage = () => {
  // حالة المنتجات في السلة
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'VEKTOR ASYMMETRIC MODULAR SHELL PARKA',
      category: 'ARCH-02 // SFM24',
      size: 'L',
      color: 'Onyx',
      price: 380,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'KURO WIDE-LEG PLEATED CARGO',
      category: 'SILHOUETTE // P-04',
      size: 'M',
      color: 'Stealth Black',
      price: 240,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'TACTICAL RIBBED ZIP KNIT',
      category: 'SEASONAL SPECIAL // 2 ARCHIVE',
      size: 'S',
      color: 'Pitch Black',
      price: 210,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&w=800&q=80',
    },
  ]);

  const [includePackaging, setIncludePackaging] = useState(true);

  // المنتجات المقترحة (Pairs Well With)
  const pairedItems = [
    {
      id: 101,
      name: 'COBRA-LOCK TACTICAL LEATHER BELT',
      category: 'HARDWARE',
      price: '$120.00',
      tag: 'COMPATIBLE',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 102,
      name: 'MODULAR RIG POUCH 0.5L',
      category: 'ACCESSORIES',
      price: '$85.00',
      tag: 'NEW COMPONENT',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 103,
      name: 'GHOST-STITCH RIBBED BEANIE',
      category: 'HEADWEAR',
      price: '$65.00',
      tag: 'ESSENTIAL',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const updateQuantity = (id, delta) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const packagingCost = includePackaging ? 0 : 0; // حسب التصميم مجاني مع الكود
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="w-full bg-white font-sans">
      
      {/* Top Breadcrumb & Status */}
      <div className="bg-gray-50 border-b border-gray-200 py-6 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-500 uppercase font-medium">
            <a href="/" className="hover:text-black">Catalog</a>
            <ChevronRight size={12} className="text-gray-400" />
            <span className="text-gray-900 font-bold">Cart Manifest (310)</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-sm uppercase">
            ● Inventory Reserved: 14:30
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10">
        
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111827] uppercase mb-2">
          SHOPPING BAG <span className="text-gray-400 text-lg font-light">(3 ITEMS)</span>
        </h1>
        <p className="text-xs text-gray-500 uppercase mb-8">
          Review drop selections prior to vault checkout reservation.
        </p>

        {/* Free Shipping Progress Bar */}
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl mb-10 max-w-xl">
          <div className="flex items-center justify-between text-xs font-bold mb-2 uppercase">
            <span className="text-blue-600">Express Shipping</span>
            <span className="text-gray-700">95% Unlocked!</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
            <div className="bg-blue-600 h-full w-[95%] rounded-full"></div>
          </div>
          <p className="text-[10px] text-gray-500">
            Add <span className="font-bold text-gray-900">$20.00</span> more to get <span className="font-bold text-blue-600">FREE EXPRESS WORLDWIDE COURIER</span>
          </p>
        </div>

        {/* Grid Layout: Left Items vs Right Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Items List */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Table Headers */}
            <div className="hidden sm:grid grid-cols-12 text-[10px] font-bold tracking-widest text-gray-400 uppercase pb-3 border-b border-gray-200">
              <span className="col-span-7">Price Specification</span>
              <span className="col-span-3 text-center">Allocation</span>
              <span className="col-span-2 text-right">Subtotal</span>
            </div>

            {/* Items */}
            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center pb-6 border-b border-gray-200">
                
                {/* Item Image & Info */}
                <div className="sm:col-span-7 flex items-center gap-4">
                  <div className="w-20 h-24 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-blue-600 uppercase block mb-0.5">{item.category}</span>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase mb-1">{item.name}</h3>
                    <p className="text-[10px] text-gray-500 uppercase">Size: {item.size} • Color: {item.color}</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 text-[10px] uppercase font-bold flex items-center gap-1 mt-2"
                    >
                      <Trash2 size={12} /> Remove
                    </button>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="sm:col-span-3 flex justify-center">
                  <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 px-2 py-1.5">
                    <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-600 px-2"><Minus size={12} /></button>
                    <span className="w-6 text-center text-xs font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-600 px-2"><Plus size={12} /></button>
                  </div>
                </div>

                {/* Subtotal & Delete */}
                <div className="sm:col-span-2 flex sm:flex-col items-center sm:items-end justify-between">
                  <span className="text-sm font-black text-gray-900">${item.price * item.quantity}.00</span>
                </div>

              </div>
            ))}

            {/* Editorial Packaging Add-on */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={includePackaging}
                  onChange={() => setIncludePackaging(!includePackaging)}
                  className="rounded border-gray-300 text-blue-600 w-4 h-4"
                />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase">Editorial Vault Packaging & Personalized Card</h4>
                  <p className="text-[10px] text-gray-500">Custom UV-embossed matte-black box-dust-deus, sealed with wax monogram, custom laser-printed editorial message.</p>
                </div>
              </div>
              <span className="text-xs font-bold text-blue-600 shrink-0">INCLUDED</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <a href="#continue" className="text-xs font-bold uppercase text-gray-800 hover:underline">← Continue Shopping</a>
              <button className="text-xs font-bold uppercase text-gray-400 hover:text-red-600">Clear Manifest</button>
            </div>

          </div>

          {/* Right Column: Order Summary Box */}
          <div className="lg:col-span-4 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between text-xs font-bold uppercase pb-4 border-b border-gray-200 mb-4">
              <span>Order Summary</span>
              <span className="text-gray-400">VAT NET: #UB8B-N192</span>
            </div>

            <div className="space-y-3 text-xs mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal (3 pieces)</span>
                <span className="font-bold text-gray-900">${subtotal}.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Estimated Shipping</span>
                <span className="font-bold text-emerald-600">FREE (95% LOCK)</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Estimated Sales Tax (8%)</span>
                <span className="font-bold text-gray-900">${tax.toFixed(2)}</span>
              </div>
            </div>

            {/* Coupon Code Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6 flex items-center justify-between text-xs">
              <span className="font-bold text-blue-700">🎟️ COUPON: URBANOVA (10% OFF)</span>
              <span className="font-bold text-blue-600">-$45.00</span>
            </div>

            {/* Gift Card Option */}
            <div className="flex items-center justify-between text-xs text-gray-500 uppercase pb-4 border-b border-gray-200 mb-6 cursor-pointer">
              <span>Have an access code / gift card?</span>
              <span>+</span>
            </div>

            <div className="flex justify-between text-sm font-black text-gray-900 uppercase mb-6">
              <span>Total Allocation</span>
              <span className="text-lg">${(total - 45).toFixed(2)} USD NET</span>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold tracking-[0.1em] uppercase py-4 rounded-xl transition shadow-sm mb-4 flex items-center justify-center gap-2">
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight size={16} />
            </button>

            {/* Instant Checkout Icons */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              <button className="bg-white border border-gray-200 py-2 rounded-lg text-xs font-bold uppercase hover:bg-gray-100"> Pay</button>
              <button className="bg-white border border-gray-200 py-2 rounded-lg text-xs font-bold uppercase hover:bg-gray-100">G Pay</button>
              <button className="bg-white border border-gray-200 py-2 rounded-lg text-xs font-bold uppercase hover:bg-gray-100">PayPal</button>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200 text-center text-[9px] text-gray-500 font-bold uppercase">
              <div>🔒 256-BIT SSL ENCRYPTED</div>
              <div>🔄 30-DAY FREE RETURNS</div>
              <div>🛡️ 100% AUTHENTIC VERIFIED</div>
            </div>
          </div>

        </div>

        {/* Pairs Well With Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[10px] font-bold tracking-[0.16em] text-blue-600 uppercase block mb-1">MODULAR INTEGRATION</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827] uppercase">PAIRS WELL WITH</h2>
            </div>
            <div className="flex gap-2">
              <button aria-label="Previous items" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100">‹</button>
              <button aria-label="Next items" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100">›</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pairedItems.map((item) => (
              <div key={item.id} className="group bg-white border border-gray-200 rounded-2xl p-4 shadow-2xs hover:shadow-md transition">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 mb-4">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute top-3 left-3 bg-[#111827] text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm">{item.tag}</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-blue-600 uppercase">{item.category}</span>
                  <span className="text-sm font-black text-gray-900">{item.price}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase mb-4">{item.name}</h3>
                <button className="w-full bg-gray-100 hover:bg-[#2563EB] hover:text-white text-gray-900 text-xs font-bold tracking-wider uppercase py-2.5 rounded-lg transition">
                  + QUICK ADD TO BAG
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;