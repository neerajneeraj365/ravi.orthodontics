import prisma from "@/lib/prisma";
import twilio from "twilio";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const accountSid = process.env.accountSid;
    const authToken = process.env.authToken;
    const client = require("twilio")(accountSid, authToken);

    const { registeringFor, name, phone, age, gender, reason } =
      await req.json();

    const booking = client.messages.create({
      body: `New appointment booking: 
      For: ${registeringFor}
      Name: ${name}
      Phone: ${phone}
      Age: ${age}
      Gender: ${gender}
      Reason: ${reason}`,
      from: "+14433907397",
      to: "+14379705609",
    });
    return NextResponse.json(booking, { status: 200 });
  } catch (error) {
    return new NextResponse("Error", {
      status: 500,
    });
  }
}
