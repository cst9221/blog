"use client"

import {useEffect, useState} from "react"
import IconC from "public/images/ico-c.svg"

const C = () => {
  const [deg, setDeg] = useState(0)

  useEffect(() => {
    const handleScrollEvent = (event: Event) => {
      setDeg(event.target.scrollTop % 360)
    }

    document.body.addEventListener("scroll", handleScrollEvent)

    return () => {
      document.body.removeEventListener("scroll", handleScrollEvent)
    }
  }, [])

  return (
    <div className="fixed top-1/2 left-4 -translate-y-1/2 z-10" style={{transform: `rotate(${deg}deg)`}}>
      <IconC />
    </div>
  )
}

export default C
