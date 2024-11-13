import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

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
