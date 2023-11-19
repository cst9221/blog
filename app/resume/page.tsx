"use client"

import Button from "@/app/_components/Button"
import Mark from "@/app/_components/Highlight/Mark"
import Icon from "@/app/_components/Icon"
import Main from "@/app/_components/Layout/Main"

import { useEffect } from "react"
import { db } from "../_modules/firebase"
import { addDoc, collection, getDocs } from "firebase/firestore"

export default function Home() {
  useEffect(() => {
    const log = localStorage.getItem("cst9221.log")
    if (!log) {
      addDoc(collection(db, "app"), { date: new Date() }).then((result) => {
        localStorage.setItem("cst9221.log", result.id)
        console.log(`welcome your id is ${result.id}`)
        getDocs(collection(db, "app")).then((result2) => {
          console.log(result2.size)
        })
      })
    } else {
      getDocs(collection(db, "app")).then((result2) => {
        console.log(result2.size)
      })
    }
  }, [])

  return (
    <Main>
      <h1 className="col-start-1 col-end-5 text-5xl font-semibold">최승태</h1>
      <h2 className="col-start-1 col-end-5 text-xl font-light">프론트엔드 엔지니어</h2>

      <div className="col-start-5 col-end-7 row-start-1 row-end-3 self-center">
        <ul>
          <li>
            <a
              href="https://github.com/cst9221"
              target="#"
            >
              <Button>
                <Icon
                  name="github-mark-simple"
                  width="20"
                  height="20"
                  className="inline mr-2"
                />
                https://github.com/cst9221
              </Button>
            </a>
          </li>
          <li>
            <a
              href="https://velog.io/@chltmdxo3"
              target="#"
            >
              <Button>
                <Icon
                  name="velog-mark"
                  width="20"
                  height="20"
                  className="inline mr-2"
                />
                https://velog.io/@chltmdxo3
              </Button>
            </a>
          </li>
          <li>
            <a
              href="https://cst9221.vercel.app"
              target="#"
            >
              <Button>
                <Icon
                  name="site"
                  width="20"
                  height="20"
                  className="inline mr-2"
                />
                https://cst9221.vercel.app
              </Button>
            </a>
          </li>
          <li>
            <a
              href="mailto:chltmdxo3@gmail.com"
              target="#"
            >
              <Button>
                <Icon
                  name="email"
                  width="20"
                  height="20"
                  className="inline mr-2"
                />
                chltmdxo3@gmail.com
              </Button>
            </a>
          </li>
        </ul>
      </div>

      <div className="col-start-1 col-end-7 mt-12">
        <h3 className="text-3xl font-bold">About Me</h3>
        <hr className="mt-4 mb-2" />
      </div>

      <div className="col-start-1 col-end-7 ">
        <p className="text-base">
          {/* 
            <span className="text-lg">이유를 좇는 개발자입니다.</span>
            <br />
            주어진 일을 쳐내는 것이 아니라 이해관계자들과 <Mark>끊임없이 소통</Mark>하여 주어진 근본 문제를 찾아내고 해결해냅니다.
            <br /> 
          */}
          {/* <span className="text-xl">코드로 세상을 평정하다</span> */}
          가까이에서 발생하는 문제들을 해결해 나가며 즐거움을 느낍니다. 스스로와 사용자들이 만족하는 모습을 상상할 때, 즐겁게 코드를 작성합니다.
          <br />
          <br />
          스타트업의 첫 번째 개발자로 합류하여 M&A까지 폭 넓은 경험을 했습니다. 두 번의 프로젝트 실패를 겪으며 개발만을 위한 개발이 아닌, 목표와 <Mark>비즈니스를 위한 개발</Mark>을 배웠습니다. 현재는 13명 이상의 개발 인원을 리드하고 있으며, 사업의 방향에 맞춰 서비스를 설계하고, 팀원이 주체적인 개발자로 성장하도록 힘쓰고 있습니다.
        </p>
      </div>

      {/* WORK */}
      <div className="col-start-1 col-end-7 mt-12">
        <h3 className="text-3xl font-bold">Works</h3>
        <hr className="mt-4 mb-2" />
      </div>

      <div className="col-start-1 col-end-2 ">
        <div className="text-2xl font-bold">프리딕션</div>
      </div>

      <div className="col-start-2 col-end-7 ">
        <div className="text-base">누적 회원수 87만, MAU 15만, 누적 학습 기록수 6000만건의 에듀테크 서비스, 2년 연속 우수사원</div>
        <div className="text-base">프론트엔드 개발, 개발 리드</div>

        {/* 큐비 */}
        <div className="border-l-2 pl-2 mt-8">
          <div>
            <span className="text-2xl font-bold mr-2">큐비</span>
            <span className="text-xs">2021.04 - 운영중</span>
          </div>

          <p className="text-base">인공지능 기반으로 내신 문제를 제공하고 풀 수 있는 서비스</p>

          <ul className="col-start-2 col-end-7 list-disc list-inside mb-4 mt-2">
            <li className="text-base">웹앱에서 웹과 앱이 통신하기 위한 Bridge 모듈화 (로그인, 결제, 공유, 등)</li>
            <li className="text-base">합성 컴포넌트 패턴으로 공용, 도메인, 페이지를 구분하여 중복되는 컴포넌트를 30개 이상 줄임 </li>
            {/* <li className="text-base">WebGL, GLSL을 통해 필기기능 구현</li> */}
            <li className="text-base">이미지 파일 추가시 타입 생성 및 API 모듈파일 생성 자동화를 통한 반복 업무 간소화, 오류 최소화</li>
            <li className="text-base">Github Actions, AWS ECS를 활용한 프론트엔드 인프라를 구축</li>
            <li className="text-base">백오피스(CMS) 개발로 데이터 조회, 관리, 푸시알림, 배포없이 콘텐츠 운영이 가능하도록 개선</li>
            {/* <li className="text-base">MonoRepo</li> */}
            {/* <li className="text-base">테스트 코드</li> */}
          </ul>
        </div>

        {/* 라벨링 */}
        <div className="border-l-2 pl-2 mt-8">
          <div>
            <span className="text-2xl font-bold mr-2">사내 문제 데이터 라벨링</span>
            <span className="text-xs">2020.12 - 운영중</span>
          </div>

          <p className="text-base">각종 형태로 존재하는 문제들을 DB화하기위한 프로젝트</p>

          <ul className="col-start-2 col-end-7 list-disc list-inside mb-4 mt-2">
            <li className="text-base">WYSIWYG Editor인 CKEditor5와 커스텀 기능을 위한 Plugin을 개발</li>
            <li className="text-base">shortcuts 기능 구현 및 편의 기능 개선</li>
            <li className="text-base">데이터 및 인프라를 고려한 문제 데이터구조 설계 참여</li>
          </ul>
        </div>

        {/* 큐비북스 */}
        <div className="border-l-2 pl-2 mt-8">
          <div>
            <span className="text-2xl font-bold mr-2">큐비북스</span>
            <span className="text-xs">2021.11 - 2022.05</span>
          </div>

          <p className="text-base">문제집 전용 ebook 서비스(ios)</p>

          <ul className="col-start-2 col-end-7 list-disc list-inside mb-4 mt-2">
            <li className="text-base">PencilKit을 이용한 필기 기능 구현</li>
            <li className="text-base">StoreKit을 활용한 문제별 필기 데이터 저장 기능 구현</li>
          </ul>
        </div>

        {/* 오트밀 */}
        {/* <div className="border-l-2 pl-2  mt-4">
          <div>
            <span className="text-md font-bold mr-2">오트밀</span>
            <span className="text-2xs">2021.01 - 2021.08</span>
          </div>
          <p className="text-2xs">중등수학 오답 관리 앱 서비스</p>
          <ul className="col-start-2 col-end-7 list-disc list-inside mb-4">
            <li className="text-xs leading-5">PencilKit을 이용한 필기 기능 구현</li>
            <li className="text-xs leading-5">StoreKit을 활용한 문제별 필기 데이터 저장 기능 구현</li>
          </ul>
        </div> */}

        {/* 반송이 */}
        {/* <div className="border-l-2 pl-2 mt-4">
          <div>
            <span className="text-md font-bold mr-2">반송이</span>
            <span className="text-2xs">2020.09 - 2020.12</span>
          </div>
          <p className="text-2xs">
            오트밀은 중등수학 오답 관리 앱 서비스로, 학생의 취약점을 AI로 분석하고, 그에 따른 개념을 학습시킵니다.
            <br />
            또한, AI 맞춤문제집을 통해 실력을 재검증하고 분석리포트를 통해 학습을 관리합니다.
          </p>
        </div> */}
      </div>

      <div className="col-start-1 col-end-7 mt-12">
        <h3 className="text-3xl font-bold">Skills</h3>
        <hr className="mt-4 mb-2" />
      </div>

      <div className="col-start-1 col-end-2 ">
        <div className="text-2xl font-bold">FrontEnd</div>
      </div>

      <ul className="col-start-2 col-end-7 list-disc list-inside mb-4">
        <li className="text-base">ES6, TypeScript, Swift</li>
        <li className="text-base">NextJS(page, app), React, ReactNative</li>
        <li className="text-base">Redux, RTK, React Query, Recoil</li>
        <li className="text-base">tailwind, StyledComponent, emotion</li>
        <li className="text-base">Canvas, WebGL(GLSL)</li>
      </ul>

      <div className="col-start-1 col-end-2">
        <div className="text-2xl font-bold">DevOps</div>
      </div>

      <ul className="col-start-2 col-end-7 list-disc list-inside mb-4">
        <li className="text-base">MySql, NoSql</li>
        <li className="text-base">GitHub Actions, AWS Code Deploy</li>
        <li className="text-base">AWS ECS, EC2, S3, ALB, SQS, RDS, DynamoDB, EFS</li>
        <li className="text-base">pm2, Nginx</li>
      </ul>

      <div className="col-start-1 col-end-2">
        <div className="text-2xl font-bold">BackEnd</div>
      </div>

      <ul className="col-start-2 col-end-7 list-disc list-inside mb-4">
        {/* <li className="text-base">FastAPI, Express</li> */}
        <li className="text-base">Express</li>
      </ul>

      <div className="col-start-1 col-end-7 mt-12">
        <h3 className="text-3xl font-bold">Education</h3>
        <hr className="mt-4 mb-2" />
      </div>

      <div className="col-start-1 col-end-2">
        <div className="text-2xl font-bold">백석대학교</div>
      </div>

      <div className="col-start-2 col-end-7">
        <div className="text-base">소프트웨어학과</div>
        <div className="text-xs">2014.03 - 2020.08(졸업)</div>
      </div>

      <div className="col-start-1 col-end-7 my-8" />

      <div className="col-start-6 col-end-7 text-2xs">작성일 : 23년 11월</div>
    </Main>
  )
}
