import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Force baseURL to production to ensure session persistence matches server
    baseURL: "https://assignment-08-sigma.vercel.app"
});

export const { 
    signIn, 
    signUp, 
    signOut, 
    useSession,
    updateUser 
} = authClient;
