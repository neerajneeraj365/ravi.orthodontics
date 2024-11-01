import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { registeringFor, name, phone, age, gender, reason } =
      await req.json();

    console.log(
      "Received data:",
      registeringFor,
      name,
      phone,
      age,
      gender,
      reason
    );
    const booking = await prisma.patient.create({
      data: {
        registeringFor,
        name,
        phone,
        age,
        gender,
        reason,
      },
    });
    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    return new NextResponse("Error", {
      status: 500,
    });
  }
}
