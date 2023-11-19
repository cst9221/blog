import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "최승태 블로그",
    template: "최승태 블로그 | %s",
  },
  description: "다양한 삽질들을 담아내기 위한 사이트입니다",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}