import Image from "next/image";
import Link from "next/link";

export default function PostCard({
    title,
    description,
    thumbnail,
    path,
    createdAt
}: {
    title: string;
    description: string;
    thumbnail: string,
    path: string,
    createdAt: string
}) {
    return (
        <Link href={path}>
            <div className='flex py-6 border-t-[1px]'>
                <div className='relative w-36 aspect-[8/7] mr-8'>
                    <Image src={thumbnail || 'https://picsum.photos/800/700'} width={160} height={140} objectFit='cover' objectPosition="center center" alt="" />
                </div>
                <div className='flex-1'>
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