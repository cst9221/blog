# Feature Flag

## Feature Flag란?

[Dark Launching](https://launchdarkly.com/blog/guide-to-dark-launching/) 패턴

Feature Flag의 그대로 하나의 Feature(기능 혹은 기능 모임)과 하나의 Flag를 사용하는 방법입니다.

개발 단계에서 Flag를 사용해 조건적으로 기능이 동작하도록 합니다.

```jsx
    if (getBooleanValue("betaFeature", false) {
      console.log("betaFeature flag is on")
    } else {
		console.log("betaFeature flag is off")
	}
```

Flag를 Toggle하여 Feature를 즉각적으로 적용할 수 있게되었습니다

그러면 이 Flag들은 어떻게 컨트롤 할 수 있을까요?

다행히도 이미 다양한 종류의 툴들이 서비스되고 있습니다.

## Tools

전부 유료인 서비스, 부분 유료인 서비스입니다.

그나마 flagsmith, growthbook는 오픈소스로 공개되어있습니다.

다만 growthbook는 Flag를 서빙해주는 서버를 growthbook이 가지고 있고

flagsmith는 유저 권한 제한의 깐깐함과 사용하는 입장에서 기능이 너무 투머치하다고 느껴졌습니다

그래도 연습이니 growthbook을 사용하여 진행해보겠습니다

### flagsmith

[Flagsmith - Open Source Feature Flag & Remote Config Service](http://flagsmith.com/)

### launchDarkly

[LaunchDarkly: Feature Flags, Feature Management, and Experimentation](http://launchdarkly.com/)

### growthbook

[GrowthBook - Open Source Feature Flags and A/B Tests](https://www.growthbook.io/)

### flagd

[Introduction](https://flagd.dev/)

## 적용

1. 기존 CMS로 활용했던 페이지에서 테스트를 진행
2. organization 생성
3. install SDK
   - `npm i —save @growthbook/growthbook-react`
   - `new GrowthBook()`으로 인스턴스 생성
   - clientside에서 `growthbook.loadFeatures()` 실행
   - app을 `<GrowthBookProvider/>`로 감싸기
   - 프로젝트 실행
   - check connection
4. 테스트
   - add your first feature
   - feature생성
   - 프로젝트에서 `const enabled = useFeatureIsOn("first-feature")` 선언
   - `${enabled ? "true" : "false"}` 출력 코드 작성
   - 프로젝트 실행
   - true 출력 확인
5. 결과

<video src="/posts/featureflag/7w3sx01qnqt.mov" controls="controls" style="width: 100%;"></video>

growthbook에서 Flag를 Toggle할 때 CMS프로젝트에 바로바로 반연되는 것을 볼 수 있다..

”소켓인가” 싶어서 growthbook 코드를 뜯어보다가 `EventSource`를 발견했는데..

[EventSource { SSE (Server Sent Event) }](https://www.notion.so/SSE-Server-Sent-Event-db60a32138ff4173b001ee0c093f82ec?pvs=21) 알아 보러가기

여기서의 예시는 SSE(Server Sent Event)를 기반으로 구현되었지만 SSE는 필수가 아니고 실시간으로 반영하는 방법중 하나일 뿐입니다.

더 쉽게 구현하려면 초기에 Flag들을 받아오거나 주기적으로 Flag를 받아오는 방법이 있을 것 같습니다.
