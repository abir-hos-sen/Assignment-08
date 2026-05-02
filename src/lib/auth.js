import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  // Forcing baseURL to production to ensure absolute consistency
  baseURL: "https://assignment-08-sigma.vercel.app",
  secret: process.env.BETTER_AUTH_SECRET,
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    cookieCache: {
        enabled: true,
        maxAge: 5 * 60
    }
  },
  // Strict cookie settings for Vercel production
  advanced: {
    useSecureCookies: true,
  },
  trustedOrigins: [
    "https://assignment-08-sigma.vercel.app",
    "http://localhost:3000"
  ],
  socialProviders: {
    google: {
      clientId: (process.env.GOOGLE_CLIENT_ID || "").replace(/['"]+/g, ''),
      clientSecret: (process.env.GOOGLE_CLIENT_SECRET || "").replace(/['"]+/g, ''),
      // Forcing the redirect to the main production domain
      redirectURI: "https://assignment-08-sigma.vercel.app/api/auth/callback/google"
    },
  },
});
