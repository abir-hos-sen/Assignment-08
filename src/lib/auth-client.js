import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Using a relative baseURL or dynamic detection
    // This allows the client to talk to whatever domain it is currently on
    baseURL: typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"
});

export const { 
    signIn, 
    signUp, 
    signOut, 
    useSession,
    updateUser 
} = authClient;
