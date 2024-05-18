import Card from "@/app/_components/common/Card"
import KatexServerComponent from "../katex.server"
import {list} from "../layout"
import Text from "@/app/_components/common/Text"
import KatexClientComponent from "../katex.client"

const TexPage = ({params}: {params: {tex: string}}) => {
  return (
    <>
      <Card direction="horizontal">
        <div className="flex flex-col flex-1">
          <Text>Server</Text>
          <KatexServerComponent tex={list[params.tex]} />
        </div>
      </Card>

      <Card direction="horizontal">
        <div className="flex flex-col flex-1">
          <Text>Client</Text>
          <KatexClientComponent tex={list[params.tex]} />
        </div>
      </Card>
    </>
  )
}

export default TexPage
