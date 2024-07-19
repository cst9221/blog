import katex from "katex"
import "katex/dist/katex.css"

// const data = "x = \\dfrac {-b \\pm \\sqrt{b^2 - 4ac}}{2a}"
// const html = katex.renderToString(data)

const KatexServerComponent = ({tex}) => {
  return <div dangerouslySetInnerHTML={{__html: katex.renderToString(tex)}}></div>
}

export default KatexServerComponent
