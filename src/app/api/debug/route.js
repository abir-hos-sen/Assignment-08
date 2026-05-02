import { NextResponse } from "next/server";

export async function GET() {
    const envVars = {
        DATABASE_URL: !!process.env.DATABASE_URL,
        NEXT_PUBLIC_APP_URL: !!process.env.NEXT_PUBLIC_APP_URL,
        BETTER_AUTH_SECRET: !!process.env.BETTER_AUTH_SECRET,
        GOOGLE_CLIENT_ID: !!process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: !!process.env.GOOGLE_CLIENT_SECRET,
    };

    const missing = Object.entries(envVars)
        .filter(([_, exists]) => !exists)
        .map(([name]) => name);

    return NextResponse.json({
        status: missing.length === 0 ? "All variables are present" : "Some variables are missing",
        present: Object.keys(envVars).filter(name => envVars[name]),
        missing: missing,
        note: "This page only checks if the variables exist, not if their values are correct."
    });
}
