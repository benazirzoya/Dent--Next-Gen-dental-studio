import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    // Validate inputs
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists." },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user document
    const result = await db.collection("users").insertOne({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: "patient",
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "User registered successfully.",
      userId: result.insertedId,
    });
  } catch (error: any) {
    console.error("Register API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to register user." },
      { status: 500 }
    );
  }
}
