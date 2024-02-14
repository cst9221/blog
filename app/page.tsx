import C from "public/images/ico-c.svg"
import Head from "./head"
import Projects from "./projects"
import Career from "./career"

const DefaultPage = () => {
  return (
    <>
      <div className="relative ">
        <div id="c" className="fixed top-1/2 left-4 -translate-y-1/2 z-10">
          <C />
        </div>

        <Head />

        <div id="about" className="h-screen">
          <div className="flex flex-col justify-center items-center h-full">
            <div className=" text-7xl font-bold">최승태</div>
            <div className="text-center mt-2">
              문제를 <span className="font-bold text-[#FF4800]">정의</span>하고 <span className="font-bold text-[#FF4800]">해결</span>하는 프론트엔드
              엔지니어입니다.
              <br />
              단기적인 문제뿐 아니라 장기적으로 문제를 해결하고 발전시키는 것을 중요하게 생각합니다.
            </div>
          </div>
        </div>

        <div id="projects" className="min-h-screen">
          <Projects />
        </div>

        <div id="career" className="">
          <Career />
        </div>

        <div id="skills" className="h-screen">
          skills
        </div>

        <div id="contact" className="h-screen">
          contact
        </div>
      </div>
    </>
  )
}

export default DefaultPage
