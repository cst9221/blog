import {  NextResponse } from "next/server"

export async function GET() {
  // const ip = req.headers.get('x-forwarded-for')?.split(":").slice(-1)[0]
  
  return NextResponse.json({ ip: "sdsad" })
}
