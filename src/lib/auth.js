import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  // Ensuring the baseURL is strictly the production URL for session consistency
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "https://assignment-08-sigma.vercel.app",
  secret: process.env.BETTER_AUTH_SECRET,
  session: {
    expiresIn: 60 * 60 * 24 * 7,
  },
  advanced: {
    useSecureCookies: true, // Restored security for production
    crossTab: {
        enabled: true
    }
  },
  trustedOrigins: [
    "https://assignment-08-sigma.vercel.app",
    "http://localhost:3000"
  ],
  socialProviders: {
    google: {
      clientId: (process.env.GOOGLE_CLIENT_ID || "").replace(/['"]+/g, ''),
      clientSecret: (process.env.GOOGLE_CLIENT_SECRET || "").replace(/['"]+/g, ''),
    },
  },
});
