import { NextApiRequest, NextApiResponse } from "next"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: Request | NextRequest, res: NextApiResponse) {
  return NextResponse.json({ data: "sdsad" })
}
