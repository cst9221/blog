"use client"

import {useEffect} from "react"
import {usePathname, useSearchParams} from "next/navigation"

export default function ScrollRestoration() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // 브라우저의 history의 scrollRestoration을 manual로 변경. 기본값은 auto로 되어있는데 manual로 변경해줘야 수동으로 스크롤 포지션을 바꿔줄 수 있다.
  useEffect(() => {
    if ("scrollRestoration" in history && history.scrollRestoration !== "manual") {
      history.scrollRestoration = "manual"
    }
  }, [])

  // route가 변경됐을 때 마지막 스크롤 포지션 값을 저장
  useEffect(() => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString()) // sessionStorate에는 string값만 저장할 수 있다.
    console.log(pathname, searchParams)
    return () => {}
  }, [pathname, searchParams])

  useEffect(() => {
    // scrollPosition과 restoreScrollPosition 키가 존재 할 경우에만 스크롤 포지션을 복구
    if ("scrollPosition" in sessionStorage && "restoreScrollPosition" in sessionStorage) {
      window.scrollTo(0, Number(sessionStorage.getItem("scrollPosition")))
      // 스크롤 포지션을 복구 한 후엔 키를 삭제
      sessionStorage.removeItem("scrollPosition")
      sessionStorage.removeItem("restoreScrollPosition")
    }
  }, [])

  return null
}
