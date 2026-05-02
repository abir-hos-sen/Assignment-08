import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBaseUrl = () => {
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
  // Ensure cookies are shared across all vercel subdomains if needed
  // or at least properly handled on the main domain
  session: {
    cookieCache: {
        enabled: true,
        maxAge: 5 * 60 // 5 minutes
    }
  },
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
