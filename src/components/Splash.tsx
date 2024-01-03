"use client"

import {useEffect, useRef} from "react"

const SplashScreen = () => {
  const wrapperRef = useRef<HTMLDivElement>()
  const progressRef = useRef<HTMLDivElement>()

  const handleProgressEnd = () => {
    setTimeout(() => {
      wrapperRef.current.remove()
    }, 1500)
  }

  useEffect(() => {
    progressRef.current.style.width = "100%"
  }, [])

  return (
    <div ref={wrapperRef} className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-primary z-[100]">
      <h1 className="text-4xl">안녕하세요, 개발자 최승태입니다</h1>
      <div className="w-[22%] h-[2px] mt-8 rounded-sm overflow-hidden">
        <div
          ref={progressRef}
          onTransitionEnd={handleProgressEnd}
          className="w-0 h-full bg-[#101010] transition-[width] duration-[5000ms] ease-out"
        />
      </div>
    </div>
  )
}

export default SplashScreen
