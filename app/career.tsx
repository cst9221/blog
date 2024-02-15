"use client"

import {useRef, useState, HTMLAttributes, ReactNode, useEffect, useMemo} from "react"
import Image from "next/image"
import {motion} from "framer-motion"
import Link from "next/link"
import IconLink from "public/images/ico-link.svg"
import IconChevronRightSmall from "public/images/ico-chevron-right-small.svg"

const Career = () => {
  const [activateIndex, setActivateIndex] = useState(0)

  const handleClickRipple = (index: number) => {
    setActivateIndex(index)
  }

  return (
    <div className="relative flex flex-col">
      <div className="absolute top-2 left-[40%] -translate-x-1/2 flex flex-col gap-[10%] w-[2px] h-[calc(100%-32px)] bg-gradient-to-b from-[#FF4800] via-transparent via-[125%]" />

      <div className="relative flex w-full">
        <div
          className={`absolute top-2 left-[40%] -translate-x-1/2 w-[20px] h-[20px] bg-[#FF4800] hover:w-[20px] hover:h-[20px] transition-all duration-700 cursor-pointer`}
        >
          <motion.div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF4800]`}
            initial={{opacity: "70%", width: "100%", height: "100%"}}
            animate={{opacity: "0%", width: "220%", height: "220%"}}
            transition={{repeat: Infinity, repeatDelay: 1, duration: 1.5}}
          />
        </div>

        <div className="flex w-[calc(40%-24px)] justify-end mr-6">
          <div className="relative h-8 aspect-[140/32]">
            <Image src="/images/prediction-logo.png" alt="" fill objectFit="contain" />
          </div>
        </div>

        <div className="flex flex-col justify-start w-[40%] ml-6">
          <div className="flex">
            <h3 className="text-3xl font-bold">프리딕션</h3>
            <div className="flex justify-end items-end ml-4 text-sm text-gray-400">2020.09 ~</div>
          </div>

          <div className="mt-4">
            <p className="my-2 text-base">
              학생들의 학습 목표를 달성하기 위해 다양한 학습 도구와 자료를 제공하고,
              <br />
              AI를 활용하여 <b>개별화된 학습 경험을 제공하는 서비스</b>를 운영합니다.
            </p>
            <p className="my-2 text-base">
              프론트엔드 챕터에서 서비스 개발과 아키텍처 개선, 인프라 구축을 주로 담당했습니다.
              <br />
              <b>전체 개발팀을 리드</b>하여 코드 리뷰와 스터디를 진행하며 <b>개발문화를 주도적으로 개선</b>하고,
              <br />
              기획 단계에서 <b>요구사항을 분석</b>하고 개발자 관점을 기획에 반영하는 역할을 수행했습니다.
            </p>
          </div>

          <hr className="border-gray-300 my-4" />

          <div>
            <div className="flex h-fit">
              <div className="w-[4px] h-[1.75em] bg-black mr-2" />
              <div className="font-bold text-lg">서비스 개발</div>
              <div className="flex justify-end items-end ml-4 text-sm text-gray-400">2020.09 ~ </div>
            </div>
            {/* "https://www.wadiz.kr/web/campaign/detail/84041" */}
            <ul className="mt-4">
              <li className="list-disc ml-4 text-sm">
                <Link href="/career/lms" className="flex items-center hover:text-[#FF4800] transition-colors">
                  큐비 내신 연구소 - 내신특화 문제은행 서비스
                </Link>
              </li>

              <li className="list-disc mt-2 ml-4 text-sm">
                <Link href="/career/cms" className="flex items-center hover:text-[#FF4800] transition-colors">
                  Admin(백오피스) - B2C 서비스의 콘텐츠 관리, 운영 자동화 및 데이터 조회 등 운영 서비스
                </Link>
              </li>

              <li className="list-disc mt-2 ml-4 text-sm">
                <Link href="/career/qbbooks" className="flex items-center hover:text-[#FF4800] transition-colors">
                  큐비북스 - 시중 문제집들을 빠르고 간편하게 앱에서 풀 수 있게하는 서비스
                </Link>
              </li>

              <li className="list-disc mt-2 ml-4 text-sm">
                <Link href="/career/qb" className="flex items-center hover:text-[#FF4800] transition-colors">
                  큐비 - 인공지능 기반 중고등학생 내신대비 문제풀이 서비스
                </Link>
              </li>

              <li className="list-disc mt-2 ml-4 text-sm">
                <Link href="/career/oatmeal" className="flex items-center hover:text-[#FF4800] transition-colors">
                  오트밀 - 사용자의 취약점을 AI로 분석하고, 부족한 개념을 학습하는 오답 관리 앱 서비스
                </Link>
              </li>

              <li className="list-disc mt-2 ml-4 text-sm">
                <Link href="/career/labeling" className="flex items-center hover:text-[#FF4800] transition-colors">
                  사내 문제 라벨링 툴 - 중,고등학교 문제를 DB화하기위한 사내 라벨링 툴
                </Link>
              </li>

              <li className="list-disc mt-2 ml-4 text-sm">
                <Link href="/career/bansong" className="flex items-center hover:text-[#FF4800] transition-colors">
                  반송이 - 리뷰 기반의 맞춤 제품 분석, 상품 추천 및 판매 서비스
                </Link>
              </li>

              {/* 
              고객 유입 흐름 파악을 위한 업무 프로세스 관련 데이터 대규모 연동 (Funnel)
              그림 픽업/설치/철수/반납 일정의 관리를 위한 캘린더 페이지 기획 및 개발
              외주 일정의 관리를 위한 외주 일정 관리 페이지 기획 및 개발
              일정 방문 정보의 작성과 관리를 위한 페이지 기획 및 개발
              초기 아트테크 시스템 개발 및 관련 추가 기획/개발 담당
              작가 송금 관리 시스템 개발
              발생주의 기반의 매출 분석 페이지 개발
              수익률 분석을 위한 작품 분석 페이지 개발
              고객의 유입률 등을 보여주는 통계 페이지 개발
              고객 통계를 위한 UTM 파라미터 추적 기능 개발
              전시 데이터 등록 및 관리 시스템 리뉴얼
              Jira API 기반의 업무 관리 페이지 기획 및 개발
              알림톡 및 문자메시지 발송 API 업체 이관 및 관련 개발
              Iamport 모듈을 이용한 결제 기능 리팩토링
              이미지 AWS S3 업로드 방식의 통일 및 최적화
              오랫동안 유지보수되지 않은 페이지 및 기능 정리
              자주 쓰이는 코드의 리팩토링 (EX. 페이지네이션)
              Python, Django, Node.js 버전 업그레이드 
              */}
            </ul>
          </div>

          <div className="mt-8">
            <div className="flex h-fit">
              <div className="w-[4px] h-[1.75em] bg-black mr-2" />
              <div className="font-bold text-lg">프론트엔드 기능 개발</div>
              <div className="flex justify-end items-end ml-4 text-sm text-gray-400">2020.09 ~ </div>
            </div>
            <ul className="mt-4">
              <li className="list-disc ml-4 text-sm">
                React Native프로젝트를 React Native/NextJS로 마이그레이션하여 배포시간을 48시간에서 15분으로 단축
              </li>
              <li className="list-disc mt-2 ml-4 text-sm"></li>
            </ul>
          </div>
        </div>
      </div>
      {/* 
        - React Native프로젝트를 React Native/NextJS로 마이그레이션하여 배포시간을 48시간에서 15분으로 단축
        - Github Actions pipeline을 이용한, branch에 맞는 CI/CD 전략 구성 및 셋팅
        - Adapter 패턴으로 웹앱 브릿지 모듈을 구현,  bridge 모듈과 RN라이브러리의 의존성 제거
        - 디자인 시스템 구조를 개선하여 중복 컴포넌트 제거, 총 컴포넌트 수 75개(55%) 감소
        - 컴포넌트 생성 스크립트와 타입 추가 자동화 스크립트를 작성하여 생산성 증가, 휴먼 오류 0%로 개선
        - 30만개의 문제와 6가지의 타입으로 구성된 총 180만개의 페이지를 ISR로 구현, FCP 60%개선
        - 필기 성능을 개선하기 위해 canvas와 Webgl등 19개의 필기 관련 라이브러리 및 glsl을 연구 후 필기 성능 개선
        - Intersection Observer API를 사용해  Lazy Loading를 구현하여 12종류 그래프 페이지의 로딩속도 약 6s 개선  
      */}

      {/* <div className="relative flex w-full mt-16">
        <Ripple active={activateIndex === 1} onClick={() => handleClickRipple(1)} />

        <div className="flex flex-1 justify-end mr-6">
          <div className="flex">
            <span className="text-xl font-bold">CMS</span>
            <span className=" self-end ml-4 text-sm">2020.09 -</span>
          </div>

          <div className="w-3/5 mt-4">
            학생들의 학습 목표 달성을 돕기 위해 다양한 학습 도구와 자료를 제공하고, 더불어 AI를 통해 개별화된 학습 경험을 제공하여 학생들의 학습
            생산성 향상 서비스를 다양하게 운영합니다.
            <br />
            이제 개발 리드 프론트엔드등등 내용 무슨 업무하는지 쓰면 됨 지피티한테 물어봄 GPT 링크
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-start ml-6"></div>
      </div> */}

      {/* <Project active={activateIndex === 1} index={1} onClickRipple={handleClickRipple} title="CMS" period="2020.09 -">
        학생들의 학습 목표 달성을 돕기 위해 다양한 학습 도구와 자료를 제공하고, 더불어 AI를 통해 개별화된 학습 경험을 제공하여 학생들의 학습 생산성
        향상 서비스를 다양하게 운영합니다.
        <br />
        이제 개발 리드 프론트엔드등등 내용 무슨 업무하는지 쓰면 됨 지피티한테 물어봄 GPT 링크
      </Project>

      <Project active={activateIndex === 2} index={2} onClickRipple={handleClickRipple} title="CMS" period="2020.09 -">
        학생들의 학습 목표 달성을 돕기 위해 다양한 학습 도구와 자료를 제공하고, 더불어 AI를 통해 개별화된 학습 경험을 제공하여 학생들의 학습 생산성
        향상 서비스를 다양하게 운영합니다.
        <br />
        이제 개발 리드 프론트엔드등등 내용 무슨 업무하는지 쓰면 됨 지피티한테 물어봄 GPT 링크
      </Project>

      <Project active={activateIndex === 3} index={3} onClickRipple={handleClickRipple} title="CMS" period="2020.09 -">
        학생들의 학습 목표 달성을 돕기 위해 다양한 학습 도구와 자료를 제공하고, 더불어 AI를 통해 개별화된 학습 경험을 제공하여 학생들의 학습 생산성
        향상 서비스를 다양하게 운영합니다.
        <br />
        이제 개발 리드 프론트엔드등등 내용 무슨 업무하는지 쓰면 됨 지피티한테 물어봄 GPT 링크
      </Project> */}
    </div>
  )
}

export default Career

const Project = ({
  active,
  index,
  onClickRipple,
  image,
  title,
  period,
  children,
  ...props
}: {
  active: boolean
  index: number
  onClickRipple: (index: number) => void
  image?: ReactNode
  title: string
  period?: string
} & HTMLAttributes<HTMLDivElement>) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const odd = useMemo(() => index % 2 === 1, [])

  useEffect(() => {
    if (active && contentRef.current) {
      const {top, right, bottom, left, width, height, x, y} = contentRef.current?.getBoundingClientRect()
    }
  }, [active])

  return (
    <div className={`relative flex w-full ${index === 0 ? "" : "mt-16"}`}>
      <Ripple round={index !== 0} active={active} onClick={() => onClickRipple(index)} />

      <div className="flex flex-1 justify-end mr-6">
        {odd ? (
          image && (
            <div className="relative h-8 aspect-[140/32]">
              <Image src={`/images/${image}`} alt="" fill objectFit="contain" />
            </div>
          )
        ) : (
          <>
            <div className="w-3/5 mt-4">{children}</div>
            <div className="flex">
              <span className="text-xl font-bold">{title}</span>
              <span className=" self-end ml-4 text-sm">{period}</span>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col flex-1 justify-start ml-6">
        {odd ? (
          <>
            <div className="flex">
              <span className="text-xl font-bold">
                {title}
                {JSON.stringify(odd)}
              </span>
              <span className=" self-end ml-4 text-sm">{period}</span>
            </div>

            <div className="w-3/5 mt-4">{children}</div>
          </>
        ) : (
          image && (
            <div className="relative h-8 aspect-[140/32]">
              <Image src={`/images/${image}`} alt="" fill objectFit="contain" />
            </div>
          )
        )}
      </div>
    </div>
  )
}

const Ripple = ({
  active,
  round,
  ...props
}: {
  active?: boolean
  round?: boolean
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`absolute top-2 left-1/2 -translate-x-1/2 bg-[#FF4800] hover:w-[20px] hover:h-[20px] transition-all duration-700 cursor-pointer ${
        round ? "rounded-full" : ""
      } ${active ? "w-[20px] h-[20px]" : "w-[12px] h-[12px]"}`}
      {...props}
    >
      {active && (
        <motion.div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF4800] ${round ? "rounded-full" : ""}`}
          initial={{opacity: "70%", width: "100%", height: "100%"}}
          animate={{opacity: "0%", width: "220%", height: "220%"}}
          transition={{repeat: Infinity, repeatDelay: 1, duration: 1.5}}
        />
      )}
    </div>
  )
}
