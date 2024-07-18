import type {Metadata} from "next"

import {Roboto} from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  weight: "400",
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

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko" className={roboto.className}>
      <head></head>
      <body className="bg-primary-dark">
        <header className="fixed top-0 left-0 right-0 bg-gray-800 text-secondary-light">
          <div className="container mx-auto flex justify-between items-center py-2 px-4">
            <div className="font-bold">
              <a href="#" className="hover:text-gray-300">
                CST9221
              </a>
            </div>

            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-sm hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-gray-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-gray-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-gray-300">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  )
}
