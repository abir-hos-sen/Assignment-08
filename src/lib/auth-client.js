import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Using the same production baseURL as the server for alignment
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "https://assignment-08-sigma.vercel.app"
});

export const { 
    signIn, 
    signUp, 
    signOut, 
    useSession,
    updateUser 
} = authClient;
