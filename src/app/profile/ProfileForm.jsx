"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function ProfileForm({ user }) {
  const [name, setName] = useState(user.name || "");
  const [image, setImage] = useState(user.image || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    const { data, error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      setMessage("Error updating profile.");
    } else {
      setMessage("Profile updated successfully!");
      router.refresh();
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleUpdate} className="space-y-4">
      {message && (
        <div className={`p-3 rounded-lg text-sm ${message.includes("Error") ? "bg-red-50 text-red-500" : "bg-green-50 text-green-600"}`}>
          {message}
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-white text-slate-800"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Photo URL</label>
        <input 
          type="text" 
          value={image} 
          onChange={e => setImage(e.target.value)} 
          className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-white text-slate-800"
        />
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="mt-4 bg-[#21325b] hover:bg-[#1a2849] text-white font-medium py-2 px-6 rounded-lg transition-colors"
      >
        {loading ? "Updating..." : "Update Information"}
      </button>
    </form>
  );
}
