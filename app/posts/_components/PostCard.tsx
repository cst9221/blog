import Image from "next/image"
import Link from "next/link"
import {Post} from "@/app/posts/types"

export default function PostCard({id, title, description, thumbnail_url, created_at, modified_at}: Post) {
  return (
    <Link href={`/posts/${id}`}>
      <div className="flex py-6 border-t-[1px]">
        <div className="relative w-36 aspect-[8/7] mr-8">
          <Image src={thumbnail_url || "/images/cms-log.png"} width={160} height={140} objectFit="cover" objectPosition="center center" alt="" />
        </div>
        <div className="flex-1">
          <div className="text-xl font-bold">{title}</div>
          <div className="text-sm text-gray-500 pt-2">{description}</div>
          <div className="text-sm text-gray-500 pt-2">{created_at.toString()}</div>
        </div>
      </div>
    </Link>
  )
}
