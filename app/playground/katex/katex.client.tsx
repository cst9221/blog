"use client"

import katex from "katex"
import "katex/dist/katex.css"
import {useEffect, useRef, useState} from "react"

const KatexClientComponent = ({tex}) => {
  const elementRef = useRef(null)

  useEffect(() => {
    if (elementRef.current) setTimeout(() => katex.render(tex, elementRef.current), Math.floor(Math.random() * 81))
  }, [tex])

  return <div ref={elementRef}></div>
}

export default KatexClientComponent
