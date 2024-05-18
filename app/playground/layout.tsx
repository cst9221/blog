export default function PlayGroudLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4 w-[320px] md:w-[450px] mx-auto mt-8">{children}</div>
    </div>
  )
}
