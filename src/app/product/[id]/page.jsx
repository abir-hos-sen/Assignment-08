"use client";

import productsData from "@/data/products.json";
import Link from "next/link";
import { FiArrowLeft, FiShoppingCart, FiStar } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = productsData.find(p => p.id.toString() === id);

  if (!product) {
    return <div className="container mx-auto p-8 text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="bg-[#f4f5f8] min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] p-6 md:p-12 lg:p-16 shadow-sm flex flex-col min-h-[85vh]">
        <Link href="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-10 transition-colors text-sm font-semibold uppercase tracking-wider">
          <FiArrowLeft /> Back to products
        </Link>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="flex-1 bg-gray-50 rounded-2xl p-6 md:p-10 flex items-center justify-center min-h-[400px]">
            <img src={product.image} alt={product.name} className="max-w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 object-cover aspect-square" />
          </div>

          {/* Product Info */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="border border-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{product.category}</span>
              <span className="flex items-center gap-1 text-yellow-500 text-sm font-bold"><FiStar className="fill-yellow-500" /> {product.rating}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-8 font-medium">by {product.brand}</p>
            
            <div className="text-4xl font-bold text-gray-900 mb-8">${product.price}</div>
            
            <p className="text-gray-600 mb-10 leading-relaxed max-w-lg">
              {product.description}
            </p>

            <div className="mb-10 bg-gray-50 p-4 rounded-xl border border-gray-100 inline-block w-max">
              <span className="text-xs font-bold text-gray-500 block mb-1 uppercase tracking-wider">Availability</span>
              <span className="text-green-600 font-semibold">{product.stock} items in stock</span>
            </div>

            <button 
              onClick={() => addToCart(product)}
              className="bg-[#0d6efd] hover:bg-blue-700 text-white py-4 px-10 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-100 active:scale-95 w-full md:w-max"
            >
              <FiShoppingCart /> ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
