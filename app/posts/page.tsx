import Link from 'next/link'

import postsData from "@/app/_content/posts/index"
import Chip from '@/app/_components/common/Chip'
import PostCard from '@/app/posts/_components/PostCard';

export default async function PostsPage({
    searchParams,
}: {
    searchParams?: {
        tag?: string;
        page?: string;
    };
}) {
    // query string
    const curTag = searchParams?.tag || '';
    // posts 
    let posts = postsData
    // posts 전체 길이
    const postsCount = posts.length
    // tag별 그룹 카운트
    const groupByTag = posts.reduce((acc, post) => {
        for (const tag of post.tags) {
            if (!acc[tag]) acc[tag] = 0
            acc[tag] += 1
        }
        return acc
    }, {} as Record<string, number>)
    // query string에 tag가 있으면 해당 tag의 포스트만 가져오기
    if (curTag) posts = posts.filter((post) => post.tags?.includes(curTag))

    return (
        <div className='container mx-auto first:border-none'>
            <div className='flex py-4 overflow-x-scroll'>
                <div>
                    <Link href="/posts">
                        <Chip variant={curTag ? "inactive" : "active"}>all {postsCount}</Chip>
                    </Link>
                </div>
                {Object.entries(groupByTag).map(([tag, count]) => (
                    <div key={tag} className="pl-2">
                        <Link href={`/posts?tag=${tag}`}>
                            <Chip variant={tag === curTag ? "active" : "inactive"}>{tag} {count}</Chip>
                        </Link>
                    </div>
                ))}
            </div>
            <div className=''>
                {posts.map((post) => <PostCard key={post.title} {...post} />)}
            </div>
        </div>
    )
}
