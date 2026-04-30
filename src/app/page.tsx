import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHeart } from "react-icons/fi";
import productsData from "@/data/products.json";

export default function Home() {
  const popularProducts = productsData.slice(0, 3);

  return (
    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
      {/* Hero Section */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-12 mt-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden animate__animated animate__fadeIn">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex-1 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">HOT DEALS 🔥</span>
            <span className="text-slate-500 text-sm">Summer Sale 50% OFF</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-800 mb-6">
            Summer Essentials<br /> SunCart.
          </h1>
          <div className="flex items-start gap-4 mb-8">
            <span className="text-5xl font-light text-slate-300">01</span>
            <div>
              <h3 className="font-semibold text-slate-700">Clear Vibes</h3>
              <p className="text-slate-500 text-sm max-w-xs mt-1">Making your dream summer come true, stay fresh with SunCart!</p>
            </div>
          </div>
          
          <Link href="/products" className="inline-flex items-center gap-4 bg-[#c5f24d] hover:bg-[#b0d944] text-slate-800 font-semibold py-3 px-6 rounded-full transition-colors shadow-sm">
            View All Products
            <span className="bg-black text-white p-2 rounded-full">
              <FiArrowRight />
            </span>
          </Link>

          <div className="mt-12 flex gap-4 text-slate-400">
            <span className="text-sm font-medium">Follow us on:</span>
            {/* Social Icons Placeholder */}
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-slate-200"></div>
              <div className="w-5 h-5 rounded-full bg-slate-200"></div>
              <div className="w-5 h-5 rounded-full bg-slate-200"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative z-10 w-full h-[400px] md:h-[500px]">
          {/* Main Hero Product Image */}
          <div className="absolute inset-0 flex items-center justify-center animate__animated animate__zoomIn animate__delay-1s">
             <img src="https://images.unsplash.com/photo-1575202332411-b01fe19976b1?auto=format&fit=crop&q=80&w=800" alt="Summer Hat" className="max-w-[80%] drop-shadow-2xl rounded-full aspect-square object-cover" />
          </div>
          
          {/* Decorative floating dots */}
          <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-blue-500 shadow-lg animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-6 h-6 rounded-full bg-slate-300 shadow-lg animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-black shadow-lg"></div>
        </div>
      </section>

      {/* Popular Products & Extras Grid */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 animate__animated animate__fadeInUp animate__delay-1s">
        
        {/* Colors/Categories Box */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
           <h3 className="text-slate-800 font-semibold mb-4">Summer Colors</h3>
           <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 shadow-sm border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-orange-400 shadow-sm border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-green-500 shadow-sm border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-red-500 shadow-sm border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-cyan-400 shadow-sm border-2 border-white"></div>
           </div>
           
           <div className="mt-8">
             <div className="flex justify-between items-center mb-4">
               <h3 className="text-slate-800 font-semibold text-sm">More Products<br/><span className="text-slate-400 text-xs font-normal">460 plus items.</span></h3>
               <div className="bg-red-50 p-2 rounded-full"><FiHeart className="text-red-500 w-4 h-4"/></div>
             </div>
             <div className="flex gap-2">
               <div className="w-12 h-12 bg-slate-100 rounded-xl overflow-hidden"><img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" /></div>
               <div className="w-12 h-12 bg-slate-100 rounded-xl overflow-hidden"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" /></div>
               <div className="w-12 h-12 bg-slate-100 rounded-xl overflow-hidden"><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" /></div>
             </div>
           </div>
        </div>

        {/* Popular Products Cards */}
        {popularProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 relative group overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <Link href={`/product/${product.id}`} className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
              <FiArrowRight className="text-slate-800 w-4 h-4" />
            </Link>
            
            <div className="bg-slate-50 rounded-2xl h-48 mb-4 relative overflow-hidden flex items-center justify-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            <div className="mt-auto">
               <h3 className="text-slate-800 font-semibold line-clamp-1">{product.name}</h3>
               <p className="text-slate-500 text-xs mb-3">{product.brand}</p>
               <div className="flex justify-between items-center">
                 <span className="font-bold text-slate-800">${product.price}</span>
                 <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">
                   ⭐ {product.rating}
                 </div>
               </div>
            </div>
          </div>
        ))}

        {/* Summer Care Tips Extra Section */}
        <div className="bg-[#c5f24d] rounded-3xl p-6 shadow-sm flex flex-col justify-between overflow-hidden relative group md:col-span-1 lg:col-span-1">
          <div className="relative z-10">
            <span className="bg-white/50 text-slate-800 text-xs font-bold px-2 py-1 rounded">TIPS 💡</span>
            <h3 className="text-slate-800 font-bold text-xl mt-4 max-w-[150px]">Summer Care & Hydration</h3>
            <p className="text-slate-700 text-sm mt-2">Stay hydrated and protect your skin.</p>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-xl group-hover:scale-110 transition-transform"></div>
        </div>

      </section>
    </div>
  );
}
