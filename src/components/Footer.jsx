import Link from "next/link";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#21325b] text-slate-300 py-16 mt-20 rounded-t-3xl md:rounded-t-[3rem] mx-4 md:mx-10 mb-0 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mt-20 -mr-20 pointer-events-none"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">About the store</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Become a customer</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Return policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact us</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6">Language</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2 text-sm">
              <button className="text-left hover:text-white transition-colors">Deutsch</button>
              <button className="text-left bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded w-max transition-colors">English</button>
              <button className="text-left hover:text-white transition-colors">Español</button>
              <button className="text-left hover:text-white transition-colors">Français</button>
              <button className="text-left hover:text-white transition-colors">Indonesian</button>
              <button className="text-left hover:text-white transition-colors">Italian</button>
              <button className="text-left hover:text-white transition-colors">Nederlands</button>
              <button className="text-left hover:text-white transition-colors">Polnisch</button>
              <button className="text-left hover:text-white transition-colors">Português</button>
              <button className="text-left hover:text-white transition-colors">русский</button>
              <button className="text-left hover:text-white transition-colors">Tiếng Việt</button>
              <button className="text-left hover:text-white transition-colors">Türkçe</button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Get in touch</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-slate-500 rounded hover:border-white hover:text-white transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-slate-500 rounded hover:border-white hover:text-white transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-slate-500 rounded hover:border-white hover:text-white transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-600/50 flex flex-wrap gap-6 text-sm text-slate-400 justify-center">
          <Link href="#" className="hover:text-white transition-colors">Terms of purchase</Link>
          <Link href="#" className="hover:text-white transition-colors">Security and privacy</Link>
          <Link href="#" className="hover:text-white transition-colors">Newsletter</Link>
        </div>
      </div>
    </footer>
  );
}
