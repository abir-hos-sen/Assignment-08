import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBaseUrl = () => {
    // Strictly use the main production URL for Google OAuth compatibility
    // Any preview link will redirect through this URL for authentication
    return "https://assignment-08-sigma.vercel.app";
};

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  baseURL: getBaseUrl(),
  secret: process.env.BETTER_AUTH_SECRET,
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    cookieCache: {
        enabled: true,
        maxAge: 5 * 60
    }
  },
  advanced: {
    useSecureCookies: true,
    crossTab: {
        enabled: true
    }
  },
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
