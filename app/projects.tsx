"use client"

import Image from "next/image"

const Projects = () => {
  const handleClickMore = () => {
    const c = document.getElementById("c")
    if (!c) return
    const {top, right, bottom, left, height, width, x, y, toJSON} = c.getBoundingClientRect()
    console.log(top, right, bottom, left, height, width, x, y)
  }
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <Card index={index} />
          ))}
      </div>
      <div className="flex-1 mt-[100px]">
        <button className="bg-[#FF4800] rounded-md px-6 py-2 text-white text-sm" onClick={handleClickMore}>
          더 알아보기
        </button>
      </div>
    </div>
  )
}

export default Projects

const Card = ({index}) => {
  return (
    <div className="w-[230px] md:w-[270px] lg:w-[300px]">
      <div className="relative w-full aspect-[300/200] shadow-md">
        <Image
          src="https://devhyun.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-thumbnail.cba75ab6.png&w=3840&q=75"
          fill
          //   objectFit="contain"
          alt=""
        />
      </div>
      <div className="flex">
        <div className="flex-1">
          <div className="font-bold">PROJECT</div>
          <div>후지제록스</div>
        </div>
        <div className="flex-1">
          <div className="font-bold">ROLE</div>
          <div>후지제록스</div>
        </div>
      </div>
    </div>
  )
}
