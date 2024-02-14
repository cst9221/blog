# 큐비 프론트 모노레포 적용

---

## 도입배경

---

## 모노레포란?

하나의 저장소에서 여러개의 프로젝트를 관리하는 방식

![Untitled](/posts/monorepo/oy8uzk0a65h.png)

### 종류

- 모놀리식 어플리케이션
  - Not Now
- 멀티레포 (현재)
  장점
  - 다른 프로젝트와 의존성이 없어 독립적으로 개발, 관리 가능
  - 모듈화하여 관심사 분리가 편함
    단점
  - 컨벤션 통일이 어려움
  - 코드 재사용성이 떨어지고 중복 코드 작성 가능성이 많음
  - 관리 포인트 증가하여 비효율적
- 모노레포
  장점
  - 관리용이, (컨벤션 통일, 일괄적 버저닝)
  - 코드 재사용성 증가, 업무 효율 증가
  - 하나씩 배포 진행할 필요가 없음
  - 외부 라이브러리에 대한 의존성 통합 쉬움
  - 업무 공유
    단점
  - 초기 비용, 환경 세팅 어려움
  - 라이브러리들에 대한 관리가 필요해지고 어려워짐(무분별해질 수 있음)
  - 형상관리, CI속도 저하

> 새로운 프로젝트들을 시작할 때 혹은 사이드로 진행되는 프로젝트들(cms, web)을 수정할 때마다 귀찮다는 생각이 많이 든다…
> 모노레포를 사용하면 작업하던 프로젝트에서 브랜치만 새로 생성하여 작업을 진행하고 그대로 업로드하면 된다.. WOW!
> (어떻게 배포되는지는 뒤에서)

---

## Tools

### 종류

`[Yarn](https://classic.yarnpkg.com/lang/en/docs/workspaces/)`

- 이걸 쓰기위해 npm에서 yarn으로 갈아타야하나…?

해당 도구를 사용하는 프로젝트들

- [React](https://github.com/facebook/react/blob/main/package.json#L3-L5), [React-router](https://github.com/remix-run/react-router/blob/main/package.json#L4-L12), [Babel 7.20](https://github.com/babel/babel/blob/main/package.json#L78-L85)

`[Lerna](https://lerna.js.org/)`

- 크고 Nx와 통합헀을 때 가져갈 수 있는 장점이 많음(lerna가 Nx에 인수됨)

해당 도구를 사용하는 프로젝트들 (`Lerna` + `Yarn`)

- [Next 12](https://github.com/vercel/next.js/blob/21994ce591be70b03176a2512c7304381d52e629/lerna.json#L2), [Babel 7.12](https://github.com/babel/babel/blob/v7.12.12/lerna.json), [Jest](https://github.com/facebook/jest/blob/main/lerna.json#L5), [Create React App](https://github.com/facebook/create-react-app/blob/main/lerna.json#L3), [Vue-cli](https://github.com/vuejs/vue-cli/blob/dev/lerna.json#L2), [Webpack-cli](https://github.com/webpack/webpack-cli/blob/master/lerna.json#L5), [Storybook](https://github.com/storybookjs/storybook/blob/next/code/lerna.json#L2)

`[Turborepo](https://turbo.build/)`

- Vercel팀에서 개발, 원래는 yarn을 사용했는데 yarn이 별로였는 듯
  Next와 잘맞고 cache을 통해 빌드 속도가 짧음

해당 도구를 사용하는 프로젝트들

- [Next 13](https://github.com/vercel/next.js/blob/canary/turbo.json)(+ `Pnpm`), [그 외 모든 레포 링크](https://github.com/vercel/turbo/discussions/103)

`[Nx](https://nx.dev/)`

- 일반적으로 높게 평가받음. 다양한 플러그인, 의존성 그래프(왠만하면 있는듯), 공식문서 깔끔
  하지만 lerna와 엮인게 불편

해당 도구를 사용하는 프로젝트들

- [FluentUI](https://github.com/microsoft/fluentui/blob/master/nx.json), [NgRx](https://github.com/ngrx/platform/blob/master/nx.json)

`[Npm](https://docs.npmjs.com/cli/v8/using-npm/workspaces)`

- 사용자가 많이 없음

해당 도구를 사용하는 프로젝트들

- [Apollo-server](https://github.com/apollographql/apollo-server/blob/main/package.json#L32-L38)

`[Pnpm](https://pnpm.io/workspaces)`

- pnpm은 yarn과 npm의 단점을 많이 보완했다. 성능 향상과 디스크 효율성이 높아 많이들 사용하는 듯

해당 도구를 사용하는 프로젝트들

- [Nuxt](https://github.com/nuxt/nuxt/blob/main/pnpm-workspace.yaml), [Vue 3](https://github.com/vuejs/core/blob/main/pnpm-workspace.yaml), [Vue 2.7](https://github.com/vuejs/vue/blob/main/pnpm-workspace.yaml), [그 외 모든 레포 링크](https://pnpm.io/users)

### 선정

turbo가 NextJS에 모노레포를 적용할 떄 가장 예시가 많다.. ㅎㅎ

특히 turbo는 cache를 사용하여 빌드 시스템을 극단적으로 줄인다고 얘기한다.

실제로 첫 빌드 후 바로 다시 빌드하면 29.3s ⇒ 3.9s로 줄어드는 걸 확인할 수 있다

![스크린샷 2023-12-27 오후 4.19.37.png](/posts/monorepo/5g3s723l7ps.png)

![스크린샷 2023-12-27 오후 4.19.51.png](/posts/monorepo/vkoany77kmb.png)

---

## Turborepo

[Turborepo Docs](https://turbo.build/repo/docs)

docs가 다양한 환경을 고려하여 작성된 편이다.

너무 다양해서인지 예시가 너무 간단하고 기존 프로젝트에 적용하기위해 애먹었다

### 설치

turbo를 글로벌 설치

$ `npm install turbo --global`

새로운 모노레포 생성

$ `npx create-turbo@latest`

설치 후 기본 폴더구조

```markdown
- apps
  - web
    - app
      - layout.tsx
      - page.tsx
      - ...
    - public
      - ...
    - eslintrc.js
    - next-env.d.ts
    - next.config.js
    - package.json
    - README.md
    - tsconfig.json
  - doc
    - ...
- packages
  - eslint-config
    - library.js
    - next.js
    - package.json
    - react-internal.js
    - README.md
  - typesciprt-config
    - base.json
    - nextjs.json
    - package.json
    - react-library.json
  - ui
    - src
      - card.tsx
    - turbo
      - generators
        - templates
          - component.hbs
        - config.ts
- .eslintrc.js
- .npmrc
- README.md
- tsconfig.json
- turbo.json
- ...
```

### 모노레포에 기존 프로젝트 추가

`apps/` 디렉토리에 `git clone`으로 기존 프로젝트를 받아옵니다

$ `cd apps && git clone https://github.com/XXXXX/myProject`

clone을 통해 추가된 프로젝트는 연결된 git을 제거하기위해 .git을 삭제합니다

$ `cd myProject && rm -rf .git`

디렉토리로 이동 후 npm install을 진행합니다

$ `cd monorepoProject/apps/myProject`

$ `npm install`

> (turborepo가 의존성을 확인하며 `myProject`에 의존성을 넣을지, `monorepoProject`에 의존성을 넣을지 판단하며 패키지들을 설치합니다)

### 트러블 슈팅

1. next-transpile-modules, babel parse error

   cli를 통해 monorepo 초기 세팅을 진행하면 web, doc이라는 두개의 Next 14버전의 프로젝트가 존재한다.

   해당 프로젝트들에서는 packages에 ui를 잘 불러오고 새로운 패키지인 utils를 추가해도 잘 불러온다.

   문제는 clone을 통해 추가한 프로젝트들에서는 다음과 같은 오류가 발생했다.

   - 오류
     ```jsx
     error - ../../packages/ui/src/card.tsx
     Module parse failed: Unexpected token (1:55)
     You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
     > export function Card({className, title, children, href}: {className?: string; title: string; children: React.ReactNode; href: string}): JSX.Element {
     |   return (
     |     <a
     ```
     ```tsx
     object {
       '$$typeof': Symbol(react.forward_ref),
       render: [Function: LoadableImpl] {
         preload: [Function (anonymous)],
         displayName: 'LoadableComponent'
       }
     }
     Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object.
         at LoadableImpl (/Users/insublee/Desktop/workspace/FE-QB-workspace/apps/FE-QB-webview/node_modules/next/dist/shared/lib/loadable.js:89:9)
         at Icon (webpack-internal:///./components/icons/index.tsx:1890:17)
         at div
         at /Users/insublee/Desktop/workspace/FE-QB-workspace/node_modules/@emotion/react/dist/emotion-element-48d2c2e4.cjs.dev.js:70:25
         at div
         at /Users/insublee/Desktop/workspace/FE-QB-workspace/node_modules/@emotion/react/dist/emotion-element-48d2c2e4.cjs.dev.js:70:25
         at div
         at /Users/insublee/Desktop/workspace/FE-QB-workspace/node_modules/@emotion/react/dist/emotion-element-48d2c2e4.cjs.dev.js:70:25
         at NavigationBar (webpack-internal:///./components/navigationBar/index.tsx:26:26)
         at div
         at div
         at eval (webpack-internal:///./components/layouts/Container.tsx:17:92)
         at Home (webpack-internal:///./pages/index.tsx:112:74)
         at ThemeProvider (/Users/insublee/Desktop/workspace/FE-QB-workspace/node_modules/@mui/private-theming/node/ThemeProvider/ThemeProvider.js:39:5)
         at ThemeProvider (/Users/insublee/Desktop/workspace/FE-QB-workspace/node_modules/@mui/system/ThemeProvider/ThemeProvider.js:50:5)
         at ThemeProvider (/Users/insublee/Desktop/workspace/FE-QB-workspace/node_modules/@mui/material/node/styles/ThemeProvider.js:21:14)
         at StyledEngineProvider (/Users/insublee/Desktop/workspace/FE-QB-workspace/node_modules/@mui/styled-engine/node/StyledEngineProvider/StyledEngineProvider.js:27:5)
         at ThemeProvider (/Users/insublee/Desktop/workspace/FE-QB-workspace/node_modules/@emotion/react/dist/emotion-element-48d2c2e4.cjs.dev.js:125:32)
         at Hydrate (file:///Users/insublee/Desktop/workspace/FE-QB-workspace/node_modules/@tanstack/react-query/build/lib/Hydrate.mjs:23:3)
         at QueryClientProvider (file:///Users/insublee/Desktop/workspace/FE-QB-workspace/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs:41:3)
         at MyApp (webpack-internal:///./pages/_app.tsx:89:18)
         at Provider (/Users/insublee/Desktop/workspace/FE-QB-workspace/node_modules/react-redux/lib/components/Provider.js:19:3)
         at Wrapper (/Users/insublee/Desktop/workspace/FE-QB-workspace/node_modules/next-redux-wrapper/lib/index.js:207:40)
         at StyleRegistry (/Users/insublee/Desktop/workspace/FE-QB-workspace/apps/FE-QB-webview/node_modules/styled-jsx/dist/index/index.js:448:36)
         at AppContainer (/Users/insublee/Desktop/workspace/FE-QB-workspace/apps/FE-QB-webview/node_modules/next/dist/server/render.js:298:29)
         at AppContainerWithIsomorphicFiberStructure (/Users/insublee/Desktop/workspace/FE-QB-workspace/apps/FE-QB-webview/node_modules/next/dist/server/render.js:327:57)
         at div
         at Body (/Users/insublee/Desktop/workspace/FE-QB-workspace/apps/FE-QB-webview/node_modules/next/dist/server/render.js:614:21)
     ```

   해결

   Next 13.1.x 부터 [next-transpile-modules](https://github.com/martpie/next-transpile-modules)패키지가 내장되어있다고한다. [(링크)](https://nextjs.org/blog/next-13-1#built-in-module-transpilation-stable)

   다르게 해석하면 Next 13.1.x보다 낮은 버전은 [next-transpile-modules](https://github.com/martpie/next-transpile-modules) 패키지를 설치해줘야할 수 있다는 것이다.

   Next 13.1.x보다 낮은 프로젝트의 next.config.js에 next-tranpile-modules패키지를 래핑하면 해결된다.

2. typescript error

   모든 컴포넌트들에 “Component” cannot be used as a JSX component. Its type “({ title, …}) ⇒ JSX.Element” is not a valid JSX element type. …. 에러발생

   ```jsx
   'DesktopContainer' cannot be used as a JSX component.
   Its type 'FC<Props>' is not a valid JSX element type.
   Type 'FunctionComponent<Props>' is not assignable to type '(props: any, deprecatedLegacyContext?: any) => ReactNode'.
   Type 'ReactElement<any, any>' is not assignable to type 'ReactNode'.
   Property 'children' is missing in type 'ReactElement<any, any>' but required in type 'ReactPortal'.ts(2786)
   ```

   해결

   - typescript 버전 업 4.x.x ⇒ 5.2.2
   - @type/react 버전 18.0.15 ⇒ 18.0.22 **(SOLVE)**

   typescript와 @type/react의 버전을 올려 오류 해결

---

## 파이프라인

가장 머리 아프게 고민했던 부분..

### 고민

사용자에게 코드가 전달되기까지의 과정을 그려보면 다음과 같습니다.

![Untitled](/posts/monorepo/7zlkub2k1rk.png)

ecr ⇒ ecs까지는 사용중인 파이프라인을 사용하면 쉽지않나?

아니요.

기존에 GitFlow를 통해 관리중이던 브랜치 전략이 과연 Monorepo와 만나면 어떻게 될지 모르겠습니다

N개의 프로젝트와 GitFlow의 N개의 기본 브랜치(prod, stage, dev)가 만나게된다면?

(N \* N)개의 브랜치가 존재하게 되고 프로젝트 하나가 추가될 때마다 최소 3개의 브랜치가 추가되게 됩니다.

![gitflow전략을 선택했을 떄 monorepo에서 사용할 브랜치 개수](/posts/monorepo/b009ffy550e.png)

gitflow전략을 선택했을 떄 monorepo에서 사용할 브랜치 개수

각자 다른 레포지토리에서 작업한다면 크게 문제될 것 같지 않은데 모노레포라는 하나의 레포지토리로 묶였을 때 관리가 복잡하다고 생각했습니다.

### 목표

여기서 목표는 다음과 같습니다

1. 각 프로젝트는 각자 배포되어야한다
2. 각 프로젝트의 브랜치는 직관적이고 심플해야한다
3. 기존 개발 프로세스에 따라 staging과 development가 있어야한다

방법을 찾아 구글을 탐험하고 ChatGPT와 대화하다가 **TBD**를 발견하였습니다

---

## TBD(Trunk Based Development)

![Untitled](/posts/monorepo/h3ifq1rh0sf.png)

[🔗 Docs 사이트도 제공하고 있습니다](https://trunkbaseddevelopment.com/)

[🔗 Paul Hammant](https://paulhammant.com/)라는 스코트랜드 devOps 개발자가 만든 것 같군요

해당 Docs에서는 Trunk Based Development을 이렇게 설명합니다

> **_일종의 코드 관리 브랜칭 모델이며, 여기서는 개발자들이 ‘트렁크’라고 불리는 단일 브랜치 위에서 협력하고, 오래 유지되는 개발 브랜치를 만들게 하는 압력에 저항하기 위해 위해 설명된 테크닉을 사용합니다. 그러므로 그들은 머지 헬을 피하고, 빌드를 깨트리지 않고, 영원히 행복하게 살아갑니다._**

그래서 뭔데, ChatGPT에게 TBD의 특징을 정리해달라고 요청했습니다

![스크린샷 2023-12-27 오후 6.01.05.png](/posts/monorepo/5jk2oavvvco.png)

위의 내용을 제 시각에서 정리하자면 다음과 같습니다

1. **단일 브랜치 사용**

   main브랜치만을 사용함으로써 복잡한 브랜치관리와 전략을 가져가지 않게 되었습니다

2. **자주 통합**

   통합에 짧게 반복되며 commit의 단위가 작아지고 충돌이 줄었고 베이스 코드가 계속 최신으로 유지하게 되었습니다

3. **긴생명 브랜치 피하기**

   여러가지 이슈들의 중복되는 영역이 생기고 서로 의존적인 작업이 있다면 하나의 작업을 위해 다른 작업은 기다려야하는 경우가 생깁니다(이게 async await ?). 빠른 통합으로 인해 브랜치의 생명이 짧아졌고 await 시간도 짧아지게 되었습니다.

4. **Feature Toggle 사용**

   위 특징만 보면 아니 뭔 그럼 제대로 개발도 안된걸 배포하라는 건가? 싶네여

   [Feature Flag에 대한 세부 내용](https://www.notion.so/Feature-Flag-5c03b489f0894b3d80c8bbed1e003681?pvs=21)은 링크에서 확인하시면 됩니다

뭐 이제 대충 알겠는데 적용해봐야겠죠?

### 브랜치 분리

기본적으로 TBD 전략에 따라 `main`을 기본으로 두고 작업하면 됩니다

하지만 팀에서 사용하는 기존 개발 프로세스에 따라 `staging`과 `development` 상태가 필요합니다

`main`으로부터 `staging`과 `develop` 브랜치를 생성합니다

![스크린샷 2024-01-05 오전 10.11.37.png](/posts/monorepo/nogkvki7pgg.png)

### 작업 프로세스

![Untitled](/posts/monorepo/fbiw1tr68ag.png)

개발자들은 각자의 작업 내용을 main 브랜치에 적용합니다

하지만 유저들은 **다크런칭**되었기 때문에 main Flag가 변경되지 않으면 변화를 느끼지 못합니다

`main` Flag를 변화시키기전에 `staging` 브랜치에

### Git과 함께 작업하기

1. Issue 생성

   팀마다 방법이 다르기에 각 팀에 알맞는 단위로 Issue 생성

   - 실습
     ![스크린샷 2024-01-04 오후 12.18.24.png](/posts/monorepo/49lhqhn8vqe.png)
     ![스크린샷 2024-01-04 오후 12.19.03.png](/posts/monorepo/ciymnzjv41c.png)
     ![스크린샷 2024-01-04 오후 12.19.41.png](/posts/monorepo/es2se02gwo5.png)

   Issue에서 Issue를 생성하면 상위 Issue와 하위 Issue라고 생각하는 경우가 있는데 아닙니다.

   Issue는 모두 같은 Depth이다. 연관되어 있을 뿐

   ![Untitled](/posts/monorepo/5hjedy9h81g.png)

2. main(trunk)브랜치를 pull(혹은 clone)합니다

   TBD에서의 기준 브랜치는 main입니다.

3. main 브랜치에서 새로운 브랜치를 생성합니다.

   브랜치 이름은 중요 X, 하지만 자신의 브랜치는 알아봐야합니다…
   ex) develop, feature/XXXX

   - 실습
     ![스크린샷 2024-01-04 오후 12.26.16.png](/posts/monorepo/q84iyorzz1g.png)

4. 작업 후 commit 과 issue 연동

   이렇게 되면 commit이 자동적으로 Isuue #1, #4 와 연결되고 해당 Issue에서 commit확인 가능

   ex1) git commit -m “[#1] FEATURE: add method 구현”, git commit -m “[#4] FEATURE: sub method 구현”

   - 실습
     ![스크린샷 2024-01-04 오후 12.26.48.png](/posts/monorepo/lmyp9hikpw.png)
     ![스크린샷 2024-01-04 오후 12.28.13.png](/posts/monorepo/19nvrhqzqj7.png)

5. PR 생성

   브랜치 ⇒ main으로 머지

   PR에서 `resolved` 혹은 `closed`에 Issue 번호를 적으면 자동으로 `closed`됩니다.

   `closed`를 쓰는게 통일성 있을 것 같습니다.

   - 실습
     ![스크린샷 2024-01-04 오후 12.27.25.png](/posts/monorepo/im8g69zajqk.png)
     ![스크린샷 2024-01-04 오후 12.31.34.png](/posts/monorepo/ompkr8ljf5r.png)
     ![스크린샷 2024-01-04 오후 5.07.00.png](/posts/monorepo/6ku2dcl6i9b.png)

[[Git] Issue 생성 및 Pull Request 와 연동](https://minny27.tistory.com/50)

---

## 트러블슈팅

1. next 버전에 따른 오류

   next-seo 라이브러리와 next 13.x.x버전이 만났을 때 발생하는 것으로 보임

   next-seo의 버전을 최신으로하고 이슈도 찾아봤지만 해결하지 못했고

   netflify에서 비슷한 문제가 발생하는 것으로 보이는 이슈를 발견했고 next버전을 13.4.19로 낮추니 해결됐다

   [https://github.com/netlify/next-runtime/issues/2329](https://github.com/netlify/next-runtime/issues/2329)

   ```powershell
   Error: Cannot find module 'next/dist/server/future/route-modules/pages/vendored/contexts/amp-context'
   Require stack:
   - /app/node_modules/next/dist/shared/lib/head.js
   - /app/node_modules/next/head.js
   - /app/node_modules/next-seo/lib/next-seo.js
   - /app/apps/qb-web/.next/server/pages/_app.js
   - /app/apps/qb-web/node_modules/next/dist/server/require.js
   - /app/apps/qb-web/node_modules/next/dist/server/next-server.js
   - /app/apps/qb-web/node_modules/next/dist/server/next.js
   - /app/apps/qb-web/server.js
       at Module._resolveFilename (node:internal/modules/cjs/loader:1134:15)
       at /app/apps/qb-web/node_modules/next/dist/server/require-hook.js:54:36
       at Module._load (node:internal/modules/cjs/loader:975:27)
       at Module.require (node:internal/modules/cjs/loader:1225:19)
       at mod.require (/app/apps/qb-web/node_modules/next/dist/server/require-hook.js:62:32)
       at require (node:internal/modules/helpers:177:18)
       at Object.<anonymous> (/app/node_modules/next/dist/shared/lib/head.js:29:34)
       at Module._compile (node:internal/modules/cjs/loader:1356:14)
       at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
       at Module.load (node:internal/modules/cjs/loader:1197:32) {
     code: 'MODULE_NOT_FOUND',
     requireStack: [
       '/app/node_modules/next/dist/shared/lib/head.js',
       '/app/node_modules/next/head.js',
       '/app/node_modules/next-seo/lib/next-seo.js',
       '/app/apps/qb-web/.next/server/pages/_app.js',
       '/app/apps/qb-web/node_modules/next/dist/server/require.js',
       '/app/apps/qb-web/node_modules/next/dist/server/next-server.js',
       '/app/apps/qb-web/node_modules/next/dist/server/next.js',
       '/app/apps/qb-web/server.js'
     ]
   }
   ```

1. next.config.js에 옵션에 `output`을 `standalone`으로 추가시 생성된 파일위치 다름

   github actions를 통해 docker image 생성시 파일들이 /apps/[project-name]로 복사되는 것이 아니라 /app인 root로 생성될 때

   next 버전 확인 필요 12 버전은 standalone 옵션이 완전하지 않음 ⇒ 13으로 버전 업!

---

## 참고 자료

### 모노레포

[모노레포 - 마이크로 아키텍처를 지향하며](https://green-labs.github.io/monorepo-microfrontend)

### TBD

[트렁크 기반 개발(Trunk-Based Development)](https://code-masterjung.tistory.com/73)

[프론트엔드 모노레포 TBD로 관리하기](https://blog.mathpresso.com/qanda-frontend-monorepo-with-tbd-af752314d30f)

[TBD와 Feature Flags](https://velog.io/@tlatmdxo123/TBD와-Feature-Flags)

### Feature Flag

[Feature Flag - 안전하고 신뢰할 수 있는 배포로 나아가는 열쇠 🔑 | 11번가 TechBlog — 11번가 기술블로그](https://11st-tech.github.io/2023/11/07/openfeature/)

- [x] 모노레포 생성
- [ ] 프로젝트 실행

  - [x] typescript config, eslint config 셋팅
  - [ ] 파이프라인 셋팅

    - 참조
      - [https://www.inflearn.com/blogs/3871](https://www.inflearn.com/blogs/3871)
      - [https://www.inflearn.com/blogs/3874](https://www.inflearn.com/blogs/3874)
    - 고민거리

      - docker로 이미지를 생성할 때 의존성 가지치기된 프로젝트의 빌드 파일들만 올리면 되는가?
      - prune 작업을 진행하 파일들은 어떤 역할을 하는가? 빌드 파일에 함께 포함 시켜주면 되는 것 인가?
      - standalone 이란?
        - fe-qb-webview는 next 12.1.6이라 standalone이 없음, next ^12.2.0부터 추가
      - FROM base as builder, FROM base as installer, FROM base as builder로 나누는 이유는?
      - github actions에서 어떻게 나눠서 yml을 작성하지
      - cms를 github actions 성공했지만 task definition에서 오래 걸리거나 (ecs에서 draining떄문), 이미지로 접근시 server.js가 없고 하나 상위인 app dir에 존재 왜 일까?
        - cms의 다른 포인트 - dockerfile, yml은 같지만 결과가 다른 이유는 무엇일까?
          > 해결
          > 아무리 찾아봐도 원인을 못찾겠어서 이것저것 지우고 시도해봤지만 결과는 같은 이건 보이지 않는 곳에서 docker 빌드에 영향을 미친다고 판단함. package-lock.json밖에 안보이기때문에 rm -rf 후 build 시도하여 성공했다.
      - 빌드 성공하여 ecs에 배포해봤는데 로그인 화면에서 authenticate 요청 시 504 발생..
      - fe-qb-cluster에 모아서 관리하기로 했기때문에 fe-qb-cluster에 서비스, 로드밸런서, 등등 생성 및 route53으로 [새로운 서브 도메인](https://www.notion.so/admin-3d65808732144c14b1b25a8ff564fa95?pvs=21) 부여 후 연결
      - docker실행시 npm install -g turbo하면 다른 stage에서 turbo 접근 불가, yarn은 가능한데 이유는?
        Docker의 Multi-stage build에서 `npm`과 `yarn`의 동작 차이는 해당 패키지 매니저의 작동 방식과 설치 위치에 기인합니다.

        ### npm:

        `npm`은 패키지를 전역으로 설치할 때 기본적으로 시스템 전역 위치에 설치합니다. 그래서 첫 번째 stage에서 `npm install --global`을 사용하면 시스템 전역 위치에 패키지가 설치되며, 두 번째 stage에서 해당 위치에 직접 접근할 수 없습니다. 시스템 전역 위치에 설치된 패키지를 Docker 다음 단계로 전달하려면 별도의 작업이 필요합니다.

        ### yarn:

        반면에 `yarn`은 패키지를 설치할 때 `node_modules` 디렉토리 내부에 설치합니다. 따라서 Multi-stage build에서 첫 번째 stage에서 `yarn global add`로 전역으로 설치한 패키지는 해당 stage의 `node_modules`에 위치하게 됩니다. 두 번째 stage에서는 해당 디렉토리에 직접 접근하여 사용할 수 있습니다.

        ### 예시:

        ```
        # 1번 stage
        FROM node:14 AS builder
        WORKDIR /app
        RUN npm install --global some-package

        # 2번 stage
        FROM node:14 AS final
        WORKDIR /app
        # 이전 stage의 내용을 그대로 가져옴
        COPY --from=builder /app .
        # 이제 some-package은 node_modules에 설치되어 있음

        ```

        이런 차이로 인해 `yarn`을 사용할 때는 Multi-stage build에서 간편하게 패키지를 전달할 수 있습니다. 하지만 `npm`을 사용하는 경우에는 추가적인 작업이 필요합니다. 예를 들면 `npm link` 또는 `npm pack` 등을 통해 패키지를 압축하고, 두 번째 stage에서 해당 압축 파일을 해제하여 사용하는 방식을 사용할 수 있습니다.

  - [x] FE-QB-Webview 심기
  - [x] QB-web 심기
  - [x] cms 심기
  - [ ] qb-front 심기

- [ ] TBD 적용
  - [ ]
