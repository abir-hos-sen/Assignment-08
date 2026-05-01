import { createAuthClient } from "better-auth/react";

// Helper to get the base URL and remove any extra quotes
const getBaseUrl = () => {
    let url = process.env.NEXT_PUBLIC_APP_URL || "";
    // Remove extra quotes if present
    url = url.replace(/['"]+/g, '');
    return url;
};

export const authClient = createAuthClient({
    baseURL: getBaseUrl()
});

export const { 
    signIn, 
    signUp, 
    signOut, 
    useSession,
    updateUser 
} = authClient;
