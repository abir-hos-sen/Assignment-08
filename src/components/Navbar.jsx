"use client";

import Link from "next/link";
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
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-1">
          <Link href="/" className="text-3xl font-serif tracking-tighter text-black w-max">
            SunCart
          </Link>
        </div>
        
        {/* Middle: Links */}
        <nav className="hidden md:flex gap-10 items-center justify-center flex-none">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Home</Link>
          <Link href="/#products" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Products</Link>
        </nav>

        {/* Right: Auth Buttons / Avatar */}
        <div className="flex items-center justify-end flex-1 gap-4">
          {!isPending && session ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <span className="text-sm font-medium text-gray-800 hidden sm:block">{session.user.name}</span>
                <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-200">
                  <img src={session.user.image || "https://ui-avatars.com/api/?name=" + session.user.name} alt="avatar" className="w-full h-full object-cover" />
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-white rounded-xl w-48 mt-4 border border-gray-100 text-gray-800">
                <li><Link href="/profile" className="hover:bg-gray-50">My Profile</Link></li>
                <li><button onClick={handleLogout} className="text-red-500 font-medium hover:bg-red-50">Logout</button></li>
              </ul>
            </div>
          ) : !isPending && (
            <div className="flex gap-4 items-center">
              <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Login</Link>
              <Link href="/register" className="bg-black text-white text-sm font-medium py-2 px-5 rounded-full hover:bg-gray-800 transition-colors">Register</Link>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
