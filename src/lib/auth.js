import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBaseUrl = () => {
    // If we are in Vercel, it provides VERCEL_URL automatically
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    // Fallback to manual env or hardcoded production link
    let url = process.env.NEXT_PUBLIC_APP_URL || "https://assignment-08-sigma.vercel.app";
    url = url.replace(/['"]+/g, '');
    if (url.endsWith('/')) url = url.slice(0, -1);
    return url;
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
