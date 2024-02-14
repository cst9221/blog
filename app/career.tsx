"use client"

import {useRef, useState, HTMLAttributes, ReactNode, useEffect, useMemo} from "react"
import Image from "next/image"
import {motion} from "framer-motion"

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
            <div className="flex justify-end items-end ml-4 tex-sm text-gray-400">2020.09 -</div>
          </div>

          <div className="mt-4">
            <p className="my-2 text-base">
              학생들의 학습 목표를 달성하기 위해 다양한 학습 도구와 자료를 제공하고, AI를 활용하여 개별화된 학습 경험을 제공하는 서비스를 운영합니다.
            </p>
            <p className="my-2 text-base">
              전체 개발팀의 리드하며 코드 리뷰, 스터디를 진행하며 개발문화를 개선을 주도하여 팀원들의 성장을 촉진하는데 힘썼습니다.
              <br />
              또한, 기획의 요구사항 분석과 정확한 문제 정의를 통해 기획에 개발자 관점을 더하는 기술 검토를 담당했고
              <br />
              주로 프론트엔드 챕터의 서비스 개발, 인프라 구축 및 아키텍처 개선등의 업무를 담당했습니다.
            </p>
          </div>

          <hr className="border-gray-300 my-4" />

          <div>
            <div className="flex h-fit">
              <div className="w-[4px] h-[1em] bg-black mr-2" />
              <div className="font-bold">백 오피스의 전반적인 관리 및 각종 기능 개발/기획</div>
            </div>
            <div>2019년 하반기 ~ 현재</div>
            <ul className="">
              <li className="list-disc ml-4 text-base">고객 유입 흐름 파악을 위한 업무 프로세스 관련 데이터 대규모 연동 (Funnel)</li>
              <li className="list-disc ml-4 text-base">그림 픽업/설치/철수/반납 일정의 관리를 위한 캘린더 페이지 기획 및 개발</li>
              <li className="list-disc ml-4 text-base">외주 일정의 관리를 위한 외주 일정 관리 페이지 기획 및 개발</li>
              <li className="list-disc ml-4 text-base">일정 방문 정보의 작성과 관리를 위한 페이지 기획 및 개발</li>
              <li className="list-disc ml-4 text-base">초기 아트테크 시스템 개발 및 관련 추가 기획/개발 담당</li>
              <li className="list-disc ml-4 text-base">작가 송금 관리 시스템 개발</li>
              <li className="list-disc ml-4 text-base">발생주의 기반의 매출 분석 페이지 개발</li>
              <li className="list-disc ml-4 text-base">수익률 분석을 위한 작품 분석 페이지 개발</li>
              <li className="list-disc ml-4 text-base">고객의 유입률 등을 보여주는 통계 페이지 개발</li>
              <li className="list-disc ml-4 text-base">고객 통계를 위한 UTM 파라미터 추적 기능 개발</li>
              <li className="list-disc ml-4 text-base">전시 데이터 등록 및 관리 시스템 리뉴얼</li>
              <li className="list-disc ml-4 text-base">Jira API 기반의 업무 관리 페이지 기획 및 개발</li>
              <li className="list-disc ml-4 text-base">알림톡 및 문자메시지 발송 API 업체 이관 및 관련 개발</li>
              <li className="list-disc ml-4 text-base">Iamport 모듈을 이용한 결제 기능 리팩토링</li>
              <li className="list-disc ml-4 text-base">이미지 AWS S3 업로드 방식의 통일 및 최적화</li>
              <li className="list-disc ml-4 text-base">오랫동안 유지보수되지 않은 페이지 및 기능 정리</li>
              <li className="list-disc ml-4 text-base">자주 쓰이는 코드의 리팩토링 (EX. 페이지네이션)</li>
              <li className="list-disc ml-4 text-base">Python, Django, Node.js 버전 업그레이드</li>
            </ul>
          </div>
        </div>
      </div>

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
