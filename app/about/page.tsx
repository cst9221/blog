import Link from "next/link";
import Highlight from "@/app/_components/common/Highlight";

export default function AboutPage() {
    return (
        <div className="container mx-auto">
            <div className="my-32">
                <h1 className="text-4xl">안녕하세요. 최승태입니다.</h1>

                <h2 className="text-2xl">자기소개</h2>
                <p>
                    안녕하세요. 생산성을 추구하는 4년차 Frontend Engineer 입니다.
                </p>
                <p>
                    분야에 국한되지 않고 다양한 기술을 학습하여, <Highlight>x1</Highlight>의 생산성을 <Highlight>x10</Highlight>의 생산성으로 끌어올릴 수 있다고 생각합니다.
                </p>
                <p>
                    <Highlight>추구</Highlight>하고 <Highlight>좋아</Highlight>하는 것<br />
                    - 문제의 근본 원인 해결<br />
                    - 생산성 높은 해결법 (자동 배포, 자동화 script, 백오피스 개발)<br />
                    - 유지 보수 가능한 코드<br />
                    - 팀원과 함께 성장하기<br />
                </p>

                <h2 className="text-2xl">경력사항</h2>
                <p>
                    <span className="text-xl text-black font-bold">
                        <Link href="https://www.predictionai.co.kr/">(주) 프리딕션</Link>
                    </span>
                    &nbsp;2020.09 - 2024.04 (총 3년 8개월)
                </p>
                <p>
                    - 프론트엔드 엔지니어 · 리드  · 정규직<br />
                    - 프론트엔드 개발, 프론트엔드 개발 환경 개선 및 안정화
                </p>

                <h2 className="text-2xl">경력기술</h2>
                <p>
                    <span className="text-xl text-black font-bold">
                        <Link href="https://www.predictionai.co.kr/">큐비(QB) v3</Link>
                    </span>
                    &nbsp;2023.01 - 2024.04
                </p>
                <p>
                    학생별 맞춤 문제 추천, 인앱 문제 풀기 기능, 학생별 분석, 오답 노트, 결제, 업로드, 등 서비스 구현(Android/IOS)
                </p>
                <p>

                    - React Native & React에서 React Native & NextJS로 마이그레이션. 30만개의 페이지를 정적페이지로 생성하여 렌더 속도 개선<br />
                    - lottie를 활용하여 정적인 이미지들을 동적으로 변경<br />
                    - 인앱 결제에서 익명 결제 문제와 수수료 문제 해결을 위해 웹 결제로 전환<br />
                    - 서버 사이드에서의 image size 처리 방식으로 초기 레이아웃 깨짐 방지<br />
                    - ECS에서 NextJS SSR 적용<br />
                    - 도커 이미지로 Rollback 전략 확보 및 서버 안정화<br />
                </p>



                ### 🅿️ 사내 통합운영시스템(Admin, CMS) 개발

                2023.05 - 2024.04

                - 사내 및 관계사를 위한 관리 및 모니터링 웹사이트 개발
                - 사이트에서 데이터를 쿼리할 수 있는 기능 개발. 비효율적인 쿼리 요청 90% 감소
                - 콘텐츠를 생성, 수정, 관리할 수 있도록 CMS 기능 개발. 반복작업 개선
                - 푸시알림을 보내기위한 페이지 제작. 미리보기 등 기능 제공

                ### 🅿️ [큐비(QB)](https://www.predictionai.co.kr/) 홈페이지

                2022.10 - 2023.01

                - EC2서버에서 PM2로 클러스터 모드와 무중단 배포 적용
                - 학생 사용자의 부모님 결제를 요청을 위한 결제 기능

                ### 📗 결제 모듈

                2022.08 - 2022.10

                - 재사용성을 위해 결제 모듈을 Github Packages Private로 배포

                ### 🅿️ [큐비(QB)](https://www.predictionai.co.kr/) 리뉴얼 v2

                2021.12 - 2022.07

                - React Native에서 RN와 React 웹뷰로 마이그레이션. React Native의 느린 배포 속도를 극복
                - RNCamera를 활용하여, 커스텀된 UI의 camera 제공
                - React Native와 Webview의 통신을 위한 Bridge모듈 제작
                - GA 적용으로 마케팅 분석 및 지표 분석에 활용
                - 유저 유입 여정을 간편화하기위한 App Link, Universal Link 적용
                - ESLint, Prettier로 공통 코드 스타일 정립

                ### 🅿️ 문제 라벨링 텍스트 에디터

                2020.12 - 2021.03

                - CKEditor5의 커스텀 플러그인 제작 및 Latex 플러그인 적용
                - 사용자의 효율적인 작업을 위한 ShortCut Key 적용

                ### 🅿️ 수학 수식 OCR 모델 테스트 및 학습 앱

                2021.11 - 2021.11

                - Html Canvas에 drawing된 영역을 디텍팅하여 이미지 생성
                - Debounce로 입력 후 디텍팅 함수 호출을 지연
                - [엘리하이 수식 OCR AI 모델 납품](https://www.mk.co.kr/news/business/10125367)

                ### 📗 푸시알림 서버 (FCM)

                2022.03 - 2022.03

                - Express.js로 푸시알림 서버 구축
                - worker를 활용한 병렬처리로 20만 유저에게 빠르게 알림 전송

                ### 🅿️ 큐비 books (Swift)

                2021.11 - 2022.05

                - Pencil Kit으로 필기 기능 구현 및 CoreData에 필기 저장 기능 구현
                - 문제 출력에서 유저의 행동에 따라 Data Prefetch 방식을 적용하여, 렌더시간을 1200ms → 200ms로 감소

                ### 🅿️ [큐비(QB)](https://www.predictionai.co.kr/) v1 (React Native)

                2021.05 - 2021.08

                - 필기 기능을 Native Module로 개선, Pencil Kit 및 doodleCanvas로 Native 필기 기능 제공
                - 안드로이드와 iOS 네비게이션 적용 및 일관된 Route 이동 애니메이션 적용
                - 문제풀이 기능에서 수학 수식을 출력하기위해 부분적인 웹뷰 적용
                - 빠르고 간결한 업데이트를 위한 CodePush 적용

                ### 🅿️ 반려동물 상품 추천 서비스, 반송이 개발

                2020.09 - 2020.12

                - Jinja2 템플릿 언어, JQuery를 사용하여 개발
                - 상품 추천 프로세스 개발
                - 반려동물 성향 테스트 서비스 구현
                - EC2와 Nginx로 서버 배포


            </div>
        </div>
    )
}