"use client";

import Link from "next/link";
import { FiTrash2, FiMinus, FiPlus, FiShoppingCart, FiArrowLeft } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    toast.success("Order placed successfully! 🎉", {
      duration: 4000,
      icon: '🛍️',
      style: {
        borderRadius: '16px',
        background: '#333',
        color: '#fff',
      },
    });
    clearCart();
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl font-bold text-gray-900 mb-10 flex items-center gap-4">
          Shopping Cart
          {cartItems.length > 0 && <span className="text-sm font-medium bg-gray-200 px-3 py-1 rounded-full text-gray-600">{cartItems.length} items</span>}
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-[2.5rem] p-12 md:p-20 text-center border border-gray-50 shadow-sm animate__animated animate__fadeIn">
            <div className="text-8xl mb-8">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-10 max-w-sm mx-auto">Looks like you haven't added any summer essentials yet. Start exploring our latest arrivals!</p>
            <Link href="/products" className="inline-block bg-[#0d6efd] text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95">
              SHOP NOW
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-3xl flex flex-col sm:flex-row items-center gap-6 border border-gray-50 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden bg-gray-100 flex-none border border-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{item.name}</h3>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">{item.brand}</p>
                    <div className="text-[#0d6efd] font-black text-xl">${item.price}</div>
                  </div>

                  <div className="flex items-center gap-6">
                    {/* Quantity Controls */}
                    <div className="flex items-center bg-[#f8f9fa] rounded-xl p-1 border border-gray-100">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-gray-500 transition-colors"
                      >
                        <FiMinus />
                      </button>
                      <span className="w-10 text-center font-bold text-gray-900 text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-gray-500 transition-colors"
                      >
                        <FiPlus />
                      </button>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-3 text-red-500 bg-red-50 rounded-xl hover:bg-red-500 hover:text-white transition-all active:scale-90"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4 bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-50 shadow-sm sticky top-32">
              <h2 className="text-xl font-bold text-gray-900 mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Shipping</span>
                  <span className="text-[#10b981] font-black uppercase tracking-widest text-[10px]">Free</span>
                </div>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-end">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Total</span>
                  <span className="text-4xl font-black text-[#0d6efd] leading-none">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full py-5 bg-[#0d6efd] text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95"
              >
                CHECKOUT NOW
              </button>
              
              <div className="mt-8 text-center">
                <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Secure payment powered by SUNCART</p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
