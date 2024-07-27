import { db } from "@/app/lib/db";
import { userSchema } from "@/app/types/types";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("email");
    const existingUserByEmail = await db.user.findUnique({
      where: { email: query! },
    });

    if (existingUserByEmail?.onboarded) {
      return NextResponse.json({ status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {email} = body
    const updatedUserOnboarded = await db.user.update({
      where: { email: email },
      data: {
        onboarded: true,
      },
    });
    return NextResponse.json(
      { message: "User onboarded updated" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
