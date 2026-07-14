import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, date, time, message } = body;

    // Validate inputs
    if (!name || !email || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: "All required fields must be provided." },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();

    // Insert booking document
    const result = await db.collection("bookings").insertOne({
      name,
      email,
      phone,
      service,
      date,
      time,
      message: message || "",
      status: "pending",
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Appointment booked successfully.",
      bookingId: result.insertedId,
    });
  } catch (error: any) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process booking." },
      { status: 500 }
    );
  }
}
