"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FiSun, FiShoppingCart, FiUser, FiLogOut, FiShoppingBag, FiChevronDown } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const { cartCount } = useCart();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.refresh();
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2 w-max group">
            <FiSun size={32} className="text-yellow-400 fill-yellow-400 group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-bold tracking-tight text-gray-900">SunCart</span>
          </Link>
        </div>
        
        {/* Middle: Links */}
        <nav className="hidden md:flex gap-10 items-center justify-center flex-none">
          <Link href="/" className="text-sm font-bold text-gray-600 hover:text-[#0d6efd] transition-colors">Home</Link>
          <Link href="/products" className="text-sm font-bold text-gray-600 hover:text-[#0d6efd] transition-colors">Products</Link>
        </nav>

        {/* Right: Auth Buttons / Avatar */}
        <div className="flex items-center justify-end flex-1 gap-4 md:gap-6">
          
          {/* Cart Icon */}
          <Link href="/cart" className="relative p-2.5 text-gray-600 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-[#0d6efd] transition-all group">
            <FiShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#0d6efd] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                {cartCount}
              </span>
            )}
          </Link>

          {!isPending && session ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="flex items-center gap-3 p-1.5 pr-3 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all border border-transparent hover:border-gray-200">
                <div className="w-9 h-9 rounded-xl overflow-hidden border-2 border-white shadow-sm">
                  <img 
                    src={session.user.image || "https://ui-avatars.com/api/?name=" + session.user.name} 
                    alt="avatar" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="hidden sm:flex flex-col items-start leading-none">
                  <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Welcome</span>
                  <span className="text-sm font-bold text-gray-900 flex items-center gap-1">
                    {session.user.name.split(' ')[0]} <FiChevronDown className="text-gray-400" />
                  </span>
                </div>
              </div>
              
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-white rounded-[2rem] w-64 mt-4 border border-gray-100 animate__animated animate__fadeInUp animate__faster">
                {/* User Info Header */}
                <li className="p-4 border-b border-gray-50 mb-2 pointer-events-none">
                   <div className="flex flex-col gap-1">
                      <p className="text-sm font-black text-gray-900">{session.user.name}</p>
                      <p className="text-[10px] font-medium text-gray-400 truncate">{session.user.email}</p>
                   </div>
                </li>
                
                <li>
                  <Link href="/profile" className="flex items-center gap-3 p-4 hover:bg-blue-50 hover:text-[#0d6efd] rounded-2xl transition-all font-bold group">
                    <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-white shadow-sm transition-colors">
                      <FiUser className="w-4 h-4" />
                    </div>
                    My Profile
                  </Link>
                </li>
                
                <li>
                  <Link href="/cart" className="flex items-center gap-3 p-4 hover:bg-blue-50 hover:text-[#0d6efd] rounded-2xl transition-all font-bold group">
                    <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-white shadow-sm transition-colors">
                      <FiShoppingBag className="w-4 h-4" />
                    </div>
                    My Orders
                  </Link>
                </li>
                
                <li className="mt-2 pt-2 border-t border-gray-50">
                  <button 
                    onClick={handleLogout} 
                    className="flex items-center gap-3 p-4 text-red-500 hover:bg-red-50 rounded-2xl transition-all font-bold group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-white shadow-sm transition-colors">
                      <FiLogOut className="w-4 h-4" />
                    </div>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : !isPending && (
            <div className="flex gap-4 items-center">
              <Link href="/login" className="text-sm font-bold text-gray-600 hover:text-black transition-colors">Login</Link>
              <Link href="/register" className="bg-[#0d6efd] text-white text-sm font-black py-3 px-7 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95">Register</Link>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
