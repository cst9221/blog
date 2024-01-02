export default function HomePage() {
  return (
    <div className="relative">
      <div className="absolute right-0 w-50 h-screen bg-white">sdkfjl</div>

      <section className="absolute top-0 h-[100vh] max-w-[672px] m-auto dark:text-white">
        <div className="sticky h-[200vh] bg-red-400">
          <div>section1</div>
          <div className="top-1/2 right-4 w-48 aspect-square bg-slate-800"></div>
        </div>
      </section>
      <section className="absolute h-[100vh] max-w-[672px] m-auto dark:text-white">
        <div className="sticky h-[300vh] bg-yellow-400">
          <div className="">section2</div>
          <div className="top-1/2 right-4 w-48 aspect-square bg-slate-700"></div>
        </div>
      </section>
      <section className="absolute h-[100vh] max-w-[672px] m-auto dark:text-white">
        <div className="sticky h-[200vh] bg-green-400">
          <div className="">section3</div>
          <div className="top-1/2 right-4 w-48 aspect-square bg-slate-600"></div>
        </div>
      </section>
    </div>
  )
}
