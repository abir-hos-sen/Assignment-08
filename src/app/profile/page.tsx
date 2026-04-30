import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ProfileForm from "./ProfileForm";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl mt-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-8 animate__animated animate__fadeInDown">My Profile</h1>
      
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 animate__animated animate__fadeInUp">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
              <img 
                src={session.user.image || "https://ui-avatars.com/api/?name=" + session.user.name} 
                alt={session.user.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-800">{session.user.name}</h2>
              <p className="text-slate-500 text-sm">{session.user.email}</p>
            </div>
          </div>

          {/* Update Form Section */}
          <div className="flex-1 w-full bg-slate-50 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Update Information</h3>
            <ProfileForm user={session.user} />
          </div>
        </div>
      </div>
    </div>
  );
}
