"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiUser, FiMail, FiLogOut, FiShoppingBag, FiStar, FiEdit2, FiCheck, FiX, FiLoader, FiLink } from "react-icons/fi";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  
  const [newName, setNewName] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
    if (session) {
      setNewName(session.user.name);
      setNewImageUrl(session.user.image || "");
    }
  }, [session, isPending, router]);

  const handleUpdateProfile = async () => {
    if (!newName.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    try {
      setIsUpdating(true);
      const { error } = await authClient.updateUser({
        name: newName,
        image: newImageUrl
      });

      if (error) {
        toast.error(error.message || "Failed to update profile");
        return;
      }
      
      toast.success("Profile updated successfully! 🎉");
      const modal = document.getElementById('edit_profile_modal');
      if (modal) modal.close();
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsUpdating(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
        <div className="w-12 h-12 border-4 border-[#0d6efd] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-white rounded-[2.5rem] p-10 mb-8 shadow-sm border border-gray-50 relative overflow-hidden flex flex-col md:flex-row items-center md:items-end justify-between gap-8 group">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-50 to-purple-50 -z-0 opacity-50"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl relative bg-gray-100 group-hover:rotate-2 transition-transform duration-500">
              <img 
                src={session.user.image || "https://ui-avatars.com/api/?name=" + session.user.name} 
                alt="profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900 mb-2">{session.user.name}</h1>
              <div className="flex items-center gap-2 text-gray-400 font-medium">
                <FiMail />
                <span>{session.user.email}</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => document.getElementById('edit_profile_modal').showModal()}
            className="relative z-10 bg-[#4f46e5] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95 group"
          >
            <FiEdit2 className="group-hover:rotate-12 transition-transform" />
            UPDATE PROFILE
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50 flex flex-col items-center">
               <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                 ACCOUNT INFO
               </h3>
               
               <div className="w-full space-y-6">
                 <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <span className="text-xs font-bold text-gray-500 uppercase">Status</span>
                   <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Active</span>
                 </div>
                 <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <span className="text-xs font-bold text-gray-500 uppercase">Role</span>
                   <span className="text-gray-900 font-black">Member</span>
                 </div>
               </div>

               <div className="w-full mt-8 pt-8 border-t border-gray-100">
                 <button 
                   onClick={async () => {
                     await authClient.signOut();
                     router.refresh();
                   }}
                   className="w-full bg-red-50 text-red-500 py-5 rounded-[2rem] font-black text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-red-500 hover:text-white transition-all active:scale-95"
                 >
                   <FiLogOut /> LOGOUT ACCOUNT
                 </button>
               </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-10 border border-gray-50 shadow-sm">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                  <FiShoppingBag className="text-indigo-600" /> Recent Activity
                </h2>
                <Link href="#" className="text-[10px] font-black text-indigo-600 hover:underline uppercase tracking-widest">View All</Link>
              </div>
              
              <div className="space-y-6">
                {[
                  { title: "Summer T-shirt Ordered", time: "2 hours ago", status: "75% Processed", icon: "📦" },
                  { title: "Review Posted: Sunglasses", time: "5 hours ago", status: "Verified", icon: "⭐" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-6 rounded-[2rem] bg-gray-50 hover:bg-indigo-50/30 border border-transparent hover:border-indigo-100 transition-all cursor-pointer group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-xs font-medium">{item.time}</p>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">{item.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <dialog id="edit_profile_modal" className="modal">
          <div className="modal-box bg-white rounded-[2.5rem] p-10 max-w-md border border-gray-100 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-black text-2xl text-gray-900">Update Profile</h3>
              <form method="dialog">
                <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors"><FiX size={20} /></button>
              </form>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block ml-1">Full Name</label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-12 py-4 text-sm focus:outline-none focus:border-indigo-500 transition-all font-bold text-gray-900"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block ml-1">Profile Image URL</label>
                <div className="relative">
                  <FiLink className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-12 py-4 text-sm focus:outline-none focus:border-indigo-500 transition-all font-bold text-gray-900"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={handleUpdateProfile}
                  disabled={isUpdating}
                  className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {isUpdating ? <FiLoader className="animate-spin" /> : <FiCheck />}
                  SAVE CHANGES
                </button>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

      </div>
    </div>
  );
}
