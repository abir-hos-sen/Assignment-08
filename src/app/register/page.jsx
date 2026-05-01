"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      image: photoUrl || undefined,
    });
    if (error) {
      setError(error.message || "Registration failed.");
    } else {
      router.push("/login");
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl flex max-w-5xl w-full p-3 overflow-hidden h-[800px]">
        
        {/* Left Side - Form */}
        <div className="flex-[0.8] p-8 md:p-16 flex flex-col justify-center relative bg-white">
          <div className="max-w-sm mx-auto w-full">
            <div className="mb-8">
              <div className="w-12 h-12 bg-[#12422c] rounded-xl flex items-center justify-center text-white font-bold text-xl mb-6 shadow-md">
                S
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Get Started</h2>
              <p className="text-gray-500 text-sm">Welcome to SunCart - Let's create your account</p>
            </div>

            {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-6 text-sm text-center font-medium">{error}</div>}

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm focus:border-[#12422c] focus:ring-1 focus:ring-[#12422c] outline-none transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm focus:border-[#12422c] focus:ring-1 focus:ring-[#12422c] outline-none transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-1">Photo URL (optional)</label>
                <input
                  type="text"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm focus:border-[#12422c] focus:ring-1 focus:ring-[#12422c] outline-none transition-all font-medium"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-bold text-gray-900">Password</label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm focus:border-[#12422c] focus:ring-1 focus:ring-[#12422c] outline-none transition-all font-medium pr-10"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#12422c] hover:bg-[#0c2f1f] text-white font-semibold py-3.5 rounded-lg transition-colors mt-6 text-sm shadow-md"
              >
                {loading ? "Signing up..." : "Sign up"}
              </button>
            </form>

            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={handleGoogleLogin}
                className="w-full flex justify-center items-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                Sign up with Google
              </button>
            </div>

            <p className="text-center mt-8 text-gray-500 text-sm">
              Already have an account? <Link href="/login" className="text-gray-900 font-bold hover:underline">Log in</Link>
            </p>
          </div>
        </div>

        {/* Right Side - Green Aesthetic */}
        <div className="hidden lg:flex flex-1 bg-[#12422c] rounded-[1.5rem] p-12 flex-col relative overflow-hidden justify-center items-center">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-800/40 to-transparent"></div>
          
          <div className="relative z-10 w-full">
            <h1 className="text-4xl xl:text-5xl font-serif italic text-white leading-tight mb-12">
              Enter<br />the Future<br /><span className="not-italic">of Summer,</span><br /><span className="not-italic">today</span>
            </h1>
            
            {/* Mock Card UI */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl max-w-[280px] ml-auto relative">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-[#12422c] font-bold text-xs mb-6">S</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">$120.00</h3>
              <p className="text-xs text-gray-500 mb-8">Cart Total</p>
              
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold">Premium Cart</p>
                  <p className="text-xs text-gray-900 tracking-widest mt-1">**** **** 1234</p>
                </div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
              </div>
              
              {/* Floating control panel mockup */}
              <div className="absolute -left-12 bottom-0 bg-white p-3 rounded-xl shadow-lg flex flex-col gap-4">
                <div className="w-4 h-4 rounded-full bg-[#12422c]"></div>
                <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
