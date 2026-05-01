import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Helper to get the base URL and remove any extra quotes
const getBaseUrl = () => {
    let url = process.env.NEXT_PUBLIC_APP_URL || "";
    // Remove extra quotes if present
    url = url.replace(/['"]+/g, '');
    return url;
};

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  baseURL: getBaseUrl(),
  // Add this to allow Vercel preview links to work
  trustedOrigins: [
    getBaseUrl(),
    "https://*.vercel.app"
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
