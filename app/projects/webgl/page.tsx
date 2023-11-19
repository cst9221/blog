"use client"

// import Main from "@/app/_components/Layout/Main"

import { useEffect } from "react"

// import WebGLEngine from "app/_modules/webgl"
// import { Html } from "next/document"
// import Link from "next/link"
// import Script from "next/script"

import GlslEditor from "@/app/_modules/glslEditor"
import "@/app/_modules/glslEditor/css/glslEditor.css"
import "@/app/_modules/glslEditor/css/ElectronApp.css"
import dynamic from "next/dynamic"

export default function GlslEditorPage() {
  // useEffect(() => {
  //   const engine = new WebGLEngine()
  //   engine.render()
  //   const glslEditor = new GlslEditor("#glsl_editor", {
  //     canvas_size: 500,
  //     canvas_draggable: true,
  //     canvas_resizable: true,
  //     theme: "monokai",
  //     watchHash: true,
  //     fileDrops: true,
  //     menu: true,
  //   })
  //   console.log(glslEditor)
  // }, [])

  return (
    <div
      id="glsl_editor"
      style={{ color: "#fff" }}
    >
      {/* <Html>
        <Link
          type="text/css"
          rel="stylesheet"
          href="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.css"
        />
        <Script
          type="application/javascript"
          src="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.js"
        ></Script>
      </Html> */}
      {/* <div
        id="glsl_editor"
        style={{ height: "100vh" }}
      ></div> */}
      {/*<div
        id="cstdraw"
        className="col-start-1 col-end-7 h-[500px]"
      ></div> */}
    </div>
  )
}
