import Image from 'next/image'
import postsData from "app/_content/posts/index.json"
import Link from 'next/link'

export default async function PostsPage() {
    const routes = postsData

    // const contentPath = 'app/_content/posts/'
    // const paths = fs.readdirSync(contentPath, 'utf8')
    // const posts = await Promise.all(paths.map((path) => {
    //     const content = fs.readFileSync(`${contentPath}${path}`, 'utf8')
    //     const stat = fs.statSync(`${contentPath}${path}`)
    //     console.log(stat.birthtime)

    //     const title = path.substring(0, path.length - 3)
    //     const description = content.match(/<Intro>([\w\W]*)<\/Intro>/)?.[1].trim()
    //     const thumbnail = content.match(/<Thumbnail>\W*!\[[\w\W]*\]\(([\w\W]*)\)\W*<\/Thumbnail>/)?.[1].trim()

    //     return { title, content, description, thumbnail }
    // }))


    return (
        <div className='container mx-auto first:border-none'>
            <div className='py-4'>{routes.length} posts</div>
            <div className=''>
                {routes.map((route) => <PostCard key={route.title} {...route} />)}
            </div>
        </div>
    )
}

const PostCard: React.FC<{ title: string; description: string; thumbnail: string, path: string, createdAt: string }> = ({ title, description, thumbnail, path, createdAt }) => {

    return (
        <Link href={path}>
            <div className='flex py-6 border-t-[1px]'>
                <div className='relative aspect-[8/7] bg-red-300 mr-8'>
                    <Image src={thumbnail || 'https://picsum.photos/800/700'} width={160} height={140} objectFit='cover' objectPosition="center center" alt="" />
                </div>
                <div className='flex-grow'>
                    <div className='text-xl font-bold'>
                        {title}
                    </div>
                    <div className='text-sm text-gray-500 pt-2'>
                        {description}
                    </div>
                    <div className='text-sm text-gray-500 pt-2'>
                        {createdAt}
                    </div>
                </div>
            </div>
        </Link>
    )
}