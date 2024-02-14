"use client"

import {useEffect, useMemo, useState} from "react"
import Link from "next/link"
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation"

const Head = () => {
  const [hash, setHash] = useState("about")

  // text-[#FF4800]
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 flex px-4 backdrop-blur-sm rounded-full z-10">
      <Link href="#about" onClick={() => setHash("about")}>
        <div className={`py-4 px-2 transition-colors font-bold ${hash === "about" ? "text-[#FF4800]" : ""}`}>About</div>
      </Link>
      <Link href="#projects" onClick={() => setHash("projects")}>
        <div className={`py-4 px-2 transition-colors font-bold ${hash === "projects" ? "text-[#FF4800]" : ""}`}>Projects</div>
      </Link>
      <Link href="#career" onClick={() => setHash("career")}>
        <div className={`py-4 px-2 transition-colors font-bold ${hash === "career" ? "text-[#FF4800]" : ""}`}>Career</div>
      </Link>
      <Link href="#skills" onClick={() => setHash("skills")}>
        <div className={`py-4 px-2 transition-colors font-bold ${hash === "skills" ? "text-[#FF4800]" : ""}`}>Skills</div>
      </Link>
      <Link href="#contact" onClick={() => setHash("contact")}>
        <div className={`py-4 px-2 transition-colors font-bold ${hash === "contact" ? "text-[#FF4800]" : ""}`}>Contact</div>
      </Link>
    </div>
  )
}

export default Head
