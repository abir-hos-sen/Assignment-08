import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Strictly use the production URL to match Google OAuth settings
const getBaseUrl = () => {
    // We must use the exact URL registered in Google Cloud Console
    // to avoid redirect_uri_mismatch errors.
    let url = process.env.NEXT_PUBLIC_APP_URL || "https://assignment-08-sigma.vercel.app";
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
