import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Hardcoding the production URL as the central auth server
    // This allows any preview deployment to share the same session/database
    baseURL: "https://assignment-08-sigma.vercel.app"
});

export const { 
    signIn, 
    signUp, 
    signOut, 
    useSession,
    updateUser 
} = authClient;
