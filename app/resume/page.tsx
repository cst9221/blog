import Image from "next/image"

import Button from "../_components/Button"
import Mark from "../_components/Highlight/Mark"
import Icon from "../_components/Icon"
import Main from "../_components/Layout/Main"

export default function Home() {
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
          문제 데이터 반 자동화 백오피스를 개발하여 30만개의 문제 이미지들을 쌓았습니다.
          <Mark>( 이게 왜 대단한거야? 개수말고 개선 ex)분당 1개 =&gt; 분당 100개 )</Mark>
          <br />
          ReactNative, Swift 앱 개발과 React, Next를 통한 웹 개발로 <b>누적 회원수 90만</b>의 에듀테크 서비스를 만들었고
          <Mark>(mau는 얼마, 일 로그 개수는 몇개, 일 pv 수 등 예시가 있음 좋겠다.)</Mark>AWS기반의 인프라 구축등의 일을 해왔습니다.
          <br />첫 직장의 첫 개발자로 합류하여 M&A까지 달성하며 개발속에 비즈니스를 녹여낼 수 있게 되었습니다. <Mark>개발만을 위한 개발이 아닌 목표와 비즈니스를 위한 사업을 </Mark>
          <br />
          현재는 10명이상의 개발 팀원을 리드하며, 사업의 방향에 맞춰 시스템을 설계하고, 팀원이 주체적 개발자로 성장하도록 힘쓰고 있습니다.
        </p>
      </div>

      <div className="col-start-1 col-end-7 mt-12">
        <h3 className="text-xl">Work</h3>
        <hr className="mt-4 mb-2" />
      </div>

      <div className="col-start-1 col-end-2 ">
        <Image
          src="/images/prediction-logo.png"
          width={50}
          height={32}
          alt="prediction-logo"
        />
      </div>

      <div className="col-start-2 col-end-7 ">
        <div className="font-bold">
          <a
            href="https://predictionai.co.kr/"
            target="#"
          >
            프리딕션
          </a>
        </div>
        <div className="text-2xs">누적 회원수 87만, 누적 학습 기록수 6000만건의 에듀테크 서비스</div>
        <div className="text-2xs">프론트엔드 개발, 개발 리드</div>
        <div className="border-l-2 pl-2 mt-4">
          <div>
            <span className="text-xs font-bold mr-2">매스타이퍼</span>
            <span className="text-3xs">2023.01.01 - 2023.01.01</span>
          </div>
          <p className="text-2xs">
            오트밀은 중등수학 오답 관리 앱 서비스로, 학생의 취약점을 AI로 분석하고, 그에 따른 개념을 학습시킵니다.
            <br />
            또한, AI 맞춤문제집을 통해 실력을 재검증하고 분석리포트를 통해 학습을 관리합니다.
          </p>
        </div>
        <div className="border-l-2 pl-2  mt-4">
          <div>
            <span className="text-xs font-bold mr-2">오트밀</span>
            <span className="text-3xs">2023.01.01 - 2023.01.01</span>
          </div>
          <p className="text-2xs">
            오트밀은 중등수학 오답 관리 앱 서비스로, 학생의 취약점을 AI로 분석하고, 그에 따른 개념을 학습시킵니다.
            <br />
            또한, AI 맞춤문제집을 통해 실력을 재검증하고 분석리포트를 통해 학습을 관리합니다.
          </p>
        </div>
      </div>

      <div className="col-start-1 col-end-7 ">작성일 : 23년 11월</div>
    </Main>
  )
}
