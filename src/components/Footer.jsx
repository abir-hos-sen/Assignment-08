"use client";

import Link from "next/link";
import { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full font-sans bg-white border-t border-gray-100 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-gray-900 text-lg font-bold tracking-tight mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white text-sm">☀️</span>
            SunCart
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Your destination for premium summer essentials. Style meets sun in every piece we curate.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start">
          <h4 className="text-gray-900 text-xs font-black tracking-widest uppercase mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm font-medium text-gray-600">
            <li className="flex items-center gap-3">
              <FiMail className="text-[#0d6efd]" />
              <a href="mailto:abirkhan0495@gmail.com" className="hover:text-[#0d6efd] transition-colors">abirkhan0495@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="text-[#0d6efd]" />
              <a href="tel:+8801813990122" className="hover:text-[#0d6efd] transition-colors">+880 1813-990122</a>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="text-[#0d6efd] mt-1" />
              <span>Sirajganj, Bangladesh</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start">
          <h4 className="text-gray-900 text-xs font-black tracking-widest uppercase mb-6">Social Links</h4>
          <div className="flex gap-4 items-center">
            <a href="#" className="w-10 h-10 bg-[#f8f9fa] rounded-xl flex items-center justify-center text-gray-900 hover:bg-[#0d6efd] hover:text-white transition-all shadow-sm shadow-gray-100">
              <FiInstagram className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/ABIRH0SSEN.official/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#f8f9fa] rounded-xl flex items-center justify-center text-gray-900 hover:bg-[#0d6efd] hover:text-white transition-all shadow-sm shadow-gray-100">
              <FiFacebook className="w-4 h-4" />
            </a>
            <a href="https://x.com/ABIRHOSSENN" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#f8f9fa] rounded-xl flex items-center justify-center text-gray-900 hover:bg-[#0d6efd] hover:text-white transition-all shadow-sm shadow-gray-100">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="flex flex-col items-start">
          <h4 className="text-gray-900 text-xs font-black tracking-widest uppercase mb-6">Privacy Policy</h4>
          <ul className="space-y-4 text-sm font-medium text-gray-600">
            <li><Link href="#" className="hover:text-[#0d6efd] transition-colors">Data Protection</Link></li>
            <li><Link href="#" className="hover:text-[#0d6efd] transition-colors">Cookie Policy</Link></li>
            <li><Link href="#" className="hover:text-[#0d6efd] transition-colors">User Privacy</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-100 text-center text-[10px] font-bold text-gray-400 tracking-wider">
        <p>© 2026 SUNCART. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
