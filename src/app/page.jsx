"use client";

import Link from "next/link";
import productsData from "@/data/products.json";
import { FiShoppingCart, FiArrowUpRight, FiStar, FiSun } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Home() {
  const popularProducts = productsData.slice(0, 3);
  const { addToCart } = useCart();
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleAction = (callback) => {
    if (!session) {
      toast.error("Please login first to shop!", {
        style: { borderRadius: '1rem', background: '#333', color: '#fff' }
      });
      router.push("/login");
      return;
    }
    callback();
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* NEXTGEN STYLE HERO SECTION - Full Width Banner */}
        <div className="mb-16">
          <div className="relative h-[600px] md:h-[700px] bg-gray-900 rounded-[3rem] overflow-hidden group shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=2070" 
               alt="Hero" 
               className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
             
             <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center items-center text-center">
               <div className="animate__animated animate__fadeInUp max-w-4xl">
                 <span className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-black uppercase tracking-[0.2em] mb-8 inline-block shadow-xl">
                   Summer Collection 2026
                 </span>
                 <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-8 drop-shadow-2xl">
                   Summer Arrival of Outfit
                 </h1>
                 <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-medium drop-shadow-md leading-relaxed">
                   Discover quality fashion that reflects your style and makes everyday enjoyable with our premium summer collection.
                 </p>
                 <button 
                  onClick={() => handleAction(() => router.push("/products"))}
                  className="bg-white text-gray-900 px-12 py-6 rounded-full font-black text-lg hover:bg-yellow-400 hover:text-black transition-all flex items-center gap-3 shadow-2xl active:scale-95 group mx-auto w-max"
                 >
                   EXPLORE ALL PRODUCTS <FiArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
               </div>
             </div>
          </div>
        </div>

        {/* PROMO CARDS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Summer Sale Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0d6efd] to-blue-400 rounded-[2.5rem] p-8 md:p-10 shadow-xl group hover:shadow-2xl transition-all cursor-pointer">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform text-white">
              <FiSun size={120} />
            </div>
            <div className="relative z-10">
              <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Limited Offer</span>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight uppercase">Summer Sale <br/> <span className="text-yellow-400">50% OFF</span></h3>
              <p className="text-white/80 font-medium mb-6">Unbeatable prices on all beach essentials.</p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition-colors">
                SHOP NOW <FiArrowUpRight />
              </button>
            </div>
          </div>

          {/* Hot Deals Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-red-500 rounded-[2.5rem] p-8 md:p-10 shadow-xl group hover:shadow-2xl transition-all cursor-pointer">
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <span className="bg-white text-orange-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Best Value</span>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight uppercase">Hot Deals <br/> <span className="animate-pulse">🔥</span></h3>
              <p className="text-white/80 font-medium mb-6">Handpicked items at unbelievable prices.</p>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-white hover:text-gray-900 transition-colors">
                GRAB DEALS <FiArrowUpRight />
              </button>
            </div>
          </div>
        </div>

        {/* Popular Products */}
        <div id="popular" className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm mb-16 border border-gray-50">
          <div className="flex justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">🔥 Popular Products</h2>
              <p className="text-gray-500 text-sm md:text-base">Our most loved summer essentials.</p>
            </div>
            <button 
              onClick={() => handleAction(() => router.push("/products"))}
              className="text-[#0d6efd] font-semibold text-sm hover:underline flex items-center gap-1"
            >
              View All <FiArrowUpRight />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {popularProducts.map((product) => (
              <div key={product.id} className="group flex flex-col bg-[#f8f9fa] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-gray-900 shadow-sm">{product.brand}</div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-gray-900 font-bold text-lg group-hover:text-[#0d6efd] transition-colors">{product.name}</h3>
                    <div className="flex items-center gap-1 bg-white px-2 py-1 rounded text-xs font-bold text-gray-700 shadow-sm border border-gray-100">
                      <FiStar className="fill-yellow-400 text-yellow-400" /> {product.rating}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-[#0d6efd] text-2xl font-black">${product.price}</span>
                      <button 
                        onClick={() => handleAction(() => router.push(`/product/${product.id}`))}
                        className="text-xs font-bold text-gray-500 hover:text-[#0d6efd] transition-colors flex items-center gap-1"
                      >
                        Details <FiArrowUpRight />
                      </button>
                    </div>
                    <button 
                      onClick={() => handleAction(() => addToCart(product))}
                      className="w-full bg-gray-900 text-white text-sm font-bold py-3 rounded-xl hover:bg-[#0d6efd] transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <FiShoppingCart /> ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summer Care Tips & Top Brands */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Summer Care Tips */}
          <div className="bg-[#e9ecef] rounded-[2rem] p-8 md:p-10 relative overflow-hidden group shadow-sm hover:shadow-md transition-all flex flex-col justify-center border border-transparent">
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-blue-300 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
            <span className="bg-[#0d6efd] text-white px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider mb-8 inline-block shadow-sm w-max">Tips 💡</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Summer Care Tips</h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <span className="text-3xl bg-white p-3 rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center">💧</span>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900 text-base mb-1">Hydration is Key</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Drink at least 8 glasses of water daily to keep your skin glowing.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl bg-white p-3 rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center">🧴</span>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900 text-base mb-1">Always wear Sunscreen</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Apply SPF 30+ every two hours when outdoors.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl bg-white p-3 rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center">🕶️</span>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900 text-base mb-1">Eye Protection</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Wear UV-protective sunglasses to prevent sun damage.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Top Brands */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm flex flex-col justify-center border border-gray-50">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center lg:text-left">Top Brands</h3>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[ {s: "🌊", n: "SunShade"}, {s: "🏄‍♂️", n: "WaveRider"}, {s: "🌴", n: "SummerCo"}, {s: "✨", n: "SkinCare+"} ].map((b, i) => (
                <div key={i} onClick={() => handleAction(() => {})} className="bg-[#f8f9fa] border border-gray-100 rounded-3xl h-32 flex flex-col items-center justify-center font-bold text-gray-400 hover:text-[#0d6efd] hover:border-blue-200 hover:bg-blue-50 hover:shadow-lg transition-all cursor-pointer">
                  <span className="text-3xl mb-1">{b.s}</span>
                  <span className="text-sm">{b.n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-50 rounded-[2rem] p-8 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0d6efd] text-2xl mb-6">🚚</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Free Shipping</h3>
            <p className="text-gray-500 text-sm">On all orders over $50.</p>
          </div>
          <div className="bg-white border border-gray-50 rounded-[2rem] p-8 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0d6efd] text-2xl mb-6">🛡️</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Secure Payment</h3>
            <p className="text-gray-500 text-sm">Protected by SunCart.</p>
          </div>
          <div className="bg-white border border-gray-50 rounded-[2rem] p-8 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0d6efd] text-2xl mb-6">↩️</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Easy Returns</h3>
            <p className="text-gray-500 text-sm">30-day return policy.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
