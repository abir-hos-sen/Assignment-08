"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="min-h-[80vh] flex items-center justify-center p-4 mt-8">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex max-w-4xl w-full animate__animated animate__fadeInUp">
        {/* Illustration Side */}
        <div className="hidden md:flex flex-1 bg-[#c5f24d]/20 p-12 flex-col justify-center items-center relative">
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=600" alt="Register" className="z-10 rounded-2xl shadow-lg mb-8" />
          <h2 className="z-10 text-2xl font-bold text-slate-800 text-center">Join SunCart</h2>
          <p className="z-10 text-slate-500 text-center mt-2">Get the best summer deals</p>
        </div>

        {/* Form Side */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#21325b] mb-2">Create an account</h2>
          <p className="text-slate-500 mb-8">Sign up to get started.</p>

          {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-6 text-sm">{error}</div>}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-700 bg-slate-50"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-700 bg-slate-50"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Photo URL (optional)"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-700 bg-slate-50"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-700 bg-slate-50"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#21325b] hover:bg-[#1a2849] text-white font-semibold py-3 rounded-lg transition-colors mt-4"
            >
              {loading ? "Creating account..." : "Register →"}
            </button>
          </form>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="text-slate-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-3 rounded-lg transition-colors mt-6 flex justify-center items-center gap-2"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
            Continue with Google
          </button>

          <p className="text-center mt-8 text-slate-600 text-sm">
            Already have an account? <Link href="/login" className="text-blue-600 font-semibold hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
