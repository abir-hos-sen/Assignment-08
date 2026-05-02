import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  // Let better-auth automatically detect the baseURL from the request
  // This is the most compatible way for Vercel
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "https://assignment-08-sigma.vercel.app",
  secret: process.env.BETTER_AUTH_SECRET,
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    cookieCache: {
        enabled: true,
        maxAge: 5 * 60
    }
  },
  // Removing complex cookie overrides to let better-auth handle it
  trustedOrigins: [
    "https://assignment-08-sigma.vercel.app",
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
