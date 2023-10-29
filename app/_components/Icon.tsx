import dynamic from "next/dynamic"
import React, { DetailedHTMLProps, HTMLAttributes } from "react"

interface Props extends React.SVGProps<SVGSVGElement> {
  name: IconName
}

const Icon = ({ name, ...props }: Props) => {
  const SVG = dynamic(() => import(`@/app/_assets/icon/${name}.svg`))

  return <SVG {...props} />
}

export default Icon
