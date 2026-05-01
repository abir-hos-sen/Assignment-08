"use client";

import Link from "next/link";
import { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";

export default function Footer() {
  const { data: session } = authClient.useSession();

  return (
    <footer className="w-full font-sans bg-white border-t border-gray-100 transition-colors duration-300">
      {/* Top Section - Rewards / Newsletter (Hidden if logged in) */}
      {!session && (
        <div className="bg-[#fcfcfc] py-20 px-6 text-center border-b border-gray-100 animate__animated animate__fadeIn">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide uppercase mb-4">Get Rewards For Shopping</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-8">
            Become a SunCart member and unlock exclusive rewards, including early sale access and more. The more you shop, the more you get.
          </p>
          <Link href="/register" className="inline-block bg-[#0d6efd] hover:bg-blue-700 text-white px-10 py-4 rounded-full text-sm font-bold tracking-wide transition-all shadow-xl shadow-blue-100 active:scale-95">
            CREATE FREE ACCOUNT
          </Link>
        </div>
      )}

      {/* Main Footer Section - Light Theme */}
      <div className="bg-white text-gray-600 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Brand & Newsletter */}
          <div className="md:col-span-5 lg:col-span-4">
            <h3 className="text-gray-900 text-lg font-bold tracking-tight mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white">☀️</span>
              SunCart
            </h3>
            <p className="text-sm mb-8 leading-relaxed max-w-xs">
              Your destination for premium summer essentials. Style meets sun in every piece we curate.
            </p>
            
            <h4 className="text-gray-900 text-xs font-bold tracking-widest uppercase mb-4">Stay Connected</h4>
            <form className="relative mb-8 max-w-xs">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-[#f8f9fa] border border-gray-100 text-gray-900 text-sm px-5 py-4 rounded-2xl focus:outline-none focus:border-[#0d6efd] transition-all placeholder:text-gray-400"
              />
              <button type="submit" className="absolute right-2 top-2 h-10 w-10 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-[#0d6efd] transition-all">
                <FiArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              <a href="#" className="w-10 h-10 bg-[#f8f9fa] rounded-xl flex items-center justify-center text-gray-900 hover:bg-[#0d6efd] hover:text-white transition-all shadow-sm"><FiInstagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 bg-[#f8f9fa] rounded-xl flex items-center justify-center text-gray-900 hover:bg-[#0d6efd] hover:text-white transition-all shadow-sm"><FiFacebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 bg-[#f8f9fa] rounded-xl flex items-center justify-center text-gray-900 hover:bg-[#0d6efd] hover:text-white transition-all shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="text-gray-900 text-xs font-black tracking-widest uppercase mb-8">Navigation</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link href="/products" className="hover:text-[#0d6efd] transition-colors">Shop All</Link></li>
                <li><Link href="/#popular" className="hover:text-[#0d6efd] transition-colors">Popular</Link></li>
                <li><Link href="#" className="hover:text-[#0d6efd] transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-[#0d6efd] transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-900 text-xs font-black tracking-widest uppercase mb-8">Legal</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link href="#" className="hover:text-[#0d6efd] transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[#0d6efd] transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-[#0d6efd] transition-colors">Returns & Refunds</Link></li>
                <li><Link href="#" className="hover:text-[#0d6efd] transition-colors">Accessibility</Link></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-gray-900 text-xs font-black tracking-widest uppercase mb-8">Contact Info</h3>
              <ul className="space-y-5 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <FiMail className="text-[#0d6efd]" />
                  <a href="mailto:support@suncart.com" className="hover:text-[#0d6efd] transition-colors">support@suncart.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone className="text-[#0d6efd]" />
                  <a href="tel:+1234567890" className="hover:text-[#0d6efd] transition-colors">+1 (234) 567-890</a>
                </li>
                <li className="flex items-start gap-3">
                  <FiMapPin className="text-[#0d6efd] mt-1" />
                  <span>123 Summer St, <br />Coastal City, CA 90210</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-12 py-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold text-gray-400 tracking-wider">
          <p>© 2026 SUNCART. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-gray-900 transition-colors">PRIVACY POLICY</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">TERMS</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">COOKIES</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
