"use client"

import {useState, useEffect, useRef} from "react"

const Mousefollow = () => {
  const [point, setPoint] = useState({x: 0, y: 0})
  const {x, y} = point
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const handlePointerMove = ({clientX, clientY}: PointerEvent) => {
      const element = ref.current
      if (!element) return
      const x = clientX - element.offsetLeft - element.offsetWidth / 2
      const y = clientY - element.offsetTop - element.offsetHeight / 2
      setPoint({x, y})
    }

    window.addEventListener("pointermove", handlePointerMove)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-[33vw] aspect-square rounded-full blur-[11vw] bg-[#FF4800] opacity-20 -z-[1]"
      style={{
        transform: `translate(${x}px, ${y}px)`
      }}
    />
  )
}

export default Mousefollow
