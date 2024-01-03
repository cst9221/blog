import Image from "next/image"

export const ContainPaintComponent = () => {
  return (
    <div className="relative">
      <div className="m-0">
        <section className="relative h-[100vh] bg-white contain-paint">
          <div className="absolute top-0 w-full h-[200vh] z-[2]">
            <div className="sticky top-0 flex items-center h-[100vh]">
              <div className="absolute left-[8vw] w-[41vw]">section1</div>
              <div className="absolute left-[55vw] h-[30vw] w-[30vw]">
                <Image
                  src="https://studiod.nu/_vercel/image?url=https://wp.studiod.nu/wp-content/uploads/2023/05/project-nyma-site-hero.jpg&w=1920&q=80"
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-[100vh] bg-white contain-paint">
          <div className="absolute -top-[100vh] w-full h-[300vh] z-[2]">
            <div className="sticky top-0 flex items-center h-[100vh]">
              <div className="absolute left-[8vw] w-[41vw]">section2</div>
              <div className="absolute left-[55vw] h-[30vw] w-[30vw]">
                <Image
                  src="https://studiod.nu/_vercel/image?url=https://wp.studiod.nu/wp-content/uploads/2023/05/project-cobercokwartier-hero.jpg&w=1920&q=80"
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-[100vh] bg-white contain-paint">
          <div className="absolute -top-[100vh] w-full h-[200vh] z-[2]">
            <div className="sticky top-0 flex items-center h-[100vh]">
              <div className="absolute left-[8vw] w-[41vw]">section3</div>
              <div className="absolute left-[55vw] h-[30vw] w-[30vw]">
                <Image
                  src="https://studiod.nu/_vercel/image?url=https://wp.studiod.nu/wp-content/uploads/2023/09/project-wolgadreef-utrecht-cover-01.jpg&w=1920&q=80"
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
