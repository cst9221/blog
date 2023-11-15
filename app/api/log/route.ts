import { db } from "@/app/_modules/firebase"
import { NextApiRequest, NextApiResponse } from "next"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: Request | NextRequest, res: NextApiResponse) {
  return NextResponse.json({})
}
