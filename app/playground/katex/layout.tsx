export const list = {
  first: "x = \\dfrac {-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
  second: "\\begin{bmatrix} \\sigma = \\sqrt{ \\frac{1}{N} \\sum_{i=1}^N (x_i -\\mu)^2} \\end{bmatrix}",
  third: "\\sqrt{x^2} \\times \\frac{2}{3}",
  forth: "\\int_a^b f'(x) dx = f(b)- f(a)",
  fifth: `
  \\begin{bmatrix} \\vec{\\nabla} \\times \\vec{F} =
    \\left( \\frac{\\partial F_z}{\\partial y} - \\frac{\\partial F_y}{\\partial z} \\right) \\mathbf{i}
    + \\left( \\frac{\\partial F_x}{\\partial z} - \\frac{\\partial F_z}{\\partial x} \\right) \\mathbf{j} \\end{bmatrix}
  `
}

const KatexLayout = () => {
  return (
    <>
      {/* <H1>ISR을 이용한 FCP 개선</H1> */}

      {/* <Paragraph>
        <u>
          <a href="https://katex.org/">katex</a>
        </u>
        는 수학 수식을 렌더링하기위한 라이브러리이다.
      </Paragraph>

      <div className="flex gap-2">
        {Object.keys(list).map((value) => (
          <Link href={`/playground/katex/${value}`}>{value}</Link>
        ))}
      </div> */}

      {/* {children} */}
    </>
  )
}

export default KatexLayout
