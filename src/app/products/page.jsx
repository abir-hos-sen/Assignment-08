"use client";

import Link from "next/link";
import { FiArrowUpRight, FiStar, FiShoppingCart } from "react-icons/fi";
import productsData from "@/data/products.json";
import { toast } from "react-hot-toast";
import { useCart } from "@/context/CartContext";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
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
    <div className="bg-[#f8f9fa] min-h-screen py-10 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="bg-[#0d6efd] rounded-[2rem] p-8 md:p-12 mb-10 text-center relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-blue-700 rounded-full blur-3xl opacity-50"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">Our Products</h1>
          <p className="text-blue-100 max-w-2xl mx-auto relative z-10">
            Browse through our complete collection of summer essentials. Find everything you need for the perfect sunny days.
          </p>
        </div>

        {/* All Products Grid */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm mb-16 border border-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {productsData.map((product) => (
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
                  
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-1">{product.description}</p>
                  
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
                      className="w-full bg-gray-900 text-white text-sm font-bold py-3.5 rounded-xl hover:bg-[#0d6efd] transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <FiShoppingCart /> ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
