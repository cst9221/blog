"use client"

import {useState} from "react"
import Link from "next/link"
import IconArrowLeft from "public/images/ico-arrow-left.svg"

const Head = () => {
  return (
    <div className="fixed top-4 left-4 flex px-4 backdrop-blur-sm rounded-full z-10">
      <Link href="/">
        <div className={`flex items-center py-4 px-2 transition-colors `}>
          <IconArrowLeft /> <span className="text-lg font-bold text-[#3c4e65] ml-2">HOME</span>
        </div>
      </Link>
    </div>
  )
}

export default Head
