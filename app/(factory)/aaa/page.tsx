"use client"

import Image from "next/image"

import Button from "@/app/_components/Button"
import Mark from "@/app/_components/Highlight/Mark"
import Icon from "@/app/_components/Icon"
import Main from "@/app/_components/Layout/Main"

import { useEffect } from "react"

import WebGLEngine from "app/_modules/webgl"
import { Tldraw } from "@tldraw/tldraw"
import "@tldraw/tldraw/tldraw.css"

export default function Home() {
  useEffect(() => {
    const engine = new WebGLEngine()
    engine.render()
  }, [])

  return (
    <Main>
      <div className="col-start-1 col-end-7 h-[500px]">
        <Tldraw hideUi />
      </div>
      <div
        id="cstdraw"
        className="col-start-1 col-end-7 h-[500px]"
      ></div>
    </Main>
  )
}
