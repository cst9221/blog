# SSE (Server Sent Event)

## SSE란?

### 폴링

전통적인 통신 방식으로 데이터를 가져오기위해 반복적으로 데이터를 요청합니다.

요청마다 프로토콜과 인증과정을 통해 오버헤드가 발생합니다.

### 긴 폴링

폴링과 같지만 서버에서 데이터를 사용할 수 있을 때까지 보류시킵니다.

### WebSocket

웹 소켓과도 클라이언트와 메세지를 주고받는 양방향 통신이 가능합니다.

### SSE

일반적인 폴링 방식은 요청을 처리하고 client와의 connection을 end합니다

하지만 sse는 클라이언트로부터 요칭을 받으면 connection을 “keep-alive”로 설정하여 연결을 유지합니다.

이로인해 단방향의 지속적인 데이터를 스트리밍을 할 수 있습니다.

웹소켓과 다른 점은 프로토콜이 http라는 점, 단방향 통신이라는 점, 웹 소켓보다 서버 부하가 적다는 점입니다.

## EventSource

EventSource는 [SSE (Server Sent Event)](https://www.notion.so/SSE-Server-Sent-Event-db60a32138ff4173b001ee0c093f82ec?pvs=21)의 인터페이스를 JS로 구현한 Browser API입니다

SSE의 자세한 내용은 [SSE (Server Sent Event)](https://www.notion.so/SSE-Server-Sent-Event-db60a32138ff4173b001ee0c093f82ec?pvs=21)에서 확인하는게 좋을 것 같네요.

### 모든 브라우저 지원

SSE가 웹 표준이기에 모든 브라우저에서 지원됩니다.

![SSE (Server Sent Event)](</posts/SSE(ServerSentEvent)/04rnabgwnlwc.png>)

### 지속적인 연결

스트리밍 상태를 유지하기위해 close메소드를 통해 연결을 끊어주기 전까지 3초마다 연결을 시도합니다.

이로인해 지속적으로 안정적으로 연결상태를 유지할 수 있습니다.

### 단방향 통신

첫 연결을 위한 요청을 제외하면 단방향 통신만 가능합니다

## 구현

Next pages 디렉토리와 Next pages api를 통해 구현해보았습니다.

1. /api/sse 작성

   ```typescript
   import type {NextApiRequest, NextApiResponse} from "next"
   import fs from "fs"
   import path from "path"

   export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     try {
       switch (req.method) {
         case "GET":
         case "POST":
           try {
             console.log("sse start", req.method)

             // header 설정을 해줍니다.
             // Connection, Content-Encoding, Content-Type을 필수로 다음과 같이 입력합니다
             // Cache-Control은 변화되는 데이터에 대한 스트리밍이기 때문에 캐시될 필요가 없습니다
             res.writeHead(200, {
               Connection: "keep-alive",
               "Content-Encoding": "none",
               "Cache-Control": "no-cache",
               "Content-Type": "text/event-stream"
             })

             // 이벤트 선언
             const handleChangeEvent = () => {
               const data = fs.readFileSync(path.resolve() + "/pages/api/sse/data.json", "utf8")
               res.write(`data: ${JSON.stringify(JSON.parse(data))}\n\n`)
             }

             // file의 변경을 감지할 observer 생성
             // TODO는 watch메소드는 폴링방식을 사용하여 비효율적이니 promises.watch로 바꿀 예정입니다.
             // TODO : watch() => promises.watch()
             const fileWatcher = fs.watch(path.resolve() + "/pages/api/sse/data.json")
             // 파일이 변경될 때 선언한 이벤트를 호출되도록 이벤트를 추가해줍니다.
             fileWatcher.on("change", handleChangeEvent)

             // 최초 한번은 변경없이도 데이터를 보내줍시다.
             handleChangeEvent()

             // 요청이 닫히면 fileWatcher 제거
             req.on("close", () => {
               fileWatcher.close()
               res.end()
             })
           } catch (e) {
             console.log("error : ", e)
           }
           break
         default:
           res.status(405).send("Method Not Allowed")
           break
       }
     } catch (error) {
       return res.status(500).send(error)
     }
   }
   ```

2. /pages/index.tsx 작성

   ```typescript
   export default function Home() {
     useEffect(() => {
       // EventSource에 요청할 주소를 입력하여 인스턴스를 생성합니다
       const eventSource = new EventSource(`/api/sse`)
       // 생성된 인스턴스에 onopen 연결되었을 때 이벤트를 추가
       eventSource.onopen = (e) => {
         console.log("open", e)
       }
       // 생성된 인스턴스에 onmessage 서버로부터 메세지가 왔을 때 이벤트를 추가
       eventSource.onmessage = (e) => {
         const {data} = e
         const paredData = JSON.parse(data)
         console.log("message", e, paredData)
       }
       // 생성된 인스턴스에 onerror 에러가 발생했을 때 이벤트를 추가
       eventSource.onerror = (e) => {
         console.log("error", e)
       }

       return () => {
         eventSource.close()
       }
     }, [])

     return <div>Home</div>
   }
   ```

3. 결과

파일을 저장할 때마다 서버에서 받은 메세지를 출력합니다.

<video src="/posts/SSE(ServerSentEvent)/khctddihseh.mov" controls="controls" style="width: 100%;"></video>

## 중요!

- EventSource는 연결이 될때까지 default로 3초마다 연결을 시도합니다. 혹여나 연결이 끊겨도 안정적이죠
- 서버에서 데이터를 담아 보낼 때 형식을 지켜야합니다.
  - `data: {문자열}\\n\\n`
  - `\\n` 하나만 뺴먹어도 안됨 ㅠ

## 앞으로

폴링, 긴폴링, 웹 소켓 이외의 현대 브라우저에서 유용하게 사용할 수 있는 통신 방법에 대해 알고 있었습니다

하지만 일방적인 단방향 통신으로 서버의 부하도 최소화하고 서버에서 이벤트를 발생시킬 수 있다?

이 사실이 다양한 기능을 구현하고 문제를 해결하는데 있어서 많은 가능성과 확장성을 보여주는 것 같습니다.

[TBD](https://www.notion.so/a746b4a466e447e1aa2cb179d36df59e?pvs=21)를 공부하며 Feature Flag를 찾아보기 시작했기에 TBD에 먼저 적용하겠지만

푸시알림, 채팅, 실시간 상태(친구 접속상태 등)에 확장 시키면 어떨까 기대됩니다.
