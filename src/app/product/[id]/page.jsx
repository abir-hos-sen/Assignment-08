import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import productsData from "@/data/products.json";
import Link from "next/link";
import { FiArrowLeft, FiShoppingCart, FiStar } from "react-icons/fi";

export default async function ProductDetailsPage({ params }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  
  if (!session) {
    redirect("/login");
  }

  const product = productsData.find(p => p.id.toString() === params.id);

  if (!product) {
    return <div className="container mx-auto p-8 text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl mt-8">
      <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-8 transition-colors">
        <FiArrowLeft /> Back to products
      </Link>

      <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 animate__animated animate__fadeIn">
        {/* Product Image */}
        <div className="flex-1 bg-slate-50 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
          <img src={product.image} alt={product.name} className="max-w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500" />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">{product.category}</span>
            <span className="flex items-center gap-1 text-yellow-500 text-sm font-medium"><FiStar className="fill-yellow-500" /> {product.rating}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-2">{product.name}</h1>
          <p className="text-slate-500 mb-6 font-medium">by {product.brand}</p>
          
          <div className="text-4xl font-bold text-slate-800 mb-6">${product.price}</div>
          
          <p className="text-slate-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-8">
            <span className="text-sm font-medium text-slate-500 block mb-2">Availability:</span>
            <span className="text-green-600 font-semibold">{product.stock} in stock</span>
          </div>

          <button className="bg-[#21325b] hover:bg-[#1a2849] text-white py-4 px-8 rounded-full font-semibold flex items-center justify-center gap-3 transition-colors shadow-lg">
            <FiShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
