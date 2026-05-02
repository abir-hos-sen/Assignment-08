import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Standard configuration for production
    baseURL: typeof window !== 'undefined' 
        ? window.location.origin 
        : (process.env.NEXT_PUBLIC_APP_URL || "").replace(/['"]+/g, '')
});

export const { 
    signIn, 
    signUp, 
    signOut, 
    useSession,
    updateUser 
} = authClient;
