import type {Metadata} from "next"

import {Inter} from "next/font/google"
import "./globals.css"
import Mousefollow from "./_components/feature/Mousefollow"
import ScrollRestoration from "./_components/feature/ScrollRestoration"

const inter = Inter({subsets: ["latin"]})

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

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <head></head>
      <body className="bg-[#E5E5E5] bg-[url('/images/noise.png')]">
        {children}
        <Mousefollow />
        <ScrollRestoration />
      </body>
    </html>
  )
}
