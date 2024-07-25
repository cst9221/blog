import fs from 'fs'

import markdownToHtml from '@/app/_lib/utils/markdownToHTML';

export default async function PostPage({ params }: { params: { post: string } }) {
    const contentPath = 'app/_content/posts/'
    const postContent = fs.readFileSync(`${contentPath}${params.post}.md`, 'utf8')

    const html = await markdownToHtml(postContent)

    return (
        <div className={"container mx-auto whitespace-pre-wrap md"} >
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}
