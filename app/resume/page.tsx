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
      <h1 className="col-start-1 col-end-5 text-3xl font-semibold">최승태</h1>
      <h2 className="col-start-1 col-end-5 font-light">프론트엔드 엔지니어</h2>

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
        <h3 className="text-xl">About Me</h3>
        <hr className="mt-4 mb-2" />
      </div>

      <div className="col-start-1 col-end-7 ">
        <p className="text-xs">
          깊이있게 탐구하는 걸 좋아합니다. 문제해결에 중심으로 다양한 기술들을 깊이있게 탐구하였
          <br />첫 직장의 첫 개발자로 합류하여 M&A까지 함께하며 넓은 경험을 하였습니다. <Mark>개발만을 위한 개발이 아닌 목표와 비즈니스를 위한 개발</Mark>
          <br />
          1명에서 시작하녀 현재는 12명이상의 개발 인원을 리드하고 있으며, 사업의 방향에 맞춰 서비스를 설계하고, 팀원이 주체적 개발자로 성장하도록 힘쓰고 있습니다.
        </p>
      </div>

      {/* WORK */}
      <div className="col-start-1 col-end-7 mt-12">
        <h3 className="text-xl">Work</h3>
        <hr className="mt-4 mb-2" />
      </div>

      <div className="col-start-1 col-end-2 ">
        <div className="text-lg font-bold">프리딕션</div>
      </div>

      <div className="col-start-2 col-end-7 ">
        {/* <LinkButton
            href="https://predictionai.co.kr/"
            target="_blank"
          ></LinkButton> */}
        <div className="text-2xs">누적 회원수 87만, MAU 15만, 누적 학습 기록수 6000만건의 에듀테크 서비스, 2년 연속 우수사원</div>
        <div className="text-2xs">프론트엔드 개발, 개발 리드</div>

        {/* 큐비 */}
        <div className="border-l-2 pl-2 mt-4">
          <div>
            <span className="text-md font-bold mr-2">큐비</span>
            <span className="text-2xs">2021.04 - 운영중</span>
          </div>

          <p className="text-2xs text-center">인공지능 기반으로 내신 문제를 제공하고 풀 수 있는 서비스</p>

          <ul className="col-start-2 col-end-7 list-disc list-inside mb-4">
            <li className="text-xs leading-5">
              웹앱에서 웹과 앱이 통신하기 위한 Bridge 모듈화 <Mark>(링크)</Mark>
            </li>
            <li className="text-xs leading-5">WebGL, GLSL을 통해 필기기능 구현</li>
            <li className="text-xs leading-5">이미지 파일 추가 및 API 모듈파일 생성 자동화를 통한 반복 업무 자동화</li>
            <li className="text-xs leading-5">Github Actions, AWS ECS를 활용해 프론트엔드 인프라를 구축</li>
            <li className="text-xs leading-5">백오피스 사이트 개발로 조회, 관리, 푸시알림, 데이터 등 운영 개선</li>
          </ul>
        </div>

        {/* 라벨링 */}
        <div className="border-l-2 pl-2 mt-4">
          <div>
            <span className="text-md font-bold mr-2">사내 문제 데이터 라벨링</span>
            <span className="text-2xs">2020.12 - 운영중</span>
          </div>
          <p className="text-2xs">각종 형태로 존재하는 문제들을 DB화하기위한 프로젝트</p>
          <ul className="col-start-2 col-end-7 list-disc list-inside mb-4">
            <li className="text-xs leading-5">WYSIWYG Editor인 CKEditor와 커스텀 기능을 위한 Plugin을 개발</li>
            <li className="text-xs leading-5">shortcuts 기능 구현 및 편의 기능 개선</li>
            <li className="text-xs leading-5">데이터 및 인프라를 고려한 문제 데이터구조 설계 참여</li>
          </ul>
        </div>

        {/* 큐비북스 */}
        <div className="border-l-2 pl-2 mt-4">
          <div>
            <span className="text-md font-bold mr-2">큐비북스</span>
            <span className="text-2xs">2021.11 - 2022.05</span>
          </div>
          <p className="text-2xs">문제집 전용 ebook 서비스(ios)</p>
          <ul className="col-start-2 col-end-7 list-disc list-inside mb-4">
            <li className="text-xs leading-5">PencilKit을 이용한 필기 기능 구현</li>
            <li className="text-xs leading-5">StoreKit을 활용한 문제별 필기 데이터 저장 기능 구현</li>
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
        <h3 className="text-xl">Skill</h3>
        <hr className="mt-4 mb-2" />
      </div>

      <div className="col-start-1 col-end-2 ">
        <div className="text-lg font-bold">FrontEnd</div>
      </div>

      <ul className="col-start-2 col-end-7 list-disc list-inside mb-4">
        <li className="text-2xs">ES6, TypeScript, Swift</li>
        <li className="text-2xs">NextJS(page, app), React, ReactNative</li>
        <li className="text-2xs">Redux, RTK, React Query, Recoil</li>
        <li className="text-2xs">tailwind, StyledComponent, emotion</li>
        <li className="text-2xs">Canvas, WebGL(GLSL)</li>
      </ul>

      <div className="col-start-1 col-end-2">
        <div className="text-lg font-bold">DevOps</div>
      </div>

      <ul className="col-start-2 col-end-7 list-disc list-inside mb-4">
        <li className="text-2xs">MySql, NoSql</li>
        <li className="text-2xs">GitHub Actions, AWS Code Deploy</li>
        <li className="text-2xs">AWS ECS, EC2, S3, ALB, SQS, RDS, DynamoDB, EFS</li>
        <li className="text-2xs">pm2, Nginx</li>
      </ul>

      <div className="col-start-1 col-end-2">
        <div className="text-lg font-bold">BackEnd</div>
      </div>

      <ul className="col-start-2 col-end-7 list-disc list-inside mb-4">
        <li className="text-2xs">FastAPI, Express</li>
      </ul>

      <div className="col-start-1 col-end-7 ">작성일 : 23년 11월</div>
    </Main>
  )
}
