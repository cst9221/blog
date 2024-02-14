import React, {HTMLAttributes, useImperativeHandle, useRef} from "react"

type Props = {} & HTMLAttributes<HTMLDivElement>

const Ripple = React.forwardRef((props: Props, ref) => {
  const rippleRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => ({
    rippling: () => {
      const ripplingEl = document.createElement("div")

      rippleRef.current?.appendChild<HTMLDivElement>(ripplingEl)
    }
  }))

  return <div ref={rippleRef} {...props} />
})
export default Ripple
