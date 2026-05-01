"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, updateUser } from "@/lib/auth-client";
import { FiUser, FiImage, FiArrowLeft, FiSave } from "react-icons/fi";
import Link from "next/link";

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error: updateError } = await updateUser({
        name,
        image,
      });

      if (updateError) {
        setError(updateError.message || "Failed to update profile.");
      } else {
        router.push("/profile");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-[#0d6efd]"></span>
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="min-h-[80vh] bg-[#f8f9fa] py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/profile" className="inline-flex items-center gap-2 text-gray-500 font-bold mb-8 hover:text-[#0d6efd] transition-colors group">
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> BACK TO PROFILE
        </Link>
        
        <h1 className="text-4xl font-black text-gray-900 mb-12 tracking-tight">Update Information</h1>
        
        <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl animate__animated animate__fadeIn">
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-2xl text-sm font-bold mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleUpdate} className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Display Name</label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#0d6efd] focus:bg-white transition-all text-gray-900 font-bold"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Profile Image URL</label>
              <div className="relative">
                <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#0d6efd] focus:bg-white transition-all text-gray-900 font-bold"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#0d6efd] text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95 disabled:opacity-70 flex items-center justify-center gap-3"
              >
                {loading ? <span className="loading loading-spinner loading-sm"></span> : <><FiSave /> SAVE CHANGES</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
