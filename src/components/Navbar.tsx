"use client";

import Link from "next/link";
import { FiSearch, FiShoppingBag, FiHeart } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.refresh();
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="glassmorphism rounded-full px-6 py-3 flex items-center justify-between shadow-sm border border-slate-200 bg-white/70">
        <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 text-slate-800">
          <span className="bg-black text-white px-2 py-1 rounded-md text-sm">Sun</span>
          Cart.
        </Link>
        
        <div className="hidden md:flex flex-1 max-w-md mx-8 relative animate__animated animate__fadeInDown">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full bg-white rounded-full py-2 pl-5 pr-10 outline-none text-sm border border-slate-100 shadow-sm focus:border-slate-300 transition-colors text-slate-800"
          />
          <button className="absolute right-1 top-1 bg-black text-white p-1.5 rounded-full">
            <FiSearch className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="bg-white p-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow text-slate-600">
            <FiShoppingBag className="w-5 h-5" />
          </button>
          <button className="bg-white p-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow text-red-500 hidden sm:block">
            <FiHeart className="w-5 h-5 fill-red-50" />
          </button>

          {!isPending && session ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="bg-white flex items-center gap-3 pr-2 pl-4 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-slate-100">
                <span className="text-sm font-medium text-slate-700 hidden sm:block">{session.user.name}</span>
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img src={session.user.image || "https://ui-avatars.com/api/?name=" + session.user.name} alt="avatar" />
                  </div>
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52 mt-4 border border-slate-100 text-slate-800">
                <li><Link href="/profile">My Profile</Link></li>
                <li><button onClick={handleLogout} className="text-red-500">Logout</button></li>
              </ul>
            </div>
          ) : !isPending && (
            <div className="flex gap-2">
              <Link href="/login" className="btn btn-sm btn-ghost rounded-full px-4 text-slate-700">Login</Link>
              <Link href="/register" className="btn btn-sm bg-black text-white hover:bg-slate-800 rounded-full px-4 border-none">Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
