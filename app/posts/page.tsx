import Link from "next/link"

import Chip from "@/app/_components/common/Chip"
import PostCard from "@/app/posts/_components/PostCard"
import LinkToPostManage from "./_components/LinkToPostManage"
import {getPosts} from "@/app/posts/_api/posts"
import Button from "./_components/Button"
import {Post} from "./types"

export default async function PostsPage({
  searchParams
}: {
  searchParams?: {
    tag?: string
    page?: string
  }
}) {
  const posts: Post[] = await getPosts()

  return (
    <div className="container mx-auto first:border-none">
      <div className="flex py-4 overflow-x-scroll">
        <div>
          {/* <Link href="/posts">
              <Chip variant={curTag ? "inactive" : "active"}>all {postsCount}</Chip>
            </Link> */}
          <LinkToPostManage />
        </div>
        {/* {Object.entries(groupByTag).map(([tag, count]) => (
            <div key={tag} className="pl-2">
              <Link href={`/posts?tag=${tag}`}>
                <Chip variant={tag === curTag ? "active" : "inactive"}>
                  {tag} {count}
                </Chip>
              </Link>
            </div>
          ))} */}
      </div>
      <div className="">
        {posts.map((post) => (
          <PostCard key={post.title} {...post} />
        ))}
      </div>
    </div>
  )
}
