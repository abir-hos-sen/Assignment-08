import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    let dbStatus = "Unknown";
    let writeStatus = "Unknown";
    let dbError = null;

    try {
        // Test Read
        await prisma.$connect();
        await prisma.user.count();
        dbStatus = "Success (Connected & Readable)";

        // Test Write (Try to create a dummy record)
        try {
            const testUser = await prisma.user.create({
                data: {
                    id: "test-" + Date.now(),
                    name: "Test User",
                    email: "test-" + Date.now() + "@example.com",
                    emailVerified: false,
                }
            });
            writeStatus = "Success (Data Written Successfully)";
            // Clean up the test record
            await prisma.user.delete({ where: { id: testUser.id } });
        } catch (writeErr) {
            writeStatus = "Failed: " + writeErr.message;
        }

    } catch (e) {
        dbStatus = "Failed: " + e.message;
    }

    return NextResponse.json({
        database: {
            connection: dbStatus,
            write: writeStatus,
            error: dbError
        },
        environment: {
            NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "Not set",
            VERCEL_URL: process.env.VERCEL_URL || "Not set"
        }
    });
}
