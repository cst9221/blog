import {compile, run} from "@mdx-js/mdx"
import remarkGfm from "remark-gfm"
import rehypeCodeTitles from "rehype-code-titles"
import rehypePrismPlus from "rehype-prism-plus"
import rehypeSlug from "rehype-slug"
import * as runtime from "react/jsx-runtime"
import matter from "gray-matter"
import {FrontMatter} from "../types"

export const splitFrontMatter = async (str: string) => {
  const {data, content} = await matter(str)

  return {frontMatter: data, content}
}

/**
 * Compile the MDX source code to a function body
 */
export const compileSource = async (content: string) =>
  String(
    await compile(content, {
      outputFormat: "function-body",
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug, // heading에 id 부여
        rehypeCodeTitles, // code block에 타이틀을 꾸며줌
        rehypePrismPlus // code 하이라이팅
      ]
    })
  )

// Run the compiled code with the runtime and get the default export
export const runCode = async (code: string) => {
  const {default: MDXContent} = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
    // @ts-expect-error
    Fragment: ({children}) => (
      <div id="mdx-container" className="mt-8">
        {children}
      </div>
    )
  })
  return MDXContent
}

export const readMDX = async (input: string) => {
  const {frontMatter, content}: {frontMatter: FrontMatter; content: string} = await splitFrontMatter(input)
  const code = await compileSource(content)
  const MDXContent = await runCode(code)

  return {frontMatter, MDXContent}
}
