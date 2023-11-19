import Link from "next/link"
import { redirect } from "next/navigation"

export default function Home() {
  redirect("/resume")
  return <Link href="/resume">이력서</Link>
}
