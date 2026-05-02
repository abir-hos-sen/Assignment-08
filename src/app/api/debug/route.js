import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    let dbStatus = "Unknown";
    let dbError = null;

    try {
        // Try to reach the database
        await prisma.$connect();
        // Try to perform a simple read
        await prisma.user.count();
        dbStatus = "Success (Connected & Readable)";
    } catch (e) {
        dbStatus = "Failed";
        dbError = e.message;
    }

    const envVars = {
        DATABASE_URL: !!process.env.DATABASE_URL,
        NEXT_PUBLIC_APP_URL: !!process.env.NEXT_PUBLIC_APP_URL,
        BETTER_AUTH_SECRET: !!process.env.BETTER_AUTH_SECRET,
        GOOGLE_CLIENT_ID: !!process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: !!process.env.GOOGLE_CLIENT_SECRET,
    };

    return NextResponse.json({
        database: {
            connection: dbStatus,
            error: dbError
        },
        environment: {
            status: Object.values(envVars).every(v => v) ? "All variables present" : "Some variables missing",
            missing: Object.entries(envVars).filter(([_, exists]) => !exists).map(([name]) => name)
        }
    });
}
