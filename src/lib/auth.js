import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Improved helper to get the base URL for production
const getBaseUrl = () => {
    // Priority 1: Check for VERCEL_URL (provided by Vercel)
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    // Priority 2: Use NEXT_PUBLIC_APP_URL and sanitize it
    let url = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    url = url.replace(/['"]+/g, ''); // Remove quotes
    if (url.endsWith('/')) url = url.slice(0, -1); // Remove trailing slash
    return url;
};

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  baseURL: getBaseUrl(),
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: [
    getBaseUrl(),
    "https://*.vercel.app",
    "http://localhost:3000"
  ],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: (process.env.GOOGLE_CLIENT_ID || "").replace(/['"]+/g, ''),
      clientSecret: (process.env.GOOGLE_CLIENT_SECRET || "").replace(/['"]+/g, ''),
    },
  },
});
