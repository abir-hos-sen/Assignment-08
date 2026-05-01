import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // If running in browser, use current origin to avoid CORS
    // If not, use the environment variable
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
