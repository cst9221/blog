import Chip from "@/app/_components/common/Chip"
import {getPost} from "./_api/post"
import {readMDX} from "./_utils/mdx"
import MDXComponents from "../_components/MDXComponents"
import "./_styles/rehypeCodeTitles.css"
import "./_styles/rehypePrismPlus.css"

// fallback을 어떻게 처리할지 true면 동적으로 페이지 생성
export const dynamicParams = true

// app router에서 getStaticPaths에 대응하는 함수
export const generateStaticParams = async () => {
  return []
}

interface Params {
  postId: string
}

export default async function PostDetailPage({params: {postId}}: {params: Params}) {
  const markdownContent = await getPost(Number(postId))
  const {frontMatter, MDXContent} = await readMDX(markdownContent)
  const {title = "", date = new Date(), keywords = []} = frontMatter

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="leading-normal">{title}</h1>
        <div>{date.toISOString().split("T")[0].replaceAll("-", ".")}</div>
        <div className="flex gap-2 mt-4">
          {keywords.map((keyword) => (
            <Chip key={keyword}>{keyword}</Chip>
          ))}
        </div>
      </div>

      <MDXContent components={MDXComponents} />
    </div>
  )
}
