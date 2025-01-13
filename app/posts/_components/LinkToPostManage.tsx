"use client"

import {MouseEventHandler, useMemo} from "react"
import {useRouter} from "next/navigation"
import Link from "next/link"
import randomString from "@/app/_utils/common/randomString"

const LinkToPostManage = () => {
  const router = useRouter()

  const randomId = useMemo(randomString, [])

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    router.push(`/posts/${randomId}/manage`)
  }

  return (
    <Link href={`/posts/${randomId}/manage`} onClick={handleClick}>
      NEW
    </Link>
  )
}

export default LinkToPostManage
