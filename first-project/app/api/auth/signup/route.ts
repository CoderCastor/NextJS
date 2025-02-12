import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log(data);
    console.log("Hi bois");

  await prismaClient.user.create({
      data:{
          username : data.username,
          password : data.password
      }
  })

  return NextResponse.json({
    message: "You have been signup",
  });
}
