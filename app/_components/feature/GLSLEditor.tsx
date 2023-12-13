"use client"

import { useEffect } from "react"
import "@/app/_modules/glslEditor/css/glslEditor.css"
import "@/app/_modules/glslEditor/css/ElectronApp.css"

const GLSLEditor = () => {
  useEffect(() => {
    const render = async () => {
      const WebGLEngine = (await import("@/app/_modules/glslEditor")).default

      new WebGLEngine("#cst-glsl-eidtor", {
        canvas_size: 500,
        canvas_draggable: true,
        canvas_resizable: true,
        theme: "monokai",
        watchHash: true,
        fileDrops: true,
        menu: true,
      })
    }

    render()
  },[])
    
    return <div id="cst-glsl-eidtor"/>
}

export default GLSLEditor
