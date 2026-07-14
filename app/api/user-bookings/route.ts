import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email query parameter is required." },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();

    // Fetch user bookings sorted by newest creation date
    const bookings = await db
      .collection("bookings")
      .find({ email: email.toLowerCase() })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      bookings,
    });
  } catch (error: any) {
    console.error("User bookings API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch bookings." },
      { status: 500 }
    );
  }
}
