import path from "path"
import fs from "fs"

import "github-markdown-css/github-markdown-light.css"

import Markdown from "react-markdown"
import {unified} from "unified"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeToc from "rehype-toc"
import rehypeHighlight from "rehype-highlight"
import rehypeDocument from "rehype-document"
import rehypeFormat from "rehype-format"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"

import {db} from "@/app/_modules/firebase"
import {addDoc, collection, getDocs, getDoc, doc} from "firebase/firestore"

import TOC from "./TOC"

export async function generateStaticParams() {
  const posts = fs.readdirSync(`${path.resolve()}/public/posts`)

  return posts.map((post) => {
    const [fileName] = post.split(".")
    return {post: fileName}
  })
}

const readHeader = (contents: string) => {
  const headerRegex = /^(#){1,6} (.*)\n/gm
  const headerRows = contents.match(headerRegex)
  // return headerRows?.map((row) => {
  //   return row.replace(headerRegex, (_, $1, $2) => {
  //     return <div>{$2}</div>
  //   })
  // })
  return headerRows?.map((row) => row)
}

const PostPage = async ({params}: {params: {post: string}}) => {
  const contents = fs.readFileSync(`${path.resolve()}/public/posts/${params.post}/index.md`).toString("utf8")
  return (
    <>
      <div className="flex-1 py-8 px-[40px] mx-[40px] mb-[100px]">
        <div className="prose prose-cyan">
          <Markdown
            components={{}}
            remarkPlugins={[remarkGfm /* 기본 마크다운에 깃헙에서 사용하는 문법 지원  */, remarkParse, remarkRehype]}
            rehypePlugins={[
              rehypeRaw /* html태그를 지원 */,
              rehypeSlug /* h1~h6에 id를 추가해줌 */,
              () => rehypeAutolinkHeadings({behavior: "prepend"}) /* h1~h6에 추가된 id로 링크 걸어줌 */,
              // rehypeToc /* table of header 만들어줌 */,
              rehypeHighlight,
              rehypeFormat,
              rehypeStringify
            ]}
          >
            {contents}
          </Markdown>
        </div>
      </div>

      <TOC contents={contents} />
    </>
  )
}

export default PostPage
