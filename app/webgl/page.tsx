import dynamic from "next/dynamic"

// const GLSLEditor = dynamic(() => import("../_components/feature/GLSLEditor"))
import GLSLEditor from "../_components/feature/GLSLEditor"

export default function GlslEditorPage() {

  return (
    <div className="bg-white">
      <GLSLEditor/>
    </div>
  )
}
