import { NextApiRequest, NextApiResponse } from "next"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: Request | NextRequest, res: NextApiResponse) {
  const ip = req.headers.get('x-forwarded-for')?.split(":").slice(-1)[0]
  
  return NextResponse.json({ ip: "sdsad" })
}
