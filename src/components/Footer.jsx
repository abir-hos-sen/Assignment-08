import Link from "next/link";
import { FiInstagram, FiTwitter, FiFacebook, FiArrowRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full font-sans border-t border-gray-100">
      {/* Top Section - Rewards */}
      <div className="bg-[#fcfcfc] py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide uppercase mb-4">Get Rewards For Shopping</h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-8">
          Become a SunCart member and unlock exclusive rewards, including early sale access and more. The more you shop, the more you get.
        </p>
        <Link href="/register" className="inline-block bg-[#111111] hover:bg-black text-white px-8 py-3.5 text-sm font-medium tracking-wide transition-colors">
          Create free account
        </Link>
      </div>

      {/* Bottom Section - Dark */}
      <div className="bg-[#111111] text-[#b3b3b3] py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Newsletter Section */}
          <div className="md:col-span-5 lg:col-span-4">
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Sign Up For 10% Off</h3>
            <p className="text-xs mb-6 leading-relaxed">Subscribe to get special offers & once-in-a-lifetime deals.</p>
            <form className="relative mb-12">
              <input 
                type="email" 
                placeholder="Enter your e-mail address here" 
                className="w-full bg-transparent border border-[#333] text-white text-sm px-4 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-[#666]"
              />
              <button type="submit" className="absolute right-0 top-0 h-full px-4 text-white hover:text-gray-300">
                <FiArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex gap-6 items-center">
              <a href="#" className="text-white hover:text-gray-400 transition-colors"><FiInstagram className="w-4 h-4" /></a>
              <a href="#" className="text-white hover:text-gray-400 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 011.22.21V9.39a6.32 6.32 0 00-1.22-.12 6.34 6.34 0 00-5.83 8.35 6.34 6.34 0 008.35-1.9 6.22 6.22 0 00.93-3.28V9.58a8.3 8.3 0 005.66 2.21v-3.5a4.85 4.85 0 01-2.9-1.6z"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition-colors"><FiFacebook className="w-4 h-4" /></a>
              <a href="#" className="text-white hover:text-gray-400 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">About Us</h3>
              <ul className="space-y-4 text-xs">
                <li><Link href="#" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Made with Care</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">Assistance</h3>
              <ul className="space-y-4 text-xs">
                <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Accessibility</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">Boutiques</h3>
              <ul className="space-y-4 text-xs">
                <li><Link href="#" className="hover:text-white transition-colors">Find a store</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Book a free eye test</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#333] flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-[#666]">
          <p>© 2026, SunCart. All rights reserved.</p>
          <div className="flex gap-2">
            <span className="text-[#b3b3b3]">English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
