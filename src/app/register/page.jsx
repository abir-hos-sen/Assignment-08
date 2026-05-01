"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/auth-client";
import { FiUser, FiMail, FiLock, FiImage, FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error: signUpError } = await signUp.email({
        email,
        password,
        name,
        image: photoUrl,
      });

      if (signUpError) {
        setError(signUpError.message || "Registration failed. Please try again.");
      } else {
        router.push("/login");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      setError("Google login failed.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-6 py-20">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-10 shadow-2xl animate__animated animate__fadeIn">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg animate__animated animate__bounceIn">
            ☀️
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Create Account</h1>
          <p className="text-gray-500 font-medium mt-2">Join SunCart for premium essentials</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-2xl text-sm font-bold mb-6 animate__animated animate__shakeX">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#0d6efd] focus:bg-white transition-all text-gray-900 font-medium"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#0d6efd] focus:bg-white transition-all text-gray-900 font-medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Photo URL</label>
            <div className="relative">
              <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#0d6efd] focus:bg-white transition-all text-gray-900 font-medium"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Password</label>
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#0d6efd] focus:bg-white transition-all text-gray-900 font-medium"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#0d6efd] text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "REGISTER"}
            <FiArrowRight className="text-xl" />
          </button>
        </form>

        <div className="mt-8 flex items-center gap-4 text-gray-300">
          <div className="flex-1 h-[1px] bg-gray-100"></div>
          <span className="text-[10px] font-black uppercase tracking-widest">OR</span>
          <div className="flex-1 h-[1px] bg-gray-100"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-8 py-4 bg-white border-2 border-gray-100 text-gray-700 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-gray-50 transition-all active:scale-95"
        >
          <FcGoogle className="text-2xl" />
          CONTINUE WITH GOOGLE
        </button>

        <p className="mt-10 text-center text-sm font-bold text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-[#0d6efd] hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
