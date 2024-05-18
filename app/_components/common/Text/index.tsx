import {createElement} from "react"

export const TextBase = ({children, tag = "span", ...rest}) => {
  return createElement(tag, rest, children)
}

export const Paragraph = ({children, className = "", ...rest}) => {
  return (
    <TextBase className={className || "text-gray9 text-sm"} tag="p" {...rest}>
      {children}
    </TextBase>
  )
}

const Text = ({children, className = "", ...rest}) => {
  return (
    <TextBase className={className || "text-gray9 text-sm"} {...rest}>
      {children}
    </TextBase>
  )
}

export default Object.assign(Text, {})
