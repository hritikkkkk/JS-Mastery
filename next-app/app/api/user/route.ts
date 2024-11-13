import client from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const response = await client.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });
  return NextResponse.json(
    {
      response,
    },
    {
      status: 200,
    }
  );
}

export async function GET(req: NextRequest) {
  const user = await client.user.findFirst();
  return NextResponse.json({
    user: user?.email,
  });
}
