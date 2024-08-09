import type { Metadata } from "next"

import { IBM_Plex_Sans_KR } from "next/font/google"
import "./globals.css"
import 'app/_styles/markdown.css'
import Link from "next/link"
import AuthMenu from "./AuthMenu"
import NextAuthSessionProvider from "./NextAuthProvider"

const IBMPlexSansKR = IBM_Plex_Sans_KR({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: {
    default: "최승태 블로그",
    template: "최승태 블로그 | %s"
  },
  description: "다양한 삽질들을 담아내기 위한 사이트입니다",
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={IBMPlexSansKR.className}>
      <head></head>
      <body className="bg-primary-dark">
        <NextAuthSessionProvider>
          <div className="pt-[60px]">
            <header className="fixed top-0 left-0 right-0 flex justify-center h-[60px] bg-white z-50">
              <div className="container mx-auto flex justify-between items-center">
                <div className="font-bold">
                  <Link href="/" className="text-2xl hover:text-gray-300">
                    CST9221
                  </Link>
                </div>

                <nav>
                  <ul className="flex items-center space-x-4">
                    <li>
                      <Link href="/about" className="text-sm hover:text-gray-300">
                        about
                      </Link>
                    </li>
                    <li>
                      <Link href="/posts" className="text-sm hover:text-gray-300">
                        posts
                      </Link>
                    </li>
                    <li>
                      <AuthMenu />
                    </li>
                  </ul>
                </nav>
              </div>
            </header>

            <main>
              {children}
            </main>
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
