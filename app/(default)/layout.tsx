import Link from "next/link"

export default function DefaultLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <header className="fixed top-0 left-0 w-full">
        <nav className="py-2 mx-4">
          <ol className="flex justify-center gap-2">
            <li className="inline-block">
              <Link href="/about" className="px-2">
                about
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/posts" className="px-2">
                posts
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/playground" className="px-2">
                playground
              </Link>
            </li>
          </ol>
        </nav>
      </header>

      <main className="min-w-[672px] w-1/2 max-w-[1024px] bg-gray-400 m-auto">{children}</main>
    </>
  )
}
