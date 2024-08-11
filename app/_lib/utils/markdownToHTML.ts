import {remark} from 'remark'
import html from 'remark-html'

async function markdownToHtml(markdown: string) {
    const result = await remark()
    //   .use(externalLinks)
    //   .use(customHeaders)
    //   .use(images)
    //   .use(unrwapImages)
    //   .use(smartyPants)
      .use(html)
      .process(markdown)
      console.log(result)

    return result.toString();
}

export default markdownToHtml;