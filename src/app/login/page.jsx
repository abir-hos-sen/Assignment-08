"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });
    if (error) {
      setError(error.message || "Invalid credentials.");
    } else {
      router.push("/");
      router.refresh();
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
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4">
      <div className="bg-white rounded-[2rem] shadow-sm flex max-w-5xl w-full p-2 overflow-hidden h-[750px]">
        
        {/* Left Side - Blue Illustration */}
        <div className="hidden lg:flex flex-1 bg-[#0d6efd] rounded-[1.5rem] p-12 flex-col relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6 mt-8">
              Discover<br />Summer Essentials<br />With SunCart.
            </h1>
            <p className="text-blue-100 text-sm max-w-sm">
              Simplify your e-commerce shopping experience with our user-friendly platform.
            </p>
          </div>
          
          {/* Illustration Image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] flex justify-center z-10">
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800" alt="Characters" className="max-w-md mix-blend-luminosity opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d6efd] via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-[0.8] p-8 md:p-16 flex flex-col justify-center relative bg-white">
          <div className="max-w-sm mx-auto w-full">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#0d6efd] rounded-full flex items-center justify-center text-white font-bold text-xs">S</div>
                <span className="font-bold text-gray-900 text-lg tracking-tight">SunCart</span>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Welcome Back</h2>
            <p className="text-gray-500 text-center text-sm mb-10">Please login to your account</p>

            {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-6 text-sm text-center font-medium">{error}</div>}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border-none bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#0d6efd] outline-none transition-all placeholder:text-gray-400 font-medium"
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border-none bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#0d6efd] outline-none transition-all placeholder:text-gray-400 font-medium pr-12"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              <div className="flex justify-end">
                <Link href="#" className="text-xs font-semibold text-gray-900 hover:text-[#0d6efd]">Forgot Password?</Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0d6efd] hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors mt-2 text-sm shadow-sm shadow-blue-500/30"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="mt-8 relative flex items-center justify-center">
              <div className="w-full h-px bg-gray-200"></div>
              <span className="absolute bg-white px-4 text-xs text-gray-400 font-medium">Or Login With</span>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={handleGoogleLogin}
                className="flex-1 flex justify-center items-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-xl transition-colors text-sm"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                Google
              </button>
              <button
                className="flex-1 flex justify-center items-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-xl transition-colors text-sm"
              >
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" alt="Facebook" />
                Facebook
              </button>
            </div>

            <p className="text-center mt-10 text-gray-500 text-xs">
              Don't have an account? <Link href="/register" className="text-[#0d6efd] font-semibold hover:underline">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
