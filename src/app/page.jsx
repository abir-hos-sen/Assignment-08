import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiHeart } from "react-icons/fi";
import productsData from "@/data/products.json";

export default function Home() {
  const popularProducts = productsData.slice(0, 3);

  return (
    <div className="bg-[#f4f5f8] min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-sm flex flex-col min-h-[85vh]">
        
        {/* Top Header/Nav inside the card area (optional but adds to the aesthetic) */}
        <div className="hidden md:flex justify-between items-center mb-16 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          <div className="flex gap-8">
            <span className="text-black border-b border-black pb-1">About</span>
            <span className="hover:text-black cursor-pointer transition-colors">Essentials</span>
            <span className="hover:text-black cursor-pointer transition-colors">New Arrivals</span>
          </div>
          <div className="flex gap-6 items-center">
            <span className="hover:text-black cursor-pointer transition-colors">Search</span>
            <span className="hover:text-black cursor-pointer transition-colors">Cart (0)</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20 flex-1">
          
          {/* Left Text */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Where summer<br />style meets<br />timeless <span className="text-[#0ea5e9] italic font-serif">elegance</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed mb-10 font-medium">
              We design thoughtfully crafted summer essentials that celebrate simplicity, balance, and modern living. Discover fashion that feels effortless, refined, and lasting.
            </p>
            
            <div className="flex gap-4">
              <Link href="/#products" className="px-8 py-3.5 rounded-lg border border-gray-300 text-gray-900 text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm">
                Lookbook
              </Link>
              <Link href="/#products" className="px-8 py-3.5 rounded-lg bg-[#0ea5e9] text-white text-sm font-semibold hover:bg-[#0284c7] transition-colors shadow-sm">
                Shop now
              </Link>
            </div>
          </div>

          {/* Right Large Image */}
          <div className="flex-1 relative min-h-[500px] lg:min-h-0 rounded-[2rem] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1515347619252-70b6fb29ebdd?auto=format&fit=crop&q=80&w=800" 
              alt="Summer Fashion" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <Link href="/#products" className="absolute top-6 left-6 z-20 flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-white/20 transition-colors">
              Explore our collection
              <FiArrowUpRight className="w-4 h-4" />
            </Link>

            <h3 className="absolute bottom-8 left-8 z-20 text-white font-bold text-2xl tracking-wide">
              Tailored Summer Fit
            </h3>
          </div>
        </div>

        {/* Products Row */}
        <div id="products" className="mt-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-[#0ea5e9] text-xs font-bold uppercase tracking-wider mb-2 block">Hot Deals 🔥</span>
              <h2 className="text-3xl font-serif text-gray-900">Summer Sale 50% OFF</h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-gray-500 hover:text-black hidden md:block border-b border-gray-300 pb-1">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {popularProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100 flex flex-col justify-end p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                <div className="relative z-20">
                  <h3 className="text-white font-bold text-lg mb-1">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm font-medium">{product.brand}</span>
                    <span className="text-white font-semibold">${product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
