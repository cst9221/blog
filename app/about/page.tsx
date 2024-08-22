import Highlight from "@/app/_components/common/Highlight"
import UnderlineLink from "@/app/_components/common/UnderlineLink"
import Block from "./_components/Block"
import Item from "./_components/Item"

export default function AboutPage() {
    return (
        <div className="container mx-auto">
            <div className="my-32">

                {/* 자기소개 */}
                <Block>
                    <h1 className="text-4xl">최승태</h1>
                    <Item>
                        안녕하세요. 생산성을 추구하는 4년차 Frontend Engineer 입니다.
                    </Item>
                    <Item>
                        분야에 국한되지 않고 다양한 기술을 학습하여, <Highlight>1x</Highlight>의 생산성을 <Highlight>10x</Highlight>의 생산성으로 끌어올릴 수 있다고 생각합니다.
                    </Item>
                    <Item>
                        <Highlight>추구</Highlight>하고 <Highlight>좋아</Highlight>하는 것<br />
                        - 문제의 근본 원인 해결<br />
                        - 생산성 높은 해결법 (자동 배포, 자동화 script, 백오피스 개발)<br />
                        - 유지 보수 가능한 코드<br />
                        - 팀원과 함께 성장하기<br />
                    </Item>
                </Block>

                {/* 경력사항 */}
                <Block>
                    <h2 className="text-3xl">경력사항</h2>
                    <div className="flex justify-between mb-2" >
                        <span className="text-xl text-black font-bold">
                            <UnderlineLink href="https://www.predictionai.co.kr/" target="_blank">
                                (주) 프리딕션
                            </UnderlineLink>
                        </span>

                        <span className="text-gray-300">2020.09 - 2024.04 (총 3년 8개월)</span>
                    </div>
                    <Item>
                        - 프론트엔드 엔지니어 · 리드  · 정규직<br />
                        - 프론트엔드 개발, 프론트엔드 개발 환경 개선 및 안정화
                    </Item>
                </Block>

                {/* 경력기술 */}
                <Block>
                    <h2 className="text-3xl">경력기술</h2>
                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-xl text-black font-bold">
                                🅿️ <UnderlineLink href="https://www.predictionai.co.kr/" target="_blank">큐비(QB) v3</UnderlineLink>
                            </span>
                            <span className="text-gray-300">2023.01 - 2024.04</span>
                        </div>
                        <Item>
                            학생별 맞춤 문제 추천, 인앱 문제 풀기 기능, 학생별 분석, 오답 노트, 결제, 업로드, 등 서비스 구현(Android/IOS)
                        </Item>
                        <Item>
                            - React Native & React에서 React Native & NextJS로 마이그레이션. ISR을 사용해 30만개의 페이지를 정적페이지로 생성하여 렌더 속도 개선<br />
                            - lottie를 활용하여 정적인 이미지들을 동적으로 변경<br />
                            - 인앱 결제에서 익명 결제 문제와 수수료 문제 해결을 위해 웹 결제로 전환<br />
                            - 서버 사이드에서의 Sharp를 적용. image size 처리 방식 개선으로 초기 레이아웃 깨짐 방지<br />
                            - EC2 + PM2 에서 ECS로 서버환경 마이그레이션<br />
                            - 도커 이미지로 Rollback 전략 확보 및 서버 안정화<br />
                            - standalone모드로 도커 이미지 사이즈 3Gb =&gt; 500Mb로 감소<br />
                        </Item>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-xl text-black font-bold">🅿️ 사내 통합운영시스템(Admin, CMS) 개발</span>
                            <span className="text-gray-300">2023.05 - 2024.04</span>
                        </div>
                        <Item>
                            - 사내 및 관계사를 위한 관리 및 모니터링 웹사이트 개발<br />
                            - 사이트에서 데이터를 쿼리할 수 있는 기능 개발. 비효율적인 쿼리 요청 90% 감소<br />
                            - 콘텐츠를 생성, 수정, 관리할 수 있도록 CMS 기능 개발. 반복작업 개선<br />
                            - 푸시알림을 보내기위한 페이지 제작. 미리보기 등 기능 제공
                        </Item>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-xl text-black font-bold">🅿️ <UnderlineLink href="https://www.predictionai.co.kr/" target="_blank">큐비(QB)</UnderlineLink> 홈페이지</span>
                            <span className="text-gray-300">2022.10 - 2023.01</span>
                        </div>
                        <Item>
                            - EC2서버에서 PM2로 클러스터 모드와 무중단 배포 적용<br />
                            - 학생 사용자의 부모님 결제를 요청을 위한 결제 기능
                        </Item>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-xl text-black font-bold">📗 결제 모듈</span>
                            <span className="text-gray-300">2022.08 - 2022.10</span>
                        </div>
                        <Item>
                            - 재사용성을 위해 결제 모듈을 Github Packages Private로 배포
                        </Item>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-xl text-black font-bold">🅿️ <UnderlineLink href="https://www.predictionai.co.kr/" target="_blank">큐비(QB)</UnderlineLink> 리뉴얼 v2</span>
                            <span className="text-gray-300">2021.12 - 2022.07</span>
                        </div>
                        <Item>
                            - React Native에서 RN와 React 웹뷰로 마이그레이션. React Native의 느린 배포 속도를 극복<br />
                            - RNCamera를 활용하여, 커스텀된 UI의 camera 제공<br />
                            - React Native와 Webview의 통신을 위한 Bridge모듈 제작<br />
                            - GA 적용으로 마케팅 분석 및 지표 분석에 활용<br />
                            - 유저 유입 여정을 간편화하기위한 App Link, Universal Link 적용<br />
                            - ESLint, Prettier로 공통 코드 스타일 정립
                        </Item>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-xl text-black font-bold">🅿️ 문제 라벨링 텍스트 에디터</span>
                            <span className="text-gray-300">2020.12 - 2021.03</span>
                        </div>
                        <Item>
                            - CKEditor5의 커스텀 플러그인 제작 및 Latex 플러그인 적용<br />
                            - 사용자의 효율적인 작업을 위한 ShortCut Key 적용
                        </Item>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-xl text-black font-bold">🅿️ 수학 수식 OCR 모델 테스트 및 학습 앱</span>
                            <span className="text-gray-300">2021.11 - 2021.11</span>
                        </div>
                        <Item>
                            - Html Canvas에 drawing된 영역을 디텍팅하여 이미지 생성<br />
                            - Debounce로 입력 후 디텍팅 함수 호출을 지연<br />
                            - <UnderlineLink href="https://www.mk.co.kr/news/business/10125367" target="_blank">엘리하이 수식 OCR AI 모델 납품</UnderlineLink>
                        </Item>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-xl text-black font-bold">📗 푸시알림 서버 (FCM)</span>
                            <span className="text-gray-300">2022.03 - 2022.03</span>
                        </div>
                        <Item>
                            - Express.js로 푸시알림 서버 구축<br />
                            - worker를 활용한 병렬처리로 20만 유저에게 빠르게 알림 전송
                        </Item>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-xl text-black font-bold">🅿️ 큐비 books (Swift)</span>
                            <span className="text-gray-300">2021.11 - 2022.05</span>
                        </div>
                        <Item>
                            - Pencil Kit으로 필기 기능 구현 및 CoreData에 필기 저장 기능 구현<br />
                            - 문제 출력에서 유저의 행동에 따라 Data Prefetch 방식을 적용하여, 렌더시간을 1200ms → 200ms로 감소
                        </Item>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-xl text-black font-bold">🅿️ <UnderlineLink href="https://www.predictionai.co.kr/" target="_blank">큐비(QB)</UnderlineLink> v1 (React Native)</span>
                            <span className="text-gray-300">2021.05 - 2021.08</span>
                        </div>

                        <Item>
                            - 필기 기능을 Native Module로 개선, Pencil Kit 및 doodleCanvas로 Native 필기 기능 제공<br />
                            - 안드로이드와 iOS 네비게이션 적용 및 일관된 Route 이동 애니메이션 적용<br />
                            - 문제풀이 기능에서 수학 수식을 출력하기위해 부분적인 웹뷰 적용<br />
                            - 빠르고 간결한 업데이트를 위한 CodePush 적용
                        </Item>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-xl text-black font-bold">🅿️ 반려동물 상품 추천 서비스, 반송이 개발</span>
                            <span className="text-gray-300">2020.09 - 2020.12</span>
                        </div>
                        <Item>
                            - Jinja2 템플릿 언어, JQuery를 사용하여 개발<br />
                            - 상품 추천 프로세스 개발<br />
                            - 반려동물 성향 테스트 서비스 구현<br />
                            - EC2와 Nginx로 서버 배포
                        </Item>
                    </div>
                </Block>

                {/* 기술스택 */}
                <Block>
                    <h2 className="text-3xl">기술스택</h2>
                    <div className="flex -mt-8">
                        <div className="flex-1 mb-2">
                            <h4 className="text-xl text-black font-bold">Language</h4>
                            <Item>
                                JavaScript<br />
                                TypeScript
                            </Item>
                        </div>
                        <div className="flex-1 mb-2">
                            <h4 className="text-xl text-black font-bold">Frontend</h4>
                            <Item>
                                React, NextJS<br />
                                React Native<br />
                                Redux, TanStack Query<br />
                                Emotion, Tailwind<br />
                                Webpack
                            </Item>
                        </div>
                        <div className="flex-1 mb-2">
                            <h4 className="text-xl text-black font-bold">Infra</h4>
                            <Item>
                                EC2, ECS, ECR, EFS, Lambda<br />
                                Docker, Docker Compose<br />
                                Github Actions
                            </Item>
                        </div>
                    </div>
                </Block>

                {/* 학력사항 */}
                <Block>
                    <h2 className="text-3xl">학력사항</h2>
                    <div className="flex justify-between mb-4">
                        <span className="text-xl text-black font-bold">백석대학교 </span>

                        <span className="text-gray-300">2014 - 2020</span>
                    </div>
                    <Item>
                        소프트웨어학과 (3.29 / 4.5)
                    </Item>
                </Block>

                {/* 외부활동 */}
                <Block>
                    <h2 className="text-3xl">외부활동</h2>

                    <div className="mb-8">
                        <div className="flex justify-between mb-4">
                            <span className="text-xl text-black font-bold">ZicDDing</span>
                            <span className="text-gray-300">2024.04 - 진행중</span>
                        </div>
                        <Item>
                            직장인들의 IT 개발 모임.
                        </Item>
                        <Item>
                            - 프론트엔드 모임에서 react reconciliation 발표 <UnderlineLink href="https://drive.google.com/file/d/1Ck6pxRMLYiL_6bmypO0xTn0hej3zEaQf/view" target="_blank">(자료)</UnderlineLink><br />
                            - React 19 New Features 발표 <UnderlineLink href="https://www.notion.so/React-19-New-Features-d1c5b07971d64179af59f5c02d06d9fa?pvs=21" target="_blank">(자료)</UnderlineLink><br />
                        </Item>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-4">
                            <span className="text-xl text-black font-bold">프리딕션</span>
                            <span className="text-gray-300">2023.08 - 2024.04</span>
                        </div>
                        <Item>
                            사내 프론트엔드 팀 모임.
                        </Item>
                        <Item>
                            - 모노레포(turborepo) 도입 및 발표  <UnderlineLink href="https://www.notion.so/8ca2dd30e5be4172a271c897bf2de0e4?pvs=21" target="_blank">(자료)</UnderlineLink>
                        </Item>
                    </div>
                </Block>

                {/*  */}
                {/* <Block>
                    <h2 className="text-3xl">학력사항</h2>
                    <div className="flex justify-between mb-4">
                        <div>
                            <span className="text-xl text-black font-bold">백석대학교 </span>
                            <span className="text-base text-gray-500">소프트웨어학과 (3.29 / 4.5)</span>
                        </div>

                        <span className="text-gray-300">2014 - 2020</span>
                    </div>
                    <Item>
                        사내 프론트엔드 팀 모임.
                    </Item>
                    <Item>
                        - 모노레포(turborepo) 도입 및 발표  <UnderlineLink href="https://www.notion.so/8ca2dd30e5be4172a271c897bf2de0e4?pvs=21" target="_blank">(자료)</UnderlineLink>
                    </Item>
                </Block> */}
            </div>
        </div>
    )
}