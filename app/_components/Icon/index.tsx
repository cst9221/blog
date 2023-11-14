import React, { DetailedHTMLProps, HTMLAttributes } from "react"
import dynamic from "next/dynamic"

interface Props extends React.SVGProps<SVGSVGElement> {
  name: IconName
}

const Icon = ({ name, ...props }: Props) => {
  const SVG = dynamic(() => import(`@/app/_assets/icon/${name}.svg`))

  return (
    <SVG
      className={`i-${name}`}
      {...props}
    />
  )
}

export default Icon
