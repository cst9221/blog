import React, {DetailedHTMLProps, HTMLAttributes} from "react"
import dynamic from "next/dynamic"

interface Props extends React.SVGProps<SVGSVGElement> {
  name: IconName
  block: boolean
}

const Icon = ({name, block, ...props}: Props) => {
  const SVG = dynamic(() => import(`@/app/_assets/icon/${name}.svg`))
  if (!block) {
    return (
      <div className="inline-block">
        <SVG className={`i-${name}`} {...props} />
      </div>
    )
  }
  return <SVG className={`i-${name}`} {...props} />
}

export default Icon
