"use client"

import {ChangeEventHandler, useEffect, useState, useTransition} from "react"
import * as runtime from "react/jsx-runtime"
import {compile, run} from "@mdx-js/mdx"
import remarkGfm from "remark-gfm"
import rehypeCodeTitles from "rehype-code-titles"
import rehypePrismPlus from "rehype-prism-plus"
import rehypeSlug from "rehype-slug"
import {useThrottleCallback} from "@/app/_hooks/useThrottleCallback"
import {MDXContent, MDXModule} from "mdx/types"
import {createClient} from "@/app/_utils/supabase/client"

const PostManagePage = () => {
  const [file, setFile] = useState<File | null>(null)
  const [Component, setComponent] = useState<ReturnType<MDXContent>>()
  const [content, setContent] = useState("")
  const [{title, date}, setMatters] = useState({title: "", date: new Date().toISOString().split("T")[0].replaceAll("-", ".")})
  const [isPending, startTransition] = useTransition()

  const handleChangeValue: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const {value} = event.target

    setContent(value)
  }

  const throttled = useThrottleCallback(async () => {
    const code = String(
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

    const result = (
      <MDXContent
        components={{
          ClientComponent: () => <div style={{color: "red"}}>client component</div>
        }}
      />
    )

    startTransition(() => setComponent(result))
  }, 1300)

  useEffect(() => {
    throttled()
  }, [content])

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files

    if (!files?.length) {
      return
    }

    const file = files.item(0)

    if (!file) {
      alert("파일을 찾을 수 없음!")
      return
    }

    if (file?.type !== "text/markdown") {
      alert("마크다운 파일만 가능!")
      e.target.value = ""
      return
    }

    const reader = new FileReader()

    // 파일 읽기가 완료되었을 때 실행되는 콜백
    reader.onload = (e) => {
      const content = e.target?.result // 파일 내용
      if (typeof content === "string") {
        setContent(content)
      }
    }

    // 텍스트 파일로 읽기 시작
    reader.readAsText(file)

    setFile(file)
  }

  const handleClickUpload = async () => {
    const file = new File([`---\ntitle: ${title}\ndate: ${date}\n---\n\n${content}`], `${title}.md`, {type: "text/markdown"})
    const supabase = await createClient()

    const {data, error} = await supabase.storage.from("posts").upload(`${title}.md`, file, {
      upsert: false
    })

    if (error) {
      alert("실패! 로그 확인해보세요")
      console.error(error)
      return
    }

    console.log("success", data)
  }

  return (
    <>
      <div>
        <input type="file" onChange={handleFileChange} itemType="" />
        <button className="py-1 px-2 rounded-md bg-gray-300" onClick={handleClickUpload}>
          업로드
        </button>
      </div>
      <div className="flex w-[1536px] m-auto">
        <div id="preview" className="w-1/2">
          <div>
            <h1 className="leading-normal">
              <label htmlFor="title" className={title || "text-gray-400"}>
                {title || "타이틀을 입력해주세요"}
              </label>
            </h1>
            <div>
              <label htmlFor="date" className="text-gray-400">
                {date}
              </label>
            </div>
          </div>
          <div id="content" className="">
            {Component}
          </div>
        </div>

        <div id="textarea" className="w-1/2">
          <div>
            <h1 className="leading-normal">
              <input
                id="title"
                value={title}
                placeholder="타이틀을 입력해주세요"
                onChange={(e) => setMatters((prev) => ({...prev, title: e.target.value}))}
              />
            </h1>
            <div>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setMatters((prev) => ({...prev, date: e.target.value}))}
                onFocus={(e) => {
                  try {
                    e.target.showPicker()
                  } catch (e) {}
                }}
              />
            </div>
          </div>
          <textarea
            value={content}
            onChange={handleChangeValue}
            onResize={(e) => {
              console.log(e.target)
            }}
            className="w-full h-full bg-slate-400 "
          />
        </div>
      </div>
    </>
  )
}

export default PostManagePage
